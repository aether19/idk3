import { Routes, Route } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import Hunts from './pages/Hunts';
import Rates from './pages/Rates';
import HuntCamp from './pages/HuntCamp';
import Photos from './pages/Photos';
import Reviews from './pages/Reviews';
import Outfitter from './pages/Outfitter';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hunts" element={<Hunts />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/hunt-camp" element={<HuntCamp />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/outfitter" element={<Outfitter />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}
