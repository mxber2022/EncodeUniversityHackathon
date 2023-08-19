import './App.css'
import "@biconomy/web3-auth/dist/src/style.css"
import { useState, useEffect, useRef } from 'react'
import SocialLogin from "@biconomy/web3-auth"
import { ChainId } from "@biconomy/core-types";
import { ethers } from 'ethers'
import { IBundler, Bundler } from '@biconomy/bundler'
import { BiconomySmartAccount,BiconomySmartAccountConfig, DEFAULT_ENTRYPOINT_ADDRESS } from "@biconomy/account"
import { IPaymaster, BiconomyPaymaster, PaymasterMode, IHybridPaymaster, SponsorUserOperationDto } from '@biconomy/paymaster'
import axios from 'axios';
import { abi } from './abi';
const { NFTStorage, File } = require('nft.storage');
const CHAIN = ChainId.ARBITRUM_NOVA_MAINNET;

const bundler = new Bundler({
  bundlerUrl: process.env.REACT_APP_BundlerUrl,     
  chainId: CHAIN,
  entryPointAddress: DEFAULT_ENTRYPOINT_ADDRESS,
});

const paymaster = new BiconomyPaymaster({
  paymasterUrl: process.env.REACT_APP_PaymasterUrl 
});

//console.log(process.env.REACT_APP_PaymasterUrl);

function App() {

  const [smartAccount, setSmartAccount] = useState(null)
  const [interval, enableInterval] = useState(false)
  const sdkRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    let configureLogin;
    if (interval) {
      configureLogin = setInterval(() => {
        if (!!sdkRef.current?.provider) {
          setupSmartAccount()
          clearInterval(configureLogin)
        }
      }, 1000)
    }
  }, [interval])

  async function login() {
    if (!sdkRef.current) {
      const socialLoginSDK = new SocialLogin();
      const signature1 = await socialLoginSDK.whitelistUrl(
        "http://127.0.0.1:3002/"
      );
      await socialLoginSDK.init({
        chainId: ethers.utils.hexValue(CHAIN).toString(),
        network: "mainnet",
        whitelistUrls: {
          "http://127.0.0.1:3002/": signature1,
        },
      });
      sdkRef.current = socialLoginSDK;
    }
    if (!sdkRef.current.provider) {
      sdkRef.current.showWallet();
      enableInterval(true);
    } else {
      setupSmartAccount();
    }
  }

  async function setupSmartAccount() {
    if (!sdkRef?.current?.provider) return
    sdkRef.current.hideWallet()
    setLoading(true)
    const web3Provider = new ethers.providers.Web3Provider(
      sdkRef.current.provider
    )
    setProvider(web3Provider)
    
    try {
      const biconomySmartAccountConfig = {
        signer: web3Provider.getSigner(),
        chainId: CHAIN,
        bundler: bundler,
        paymaster: paymaster
      }
      let biconomySmartAccount = new BiconomySmartAccount(biconomySmartAccountConfig)
      biconomySmartAccount =  await biconomySmartAccount.init()
      console.log("owner: ", biconomySmartAccount.owner)
      console.log("address: ", await biconomySmartAccount.getSmartAccountAddress())
      console.log("deployed: ", await biconomySmartAccount.isAccountDeployed( await biconomySmartAccount.getSmartAccountAddress()))

      setSmartAccount(biconomySmartAccount)
      setLoading(false)
    } catch (err) {
      console.log('error setting up smart account... ', err)
    }
  }

  const logout = async () => {
    if (!sdkRef.current) {
      console.error('Web3Modal not initialized.')
      return
    }
    await sdkRef.current.logout()
    sdkRef.current.hideWallet()
    setSmartAccount(null)
    enableInterval(false)
  }

  const [description, setDescription] = useState("")
  const [iprompt, setIprompt] = useState("")
  const [image, setImage] = useState(null)

  const submitHandler = async (e) => {
    e.preventDefault()

    if (iprompt === "") {
      window.alert("Please enter prompt")
      return
    }
    const imageData = await generateArt()
  }

  const datax = useRef("")
  async function generateArt() {
    const URL = `https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0`;
    const response = await axios({
        url: URL,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_HUGGING_FACE_API_KEY}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({
          inputs: "description", options: { wait_for_model: true },
        }),
        responseType: 'arraybuffer',
      })
  
      const type = response.headers['content-type']
      const data = response.data
  
      const base64data = Buffer.from(data).toString('base64')
      datax.current = data;
      const img = `data:${type};base64,` + base64data;
      console.log("img: ", img);
      setImage(img)
      return data
  }

  const [nftName, setNftName] = useState("")
  const mintHandler = async (e) => {
    e.preventDefault();
    if (nftName === "") {
      window.alert("Please provide NFT name")
      return
    }
    else {
      // 1. Upload image to IPFS
      const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDVGYzA0NTUyMzI5ODA5NDI4NDkzY0VDYjdmZkY4RkUxNGY5YkQzOTQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4OTk2NjA0NzY5NiwibmFtZSI6IlBhcmlzIn0.9CxIio0ygPmcf8onnQcFrZurTQACHiB8qOgO6tcHEWs"; 
      const client1 = new NFTStorage({ token: apiKey });

      console.log("datax", datax);
      const blob = new Blob([datax.current], { type: "image/jpeg" });
      console.log("blob", blob);

      const file = new File([datax.current], "AI.jpeg", { type: "image/jpeg" });
      const metadata = await client1.store({
        name: nftName,
        description: description,
        image: file,
      });
      
      console.log("metadata ", metadata);
      console.log("metadata ", metadata.url);
      
      // 2. Mint

      const CONTRACT = new ethers.Contract("0xCF905a8a4e1A0107aABe933de8f4F78E3A4f4E72", abi, provider);
      const tx = await CONTRACT.populateTransaction.safeMint(String(smartAccount.address), metadata.url);
      let partialUserOp = await smartAccount.buildUserOp([tx]);

      const biconomyPaymaster = smartAccount.paymaster
      let paymasterServiceData = {
        mode: PaymasterMode.SPONSORED,
      };
      console.log("getting paymaster and data")
      try {
        const paymasterAndDataResponse =
          await biconomyPaymaster.getPaymasterAndData(
            partialUserOp,
            paymasterServiceData
          );
          partialUserOp.paymasterAndData = paymasterAndDataResponse.paymasterAndData;
        } catch (e) {
        console.log("error received ", e);
        }


        console.log("sending userop")
        try {
          console.log("xx",partialUserOp);
          const userOpResponse = await smartAccount.sendUserOp(partialUserOp);
          const transactionDetails = await userOpResponse.wait();
          console.log("transactionDetails: ", transactionDetails)
          } catch (e) {
            console.log("error received ", e);
          }

    }
  }

  return (
  <>
    <div>
    <h1> Biconomy Smart Accounts using social login + Gasless Transactions</h1>
    {
      !smartAccount && !loading && <button onClick={login}>Login</button>
    }
    {
      loading && <p>Loading account details...</p>
    }
    {
      !!smartAccount && (
        <div className="buttonWrapper">
          <h3>Smart account address:</h3>
          <p>{smartAccount.address}</p>
          
          <button onClick={logout}>Logout</button>
        </div>
      )
    }
    </div>

    <form onSubmit={submitHandler}>
      <input type="text" placeholder="Enter Prompt" onChange={(e) => setIprompt(e.target.value)} />
      <input type="submit" value="Generate NFT" />
    </form>

    <div className="image">
          {
           image==null? <></> 
           : 
           <img src={image} alt="AI ART" width={400}/>
          }
    </div>
  
  {
  image==null? <></> :
    <form onSubmit={mintHandler}>
      <input type="text" placeholder="Nft name" onChange={(e) => setNftName(e.target.value)} />
      <input type="text" placeholder="Enter description" onChange={(e) => setDescription(e.target.value)} />
      <input type="submit" value="Mint" />
    </form>
  }
  </>
  );
}

export default App;
