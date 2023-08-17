import "./EnsResolve.css";
import { useAccount, useConnect, useEnsName, useEnsAvatar } from 'wagmi';
import { ethers } from 'ethers';
import EnsAva from "./EnsAva";
import { useDebounce } from 'use-debounce';

const CustomProvider = new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/d9e68a4d18c8455c9596b5d386af2a65");

function EnsResolve () {
    const { address, isConnected } = useAccount();
    const { data, isError, isLoading } = useEnsName({
        address: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
    });
    
    return(
        <>
            <h1>Pay with Union</h1>
            <h2>ENS Name: {data}</h2>
            <EnsAva/>
        </> 
    );
}

export default EnsResolve;