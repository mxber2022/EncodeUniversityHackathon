import "./EnsResolve.css";
import { useAccount, useConnect, useEnsName, useEnsAvatar, useEnsAddress } from 'wagmi';
import { ethers } from 'ethers';
import EnsAva from "./EnsAva";
import { useDebounce } from 'use-debounce';
import FindVouchee from "../FindVouchee/FindVouchee";
import { useState, useEffect } from 'react';
import { AvatarResolver, utils as avtUtils } from '@ensdomains/ens-avatar';

function EnsResolve () {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };    

    const [avaURI, setAvaURI] = useState("")
    const [nameResolved, setNameResolved] = useState(null);
    async function resolveNames(name) {
        setAvaURI("")
        const tempProvider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_INFURA_ETH_MAINNET);
        const lastFourDigits = name.substring(name.length - 4);

        if(lastFourDigits === ".eth") 
        {
        setAvaURI("");
        var address =  await tempProvider.resolveName(name);
        console.log("resolveNames: ", address);
        setNameResolved(address);
        }
        else {
        try
        {
            setAvaURI("");
            setNameResolved("");

            const resolvedAddress = await tempProvider.lookupAddress(name);
            setNameResolved(resolvedAddress);

            /* 
            Resolve Avatar
            */
            const avt = new AvatarResolver(tempProvider);
            const avatarURI = await avt.getAvatar(resolvedAddress);
            console.log("AVA URI: ", avatarURI);
            setAvaURI(avatarURI);
        }
        catch(e) {
            
        }
            
        }
            
    }

    useEffect(()=>{

        try{
        resolveNames(inputValue);
        } 
        catch(e) {
        console.log("cannot resolve name");
        }

    },[inputValue] )
    
    return(
        <>
            <h1>Union Finance OnChain Data Analysis using Sort</h1>
            <h2>ENS RESOLVER</h2>
            <div>
                <input type="text" style={{ width: '350px', height: '30px' }} value={inputValue} onChange={handleInputChange} />
            </div>

            <div>
            <label className='zzz' htmlFor="mintTo">{nameResolved}</label>
            {
                avaURI==""? <></>:<img className='AVA-URI' src={avaURI} alt="" width={25}/>
            }
            </div>
            
        </> 
    );
}

export default EnsResolve;