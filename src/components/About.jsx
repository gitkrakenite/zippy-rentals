import { AiOutlineArrowRight } from "react-icons/ai";

const About = () => {
  return (
    <div>
      {/* wrapper */}
      <div className="flex flex-col lg:flex-row px-[10px] md:px-[3em] xl:px-[5em] mt-[4em] items-center gap-[20px] pb-[1em]">
        {/* imgside */}
        <div className="flex-[0.5]">
          <img
            src="https://images.pexels.com/photos/11194510/pexels-photo-11194510.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="rounded-md"
          />
        </div>
        {/* textside */}
        <div className="flex-[0.5]">
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h2 className="text-2xl pb-[20px]" style={{ fontWeight: 700 }}>
              A Group Of Amazing People
            </h2>
            <p>
              Who collect amazing cars, service them and put them out for rent.
              Everyone deserves to feel the experience of driving high-end cars,
              we offer you the ability to drive your dream car without going
              through the headache of purchasing it. Whether you are going for a
              party, business meeating or gym, we have the perfect car for you.
            </p>
            <div className="py-[20px] flex items-center gap-[10px] cursor-pointer hover:text-emerald-700">
              <p> Contact us today.</p>
              <AiOutlineArrowRight className="text-xl" />
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      {/*  */}
    </div>
  );
};

export default About;
