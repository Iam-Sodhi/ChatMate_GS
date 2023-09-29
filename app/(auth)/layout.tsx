import Navbar from "@/components/Homepage/Navbar";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-screen bg-peachpuff relative  ">
      <Navbar channelPage={true} />
      <div className="bg-peachpuff h-[cacl(100vh-60px)]  flex justify-center items-center  mt-[15%] sm:mt-[10%] md:mt-[5%] ">
        {children}
      </div>
    </div>
  );
};
export default AuthLayout;
