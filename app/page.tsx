import About from "@/components/Homepage/About";
import BusinessSection from "@/components/Homepage/BusinessSection";
import Footer from "@/components/Homepage/Footer";
import HeroSection from "@/components/Homepage/HeroSection";
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
