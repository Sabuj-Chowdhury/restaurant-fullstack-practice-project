import { FaPhoneVolume } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import SectionTitle from "../../../components/shared/SectionTitle/SectionTitle";

const Location = () => {
  return (
    <div>
      <div className="mb-10">
        <SectionTitle
          heading="our location"
          subHeading="Visit Us"
        ></SectionTitle>
      </div>
      <div className=" grid md:grid-cols-3 grid-cols-1  md:gap-10 gap-5 mb-10">
        <div>
          <div>
            <div className="bg-[#D1A054] text-white text-2xl flex justify-center items-center px-36 py-5">
              <FaPhoneVolume />
            </div>
            <div className="bg-[#F3F3F3] p-10 py-14 w-11/12 mx-auto">
              <h3 className="uppercase text-lg text-black text-center ">
                phone
              </h3>
              <p className="text-center text-sm">+38 (012) 34 56 789</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="bg-[#D1A054]  text-white text-2xl flex justify-center items-center px-36 py-5">
              <IoLocationOutline />
            </div>
            <div className="bg-[#F3F3F3] p-10 py-14 w-11/12 mx-auto">
              <h3 className="uppercase text-lg text-black text-center">
                ADDRESS
              </h3>
              <p className="text-center text-sm">+38 (012) 34 56 789</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="bg-[#D1A054]  text-white text-2xl flex justify-center items-center px-36 py-5">
              <GoClockFill />
            </div>
            <div className="bg-[#F3F3F3] p-10 py-12 w-11/12 mx-auto">
              <h3 className="uppercase text-lg text-black text-center">
                WORKING HOURS
              </h3>
              <p className="text-center text-sm">Mon - Fri: 08:00 - 22:00</p>
              <p className="text-center text-sm">Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
