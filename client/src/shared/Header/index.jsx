import React, { useState } from "react";
import logo from "../../assert/image/logo.svg";
import search from "../../assert/image/iconserch.svg";

import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [Query, setQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const goToSearch = (e) => {
    const queries = new URLSearchParams(location.search);

    let queryString = "";
		const regex = /q=.*$/i;
		if (location.search.search("q=") !== -1) {
			queryString = location.search.replace(regex, `q=${Query}`);
		} else {
			queryString += location.search ? location.search : "?" + `&q=${Query}`;
		}

    navigate(`/search${queryString}`);
  };

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
          // onChange={(e) => setQuery(e.target.value)}    te5o valeur mta3 input wo t5abih fi state
          onChange={(e) => setQuery(e.target.value)}
          //te5o valour m state   wo tafichih  value={Query}
          value={Query}
          placeholder="Searsh here"
        />
        {/**make samthig in senter top-[calc(50%-14px)] */}
        <button
          onClick={(e) => goToSearch(e)}
          type="button"
          className="absolute right-2 top-[calc(50%-14px)]"
        >
          <img src={search} alt="search" />
        </button>
      </div>

      <nav className="text-white flex flex-wrap gap-8 ">
        <div className="hover:text-gray-500">
          <Link
            to="/"
            className="hover:text-gray-500 border border-transparent focus-within:border-white border-solid"
          >
            Home
          </Link>
        </div>

        <Link
          className="hover:text-gray-500 border border-transparent focus-within:border-white border-solid"
          to="/categories"
        >
          Category
        </Link>

        <div className="hover:text-gray-500 border border-transparent focus-within:border-white border-solid">
          {" "}
          <Link to="#About us">About us</Link>
        </div>
        <div className="hover:text-gray-500 border border-transparent focus-within:border-white border-solid">
          {" "}
          <Link to="#About us">About us</Link>
        </div>
        <div className="hover:text-gray-500 border border-transparent focus-within:border-white border-solid">
          {" "}
          <Link
            to="#help"
            className="hover:text-gray-500 border border-transparent focus-within:border-white border-solid"
          >
            help
          </Link>
        </div>
      </nav>
      <Link to="/Cart" className="relative cursor-pointer">
        <span className="rounded-full  font-bold text-xs absolute  bottom-5 px-1  bg-Success  right-[calc(50%-15px)]">
          1
        </span>
        <i className="fa-solid fa-cart-shopping text-2xl text-white"></i>
      </Link>

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
