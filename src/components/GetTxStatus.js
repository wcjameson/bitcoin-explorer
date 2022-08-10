import React, { useState } from "react";

const GetTxStatus = () => {
  const [txStatus, setTxStatus] = useState([]);

  const fetchTxStatus = (e) => {
    const query = e.target.value;
    console.log(query);
    fetch(`https://mempool.ninja/api/tx/${query}/status`) // 15e10745f15593a899cef391191bdd3d7c12412cc4696b7bcb669d0feadc8521 test transaction
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response.statusText);
        }
      })
      .then(data => setTxStatus(data));
  }

  return (
    <div>
      <label>Enter Transaction Id </label>
      <input onChange={fetchTxStatus} />
      {txStatus && txStatus.confirmed && (
        <>
          <p>Transaction Confirmed: {txStatus.confirmed}</p>
          <p>Block Height: {txStatus.block_height}</p>
          <p>Block Hash: {txStatus.block_hash}</p>
          <p>Block Time: {txStatus.block_time}</p>
        </>
      )}
    </div>
  )
}

export default GetTxStatus;