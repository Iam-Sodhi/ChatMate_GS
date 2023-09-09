import About from "@/components/Homepage/About";
import BusinessSection from "@/components/Homepage/BusinessSection";
import Footer from "@/components/Homepage/Footer";
import HeroSection from "@/components/Homepage/HeroSection";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const User = await currentUser();
  
  let user=false;
  if(User){ user=true}
  return (
    <main>
      <div className="relative  w-full  overflow-hidden   ">
        <div className="absolute right-12">
          <UserButton afterSignOutUrl="/" />
        </div>
        <HeroSection user  />
        <About />
        <BusinessSection />
        <Footer />
      </div>
    </main>
  );
}
