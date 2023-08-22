import { LatestTransactions, SQLQuery } from "@sort/react-components";
import { useState } from "react";
import "./SortTransaction.css";

export default function SortTransaction() {
  
  const [act, setAct] = useState('');
  const [query, setquery] = useState('');
  const [inputAddress, setInputAddress] = useState('');
  const handleInputChange = (event) => {
    setInputAddress(event.target.value);
  //  console.log(inputAddress);
  };


  function retrieveLatestTransaction () {
    
    console.log(inputAddress);
    setAct(10);
    const queryx = `SELECT name FROM ethereum.abi WHERE contract_address = '${inputAddress}' LIMIT 1;`;
    console.log(query);
    setquery(queryx);
  }

 //const query = "SELECT name FROM ethereum.abi WHERE contract_address = '0x887f3909c14dabd9e9510128ca6cbb448e932d7f' LIMIT 1;"
  
return (
  <>
    <input type="text" value={inputAddress} onChange={handleInputChange} placeholder="Enter Contract Address" />
    <button onClick={retrieveLatestTransaction}>Enter</button>
    
    {
      act===10 ?
      <>
        <SQLQuery query={query} api_key="de271540-3cfa-4b24-9d37-feaca6a15d72"/>
        
        <LatestTransactions
        contract_address={inputAddress}
        api_key="de271540-3cfa-4b24-9d37-feaca6a15d72"
        blockchain="ethereum"
        theme="light"/> 
      </>
      : 
      <></>
    }
  </>
);
}