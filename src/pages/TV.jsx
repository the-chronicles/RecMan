import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function TV() {
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TV;
