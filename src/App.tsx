
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Certificates from "./pages/Certificates";
import ITConsultancy from "./pages/services/ITConsultancy";
import ITInfrastructure from "./pages/services/ITInfrastructure";
import NetworkingSolutions from "./pages/services/NetworkingSolutions";
import SecurityServices from "./pages/services/SecurityServices";
import HardwareSolutions from "./pages/services/HardwareSolutions";
import MicrosoftSolutions from "./pages/services/MicrosoftSolutions";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import CloudServices from "./pages/services/CloudServices";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/services" element={<Services />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/products" element={<Products />} />
      <Route path="/services/it-consultancy" element={<ITConsultancy />} />
      <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
      <Route path="/services/networking-solutions" element={<NetworkingSolutions />} />
      <Route path="/services/security-services" element={<SecurityServices />} />
      <Route path="/services/hardware-solutions" element={<HardwareSolutions />} />
      <Route path="/services/microsoft-solutions" element={<MicrosoftSolutions />} />
      <Route path="/services/software-development" element={<SoftwareDevelopment />} />
      <Route path="/services/cloud-services" element={<CloudServices />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
