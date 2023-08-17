import './App.css';
import Nav from './components/Nav/Nav';
import EnsResolve from './components/Ens/EnsResolve';

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { arbitrum, goerli, mainnet, optimism } from 'wagmi/chains';

import { alchemyProvider } from 'wagmi/providers/alchemy'

const chains = [arbitrum, mainnet, goerli, optimism];
const projectId = process.env.REACT_APP_WC_PID;

const { publicClient } = configureChains(
  chains, 
  [alchemyProvider({ apiKey: process.env.REACT_APP_ALCHEMY_KEY })],
  [w3mProvider({ projectId })]
);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains)


function App() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <Nav/>
        <EnsResolve/>
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}

export default App;
