import { useState } from "react";
import plus from "../assets/plus-svgrepo-com.svg";
const Header = () => {
  const [reveal, setReveal] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <div className="flex md:h-fit flex-col h-screen">
      <header
        className="w-full bg-lightGray lg:bg-white px-3 md:px-8  py-2 flex 
      justify-between items-center mx-auto"
      >
        <div className="flex">
          <h2 className="lg:text-[3.4rem] text-[2.7rem] font-bold">Webisoft</h2>
          <ul className="hidden relative lg:flex ml-6 text-xl space-x-4 items-center">
            <li className="flex items-center">
              <a href="services" className="relative group">
                <span className="bg-black h-[0.1px] w-0 group-hover:w-full duration-500 absolute bottom-0" />
                Services
              </a>
              <div
                className={`ml-2 mt-1 duration-500 cursor-pointer ${
                  reveal && "rotate-[315deg]"
                }`}
                onClick={() => {
                  setReveal(!reveal);
                }}
              >
                <img width="10rem" src={plus} />
              </div>
              <ul
                className={`${
                  reveal ? "block" : "hidden"
                } absolute w-[15rem] text-[1rem] space-y-4 top-16 shadow-xl p-6`}
              >
                <li className="">
                  <a href="allservice">All Services</a>
                </li>
                <li>
                  <a href="webdev">Web Development</a>
                </li>
                <li>
                  <a href="mobiledev">Mobile Development</a>
                </li>
                <li>
                  <a href="mobiledev">SaaS Development</a>
                </li>
                <li>
                  <a href="mobiledev">Blockchain Development</a>
                </li>
                <li>
                  <a href="mobiledev">Hubspot Development</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="projects" className="relative group">
                <span className="bg-black h-[0.1px] w-0 group-hover:w-full duration-500 absolute bottom-0" />
                Projects
              </a>
            </li>
            <li>
              <a href="fr" className="relative group">
                <span className="bg-black h-[0.1px] w-0 group-hover:w-full duration-500 absolute bottom-0" />
                FR
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <button className="hidden lg:block bg-primary px-10 text-sm py-3 text-white">
            Book a meeting
          </button>
          {/* Hamburger menu */}
          <div
            onClick={() => {
              setToggleNav(!toggleNav);
            }}
            className="flex flex-col cursor-pointer group gap-y-[0.4rem] items-end lg:hidden"
          >
            <div className="h-[0.2rem] w-6 group-hover:w-8 duration-500 bg-darkGray" />
            <div className="h-[0.2rem] w-8 bg-darkGray" />
            <div className="h-[0.2rem] w-4 group-hover:w-8 duration-500 bg-darkGray" />
          </div>
        </div>
      </header>
      {/* Mobile Menu */}
      <div
        className={`w-screen ${
          toggleNav ? "left-0" : "left-full"
        } md:hidden flex flex-col top-[8%] h-[92vh] bg-lightGray fixed duration-500 pt-8 px-3 md:px-8`}
      >
        <ul className="pb-6">
          <li className="border-b-2 cursor-pointer border-black py-2">
            <a
              href="#"
              className="text-4xl font-normal hover:text-white hover:ml-6 duration-500"
            >
              Services
            </a>
          </li>
          <li className="border-b-2 cursor-pointer border-black py-2">
            <a
              href="#"
              className="text-4xl hover:text-white hover:ml-6 duration-500"
            >
              Project
            </a>
          </li>
          <li className="border-b-2 cursor-pointer border-black py-2">
            <a
              href="#"
              className="text-4xl hover:text-white hover:ml-6 duration-500"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="pt-6">
          <h3>Utilities</h3>
        </div>
        <ul>
          <li>
            <a href="#" className="relative group">
              <span className="bg-black h-[0.1px] w-0 group-hover:w-full duration-500 absolute bottom-0" />
              FR
            </a>
          </li>
          <li>
            <a href="#" className="relative group">
              <span className="bg-black h-[0.1px] w-0 group-hover:w-full duration-500 absolute bottom-0" />
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="relative group">
              <span className="bg-black h-[0.1px] w-0 group-hover:w-full duration-500 absolute bottom-0" />
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="#" className="relative group">
              <span className="bg-black h-[0.1px] w-0 group-hover:w-full duration-500 absolute bottom-0" />
              Policies
            </a>
          </li>
        </ul>
        {/* subfooter */}
        <div className="fixed bottom-0">
          <ul>
            <li>
              <a href="#">+1 514-874-3224</a>
            </li>
            <li>
              <a href="#">info@webisoft.com</a>
            </li>
            <li>
              <a href="#">460 Saint-Catherine W. #305, Montreal</a>
            </li>
          </ul>
          {/* Icons */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
