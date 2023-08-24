import "./FindStake.css";
import { useAccount, useConnect, useEnsName, useEnsAvatar } from 'wagmi';
import { ethers } from 'ethers';
import { useDebounce } from 'use-debounce';
import { LatestTransactions, SQLQuery } from "@sort/react-components";

const CustomProvider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_INFURA_ETH_MAINNET);
const UserManager = "0x49c910Ba694789B58F53BFF80633f90B8631c195";


function FindStake() {

    return(
    <>
        <h2>2. Stake</h2>

<SQLQuery
  query="SELECT
  t.transaction_hash,
  t.from_address,
  params,
  status,
  gas_limit,
  gas_price,
  max_fee_per_gas,
  max_priority_fee_per_gas
FROM
  ethereum.transaction t
  
WHERE
t.function = 'unstake'
LIMIT
  10;"
  api_key={process.env.REACT_APP_API_KEY_SORT}
  />


<h2>3. Debt Write off</h2>

<SQLQuery
  query="SELECT
  t.transaction_hash,
  t.from_address,
  params,
  status,
  gas_limit,
  gas_price,
  max_fee_per_gas,
  max_priority_fee_per_gas
FROM
  ethereum.transaction t
  
WHERE
t.function = 'debtWriteOff'
LIMIT
  100;"
  api_key={process.env.REACT_APP_API_KEY_SORT}
  />

<h2>4. Cancel Vouch</h2>

<SQLQuery
  query="SELECT
  t.transaction_hash,
  t.from_address,
  params,
  status,
  gas_limit,
  gas_price,
  max_fee_per_gas,
  max_priority_fee_per_gas
FROM
  ethereum.transaction t
  
WHERE
t.function = 'cancelVouch'
LIMIT
  100;"
  api_key={process.env.REACT_APP_API_KEY_SORT}
  />



    </>
  )
}

export default FindStake;


