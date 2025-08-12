import { NavLink, useLocation } from "react-router-dom";
import Button from "../Components/Button";
import { ReactComponent as HeaderLogo } from "../assets/svgs/headerLogo.svg";
import { ReactComponent as DownArrow } from "../assets/svgs/downArrow.svg";
import { ReactComponent as RightArrow } from "../assets/svgs/rightArrow.svg";
import { useState } from "react";
import { Images } from "../assets/pngs";

const Header = () => {
    const [isButtonOpen, setIsButtonOpen] = useState(false);
   

  const location = useLocation();
  const isHomePage = location.pathname === "/";

const toggleButton = () => {
   setIsButtonOpen(!isButtonOpen);
 };

  const navigationList = [
    {
      label: "HOME",
      path: "/",
    },
    {
      label: "ABOUT US",
      path: "/about",
    },
    {
      label: "SERVICE",
      path: "/service",
    },
   
  ];
  return (
    <header
      className={` sticky top-0 left-0 w-full z-50 py-[30px] ${
        isHomePage ? "bg-bgGreen" : "bg-white"
      }`}
    >
      <div className="container h-[30px] flex justify-between items-center ">
        <HeaderLogo />
        <div className="hidden lg:flex gap-6 text-darkGReen font-bold text-[15px] font-jakarta">
          {navigationList.map((item) => (
            <>
              <NavLink
                className="flex items-center gap-1"
                key={item.label}
                to={item.path}
              >
                {item.label}
                <DownArrow />
              </NavLink>
            </>
          ))}
        </div>
        <Button
          className="px-7 hidden lg:flex font-jakarta font-semibold text-sm"
          type="button"
          variant="primary"
          endIcon={<RightArrow />}
        >
          Get An Appointment
        </Button>
        <div className="block lg:hidden relative">
          <img alt="hamburger" src={Images.hamburger} onClick={toggleButton} />

          {isButtonOpen && (
            <div className="bg-bgGreen absolute top-16 z-50 right-0 w-40 px-3 py-2 rounded-lg shadow-lg flex flex-col space-y-2">
              {navigationList.map((item) => (
                <NavLink
                  key={item.label}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-darkGReen text-white rounded-3xl px-3 py-1"
                      : "bg-bgGreen rounded-3xl px-3 py-1"
                  }
                  to={item.path}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
