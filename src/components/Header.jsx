// import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
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
                  <li className="cursor-pointer anim-text">
                    <a href="#home">Home</a>
                  </li>
                  <Link to="/cars">
                    <li className="cursor-pointer anim-text">Cars</li>
                  </Link>
                  {/* <li className="cursor-pointer anim-text">Pricing</li> */}
                  <li className="cursor-pointer anim-text">
                    <a href="#careers">Careers</a>
                  </li>
                  <li className="cursor-pointer anim-text">
                    <a href="#about">About</a>
                  </li>
                  <li className="cursor-pointer anim-text">
                    <a href="#contact">Contact Us</a>
                  </li>
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
                background: "rgba(236, 234, 234, 0.9)",
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
                    <li
                      className="cursor-pointer anim-text"
                      onClick={() => setShowMenu(false)}
                    >
                      <a href="#home">Home</a>
                    </li>
                    <Link to="/cars">
                      <li
                        className="cursor-pointer anim-text"
                        onClick={() => setShowMenu(false)}
                      >
                        Cars
                      </li>
                    </Link>
                    {/* <li className="cursor-pointer anim-text" onClick={()=>setShowMenu(false)}>Pricing</li> */}
                    <li
                      className="cursor-pointer anim-text"
                      onClick={() => setShowMenu(false)}
                    >
                      <a href="#careers">Careers</a>
                    </li>
                    <li
                      className="cursor-pointer anim-text"
                      onClick={() => setShowMenu(false)}
                    >
                      <a href="#about">About</a>
                    </li>
                    <li
                      className="cursor-pointer anim-text"
                      onClick={() => setShowMenu(false)}
                    >
                      <a href="#contact">Contact Us</a>
                    </li>
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
