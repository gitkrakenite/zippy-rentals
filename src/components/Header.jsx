// import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      {/* desktop navbar */}
      <div>
        <div className="">
          <div
            className="fixed top-0 left-0 w-full z-[999] py-[15px] px-[8px]  lg:px-[5em] flex justify-between"
            style={{
              background: "rgba(221, 217, 217, 0.9)",
              backdropFilter: "blur(4px)",
              zIndex: 2,
            }}
          >
            {/* logo */}
            <div className="flex items-center gap-3">
              <img
                src="https://img.icons8.com/small/512/scream.png"
                className="w-5 h-5 object-cover"
                alt=""
              />

              <h2 className="text-lg font-bold cursor-pointer">CARMANIAC</h2>
            </div>
            {/* menu */}
            <div className="flex gap-16 items-center">
              {/* menu items */}
              <div>
                <ul className=" hidden lg:flex gap-8">
                  <li className="cursor-pointer anim-text">Home</li>
                  <li className="cursor-pointer anim-text">Cars</li>
                  <li className="cursor-pointer anim-text">Pricing</li>
                  <li className="cursor-pointer anim-text">Careers</li>
                  <li className="cursor-pointer anim-text">About</li>
                  <li className="cursor-pointer anim-text">Contact Us</li>
                </ul>
              </div>
              <div className="lg:hidden">
                <div>
                  <AiOutlineMenu
                    onClick={() => setShowMenu(true)}
                    className="text-3xl cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile navbar */}
      {showMenu && (
        <div className="lg:hidden">
          <div className="">
            <div
              className="fixed top-0 left-0 w-full z-[999] py-[15px] px-[8px]  lg:px-[5em] flex flex-col h-full"
              style={{
                background: "rgba(192, 190, 190, 0.9)",
                backdropFilter: "blur(4px)",
                zIndex: 2,
              }}
            >
              {/* topbar */}
              <div className="flex items-center justify-between mb-[65px]">
                {/* logo */}
                <div className="flex items-center gap-3">
                  <img
                    src="https://img.icons8.com/small/512/scream.png"
                    className="w-5 h-5 object-cover"
                    alt=""
                  />

                  <h2 className="text-lg font-bold cursor-pointer">
                    CARMANIAC
                  </h2>
                </div>
                {/* options */}
                <div>
                  <AiOutlineClose
                    onClick={() => setShowMenu(false)}
                    className="text-3xl cursor-pointer"
                  />
                </div>
              </div>
              {/* menu */}
              <div className="flex gap-16 items-center">
                {/* menu items */}
                <div className="w-full pr-3">
                  <ul className="flex flex-col gap-8 items-end w-full">
                    <li className="  cursor-pointer  transition-all">Home</li>
                    <li className="  cursor-pointer ">Cars</li>
                    <li className="  cursor-pointer ">Pricing</li>
                    <li className="cursor-pointer ">Careers</li>
                    <li className="  cursor-pointer ">About</li>
                    <li className=" cursor-pointer ">Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/*  */}
    </div>
  );
};

export default Header;
