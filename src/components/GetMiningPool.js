import React, { useState } from "react";

const GetMiningPool = () => {
  const [miningPool, setMiningPool] = useState([]);
  // const [miningPoolTime, setMiningPoolTime] = useState([]);
  // const pools = miningPoolTime.pools;

  const fetchMiningPoolByName = (e) => {
    const query = e.target.value;
    console.log(query);
    fetch(`https://mempool.space/api/v1/mining/pool/${query}`) // slushpool for example
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response.statusText);
        }
      })
      .then(data => setMiningPool(data));
  }

  return (
    <div className="stats">
      <label>Find Pool by Name</label>
      <input onChange={fetchMiningPoolByName} />
      {miningPool && miningPool.pool && (
        <>
          <p>Pool Name: {miningPool.pool.name}</p>
          <p>Pool Link: <a href={miningPool.pool.link}>{miningPool.pool.link}</a></p>
          <p>Pool Addresses: {miningPool.pool.addresses[0]}  {miningPool.pool.addresses[1]}</p>
          <p>Total BlockCount: {miningPool.blockCount.all}</p>
          <p>Estimated Hashrate: {miningPool.estimatedHashrate}</p>
        </>
      )}
    </div>
  )
}

export default GetMiningPool;