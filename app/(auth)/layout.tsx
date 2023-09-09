import Navbar from "@/components/Homepage/Navbar";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-screen bg-peachpuff relative  ">
      <Navbar channelPage={true} />
      <div className="bg-peachpuff h-[cacl(100vh-60px)]  absolute top-[25%] left-[35%] flex justify-center items-center ">
        {children}
      </div>
    </div>
  );
};
export default AuthLayout;
