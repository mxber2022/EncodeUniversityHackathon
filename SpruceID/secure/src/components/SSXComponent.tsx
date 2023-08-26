"use client";
import { SSX } from "@spruceid/ssx";
import { useEffect, useState } from "react";
import KeplerStorageComponent from "./KeplerStorageComponent";
import "./myStyle.css";
import { ethers } from "ethers";
import { AvatarResolver, utils as avtUtils } from '@ensdomains/ens-avatar';

const SSXComponent = () => {

  const [ssxProvider, setSSX] = useState<SSX | null>(null);

  const ssxHandler = async () => {
    const ssx = new SSX({
      providers: {
        server: {
          host: "http://localhost:3000/api"
        }
      },
      modules: {
        storage: {
          prefix: 'my-app',
          hosts: ['https://kepler.spruceid.xyz'],
          autoCreateNewOrbit: true
        }
      },
      resolveEns: true
    });
    const { ens } = await ssx.signIn();
    setSSX(ssx);
  };

  const ssxLogoutHandler = async () => {
    ssxProvider?.signOut();
    setSSX(null);
   };

  const address = ssxProvider?.address() || '';

  useEffect(()=> {
    if(address!=='') {
      ENS_ETH();
    }
    
  }, [address])

  const [nameResolved, setNameResolved] = useState("")
  const [uri, setAvaURI] = useState("")

  async function ENS_ETH() {
    const tempProvider = new ethers.providers.JsonRpcProvider(process.env.INFURA_ETH_MAINET_KEY);
    const add =  await tempProvider.lookupAddress(address);
    setNameResolved(add);
    console.log("resolveNames: ", add);

    const avt = new AvatarResolver(tempProvider);
    const avatarURI = await avt.getAvatar(add);
    console.log("AVA URI: ", avatarURI);
    setAvaURI(avatarURI);
  }
    
  

  return (
    <>
      <p className="Title">Decentralised Password Manager</p>
      
      {
        ssxProvider ?
          <>
            {
              address &&
              <p>
                <b>Ethereum Address:</b> <code>{address}</code>
              </p>
              
            }
            <p>{nameResolved}</p>
            {
            uri==""? <></>:<img className='AVA-URI' src={uri} alt="" width={25}/>
            }
            <br />
            <button style={{ width: '180px', height: '40px' , marginRight: '10px', fontSize:'15px'}} onClick={ssxLogoutHandler}>
              <span>
                Sign-Out
              </span>
            </button>
            <br />
            <KeplerStorageComponent ssx={ssxProvider} />
          </> :
          <button style={{ width: '180px', height: '40px' , marginRight: '10px', fontSize:'15px'}} onClick={ssxHandler}>
            <span>
              Sign-In with Ethereum
            </span>
          </button>
      }
    </>
  );
};

export default SSXComponent;