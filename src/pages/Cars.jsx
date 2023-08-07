import {
  AiOutlineArrowUp,
  AiOutlinePhone,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import axios from "../axios";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";

const Cars = () => {
  const [loading, setLoading] = useState(false);
  const [allCars, setAllCars] = useState([]);

  // handle fetch
  const handleFetch = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/car/all");
      if (response) {
        setAllCars(response.data);
        console.log(response.data);
        setLoading(false);
      }
      setLoading(false);
    } catch (error) {
      toast.error("Error Fetching Cars");
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const breakpointColumnsObj = {
    default: 4,
    3000: 5,
    2000: 4,
    1200: 3,
    1000: 2,
    500: 1,
  };

  //   pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = allCars?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(allCars?.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(4);

  const handleClick = (number) => {
    setStart(number);
    setEnd(number + 3);
  };

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      handleClick(currentPage);
    }
  };

  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
      handleClick(currentPage);
    }
  };

  const changeCurrentPage = (id) => {
    setCurrentPage(id);
  };

  // search  states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setsearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  // search user func
  const handleSearchChange = async (e) => {
    e.preventDefault();
    clearTimeout(setsearchTimeout);

    setSearchText(e.target.value);
    // console.log(searchText);

    setsearchTimeout(
      setTimeout(() => {
        const searchResults = allCars?.filter(
          (item) =>
            item.title.toLowerCase().includes(searchText.toLowerCase()) ||
            item.gear.toLowerCase().includes(searchText.toLowerCase()) ||
            item.status.toLowerCase().includes(searchText.toLowerCase())
        );

        setSearchedResults(searchResults);
      }, 500)
    );
  };

  // scroll to top functionality
  const [showArrow, setShowArrow] = useState(false);

  // const { user } = useSelector((state) => state.auth);

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

  const [cartItemCount, setCartItemCount] = useState(0);

  // let us use localstorage to store favorites
  const handleAddCart = async (product) => {
    // Retrieve the existing cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product already exists in the cart
    const existingProduct = cartItems.find((item) => item._id === product._id);

    if (existingProduct) {
      // Product already exists, return a message
      toast.error("Already Added To List");
      return;
    }

    // Create a new cart with the existing items and the new product
    const updatedCart = [...cartItems, product];

    // Update the cart items in localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Update the cart item count in the parent component
    setCartItemCount((prevCount) => prevCount + 1);

    toast.success(`${product.title} added to List`);
    return;
  };

  // read from state
  useEffect(() => {
    // Function to count the number of items in localStorage
    const countItemsInCart = () => {
      try {
        // Retrieve the existing cart items from localStorage
        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        // Get the number of items in the cart
        const itemCount = cartItems.length;
        // Update the state with the item count
        setCartItemCount(itemCount);
      } catch (error) {
        // Handle any errors that might occur during parsing or reading from localStorage
        console.error("Error reading from localStorage:", error);
      }
    };

    countItemsInCart(); // Call the function when the component mounts
  }, [handleAddCart]);

  return (
    <div>
      {/* wrapper */}
      {/* arrow to scroll to top */}
      {showArrow && (
        <div
          className="fixed bottom-20 right-4 text-3xl z-[999] cursor-pointer bg-teal-700 text-zinc-50 rounded-full p-[5px]"
          onClick={handleScrollTop}
        >
          <AiOutlineArrowUp />
        </div>
      )}
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

            <Link to="/checkout">
              <div className="flex gap-[10px] items-center">
                <AiOutlineShoppingCart className="text-2xl" />
                <p>({cartItemCount})</p>
              </div>
            </Link>
          </div>

          <div className="flex-[0.4] w-full flex justify-end">
            <form className="flex items-center gap-[5px] w-full lg:w-[60%] bg-zinc-300 p-[8px] rounded-lg">
              <AiOutlineSearch className="text-zinc-700 text-xl" />
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent outline-none border-none"
                required
                value={searchText}
                onChange={handleSearchChange}
              />
            </form>
          </div>
        </div>
        {/* hero  */}
        {/* <div className="flex flex-col md:flex-row bg-zinc-300 gap-[30px] md:gap-[15px] mx-[10px] md:mx-[2em] xl:mx-[5em] mt-[25px] p-[10px] rounded-lg   items-start sm:items-center">
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
        </div> */}
        {/*  data all cars*/}
        <div className="mx-[10px] md:mx-[2em] xl:mx-[5em] mt-[25px]">
          {loading ? (
            <div className="h-[80vh] w-full flex justify-center items-center">
              <Spinner message="Fetching Cars ..." />
            </div>
          ) : (
            <>
              {searchText ? (
                <>
                  <div className="mb-[15px] text-zinc-700">
                    {searchText && <p>Results For : {searchText}</p>}
                    {/* {searchedResults?.length} */}
                  </div>
                  {searchedResults?.length >= 1 ? (
                    <>
                      <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid "
                        columnClassName="my-masonry-grid_column"
                      >
                        {/* {alert(records.length)} */}

                        {searchedResults?.map((item) => (
                          <div
                            key={item._id}
                            className="bg-slate-200 rounded-lg"
                          >
                            <div className="image-item rounded-lg">
                              <img
                                src={item.image}
                                alt=""
                                className="w-full rounded-md max-h-[800px] object-cover"
                              />

                              <div className="mt-[10px] px-[6px] pb-[10px] ">
                                <p className="font-bold mb-[10px]">
                                  {item.title}
                                </p>
                                <div className="flex justify-between mb-[10px] items-center">
                                  <p>{item.seats} Seater</p>
                                  <p>Ksh. {item.price} / day</p>
                                </div>

                                <div className="flex justify-between mb-[10px] items-center">
                                  <p>{item.status}</p>
                                  <p>{item.gear}</p>
                                </div>

                                <div className="flex justify-end">
                                  <div>
                                    <p
                                      className="text-emerald-800 text-xl cursor-pointer"
                                      onClick={() => handleAddCart(item)}
                                    >
                                      <AiOutlineShoppingCart
                                        title="Add To List"
                                        className="text-2xl"
                                      />
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </Masonry>
                    </>
                  ) : (
                    <div className="flex justify-center items-center h-[66vh]">
                      <p className="text-xl text-zinc-800">
                        No results 😥 for {searchText}
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <>
                  {/* nav numbers */}
                  <nav className="flex justify-center">
                    <ul className="flex gap-[2em] mt-[10px] px-[5px] py-[10px] items-center ">
                      {/* map */}

                      <>
                        <li>
                          <a
                            href="#"
                            onClick={prevPage}
                            className="text-zinc-600"
                          >
                            <p className="text-zinc-600">Prev</p>
                          </a>
                        </li>
                        <li className="flex gap-[10px] ">
                          {numbers.slice(start - 1, end).map((item, index) => (
                            <li
                              key={index}
                              className={`normal-nav ${
                                currentPage === item && "active-nav"
                              }`}
                            >
                              <a
                                href="#"
                                onClick={() => {
                                  handleClick(item);
                                  changeCurrentPage(item);
                                }}
                              >
                                <p className="text-zinc-600">{item}</p>
                              </a>
                            </li>
                          ))}
                        </li>

                        <li>
                          <a href="#" onClick={nextPage}>
                            <p className="text-zinc-700">Next</p>
                          </a>
                        </li>
                      </>
                    </ul>
                  </nav>
                  {/*  */}
                  <div>
                    {records.length >= 1 ? (
                      <>
                        <Masonry
                          breakpointCols={breakpointColumnsObj}
                          className="my-masonry-grid "
                          columnClassName="my-masonry-grid_column"
                        >
                          {/* {alert(records.length)} */}

                          {records.map((item) => (
                            <div
                              key={item._id}
                              className="bg-slate-200 rounded-lg"
                            >
                              <div className="image-item rounded-lg">
                                <img
                                  src={item.image}
                                  alt=""
                                  className="w-full rounded-md max-h-[800px] object-cover"
                                />

                                <div className="mt-[10px] px-[6px] pb-[10px] ">
                                  <p className="font-bold mb-[10px]">
                                    {item.title}
                                  </p>
                                  <div className="flex justify-between mb-[10px] items-center">
                                    <p>{item.seats} Seater</p>
                                    <p>Ksh. {item.price} / day</p>
                                  </div>

                                  <div className="flex justify-between mb-[10px] items-center">
                                    <p>{item.status}</p>
                                    <p>{item.gear}</p>
                                  </div>

                                  <div className="flex justify-end">
                                    <div>
                                      <p
                                        className="text-emerald-800 text-xl cursor-pointer"
                                        onClick={() => handleAddCart(item)}
                                      >
                                        <AiOutlineShoppingCart
                                          title="Add To List"
                                          className="text-2xl"
                                        />
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </Masonry>
                      </>
                    ) : (
                      <div className="flex justify-center my-[4em]">
                        <p className="text-3xl text-zinc-300">
                          No Trades To Show 😥
                        </p>
                      </div>
                    )}
                  </div>
                </>
              )}
            </>
          )}

          {/*  */}
        </div>
        {/*  */}
      </div>

      {/*  */}
    </div>
  );
};

export default Cars;
