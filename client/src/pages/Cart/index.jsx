import React from "react";
import { Link } from "react-router-dom";

import favorite from "../../assert/image/favorite.svg";
import car from "../../assert/image/v.jpg";
import YouMayAlsoLike from "../../shared/YouMayAlsoLike";

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

              <button
                type="submit"
                className="bg-Info  mb-2 flex mx-auto	hover:bg-infoDark text-white font-bold py-3 px-10 rounded-md text-xs"
              >
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

      <YouMayAlsoLike/>
    </section>
  );
};

export default Cart;
