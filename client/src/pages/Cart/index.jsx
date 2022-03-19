import React from "react";
import { Link } from "react-router-dom";

import favorite from "../../assert/image/fover.svg";
import car from "../../assert/image/v.jpg";

const Cart = () => {
  return (
    <section className="pb-10">
      <div className="text-gray-400">Home/Search/Category/product</div>
      <div className="flex justify-between">
        <div className="text-2xl font-bold"> Cart </div>
        <button className="bg-white hover:bg-gray-100  font-semibold py-2 px-4 border-gray-400 rounded shadow">
          Order
        </button>
      </div>

      {/* ------- */}
      <div className="flex gap-10  pt-10">
        {/* ------- */}
        <div className="w-2/3 ">
          <div className="flex gap-48 pl-10 py-5 items-center ">
            <div>Product</div>
            <div> Price</div>
            <div> Quantity</div>
            <div> Total </div>
          </div>
          <div className="my-5  flex justify-between items-center h-20 px-5 shadow-md rounded-md">
            <div className="flex h-full gap-3 items-center">
              <img
                className="h-full  object-contain rounded-md"
                src={car}
                alt="car"
              />
              <div className=" flex flex-col">
                <div>Motos</div>
                <div>Ref:542sjd57d</div>
              </div>
            </div>
            <div> 156255 TND</div>
            <div className="flex justify-between items-center gap-2">
              <div className="rounded-full w-5 h-5  bg-Warning flex justify-center items-center">
                <i className="fa-solid fa-minus"></i>
              </div>
              <div className=" px-10  shadow-md">02</div>
              <div className="rounded-full w-5 h-5  bg-Success flex justify-center items-center">
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <div>8844444 TND</div>
            <i className="fa-solid fa-trash text-Danger"></i>
          </div>

          <div className="flex justify-between items-baseline">
            <div> You have promo code ?</div>
            <div>
              <input
                className="w-64 py-2 outline-none border-y-2 border-l-2 "
                type="number"
                name="codePromo"
                id="codePromo"
                placeholder=" Please enter promo code here"
              />{" "}
              <button className="bg-Info    hover:bg-infoDark text-white font-bold py-3 px-10 rounded-r-md text-xs">
                Apply discount
              </button>
            </div>

            <div>
              Total Price :{" "}
              <span className="text-xl font-bold"> 350000 TND</span>
            </div>
          </div>
          <div className="flex items-center justify-end pt-5">
            {" "}
            <span className="text-gray-400"> Empty cart</span>{" "}
            <i className="fa-solid fa-trash text-Danger"></i>{" "}
          </div>
        </div>
        {/* --------------------------------------------- */}
        <div className="w-1/3 shadow-md">
          <div className="flex justify-center text-3xl">Command form</div>
          <div className="w-full">
            {/* --------------------------------------------- */}

            <form className=" pl-2 w-full">
              <div className="pb-16 w-full relative">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 pb-2"
                  htmlFor="name"
                >
                  Name : <span className="text-Danger">*</span>
                </label>
                <i className="fa-solid fa-user  absolute right-3  top-[calc(50%-3px)]"></i>
                <input
                  className="float-right pl-5 shadow   rounded-full appearance-none border w-[calc(100%-50px)] py-2  text-gray-700 leading-tight outline-none focus:shadow-outline  focus:border-Primary "
                  id="name"
                  type="text"
                  placeholder="name"
                />
              </div>
              <div className="pb-16 w-full relative">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 pb-2"
                  htmlFor="lastName"
                >
                  last Name : <span className="text-Danger">*</span>
                </label>
                <i className="fa-solid fa-user  absolute right-3  top-[calc(50%-3px)]"></i>
                <input
                  className="float-right pl-5 shadow   rounded-full appearance-none border w-[calc(100%-50px)] py-2  text-gray-700 leading-tight outline-none focus:shadow-outline  focus:border-Primary "
                  id="lastName"
                  type="text"
                  placeholder="last name"
                />
              </div>
              <div className="pb-16 w-full relative">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 pb-2"
                  htmlFor="address"
                >
                  Address 1 : <span className="text-Danger">*</span>
                </label>
                <i className="fa-solid fa-location-pin absolute right-3  top-[calc(50%-3px)]"></i>
                <input
                  className="float-right pl-5 shadow   rounded-full appearance-none border w-[calc(100%-50px)] py-2  text-gray-700 leading-tight outline-none focus:shadow-outline  focus:border-Primary "
                  id="address"
                  type="text"
                  placeholder="address 1"
                />
              </div>
              <div className="pb-16 w-full relative">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 pb-2"
                  htmlFor="address2"
                >
                  address 2 : <span className="text-Danger">*</span>
                </label>
                <i className="fa-solid fa-location-pin  absolute right-3  top-[calc(50%-3px)]"></i>
                <input
                  className="float-right pl-5 shadow   rounded-full appearance-none border w-[calc(100%-50px)] py-2  text-gray-700 leading-tight outline-none focus:shadow-outline  focus:border-Primary "
                  id="address2"
                  type="text"
                  placeholder="address2"
                />
              </div>
              <div className="pb-16 w-full relative">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 pb-2"
                  htmlFor="phone"
                >
                  phone : <span className="text-Danger">*</span>
                </label>
                <i className="fa-solid fa-phone  absolute right-3  top-[calc(50%-3px)]"></i>
                <input
                  className="float-right pl-5 shadow   rounded-full appearance-none border w-[calc(100%-50px)] py-2  text-gray-700 leading-tight outline-none focus:shadow-outline  focus:border-Primary "
                  id="phone"
                  type="tel"
                  placeholder="phone"
                />
              </div>
              <div className="pb-16 w-full relative">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 pb-2"
                  htmlFor="email"
                >
                  email : <span className="text-Danger">*</span>
                </label>
                <i className="fa-solid fa-envelope  absolute right-3  top-[calc(50%-3px)]"></i>
                <input
                  className="float-right pl-5 shadow   rounded-full appearance-none border w-[calc(100%-50px)] py-2  text-gray-700 leading-tight outline-none focus:shadow-outline  focus:border-Primary "
                  id="email"
                  type="email"
                  placeholder="email"
                />
              </div>

              {/* --------------------------------------------- */}

              <button type="submit" className="bg-Info  mb-2 flex mx-auto	hover:bg-infoDark text-white font-bold py-3 px-10 rounded-md text-xs">
                Checkout
              </button>
            </form>
          </div>
        </div>

        {/* ------- */}
      </div>
      {/* ------- */}
      <div>
        <button className="bg-white hover:bg-gray-100 font-semibold py-2 px-4 border-gray-400 rounded shadow">
          <i className="fas fa-undo pr-2"></i>
          Continue shopping
        </button>
      </div>
      <div className="w-max mx-auto text-xl font-semibold py-10 ">
        YOU MAY ALSO LIKE
      </div>

      <div className=" grid grid-cols-5 gap-12 pt-4 ">
        {/* ----------------------------------------------- */}
        <div className="h-72 max-w-[15rem] relative shadow-2xl rounded-2xl border hover:border-black ">
          <img src={favorite} alt="like" className="absolute " />
          <Link to="/details">
            <img
              className="rounded-t-2xl h-1/2 ease-in-out w-full object-contain"
              src={car}
              alt=""
            />
          </Link>

          <div className="flex flex-col h-1/2 gap-2 w-full justify-center items-center px-4 pb-2">
            <h1 className="text-lg font-medium  text-center truncate w-72">
              voiture
            </h1>

            <div className="flex items-center mt-auto pb-3">
              <div className="flex flex-col">
                <div className="text-lg font-medium ">200 TND</div>
                <div>
                  <ul className="flex justify-center drop-shadow-lg">
                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star"
                        className="w-4 text-yellow-500 mr-1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star"
                        className="w-4 text-yellow-500 mr-1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star"
                        className="w-4 text-yellow-500 mr-1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="star"
                        className="w-4 text-yellow-500 mr-1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="star"
                        className="w-4 text-yellow-500"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                        ></path>
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>

              <Link
                to="/cart"
                className="bg-Info   mt-auto hover:bg-infoDark text-white font-bold py-2 px-4 rounded-full text-xs"
              >
                add to Cart
              </Link>
            </div>
          </div>
        </div>

        {/* ------------------ */}
        <div className="h-72 max-w-[15rem] relative shadow-2xl rounded-2xl border hover:border-black ">
          <img src={favorite} alt="like" className="absolute " />
          <Link to="/details">
            <img
              className="rounded-t-2xl h-1/2 ease-in-out w-full object-contain"
              src={car}
              alt=""
            />
          </Link>

          <div className="flex flex-col h-1/2 gap-2 w-full justify-center items-center px-4 pb-2">
            <h1 className="text-lg font-medium  text-center truncate w-72">
              voiture
            </h1>

            <div className="flex items-center mt-auto pb-3">
              <div className="flex flex-col">
                <div className="text-lg font-medium ">200 TND</div>
                <div>
                  <ul className="flex justify-center drop-shadow-lg">
                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star"
                        className="w-4 text-yellow-500 mr-1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star"
                        className="w-4 text-yellow-500 mr-1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star"
                        className="w-4 text-yellow-500 mr-1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="star"
                        className="w-4 text-yellow-500 mr-1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="star"
                        className="w-4 text-yellow-500"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                        ></path>
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>

              <Link
                to="/cart"
                className="bg-Info   mt-auto hover:bg-infoDark text-white font-bold py-2 px-4 rounded-full text-xs"
              >
                add to Cart
              </Link>
            </div>
          </div>
        </div>
        {/* ----------- */}
        <div className="h-72 max-w-[15rem] relative shadow-2xl rounded-2xl border hover:border-black ">
          <img src={favorite} alt="like" className="absolute " />
          <Link to="/details">
            <img
              className="rounded-t-2xl h-1/2 ease-in-out w-full object-contain"
              src={car}
              alt=""
            />
          </Link>

          <div className="flex flex-col h-1/2 gap-2 w-full justify-center items-center px-4 pb-2">
            <h1 className="text-lg font-medium  text-center truncate w-72">
              voiture
            </h1>

            <div className="flex items-center mt-auto pb-3">
              <div className="flex flex-col">
                <div className="text-lg font-medium ">200 TND</div>
                <div>
                  <ul className="flex justify-center drop-shadow-lg">
                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star"
                        className="w-4 text-yellow-500 mr-1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star"
                        className="w-4 text-yellow-500 mr-1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star"
                        className="w-4 text-yellow-500 mr-1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="star"
                        className="w-4 text-yellow-500 mr-1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="star"
                        className="w-4 text-yellow-500"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                        ></path>
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>

              <Link
                to="/cart"
                className="bg-Info   mt-auto hover:bg-infoDark text-white font-bold py-2 px-4 rounded-full text-xs"
              >
                add to Cart
              </Link>
            </div>
          </div>
        </div>
        {/* ----------- */}
        <div className="h-72 max-w-[15rem] relative shadow-2xl rounded-2xl border hover:border-black ">
          <img src={favorite} alt="like" className="absolute " />
          <Link to="/details">
            <img
              className="rounded-t-2xl h-1/2 ease-in-out w-full object-contain"
              src={car}
              alt=""
            />
          </Link>

          <div className="flex flex-col h-1/2 gap-2 w-full justify-center items-center px-4 pb-2">
            <h1 className="text-lg font-medium  text-center truncate w-72">
              voiture
            </h1>

            <div className="flex items-center mt-auto pb-3">
              <div className="flex flex-col">
                <div className="text-lg font-medium ">200 TND</div>
                <div>
                  <ul className="flex justify-center drop-shadow-lg">
                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star"
                        className="w-4 text-yellow-500 mr-1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star"
                        className="w-4 text-yellow-500 mr-1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star"
                        className="w-4 text-yellow-500 mr-1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="star"
                        className="w-4 text-yellow-500 mr-1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="star"
                        className="w-4 text-yellow-500"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                        ></path>
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>

              <Link
                to="/cart"
                className="bg-Info   mt-auto hover:bg-infoDark text-white font-bold py-2 px-4 rounded-full text-xs"
              >
                add to Cart
              </Link>
            </div>
          </div>
        </div>
        {/* ----------- */}
        <div className="h-72 max-w-[15rem] relative shadow-2xl rounded-2xl border hover:border-black ">
          <img src={favorite} alt="like" className="absolute " />
          <Link to="/details">
            <img
              className="rounded-t-2xl h-1/2 ease-in-out w-full object-contain"
              src={car}
              alt=""
            />
          </Link>

          <div className="flex flex-col h-1/2 gap-2 w-full justify-center items-center px-4 pb-2">
            <h1 className="text-lg font-medium  text-center truncate w-72">
              voiture
            </h1>

            <div className="flex items-center mt-auto pb-3">
              <div className="flex flex-col">
                <div className="text-lg font-medium ">200 TND</div>
                <div>
                  <ul className="flex justify-center drop-shadow-lg">
                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star"
                        className="w-4 text-yellow-500 mr-1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star"
                        className="w-4 text-yellow-500 mr-1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star"
                        className="w-4 text-yellow-500 mr-1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="star"
                        className="w-4 text-yellow-500 mr-1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="star"
                        className="w-4 text-yellow-500"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                        ></path>
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>

              <Link
                to="/cart"
                className="bg-Info   mt-auto hover:bg-infoDark text-white font-bold py-2 px-4 rounded-full text-xs"
              >
                add to Cart
              </Link>
            </div>
          </div>
        </div>
        {/* ----------- */}
      </div>
    </section>
  );
};

export default Cart;
