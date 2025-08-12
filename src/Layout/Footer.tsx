import { ReactComponent as Map } from "../assets/svgs/map.svg";
import { ReactComponent as HomeDiv6 } from "../assets//svgs/homeDiv4.svg";
import { ReactComponent as GreenPlane } from "../assets/svgs/greenPlane.svg";
import { ReactComponent as Facebook } from "../assets/svgs/facebook.svg";
import { ReactComponent as Insta } from "../assets/svgs/insta.svg";
import { ReactComponent as Twitter } from "../assets/svgs/twitter.svg";
import { ReactComponent as Linkedin } from "../assets/svgs/linkedin.svg";
import { ReactComponent as Correct } from "../assets/svgs/correct.svg";
import { ReactComponent as OnlyArrow } from "../assets/svgs/onlyArrow.svg";
import { ReactComponent as Send } from "../assets/svgs/send.svg";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSend = () => {
    setEmail("");
  }
  return (
    <div className="relative bg-darkGReen h-full xl:h-[669px] max-w-full w-full px-6 xl:px-0">
      <div className="">
        <div className="contain max-w-full flex justify-between flex-col lg:flex-row pb-[30px]  overflow-visible">
          <div className="flex gap-[30px] pt-12">
            <div className="bg-lightGreen w-[80px] h-[80px] p-6 rounded-full mb-[17px]">
              <HomeDiv6 className="" />
            </div>
            <p className="max-w-[330px] text-lg sm:text-3xl font-semibold font-jakarta text-white ">
              Need any support for tour and visa?
            </p>
          </div>
          <div className=" hidden lg:block w-[1px] bg-textGray mt-[30px]"></div>
          <div className="flex gap-[30px] pt-5 sm:pt-12">
            <div className="bg-lightGreen w-[80px] h-[80px] p-6 rounded-full mb-[17px]">
              <HomeDiv6 className="" />
            </div>
            <p className="max-w-[330px] text-lg sm:text-3xl font-semibold font-jakarta text-white py-1">
              Are you ready for get started travelling?
            </p>
          </div>
        </div>

        <hr className="hidden xl:block border border-textGray" />

        <div className="contain grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 pt-8 sm:pt-20 md:pb-24 ">
          <div className="flex flex-col">
            <div className="flex gap-[10px] items-center pb-[30px]">
              <GreenPlane />
              <p className="text-[32px] font-jakarta font-bold text-white">
                RouteX
              </p>
            </div>
            <p className="text-white text-base font-jakarta max-w-[300px] pb-5 leading-8">
              Corporate business typically refers to large-scale mansola it
              enterprises or organizat
            </p>
            <div className="flex justify-between max-w-[128px] ">
              <Facebook className="cursor-pointer" />
              <Insta className="cursor-pointer" />
              <Twitter className="cursor-pointer" />
              <Linkedin className="cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-white text-[22px] font-jakarta pb-[35px]">
              Services
            </p>
            <div className="flex gap-[15px] pb-[10px] items-center">
              <Correct />
              <p className="text-base text-white font-jakarta cursor-pointer">
                Mistakes To Avoid
              </p>
            </div>
            <div className="flex gap-[15px] pb-[10px] items-center">
              <Correct />
              <p className="text-base text-white font-jakarta cursor-pointer">
                Your Startup
              </p>
            </div>
            <div className="flex gap-[15px] pb-[10px] items-center">
              <Correct />
              <p className="text-base text-white font-jakarta cursor-pointer">
                Mistakes To Avoid
              </p>
            </div>
            <div className="flex gap-[15px] pb-[10px] items-center">
              <Correct />
              <p className="text-base text-white font-jakarta cursor-pointer">
                Knew About Fonts
              </p>
            </div>
          </div>

          <div className="flex flex-col pt-10 md:pt-0">
            <p className="font-bold text-white text-[22px] font-jakarta pb-[35px]">
              Useful Link
            </p>
            <div className="flex gap-[15px] pb-[10px] items-center">
              <OnlyArrow />
              <p className="text-base text-white font-jakarta cursor-pointer">
                Latest News
              </p>
            </div>
            <div className="flex gap-[15px] pb-[10px] items-center">
              <OnlyArrow />
              <p className="text-base text-white font-jakarta cursor-pointer">
                Careers
              </p>
            </div>
            <div className="flex gap-[15px] pb-[10px] items-center">
              <OnlyArrow />
              <p className="text-base text-white font-jakarta cursor-pointer">
                General Inquiries
              </p>
            </div>
            <div className="flex gap-[15px] pb-[10px] items-center">
              <OnlyArrow />
              <p className="text-base text-white font-jakarta cursor-pointer">
                Case Studies
              </p>
            </div>
          </div>

          <div>
            <p className="text-[22px] font-bold font-jakarta text-white pb-[35px] pt-10 xl:pt-0">
              Subscribe Our Newsletter
            </p>
            <p className="text-base font-jakarta pb-[30px] text-white max-w-[299px]">
              Corporate business typically refers to large-scale mansola it.
            </p>
            <div className="relative max-w-[358px] h-[58px]">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-black text-white w-full h-full rounded-full pl-[25px] pr-[65px] outline-none"
                placeholder="Enter Email"
                type="email"
              />

              <button
                title="send"
                type="button"
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-lightGreen w-[58px] h-[58px] rounded-full flex items-center justify-center cursor-pointer"
                onClick={handleSend}
              >
                <Send />
              </button>
            </div>
          </div>
        </div>
        <hr className="hidden xl:block border border-textGray" />
        <div className="contain flex justify-between flex-col sm:flex-row gap-5 pt-[30px] pb-14 xl:pb-0">
          <p className="text-base font-jakarta text-white cursor-pointer">
            © Yoursitename 2024 | All Rights Reserved
          </p>
          <div className="flex gap-[39px] font-jakarta text-base text-white ">
            <p className="cursor-pointer">Trams & Condition</p>
            <p className="cursor-pointer">Privacy Policy</p>
            <p className="cursor-pointer">Contact Us</p>
          </div>
        </div>
      </div>
      <div className=" hidden xl:block absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-48 left-0 right-0 flex justify-center">
          <Map className="w-full max-w-full h-full 3xl:pl-36" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
