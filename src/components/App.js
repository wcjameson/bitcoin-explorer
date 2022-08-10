import Header from './Header';
import GetAddressStats from './GetAddressStats';
import GetTxStatus from './GetTxStatus';

function App() {
  return (
    <div className="App">
      <Header />
      <GetAddressStats />
      <GetTxStatus />
    </div>
  );
}

export default App;
