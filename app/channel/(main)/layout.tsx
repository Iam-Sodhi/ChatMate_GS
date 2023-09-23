import NavigationSidebar from "@/components/Channel/Navigation/NavigationSidebar";

export default function ChannelLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        
      <div className="h-full">
<div className="invisible md:visible md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0">
  <NavigationSidebar />
</div>


      <div className="md:pl-[72px] h-full">
        {children}
      </div>
    </div>
    );
  }