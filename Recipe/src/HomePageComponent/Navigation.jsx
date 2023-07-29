import React from "react";
import { Link } from "react-router-dom";
import { SiFoodpanda } from "react-icons/si";
import ScrollSpy from "react-scrollspy-navigation";
import Lightmood from "../meal/Lightmood";
import { useContextProvider } from "../LightDark/DarkcontextProvider";

const Nav = () => {
  const { darkMode, handleThemeSwitch } = useContextProvider();
  return (
    <div>
      <div className=" flex justify-between px-[200px] bg-[#F97B22]">
        <Link>
          <div className="py-1">
            <SiFoodpanda className="text-3xl " />
          </div>
        </Link>
        <div className="my-auto">
          <ul className=" flex gap-5  align-middle justify-around">
            <ScrollSpy>
              <a href="#box1" ref={React.createRef()}>
                <li>
                  <h2 className="">Home</h2>
                </li>
              </a>
              <a href="#box2" ref={React.createRef()}>
                <li>
                  <h2 className="">Why choose us</h2>
                </li>
              </a>
              <a href="#box3" ref={React.createRef()}>
                <li>
                  <h2 className="">About us</h2>
                </li>
              </a>
              <a href="#box4" ref={React.createRef()}>
                <li>
                  <h2 className="">Testimonials</h2>
                </li>
              </a>
              <button onClick={handleThemeSwitch}>
                <Lightmood />
              </button>
            </ScrollSpy>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
