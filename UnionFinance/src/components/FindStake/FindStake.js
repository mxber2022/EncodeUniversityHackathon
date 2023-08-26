import "./FindStake.css";
import { useAccount, useConnect, useEnsName, useEnsAvatar } from 'wagmi';
import { ethers } from 'ethers';
import { useDebounce } from 'use-debounce';
import { LatestTransactions, SQLQuery } from "@sort/react-components";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { UserData } from "./Data";
import { useState } from "react";
import axios from "axios";
const CustomProvider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_INFURA_ETH_MAINNET);
const UserManager = "0x49c910Ba694789B58F53BFF80633f90B8631c195";

function FindStake() {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users",
        data: UserData.map((data) => data.user),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  /* 
    Start: Axios request to sort
  */
  const apiKey = process.env.REACT_APP_API_KEY_SORT;
  const requestData = {
    format: 'json',
    query: "SELECT from_address FROM ethereum.transaction t WHERE t.function = 'updateTrust'"
  };
  const headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'x-api-key': apiKey
  };

  axios.post('https://api.sort.xyz/v1/queries/run', requestData, { headers })
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  /* 
    Ends: Axios request to sort
  */

  return(
  <>
    <h2>2. UnStake</h2>

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


<h2>3. Cancel Vouch</h2>

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


<h2>4. Debt Write off</h2>

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

<div className="App">
    
      <div style={{ width: 900 }}>
      <BarChart chartData={userData} />
      </div>

{
  /*
  <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
      
    
      <div style={{ width: 500 }}>
        <PieChart chartData={userData} />
      </div>
  */
}
      

    </div>
    </>
  )
}

export default FindStake;


