import About from "@/components/About";
import BusinessSection from "@/components/BusinessSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";


export default function Home() {

  return (
    <main >
        <div
      className="relative bg-peachpuff w-full  overflow-hidden   "
    >  
      <HeroSection />
      <About />
      <BusinessSection />
      <Footer />
    </div>
      
    </main>
  )
}
