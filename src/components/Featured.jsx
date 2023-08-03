import { AiOutlineArrowRight } from "react-icons/ai";

const Featured = () => {
  return (
    <div className="relative mt-[1em] h-[58vh]">
      <img
        src="https://images.pexels.com/photos/13458334/pexels-photo-13458334.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        alt="Background Placeholder"
        className="w-full h-[58vh] object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.5)]" />
      <div className="absolute w-full h-full top-0 flex flex-col px-[5em] py-[2em] text-white">
        <h2 className="text-4xl font-bold">FEATURED</h2>
        <div className="flex w-full justify-between">
          <p className="mt-[15px]">The best collection of our cars</p>
          <div className="flex items-center gap-[5px] border-2 border-zinc-300 rounded-2xl p-[9px] cursor-pointer">
            <p>See All Cars</p>
            <p>
              <AiOutlineArrowRight />
            </p>
          </div>
        </div>
        <div className="flex gap-[15px] mt-[20px]">
          <div>
            <img
              src="https://images.pexels.com/photos/802254/pexels-photo-802254.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-[100%]"
            />
            <p className="mt-[10px] font-bold">
              Mercedes Benz, cruise in comfort and enjoy the beats from jbl
              sounds
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-[100%]"
            />
            <p className="mt-[10px] font-bold">
              BMW, the best ride is a ride with our bmw cars. All the comfort
              you need.
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/4781950/pexels-photo-4781950.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-[100%]"
            />
            <p className="mt-[10px] font-bold">
              Toyota, tougher than the toughest. no matter the terrain we got
              you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
