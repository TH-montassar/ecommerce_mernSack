import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assert/image/logo.svg";
import facebook from "../../assert/image/icons8-facebook.svg";
import Instagram from "../../assert/image/insta.svg";
import twitter from "../../assert/image/icons8-twitter.svg";
import linkedin from "../../assert/image/icons8-linkedin.svg";

const Footer = () => {
  return (
    <footer className="bg-Primary flex flex-col w-full px-16 py-3 gap-y-1">
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center ">
          <div>
            <Link to="/">
              <img className="max-w-lg" src={logo} alt="montaProduct" />
            </Link>
          </div>

          <div className="text-white flex flex-col gap-2">
            <h1>MT TRANCPORTATION</h1>
            <p className="max-w-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem, mollitia quasi. Eveniet praesentium aliquam nam
              aut possimus quia soluta totam ullam tempora. Quas itaque ad
              incidunt voluptatibus? Perspiciatis, molestiae dolor. Modit maxime
              officia
            </p>
          </div>
        </div>
        <div className="grid gap-1 lg:grid-cols-4 grid-cols-2   text-white ">
          <div className="flex flex-col gap-2">
            <h1>home</h1>
            <div>
              <div>category</div>
              <div>About us</div>
              <div>Help</div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1>OUR PRODUCT</h1>
            <div>
              <div>cars</div>
              <div>Motorcycles</div>
              <div>bicycles</div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1>About us</h1>
            <div>
              <div>Our story</div>
              <div>Team</div>
              <div>Careers</div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1>Contact us</h1>
            <div className="max-w-[13rem]">
              Short description goes gere here herehere
            </div>

            <div className="flex gap-2 ">
              <Link to="">
                <img className="max-w-[2rem]" src={facebook} alt="facebook" />
              </Link>
              <Link to="">
                <img className="max-w-[2rem]" src={Instagram} alt="linkedin" />
              </Link>
              <Link to="">
                <img className="max-w-[2rem]" src={twitter} alt="instagram" />
              </Link>
              <a
                href="https://www.linkedin.com/in/themri-montassar-160042149/"
                // target="_blank"
              >
                <img className="max-w-[2rem]" src={linkedin} alt="twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-1 grid-flow-col text-white text-xs place-items-center">
        <p className="w-fit">Compyright 2022</p>
        <p className="w-fit">Privacy Policy </p>
        <p className="w-fit">Terms & Conditions </p>
      </div>
    </footer> 
  );
};

export default Footer;
