import { Routes, Route, Link } from 'react-router';
import Home from './components/pages/Home.jsx';
import Contact from './components/pages/Contact.jsx';
import Services from './components/pages/Services.jsx';
import ServiceDetail from './components/pages/ServiceDetail.jsx';

export default function App() {
  return(
    <div>
      <nav className="bg-primary p-4">
        <div className="flex gap-4 justify-center">
          <Link to="/" className="text-white hover:underline">Home</Link>
          <Link to="/services" className="text-white hover:underline">Services</Link>
          <Link to="/contact" className="text-white hover:underline">Contact</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
