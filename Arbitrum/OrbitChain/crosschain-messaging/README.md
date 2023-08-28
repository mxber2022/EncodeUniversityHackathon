## Demystifying Arbitrum L2 To L3 Messaging

## Flow

**1- Deployment of Contracts:**

- We start by deploying two contracts: L1 Greeter on Layer 2 and L2 Greeter on Layer 3. Each contract has a unique "greeting" message set.

**2- Modifying L3 Greeting from L2:**

- We proceed to modify the greeting message on L3 Greeter directly from L2 by sending a specific message.

## Setup / Commands

1. `git clone` this repo
1. `yarn install`
1. Add env variables (i.e., to a .env file):

   ```
   TESTNET_PRIVKEY=xyzxyz
   L2RPC=https://goerli.infura.io/v3/<your_infura_key>
   L3RPC=https://localhost:port
   ```

1. Deploy contracts:
   ```
   yarn run deploy
   ```
1. Test out a L2-L3 message:
   ```
   yarn run greet
   ```

## Useful links

- Arbitum L1-L2 messaging documentation - https://docs.arbitrum.io/arbos/l1-to-l2-messaging
- Arbitrum retryables transaction panel - https://retryable-dashboard.arbitrum.io/tx
- Arbitrum SDK - https://github.com/OffchainLabs/arbitrum-sdk
