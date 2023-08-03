import carBg from "../../assets/rangeRm.png";

const Hero = () => {
  return (
    <div className=" px-[8px] md:px-[3em]  xl:px-[5em] pt-[5em]">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* text */}
        <div className="flex-[0.5]">
          <h1 className="text-6xl mb-[15px]" style={{ fontWeight: 600 }}>
            LUXURY CAR
          </h1>
          <h1 className="text-6xl mb-[15px]" style={{ fontWeight: 600 }}>
            RENTALS
          </h1>
          <div className="py-[20px] pl-[4px]">
            <h4>FIND THE PERFECT CAR</h4>
            <h4>FOR RENT TODAY!</h4>
          </div>
          <div className="bg-black h-[5px] w-[100px] mb-[20px] ml-[4px]"></div>
          <div className="ml-[4px]">
            <p className="pr-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              quas cumque, provident neque repellendus quia possimus
              exercitationem laborum accusantium suscipit optio quae nulla? Esse
              vitae voluptate doloribus optio dicta vel. Repudiandae debitis
              temporibus maiores! Ipsam nostrum voluptatibus temporibus
              quibusdam nihil ipsa iure voluptates quia adipisci hic facere,
              dolorem quisquam iusto.
            </p>
          </div>
        </div>
        {/* image */}
        <div className="flex-[0.5]">
          <img src={carBg} alt="" className="w-full h-full object-contain" />
        </div>
      </div>
      {/* herofooter */}
      <div className=" hidden lg:flex gap-[30px] mt-[1em] items-start justify-start">
        <div>
          <p className="font-bold">Best Price</p>
          <h2>2K per 20KM</h2>
          <span>Maximum range</span>
        </div>
        <div>
          <p className="font-bold">Ultra-Petrol</p>
          <h2>10% Full tank</h2>
          <span>Gets you Going</span>
        </div>
        <div>
          <p className="font-bold">High Performance</p>
          <h2>90% Durable</h2>
          <span>Comfy Stylish</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
