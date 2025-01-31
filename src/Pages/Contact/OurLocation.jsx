import SectionTitle from "../../Componants/SectionTitle/SectionTitle";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";

const OurLocation = () => {
  return (
    <div>
      <SectionTitle subHeading="Visit Us" Heading="Our Location"></SectionTitle>
      {/* Our location section */}
      <div className="grid md:grid-cols-3 gap-10 mb-20">
        <div className="relative mb-20 flex justify-center items-center">
          <div className="bg-[#D1A054] py-3 w-full flex justify-center items-center text-white">
            <FaPhoneVolume></FaPhoneVolume>
          </div>
          <div className="absolute mx-auto w-[85%] top-8 bg-[#F3F3F3] text-center py-6 text-[#000000] -z-10  h-28">
            <h2 className="uppercase">Phone</h2>
            <p>+38 (012) 34 56 789</p>
          </div>
        </div>
        <div className="relative mb-20  flex justify-center items-center">
          <div className="bg-[#D1A054] py-3 w-full flex justify-center items-center text-white">
            <FaLocationDot></FaLocationDot>
          </div>
          <div className="absolute mx-auto w-[85%] top-8 bg-[#F3F3F3] text-center py-6 text-[#000000] -z-10  h-28">
            <h2 className="uppercase">Address</h2>
            <p>+38 (012) 34 56 789</p>
          </div>
        </div>
        <div className="relative mb-20  flex justify-center items-center">
          <div className="bg-[#D1A054] py-3 w-full flex justify-center items-center text-white">
            <FaClock></FaClock>
          </div>
          <div className="absolute mx-auto w-[85%] top-8 bg-[#F3F3F3] text-center py-6 text-[#000000] -z-10 h-28">
            <h2 className="uppercase">working Hours</h2>
            <p>
              Mon - Fri: 08:00 - 22:00 <br />
              Sat - Sun: 10:00 - 23:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLocation;
