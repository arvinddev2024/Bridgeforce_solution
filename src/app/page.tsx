import Navbar from "@/components/navbar";
import Image from "next/image";
import Categories from "./categories";
import Bestsellers from "./bestsellers";
import Footer from "@/components/footer";
import PasswordAuth from "@/components/passwordAuth";

export default function Home() {
  return (
    <>
      <PasswordAuth>
        <Navbar />
        <div className="w-full  flex flex-col lg:flex-row justify-center items-center p-4 md:p-6 lg:p-9 gap-4">
          <div className="lg:w-1/2 flex flex-col items-left justify-center text-center px-4 md:px-9 lg:mx-18 py-12 md:py-16 lg:py-20">
            <h1 className="lg:w-full  text-left flex items-start text-xl sm:text-4xl md:text-3xl lg:text-5xl font-medium">
              Let’s discover our new notebook collections
            </h1>

            <p className="text-left sm:text-lg md:text-xl mt-6  max-w-2xl">
              Step into our world where every page holds the promise of new
              ideas and endless possibilities.
            </p>
            <a
              href="#"
              className="mt-8 w-fit inline-block bg-[#444] text-yellow-50 text-left sm:text-lg md:text-xl py-2 px-8 rounded-lg hover:bg-green-700 transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Explore
            </a>
          </div>
          <div className="lg:w-1/2 flex flex-col items-start justify-center text-left px-4 md:px-9 lg:mx-20 py-12 md:py-16 lg:py-20">
            <img
              src="/homePic.jpg"
              alt="Descriptive Alt Text"
              className="w-full max-w-md object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="w-full mx-auto px-4 md:px-6 lg:px-9 py-6 lg:py-12 bg-white">
          <Categories />
          <Bestsellers />
        </div>
        <Footer />
      </PasswordAuth>
    </>
  );
}
