import { LatestTransactions } from "@sort/react-components";
import { useState } from "react";

export default function SortTransaction() {
  
  const [act, setAct] = useState('');
  const [inputAddress, setInputAddress] = useState('');
  const handleInputChange = (event) => {
    setInputAddress(event.target.value);
  //  console.log(inputAddress);
  };


  function retrieveLatestTransaction () {
    
    console.log(inputAddress);
    setAct(10);
  }

return (
  <>
    <input type="text" value={inputAddress} onChange={handleInputChange} placeholder="Enter Contract Address" />
    <button onClick={retrieveLatestTransaction}>Enter</button>
    
    {
      act===10 ? <LatestTransactions
      contract_address={inputAddress}
      api_key="de271540-3cfa-4b24-9d37-feaca6a15d72"
      blockchain="ethereum"
      theme="light"/> : <></>
    }
  </>
);
}