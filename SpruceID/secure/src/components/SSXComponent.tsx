"use client";
import { SSX } from "@spruceid/ssx";
import { useState } from "react";
import KeplerStorageComponent from "./KeplerStorageComponent";
import "./myStyle.css";

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
    console.log("ens", ens);
    const ensData = await ssx.resolveEns("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045", {
      domain: true,
      avatar: true,
    });
    console.log("ens", ensData);
    setSSX(ssx);
  };

  const ssxLogoutHandler = async () => {
    ssxProvider?.signOut();
    setSSX(null);
   };

  const address = ssxProvider?.address() || '';

  return (
    <>
      <p className="Title">Decentralised Password Manager</p>
      <br></br>
      {
        ssxProvider ?
          <>
            {
              address &&
              <p>
                <b>Ethereum Address:</b> <code>{address}</code>
              </p>
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