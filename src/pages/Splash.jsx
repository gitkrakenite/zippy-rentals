import { AiOutlineArrowUp, AiOutlineCar, AiOutlineSmile } from "react-icons/ai";
import Header from "../components/Header";
import Hero from "../components/hero/Hero";
import { BsFuelPump, BsTree } from "react-icons/bs";
import About from "../components/About";
import Contact from "../components/Contact";
import { useEffect, useState } from "react";
import Careers from "../components/Careers";
// import Featured from "../components/Featured";

const Splash = () => {
  // scroll to top functionality
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* arrow to scroll to top */}
      {showArrow && (
        <div
          className="fixed bottom-20 right-4 text-3xl z-[999] cursor-pointer bg-teal-700 text-zinc-50 rounded-full p-[5px]"
          onClick={handleScrollTop}
        >
          <AiOutlineArrowUp />
        </div>
      )}
      <Header />
      <Hero />
      <div className="  px-[10px] md:px-[3em] xl:px-[5em] mt-[4em]">
        <div className="flex flex-col gap-[5px] justify-center text-zinc-700">
          <h2 className="text-center text-3xl" style={{ fontWeight: 700 }}>
            Get the Best Experience
          </h2>
          <h2 className="text-center text-3xl" style={{ fontWeight: 700 }}>
            with Our Rental Deals!
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row mt-[48px] pb-[20px] gap-[20px] items-center">
          <div>
            <BsTree className="text-center w-full text-4xl text-emerald-600" />
            <h2 className="py-[15px] font-bold text-lg text-center">
              Eco-Friendly
            </h2>
            <p className="text-center">
              Well Serviced and maintained cars. Smooth transitions and shafts
            </p>
          </div>
          <div>
            <AiOutlineCar className="text-center w-full text-4xl text-emerald-600" />
            <h2 className="py-[15px] font-bold text-lg text-center">
              Wide Choices
            </h2>
            <p className="text-center">
              We offer you a variety of options. Your taste matters to us.
            </p>
          </div>
          <div>
            <BsFuelPump className="text-center w-full text-4xl text-emerald-600" />
            <h2 className="py-[15px] font-bold text-lg text-center">
              2k Worth Fuel
            </h2>
            <p className="text-center">
              Our offers may get you up to half tank worth of fuel saving you
              the cost.
            </p>
          </div>
          <div>
            <AiOutlineSmile className="text-center w-full text-4xl text-emerald-600" />
            <h2 className="py-[15px] font-bold text-lg text-center">
              Easy to Use
            </h2>
            <p className="text-center">
              Our cars are easy to use. Whether automatic or manual transmission
              we&apos;ve got you.
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <About />
      <Careers />
      <Contact />
      {/*  */}
    </div>
  );
};

export default Splash;
