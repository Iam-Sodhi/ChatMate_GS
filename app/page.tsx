import About from "@/components/About";
import BusinessSection from "@/components/BusinessSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <div className="relative  w-full  overflow-hidden   ">
        <div className="absolute right-12">
          <UserButton afterSignOutUrl="/" />
        </div>
        <HeroSection />
        <About />
        <BusinessSection />
        <Footer />
      </div>
    </main>
  );
}
