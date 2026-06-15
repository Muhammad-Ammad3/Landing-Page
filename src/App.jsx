import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Hamara naya Layout component
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/ContactUs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </Layout>
  );
}
export default App;