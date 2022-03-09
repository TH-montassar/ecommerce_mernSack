import React from "react";
import logo from "../../assert/image/logo.svg";
import search from "../../assert/image/iconserch.svg";
import cart from "../../assert/image/cart.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-Primary flex w-full justify-between px-16 py-3 fixed top-0 z-50 items-center flex-wrap">
      <Link to="/">
        <img className="max-w-lg" src={logo} alt="montaProduct" />
      </Link>

      <div className="relative">
        
        <input
          className="w-80 outline-none rounded-xl px-6 py-1.5"
          type="search"
          name=""
          id=""
          placeholder="Searsh here"
        />
        {/**make samthig in senter top-[calc(50%-14px)] */}
        <Link className="absolute right-2 top-[calc(50%-14px)]" to="/search">
          <img src={search} alt="search" />
        </Link>
      </div>

      <nav className="text-white flex flex-wrap gap-8 ">
        <div className="hover:text-gray-500">
          <Link to="/">Home</Link>
        </div>

        <Link
          className="hover:text-gray-500 border border-transparent focus-within:border-white border-solid"
          to="#Category"
        >
          Category
        </Link>

        <div className="hover:text-gray-500">
          {" "}
          <Link to="#About us">About us</Link>
        </div>
        <div className="hover:text-gray-500 ">
          {" "}
          <Link to="#About us">About us</Link>
        </div>
        <div className="hover:text-gray-500">
          {" "}
          <Link to="#help">help</Link>
        </div>
      </nav>
      <img className="w-8" src={cart} alt="cart" />
      <div className="flex gap-2">
        <Link to="/login">
          <button className="bg-Info hover:bg-infoDark text-white font-bold py-2 px-4 rounded-full">
            sign in
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-Info hover:bg-infoDark text-white font-bold py-2 px-4 rounded-full">
            sign up
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
