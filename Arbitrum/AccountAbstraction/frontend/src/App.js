import './App.css'
import "@biconomy/web3-auth/dist/src/style.css"
import { useState, useEffect, useRef } from 'react'
import SocialLogin from "@biconomy/web3-auth"
import { ChainId } from "@biconomy/core-types";
import { ethers } from 'ethers'
import { IBundler, Bundler } from '@biconomy/bundler'
import { BiconomySmartAccount,BiconomySmartAccountConfig, DEFAULT_ENTRYPOINT_ADDRESS } from "@biconomy/account"
import { IPaymaster, BiconomyPaymaster,} from '@biconomy/paymaster'
//import Counter from './Components/Counter';


const CHAIN = ChainId.ARBITRUM_GOERLI_TESTNET;
const bundler = new Bundler({
  bundlerUrl: process.env.REACT_APP_BundlerUrl,     
  chainId: CHAIN,
  entryPointAddress: DEFAULT_ENTRYPOINT_ADDRESS,
});

const paymaster = new BiconomyPaymaster({
  paymasterUrl: process.env.REACT_APP_PaymasterUrl 
});


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
        "http://127.0.0.1:3000/"
      );
      await socialLoginSDK.init({
        chainId: ethers.utils.hexValue(CHAIN).toString(),
        network: "testnet",
        whitelistUrls: {
          "http://127.0.0.1:3000/": signature1,
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

  return (
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
  );
}

export default App;
