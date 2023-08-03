import { useState } from "react";
import Hello from "../assets/hello.png";

const Contact = () => {
  const [msgSent, setMsgSent] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div>
      {/* wrapper */}
      <div className="flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[10px] px-[10px] md:px-[3em] xl:px-[5em] mt-[4em] pb-[1em] justify-between">
        {/* form */}
        <div className=" flex-1 w-full lg:flex-[0.4]">
          {msgSent ? (
            <div>
              <div className="flex justify-center">
                <img src={Hello} alt="" />
              </div>
              <div>
                <p className="text-center my-[15px] font-bold text-2xl text-zinc-700">
                  Hello there {fullName && fullName}
                </p>
                <div className="text-center">
                  <p>We have received Your message.</p>
                  <p>We will get back to you via email</p>
                </div>
              </div>
            </div>
          ) : (
            <form action="">
              <div className="flex flex-col gap-[10px] mb-[20px]">
                <label htmlFor="fullname">Enter Your Full Name</label>
                <input
                  type="text"
                  placeholder="name"
                  id="fullname"
                  className="bg-transparent border-2 border-zinc-500 p-[5px] rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-[10px] mb-[20px]">
                <label htmlFor="email">Enter Your Email Address</label>
                <input
                  type="email"
                  placeholder="email address"
                  id="email"
                  className="bg-transparent border-2 border-zinc-500 p-[5px] rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-[10px] mb-[20px]">
                <label htmlFor="message">Let Us Know What You Need</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="3"
                  placeholder="your message"
                  className="bg-transparent border-2 border-zinc-500 p-[5px] rounded-lg"
                ></textarea>
              </div>
              <div className="text-center">
                <p className="">
                  {" "}
                  <span className="bg-teal-700 px-[25px] py-[10px] text-zinc-300 rounded-lg cursor-pointer">
                    Send Message
                  </span>
                </p>
              </div>
            </form>
          )}
        </div>
        {/* google maps */}
        <div className="flex-[0.6] flex justify-end w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.24137994176!2d37.050757149999995!3d-1.4388269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f77034419022f%3A0x6f243216f54aaac2!2sDaystar%20University-Athi%20River%20Campus!5e0!3m2!1sen!2ske!4v1691082698297!5m2!1sen!2ske"
            className=" w-full lg:w-[80%]"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Contact;
