
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Clients from "./pages/Clients";
import NotFound from "./pages/NotFound";
import HardwareSolutions from "./pages/services/HardwareSolutions";
import SecurityServices from "./pages/services/SecurityServices";
import CloudServices from "./pages/services/CloudServices";
import MicrosoftSolutions from "./pages/services/MicrosoftSolutions";
import ITConsultancy from "./pages/services/ITConsultancy";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import ITInfrastructure from "./pages/services/ITInfrastructure";
import NetworkingSolutions from "./pages/services/NetworkingSolutions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/hardware" element={<HardwareSolutions />} />
          <Route path="/services/security" element={<SecurityServices />} />
          <Route path="/services/cloud" element={<CloudServices />} />
          <Route path="/services/microsoft" element={<MicrosoftSolutions />} />
          <Route path="/services/consultancy" element={<ITConsultancy />} />
          <Route path="/services/software" element={<SoftwareDevelopment />} />
          <Route path="/services/infrastructure" element={<ITInfrastructure />} />
          <Route path="/services/networking" element={<NetworkingSolutions />} />
          <Route path="/products" element={<Products />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
