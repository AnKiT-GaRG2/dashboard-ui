import Menu from "@/components/menu";
import Navbar from "@/components/navbar";
import Image from "next/image.js";
import Link from "next/link.js";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex overflow-hidden">
      {/*left*/}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] overflow-auto">
      <Link href="/" className="flex items-center justify-center lg:justify-start gap-2 p-4">
      <Image src="/logo.png" alt="logo" width={50} height={50}/>
      <span className="hidden lg:block">The Himalayan Public School</span>
      </Link>
      <Menu/>
      </div>
      {/*right*/}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%]  bg-[#F7F8FA] overflow-auto flex-1">
        <Navbar/>
        {children}
      </div>
    </div>
  )
}