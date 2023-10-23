
import About from "@/components/Homepage/About";
import BusinessSection from "@/components/Homepage/BusinessSection";
import Footer from "@/components/Homepage/Footer";
import HeroSection from "@/components/Homepage/HeroSection";
import { UserButton, useUser } from "@clerk/nextjs";

export default  function Home() {
 
  return (
    <main>
      <div className="relative  w-full  overflow-hidden   ">
        <div className="hidden md:flex absolute top-6 lg:right-[3%]">
          <UserButton  afterSignOutUrl="/" />
        </div>
        <HeroSection  />
        <About />
        <BusinessSection />
        <Footer />
      </div>
    </main>
  );
}
