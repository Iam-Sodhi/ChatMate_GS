import NavigationSidebar from "@/components/Channel/Navigation/NavigationSidebar";

export default function ChannelLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        
      <div className="h-full">
     
        <NavigationSidebar />
      <div className="md:pl-[72px] h-full">
        {children}
      </div>
    </div>
    );
  }