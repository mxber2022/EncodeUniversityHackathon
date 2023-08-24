import "./FindVouchee.css";
import { useAccount, useConnect, useEnsName, useEnsAvatar } from 'wagmi';
import { ethers } from 'ethers';
import { useDebounce } from 'use-debounce';
import { LatestTransactions, SQLQuery } from "@sort/react-components";

const CustomProvider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_INFURA_ETH_MAINNET);
const UserManager = "0x49c910Ba694789B58F53BFF80633f90B8631c195";


function FindVouchee () {

    return(
    <>
        <h2>1. Vouchee</h2>
        {
        <SQLQuery query="SELECT transaction_hash, from_address, params,
        status,
        gas_limit,
        gas_price,
        max_fee_per_gas,
        max_priority_fee_per_gas
        FROM
        ethereum.transaction t
        
        WHERE
        t.function = 'updateTrust'
        LIMIT
        10;"
        api_key={process.env.REACT_APP_API_KEY_SORT}
        />
        }
    </>
  )
}

export default FindVouchee;



/*
<SQLQuery
  query="SELECT
  t.transaction_hash,
  t.from_address,
  t.to_address,
  t.value
FROM
  ethereum.transaction t
  JOIN ethereum.transaction_param tp ON t.id = tp.transaction_id
WHERE
t.function = 'updateTrust'
LIMIT
  10;"
  api_key="de271540-3cfa-4b24-9d37-feaca6a15d72"
  />




  SELECT
  t.transaction_hash,
  t.from_address,
  t.to_address,
  t.value
FROM
  ethereum.transaction t
  JOIN ethereum.transaction_param tp ON t.id = tp.transaction_id
WHERE
t.function = 'updateTrust'
LIMIT
  10;

   */