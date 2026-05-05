import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteLayout from "@/components/SiteLayout";
import Index from "./pages/Index.tsx";
import HowItWorksPage from "./pages/HowItWorksPage.tsx";
import PlansPage from "./pages/PlansPage.tsx";
import UseCasesPage from "./pages/UseCasesPage.tsx";
import BlogIndex from "./pages/BlogIndex.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import { I18nProvider } from "./i18n/I18nProvider";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <I18nProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<SiteLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/como-funciona" element={<HowItWorksPage />} />
              <Route path="/precios" element={<PlansPage />} />
              <Route path="/casos-de-uso" element={<UseCasesPage />} />
              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contacto" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </I18nProvider>
  </QueryClientProvider>
);

export default App;
