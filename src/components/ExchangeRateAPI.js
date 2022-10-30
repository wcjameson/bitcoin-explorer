import React from "react";

function ExchangeRateAPI() {
  const [exchangeRate, setExchangeRate] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response.statusText);
        }
      })
      .then(data => setExchangeRate(data));
  }, []);

  return (
    <div className="stats">
      {exchangeRate && exchangeRate.bpi && (
        <>
          <p>USD: {exchangeRate.bpi.USD.rate}</p>
          <p>GBP: {exchangeRate.bpi.GBP.rate}</p>
          <p>EUR: {exchangeRate.bpi.EUR.rate}</p>
        </>
      )}
    </div>
  )
}

export default ExchangeRateAPI;