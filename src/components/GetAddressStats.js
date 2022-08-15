import React, { useState } from "react";

const GetAddressStats = () => {
  const [addressStats, setAddressStats] = useState([]);

  const fetchAddress = (e) => {
    const query = e.target.value;
    console.log(query);
    fetch(`https://mempool.space/api/address/${query}`) // 1wiz18xYmhRX6xStj2b9t1rwWX4GKUgpv test address
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response.statusText);
        }
      })
      .then(data => setAddressStats(data));
  }

  return (
    <div className="stats">
      <label>Enter Bitcoin Address </label>
      <input onChange={fetchAddress} />
      {addressStats && addressStats.chain_stats && addressStats.mempool_stats && (
        <>
        <p>Address: {addressStats.address}</p>
        <h3>On-Chain Stats:</h3>
        <p>Transaction Count: {addressStats.chain_stats.tx_count}</p>
        <p>Funded_txo_count: {addressStats.chain_stats.funded_txo_count}</p>
        <p>Spent_txo_count: {addressStats.chain_stats.spent_txo_count}</p>

        <h3>Mempool Stats:</h3>
        <p>Transaction Count {addressStats.mempool_stats.tx_count}</p>
        <p>Funded_txo_count: {addressStats.mempool_stats.funded_txo_count}</p>
        <p>Spent_txo_count: {addressStats.mempool_stats.spent_txo_count}</p>
        </>

      )}
      {/* {addressStats && addressStats.tx_count && (
      <p>Transactions: {addressStats.chain_stats}</p>)} */}
    </div>
  )
}

export default GetAddressStats;