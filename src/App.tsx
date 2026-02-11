import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Index from "./pages/Index";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import ITSPage from "./pages/ITSPage";
import PavimentosPage from "./pages/PavimentosPage";
import InstrumentosPage from "./pages/InstrumentosPage";
import SenalizacionPage from "./pages/SenalizacionPage";
import ServiciosPage from "./pages/ServiciosPage";
import Projects from "./pages/Projects";
import Downloads from "./pages/Downloads";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/its" element={<ITSPage />} />
            <Route path="/solutions/pavimentos" element={<PavimentosPage />} />
            <Route path="/solutions/instrumentos" element={<InstrumentosPage />} />
            <Route path="/solutions/senalizacion" element={<SenalizacionPage />} />
            <Route path="/solutions/servicios" element={<ServiciosPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
