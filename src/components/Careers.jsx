import "./careers.css";
const Careers = () => {
  return (
    <div className=" px-[10px] md:px-[3em] xl:px-[5em] mt-[4em]" id="careers">
      {/* wrapper */}
      <div>
        <h2 className="mb-[30px] text-2xl text-center text-teal-700">
          Why Join Us
        </h2>

        <div className="whyWrap mb-[30px]">
          <div>
            <img
              src="https://images.pexels.com/photos/7551442/pexels-photo-7551442.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>Be Part Of An Amazing Team</p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/5725432/pexels-photo-5725432.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>Flexible Working Hours | hybrid</p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/277124/pexels-photo-277124.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>Competitive Skills </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>Competitive Salary and benefits </p>
          </div>
        </div>

        <h2 className="mb-[20px] text-2xl">
          Current Openings in Nairobi, Kenya
        </h2>
        <p>Currently, we have no job openings, please check back later.</p>
      </div>
      {/*  */}
    </div>
  );
};

export default Careers;
