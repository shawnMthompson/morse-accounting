import { Routes, Route, Link } from 'react-router';
import Home from './components/pages/Home.jsx';
import Contact from './components/pages/Contact.jsx';
import Services from './components/pages/Services.jsx';
import ServiceDetail from './components/pages/ServiceDetail.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return(
      <div className="flex flex-col min-h-screen">

        <nav className="bg-primary p-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <Link to="/" className="flex items-center shrink-0 gap-2">
              <img src="/logo.png" alt="Morse Accounting" className="h-8" />
              <span className="font-semibold text-xl text-white">Morse Accounting</span>
            </Link>
            <div className="flex gap-4">
              <Link to="/" className="text-white hover:underline">Home</Link>
              <Link to="/services" className="text-white hover:underline">Services</Link>
              <Link to="/contact" className="text-white hover:underline">Contact</Link>
            </div>
          </div>
        </nav>

        <div className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />

      </div>

    
  );
}
