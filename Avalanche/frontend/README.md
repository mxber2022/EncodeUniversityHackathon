# Gasless NFT Minting using Stable Diffusion on Avalanche fuji Blockchain with Biconomy Account Abstraction.

Welcome to the Gasless NFT Minting React App utilizing Stable Diffusion on the Avalanche fuji Blockchain . This project enables users to create AI-generated NFTs seamlessly, leveraging the power of stable diffusion, and mint these NFTs without worrying about gas fees. The app incorporates the innovative Biconomy account abstraction feature, streamlining the transaction process for users.

## Introduction

Gas fees have been a significant barrier for users wanting to participate in blockchain activities. This project addresses this challenge by utilizing the Avalanche fuji Blockchain 's efficient Layer 2 scaling solution and the Biconomy account abstraction feature. The Stable Diffusion algorithm is employed to generate unique and artistic NFTs, offering users a creative way to express themselves.

## Features

- Gasless Transactions: Users can mint NFTs without the burden of high gas fees, thanks to the Biconomy account abstraction feature.

- Stable Diffusion Algorithm: The project incorporates the Stable Diffusion algorithm to generate AI-powered NFTs, providing users with a novel and artistic experience.

- Avalanche fuji Blockchain : The app is built on the Avalanche fuji Blockchain , leveraging its fast and cost-effective Layer 2 solution.

- User-Friendly Interface: The React app offers an intuitive and user-friendly interface, making it easy for users to create, view, and manage their NFTs.

## ENS Resolution

We've integrated Ethereum Name Service (ENS) resolution to enhance user experience. Instead of dealing with complex Ethereum addresses, you can associate your accounts with human-readable ENS addresses.

## Getting Started

Follow these steps to set up the project on your local machine.

### Prerequisites

- Node.js and npm installed globally.
- An Ethereum wallet with some ETH for testing (e.g., MetaMask).

### Installation

1. Clone the repository:

   ```bash
   git clone 
   cd frontend
   ```

2. Install dependencies:

   ```bash
   yarn
   ```

3. Configure your Ethereum wallet provider (e.g., Infura) in the project (see [Configuration](#configuration) section).

4. Start the development server:

   ```bash
   yarn start
   ```

## Usage

### Generating AI-Generated NFTs

1. Access the React app through your web browser (usually at `http://localhost:3000`).

2. Navigate to the AI-generated NFT creation section.

3. Configure the AI parameters, such as image style, colors, patterns, etc.

4. Click the "Generate NFT" button to create your unique AI-generated NFT.

### Minting Gasless NFTs

1. Connect your Ethereum wallet (e.g., MetaMask) to the app.

2. Navigate to the minting section.

3. Choose the AI-generated NFT you want to mint.

4. Confirm the minting transaction. Biconomy's account abstraction will handle the gas fees.

## Configuration

The following environment variables can be configured:

1. REACT_APP_BundlerUrl: Your Biconomy Bundler URL.
2. REACT_APP_PaymasterUrl: Your Biconomy PayMaster URL.
3. REACT_APP_HUGGING_FACE_API_KEY: Hugging face api key.
4. REACT_APP_INFURA_ETH_MAINNET: Infura mainnet rpc url.

Note: Make sure to keep sensitive information like API keys and contract addresses secure. You might consider using a .env file for this purpose.


Happy Minting !