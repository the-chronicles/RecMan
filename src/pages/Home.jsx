import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div>
        <div className="sticky top-[30px] mx-auto my-[60px] mb-20 h-[90dvh] w-11/12 rounded-2xl shadow-2xl transition ease-in-out hover:-translate-y-1">
          <div className="relative h-full w-full">
            <img
              src="/img/1.jpg"
              alt=""
              className="h-full w-full rounded-2xl object-contain"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 font-[Figtree] text-white">
              <h1 className="text-4xl font-bold">
                Modern, Einzigartig & Animation.
              </h1>
              <div className="flex gap-5 text-xl">
                <h1 className="rounded-full bg-red-500 px-5 py-1">More Info</h1>
                <h1 className="rounded-full border-2 border-red-500 px-5 py-1">
                  Buy
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky top-[30px] mx-auto my-[60px] mb-20 h-[90dvh] w-11/12 rounded-2xl bg-blue-500 shadow-2xl transition ease-in-out hover:-translate-y-1">
          <div className="relative h-full w-full">
            <img
              src="/img/3.png"
              alt=""
              className="h-full w-full rounded-2xl object-contain"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 font-[Figtree] text-white">
              <h1 className="text-4xl font-bold">
                Modern, Einzigartig & Animation.
              </h1>
              <div className="flex gap-5 text-xl">
                <h1 className="rounded-full bg-red-500 px-5 py-1">More Info</h1>
                <h1 className="rounded-full border-2 border-red-500 px-5 py-1">
                  Buy
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky top-[30px] mx-auto my-[60px] mb-20 h-[90dvh] w-11/12 rounded-2xl bg-stone-500 shadow-2xl transition ease-in-out hover:-translate-y-1"></div>
        <div className="sticky top-[30px] mx-auto my-[60px] mb-20 h-[90dvh] w-11/12 rounded-2xl bg-orange-500 shadow-2xl transition ease-in-out hover:-translate-y-1"></div>
      </div>
      
      <Footer />
    </>
  );
}

export default Home;
