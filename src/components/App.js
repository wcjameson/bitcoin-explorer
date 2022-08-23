import Header from './Header';
import GetAddressStats from './GetAddressStats';
import GetTxStatus from './GetTxStatus';
import GetMiningPool from './GetMiningPool';
import MainPage from './MainPage';
import { GlobalStyles } from './GlobalStyles.style';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <GlobalStyles />

      <nav className='navbar'>
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="address">Address</Link>
        <Link className='link' to="tx">Transaction</Link>
        <Link className='link' to="pools">MiningPools</Link>
      </nav>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/address" element={<GetAddressStats />} />
        <Route path="/tx" element={<GetTxStatus />} />
        <Route path="/pools" element={<GetMiningPool />} />
      </Routes>
      <div>
        Footer Element
      </div>
      {/* <Header />
      <GetAddressStats />
      <GetTxStatus /> */}
    </Router>
  );
}

export default App;
