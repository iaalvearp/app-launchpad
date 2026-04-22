import { Hero } from "@/components/sections/Hero";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Plans } from "@/components/sections/Plans";
import { Testimonials } from "@/components/sections/Testimonials";
import { B2B } from "@/components/sections/B2B";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Navbar, Footer } from "@/components/sections/NavFooter";
import { PaletteSwitcher } from "@/components/PaletteSwitcher";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main>
      <Hero />
      <ProblemSolution />
      <Plans />
      <Testimonials />
      <B2B />
      <FinalCTA />
    </main>
    <Footer />
    <PaletteSwitcher />
  </div>
);

export default Index;
