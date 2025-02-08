import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cryptohome from './Components/Pages/CryptoHome/Cryptohome';
import Cryptdetails from './Components/Pages/CryptoDetails/Cryptodetails';
import Navbar from './Components/Pages/Navbar/Navbar';
import Footer from './Components/Pages/Footer/Footer';
import Getstarted from './Components/Pages/GetStarted/Getstarted';
import Catagory from './Components/Pages/Catagory/Catagory';
import Trending from './Components/Pages/CryptoHome/Trending/Trending';
import Topten from './Components/Pages/CryptoHome/Topten/Topten';
import Bitcoin from './Components/Pages/CryptoHome/Bitcoin/Bitcoin';
import Bitcoindetails from './Components/Pages/CryptoHome/BitCoindetails/Bitcoindetails';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Getstarted />} />
        <Route path="/cryptohome" element={<Cryptohome />}>
          <Route path="trending" element={<Trending />} />
          <Route path="topten" element={<Topten />} />
          <Route path="bitcoin" element={<Bitcoin />} />
          <Route path="bitcoin/:coinId" element={<Bitcoindetails />} />
        </Route>
        <Route path="/catagory" element={<Catagory />} />
        <Route path="/cryptodetails" element={<Cryptdetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
