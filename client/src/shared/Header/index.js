import React from "react";
import logo from "../../assert/image/logo.svg";
import search from "../../assert/image/iconserch.svg";
import cart from "../../assert/image/cart.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-Primary flex w-full justify-between px-16 py-3 fixed z-50 items-center flex-wrap">
<Link to="/">
<img className="max-w-lg" src={logo} alt="montaProduct" />


</Link>
     
      <div className="bg-white flex py-1 rounded-xl px-2">
        <input
          className="w-64"
          type="search"
          name=""
          id=""
          placeholder="Searsh here"
        />
        <Link to="/search">
          <img src={search} alt="searsh" />
        </Link>
      </div>

      <nav className="text-white flex flex-wrap gap-8 ">
        <div className="hover:text-gray-500">
          <Link to="/">Home</Link>
        </div>
        {/* //! focus not working */}
        <div className="hover:text-gray-500 border border-transparent focus:border-white">
          <Link to="#Category">Category</Link>
        </div>
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
      <button className="bg-Info hover:bg-infoDark text-white font-bold py-2 px-4 rounded-full">
        Button
      </button>
    </header>
  );
};

export default Header;
