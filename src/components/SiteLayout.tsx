import { Outlet, ScrollRestoration } from "react-router-dom";
import { Navbar, Footer } from "@/components/sections/NavFooter";
import { PaletteSwitcher } from "@/components/PaletteSwitcher";

const SiteLayout = () => (
  <div className="min-h-screen bg-background text-foreground flex flex-col">
    <Navbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
    <PaletteSwitcher />
    <ScrollRestoration />
  </div>
);
export default SiteLayout;
