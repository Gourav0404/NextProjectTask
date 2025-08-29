import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { AccountProgressCard } from "@/components/card";
import { MarketValue } from "@/components/card2";
import { Feedback } from "@/components/card3";
import { Finacial } from "@/components/card4";
import { Card5 } from "@/components/card5";

export default function Home() {
  return (
    <div className="min-h-screen w-full  flex flex-col">

      <section className=" mt-3 ml-[85%] sm:ml[50%]  justify-items-end">
        <Navbar />
      </section>

      {/* <section className="mt-3 flex justify-end w-full 
  sm:static sm:mt-3
  fixed top-0 right-0 z-50 bg-white p-2 sm:bg-transparent">
        <Navbar />
      </section> */}

      {/* Main content */}
      <main className="w-full flex flex-col md:flex-row gap-4 p-4 flex-1">
        {/* Account Progress Card */}
        <div className="flex-1 w-full">
          <AccountProgressCard />
        </div>

        {/* Market Value Card */}
        <div className="flex-1 w-full">
          <MarketValue />
          <Finacial />
        </div>



        {/* feedback Vala Card */}
        <div className="flex-1 w-full">
          <Feedback />
          <Card5 />
        </div>

      </main>
    </div>
  );
}
