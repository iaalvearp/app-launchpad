import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar, Footer } from "@/components/sections/NavFooter";
import { PaletteSwitcher } from "@/components/PaletteSwitcher";

const SiteLayout = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, [pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <PaletteSwitcher />
    </div>
  );
};
export default SiteLayout;
