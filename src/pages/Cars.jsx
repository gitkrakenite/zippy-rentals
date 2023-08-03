import {
  AiOutlinePhone,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const Cars = () => {
  return (
    <div>
      {/* wrapper */}
      <div>
        {/* topribbon */}
        <div className=" bg-teal-800  text-zinc-300 flex justify-between items-center px-[10px] md:px-[2em] xl:px-[5em] py-[6px] ">
          <div className="flex items-center gap-[10px]">
            <AiOutlinePhone className="text-xl" />
            <p>+254 7xxxxxxxx</p>
          </div>
          <div>
            <p className="hidden md:block">
              Get 50% off on selected cars | Rent Now
            </p>
          </div>
          <div className="flex gap-[30px]">
            <p>ENG</p>
            <p>LOCATION</p>
          </div>
        </div>
        {/* options */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-[10px] px-[10px] md:px-[2em] xl:px-[5em] mt-[15px]">
          <div className="flex items-center flex-[0.6] w-full justify-between  gap-[10px] lg:gap-[20px]">
            {/* logo */}
            <div className="flex items-center gap-3">
              <img
                src="https://img.icons8.com/small/512/scream.png"
                className="w-5 h-5 object-cover"
                alt=""
              />

              <h2 className="text-lg font-bold cursor-pointer">CARMANIAC</h2>
            </div>

            <div className="text-user">Hello John</div>

            <div className="flex gap-[10px] items-center">
              <AiOutlineShoppingCart className="text-2xl" />
              <p>(2)</p>
            </div>
          </div>

          <div className="flex-[0.4] w-full flex justify-end">
            <form className="flex items-center gap-[5px] w-full lg:w-[60%] bg-zinc-300 p-[8px] rounded-lg">
              <AiOutlineSearch className="text-zinc-700 text-xl" />
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent outline-none border-none"
              />
            </form>
          </div>
        </div>
        {/* hero  */}
        <div className="flex flex-col md:flex-row bg-zinc-300 gap-[30px] md:gap-[15px] mx-[10px] md:mx-[2em] xl:mx-[5em] mt-[25px] p-[10px] rounded-lg   items-start sm:items-center">
          <div className="flex-[0.6]">
            <div>
              <p className="font-bold text-teal-800  text-xl sm:text-4xl mb-[5px] sm:mb-[18px]">
                {" "}
                Grab a family car and get a,
              </p>
              <p className="font-bold text-teal-800 text-xl sm:text-4xl mb-[5px] sm:mb-[18px]">
                {" "}
                40% discount on selected rental.
              </p>
            </div>
            <p className=" mt-[20px] sm:mt-[50px]">
              <span className="border border-zinc-500 p-[10px] rounded-lg">
                Limited Offer
              </span>
            </p>
          </div>
          <div className="flex-[0.4]">
            <img
              src="https://images.pexels.com/photos/6182089/pexels-photo-6182089.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-[600px] h-[400px] object-cover rounded-lg"
            />
          </div>
        </div>
        {/*  */}
      </div>
      {/*  */}
    </div>
  );
};

export default Cars;
