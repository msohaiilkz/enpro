import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import ServiceDetail from "./pages/ServiceDetail";

const queryClient = new QueryClient();

/**
 * Brand accent, applied inline at the app root so it can never be lost to a
 * stale stylesheet. Pages may override these for their own subtree - the
 * environmental service switches them to its green.
 */
const BRAND_ACCENT = {
  "--accent": "#bf1e2e",
  "--accent-dark": "#961a27",
  "--accent-light": "#e03347",
  "--accent-10": "#fbe5e7",
  "--accent-15": "#bf1e2e26",
  "--accent-20": "#bf1e2e33",
  "--accent-25": "#bf1e2e40",
  "--accent-30": "#bf1e2e4d",
  "--accent-35": "#bf1e2e59",
  "--accent-40": "#bf1e2e66",
  "--accent-50": "#bf1e2e80",
} as React.CSSProperties;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div style={BRAND_ACCENT}>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
