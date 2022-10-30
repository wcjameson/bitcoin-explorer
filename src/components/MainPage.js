import React from "react";
import ExchangeRateAPI from "./ExchangeRateAPI";

function MainPage() {

  return(
    <div className="stats">
      {/* <p>Display charts and graphs, BTC to $ exchange rate, list with % of total hashrate each pool has</p> */}
      <ExchangeRateAPI />
      <h4><a href="https://bitcoin.org/bitcoin.pdf">Bitcoin white paper</a></h4>
      <h4><a href="https://bitcoin.org/en/developer-guide">Bitcoin developer guide</a></h4>
      <h4><a href="https://bitcoin.org/en/bitcoin-core/ ">Download Bitcoin Core</a></h4>
      <h4><a href="https://learnmeabitcoin.com/">How does Bitcoin work?</a></h4>
      <h4><a href="https://en.bitcoin.it/wiki/Main_Page ">Bitcoin Wiki</a></h4>
    </div>
  )
}
export default MainPage;