import { AiOutlineCar, AiOutlineSmile } from "react-icons/ai";
import Header from "../components/Header";
import Hero from "../components/hero/Hero";
import { BsFuelPump, BsTree } from "react-icons/bs";
import About from "../components/About";
// import Featured from "../components/Featured";

const Splash = () => {
  return (
    <div>
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
      {/*  */}
    </div>
  );
};

export default Splash;
