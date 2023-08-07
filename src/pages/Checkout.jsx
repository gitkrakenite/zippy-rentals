import { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Checkout = () => {
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

  // fetch products from localstorage
  const [rentals, setRentals] = useState([]);
  function getSortedProductsFromLocalStorage() {
    // Retrieve the cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Sort the cart items in reverse order based on the timestamp or any other relevant property
    const sortedCartItems = cartItems.sort((a, b) => b.timestamp - a.timestamp);

    // Update the cart state with the sorted products
    setRentals(sortedCartItems);
  }

  useEffect(() => {
    getSortedProductsFromLocalStorage();
  }, []);

  // Function to calculate the total price of all items in the cart
  function calculateTotalPrice() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    let totalPrice = 0;

    for (const item of cartItems) {
      if (item.price && !isNaN(item.price)) {
        totalPrice += parseFloat(item.price); // Parse the price to a float and add it to the total
      }
    }

    return totalPrice;
  }

  // Call the calculateTotalPrice function to get the total price
  const totalPrice = calculateTotalPrice();

  const handleRemoveFromCart = (id) => {
    // Retrieve the cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Filter out the product with the specified ID
    const updatedCartItems = cartItems.filter((item) => item._id !== id);

    // Update the cart state and localStorage with the updated cart items
    setRentals(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    getSortedProductsFromLocalStorage();
    // Update the cart item count in the parent component
    // setCartItemCount((prevCount) => prevCount - 1);
    toast.success("Removed From Cart");
  };

  const [pickUp, setPickUp] = useState(false);
  const [delivery, setDelivery] = useState(false);

  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const activateBooking = () => {
    setPickUp(false);
    // Clear the entire localStorage
    localStorage.clear();

    // Update the cart state to an empty array
    setRentals([]);
    toast.success("Booking succesful.");
    toast.success("You can go get the cars at our stations.");
  };

  const handleOrder = (e) => {
    e.preventDefault();

    if (!address) {
      return toast.error("Address missing");
    }

    if (!phone) {
      return toast.error("Phone number missing");
    }

    setDelivery(false);
    // Clear the entire localStorage
    localStorage.clear();

    // Update the cart state to an empty array
    setRentals([]);
    toast.success("Order Sent Succesfully.");
  };

  return (
    <div>
      {/* wrapper */}
      <div className=" mx-2 md:mx-[2em] xl:mx-[5em] mt-[25px]">
        <Link to="/cars">
          <AiOutlineArrowLeft title="Back" className="text-3xl" />
        </Link>
        <div>
          <p className="mt-[20px]">CHECKOUT NOW</p>
          <p className="text-sm">
            **You can only rent one of each type of car**
          </p>
        </div>
        {/* cart items */}
        {rentals.length < 1 && (
          <div className="my-[10em]">
            <h2 className="mb-[10px]">
              Hello There. There is no car in the list.{" "}
            </h2>
            <Link to="/cars" className="text-teal-600 underline text-center">
              All Cars
            </Link>
          </div>
        )}
        <div className="mt-[2em]">
          {rentals?.map((item) => (
            <div key={item._id} className="bg-slate-200 rounded-lg mb-[20px] ">
              <div className="rounded-lg flex justify-between">
                <div className="flex-[0.9] flex flex-col sm:flex-row gap-[20px] justify-between">
                  <div>
                    <img
                      src={item.image}
                      alt=""
                      style={{
                        height: "100px",
                        width: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </div>

                  <div>
                    <p className="font-bold mb-[10px]">{item.title}</p>
                    <p>Ksh. {item.price}</p>
                  </div>
                </div>

                <div>
                  <p
                    className="text-orange-800 text-xl cursor-pointer"
                    onClick={() => handleRemoveFromCart(item._id)}
                  >
                    <AiOutlineCloseCircle
                      title="Remove From Cart"
                      className="text-2xl"
                    />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* shipping details */}
        {rentals.length > 1 && (
          <>
            <h2 className="mb-[1em]">CHOOSE A MODE BELOW</h2>
            <div className=" mb-[15px]  sm:mt-[80px] flex justify-between items-center">
              <p
                className="text-teal-800 cursor-pointer"
                onClick={() => {
                  setDelivery(true);
                  setPickUp(false);
                }}
              >
                Delivery
              </p>
              <p
                className="text-teal-800 cursor-pointer"
                onClick={() => {
                  setPickUp(true);
                  setDelivery(false);
                }}
              >
                Pick Up
              </p>
            </div>
          </>
        )}
        {/* options */}
        {delivery && (
          <div className="mt-[20px]">
            <div>
              <p className="text-sm">Before Shipping Ksh : {totalPrice}</p>
              <p className="text-sm">
                Total After Shipping :{" "}
                {delivery ? totalPrice + 800 : <>Ksh.{totalPrice}</>}
              </p>
            </div>

            <form className="mt-[15px]" onSubmit={handleOrder}>
              <div className="flex flex-col gap-[10px] mb-[20px]">
                <label htmlFor="address" className="text-lg text-zinc-600">
                  Please Enter Delivery Address
                </label>
                <textarea
                  name="address"
                  id="address"
                  cols="30"
                  rows="3"
                  placeholder="Be as specific as possible"
                  className="bg-transparent border border-zinc-400 rounded-xl p-[6px] outline-none"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                ></textarea>
              </div>
              <div className="flex flex-col gap-[10px] mb-[20px]">
                <label htmlFor="phone" className="text-lg text-zinc-600">
                  Phone Number To Call
                </label>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  name="phone"
                  id="phone"
                  className="bg-transparent border border-zinc-400 rounded-xl p-[6px] outline-none"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="mb-[20px]">
                <button
                  className="bg-teal-800 w-full p-[10px] text-zinc-200 rounded-md"
                  onSubmit={handleOrder}
                >
                  Order Now
                </button>
              </div>
            </form>
          </div>
        )}
        {pickUp && (
          <div className="my-[20px]">
            <p className="text-sm my-[10px]">Total Ksh : {totalPrice}</p>

            <p className="mb-[10px]">
              You are required to show this id at our pick up stations
            </p>
            <p>#45545232e323323545</p>
            <div className="mt-[20px]">
              <p
                className="bg-teal-800 w-full p-[10px] text-center text-zinc-200 rounded-md cursor-pointer"
                onClick={activateBooking}
              >
                Book Now
              </p>
            </div>
          </div>
        )}
        {/*  */}
      </div>
      {/*  */}
    </div>
  );
};

export default Checkout;
