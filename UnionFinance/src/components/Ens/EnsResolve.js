import "./EnsResolve.css";
import { useAccount, useConnect, useEnsName } from 'wagmi';
import { ethers } from 'ethers';

const CustomProvider = new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/d9e68a4d18c8455c9596b5d386af2a65");

function EnsResolve () {
    const { address, isConnected } = useAccount();
    const { provider } = useConnect();

    return(
        <>
            <h1>Pay with Union</h1>
        </> 
    );
}

export default EnsResolve;