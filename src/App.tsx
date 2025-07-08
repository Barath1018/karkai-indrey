import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";

import HomePage from "./pages/HomePage";
import VisionPage from "./pages/VisionPage";
import MissionPage from "./pages/MissionPage";
import WorkshopsPage from "./pages/WorkshopsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Gallery from "./pages/GalleryPage";
import Apply from "./pages/ApplyPage";

import { AnimatePresence, motion } from "framer-motion";

// Page transition wrapper
const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

// Animated route wrapper
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/vision" element={<PageWrapper><VisionPage /></PageWrapper>} />
        <Route path="/mission" element={<PageWrapper><MissionPage /></PageWrapper>} />
        <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
        <Route path="/workshops" element={<PageWrapper><WorkshopsPage /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
        <Route path="/apply" element={<PageWrapper><Apply /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

// Main App Component
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col transition-colors duration-300">
            <Navigation />
            <main className="flex-1">
              <AnimatedRoutes />
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
