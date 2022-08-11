import Header from './Header';
import GetAddressStats from './GetAddressStats';
import GetTxStatus from './GetTxStatus';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="address">Address</Link>
        <Link to="tx">Transaction</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/address" element={<GetAddressStats />} />
        <Route path="/tx" element={<GetTxStatus />} />
      </Routes>
      {/* <Header />
      <GetAddressStats />
      <GetTxStatus /> */}
    </Router>
  );
}

export default App;
