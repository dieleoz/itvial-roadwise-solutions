import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { WhatsAppProvider } from "./context/WhatsAppContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import ITSPage from "./pages/ITSPage";
import PavimentosPage from "./pages/PavimentosPage";
import InstrumentosPage from "./pages/InstrumentosPage";
import SenalizacionPage from "./pages/SenalizacionPage";
import FerroviarioPage from "./pages/FerroviarioPage";
import AuscultacionPage from "./pages/AuscultacionPage";
import ServiciosPage from "./pages/ServiciosPage";
import ElectromovilidadPage from "./pages/ElectromovilidadPage";
import DelineadoresPage from "./pages/DelineadoresPage";
import AtenuadoresPage from "./pages/AtenuadoresPage";
import Projects from "./pages/Projects";
import Downloads from "./pages/Downloads";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import CookiesPolicy from "./pages/CookiesPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

import { HelmetProvider } from "react-helmet-async";

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <WhatsAppProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/solutions" element={<Solutions />} />
                  <Route path="/solutions/its" element={<ITSPage />} />
                  <Route path="/solutions/pavimentos" element={<PavimentosPage />} />
                  <Route path="/solutions/instrumentos" element={<InstrumentosPage />} />
                  <Route path="/solutions/senalizacion" element={<SenalizacionPage />} />
                  <Route path="/solutions/ferroviario" element={<FerroviarioPage />} />
                  <Route path="/solutions/auscultacion" element={<AuscultacionPage />} />
                  <Route path="/solutions/servicios" element={<ServiciosPage />} />
                  <Route path="/solutions/electromovilidad" element={<ElectromovilidadPage />} />
                  <Route path="/solutions/delineadores" element={<DelineadoresPage />} />
                  <Route path="/solutions/atenuadores" element={<AtenuadoresPage />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/downloads" element={<Downloads />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-conditions" element={<TermsConditions />} />
                  <Route path="/cookies-policy" element={<CookiesPolicy />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
              <WhatsAppButton />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </WhatsAppProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
