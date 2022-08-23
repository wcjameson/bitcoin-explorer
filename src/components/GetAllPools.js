import React, {useState} from "react";

const GetAllPools = () => {
  const [miningPoolTime, setMiningPoolTime] = useState([]);

  const fetchMiningPoolByTime = (e) => {
    const query = e.target.value;
    console.log(query);
    fetch(`"https://mempool.space/api/v1/mining/pools/${query}`) // i.e 24h, 3d, 1w, 1m, 3m, 6m, 1y, 2y, 3y or leave blank for all time
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response.statusText);
        }
      })
      .then(data => setMiningPoolTime(data));
  }
  // MiningPoolByTime returns a list of all known mining pools ordered by blocks found over the specified trailing :timePeriod

  return (
    <div className="stats">
      <label>Find Pool by Time</label>
      <input onChange={fetchMiningPoolByTime} />
      {miningPoolTime && miningPoolTime.pools && (
        <>
          <p>Pool Name: {miningPoolTime.pools.name}</p>
        </>
      )}
    </div>
  )
}

export default GetAllPools;