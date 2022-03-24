import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getProducts } from "../../actions/product.action";

import favorite from "../../assert/image/favorite.svg";

const Search = () => {
  const location = useLocation();
  const queries = new URLSearchParams(location.search);

  const dispatch = useDispatch();
  //console.log(location);

  console.log(location.search);
  useEffect(() => {
    dispatch(
      getProducts({
        q: queries.has("q") ? queries.get("q") : "",
        category: queries.has("category") ? queries.get("category") : "",
      })
    );
  }, [queries.get("q")]);

  const [Query, setQuery] = useState("");

  console.log(Query);
  const search = (e) => {
    e.preventDefault(); //man5alouch navigateur ya3mel relode
    dispatch(
      getProducts({
        q: Query,
      })
    );
  };

  const { /* isloading, */ products } = useSelector((state) => {
    return state.productReducers;
  });
 
  return (
    <section className="pb-6">
      <div className="text-gray-400">Home/Search/Category/product</div>

      <div className="rounded-l-full mx-auto flex items-center	 relative max-w-xl justify-between border  shadow-md">
        <button
          onClick={(e) => search(e)}
          type="button"
          className="absolute left-2"
        >
          <i className="fa-solid fa-magnifying-glass  text-2xl cursor-pointer "></i>
        </button>
        <input
          className="pl-10 py-4  w-4/5 rounded-l-full outline-none "
          type="search"
          name="search"
          onChange={(e) => setQuery(e.target.value)}
          value={Query}
          id="search"
          placeholder="Searsh here...."
        />
        <div className="h-9 rounded-full bg-slate-900 border border-Primary "></div>
        <div className="flex gap-2 w-1/5  pl-2">
          <div> Stored by </div>
          <i className="fa-solid fa-angle-up"></i>
        </div>
      </div>

      <div className="flex">
        <div className="pr-5 overflow-y-auto">
          <div className="flex justify-between items-center pr-1 pb-3">
            <div className="font-bold"> FILTERS</div>
            <div className="text-red-500 text-xs">CLEAR</div>
          </div>
          <div>
            Price Range
            <div className="h-1 ml-6 my-5 rounded-full bg-slate-900 border border-Primary "></div>
          </div>
          <div>
            Category
            <div className=" flex gap-3 py-3 pl-5">
              <input
                className="w-5 h-5  border border-Primary"
                type="radio"
                id="motorcycles"
                name="drone"
                value="motorcycles"
                checked
              />
              <label htmlFor="motorcycles">motorcycles</label>
            </div>
            <div className=" flex gap-3 py-3 pl-5">
              <input
                className="w-5 h-5  border border-Primary  "
                type="radio"
                id="bicyclet"
                name="drone"
                value="bicyclet"
                checked
              />
              <label htmlFor="bicyclet">bicyclet</label>
            </div>
            <div className=" flex gap-3 py-3 pl-5">
              <input
                className="w-5 h-5  border border-Primary  "
                type="radio"
                id="quad bike"
                name="drone"
                value="quad bike"
                checked
              />
              <label htmlFor="quad bike">quad bike</label>
            </div>
            <div className=" flex gap-3 py-3 pl-5">
              <input
                className="w-5 h-5  border border-Primary  "
                type="radio"
                id="boots"
                name="drone"
                value="boots"
                checked
              />
              <label htmlFor="boots">boots</label>
            </div>
            <div className=" flex gap-3 py-3 pl-5">
              <input
                className="w-5 h-5  border border-Primary  "
                type="radio"
                id="truck"
                name="drone"
                value="truck"
              />
              <label htmlFor="truck">truck</label>
            </div>
          </div>

          <div>
            Brand
            <div className=" flex gap-3 py-3 pl-5">
              <input
                className="w-5 h-5  border border-Primary  "
                type="radio"
                id="HATCHBACKT"
                name="brand"
                value="HATCHBACKT"
                checked
              />
              <label htmlFor="HATCHBACKT">HATCHBACKT</label>
            </div>
            <div className=" flex gap-3 py-3 pl-5">
              <input
                className="w-5 h-5  border border-Primary  "
                type="radio"
                id="CONVERTIBLE"
                name="brand"
                value="CONVERTIBLE"
                checked
              />
              <label htmlFor="CONVERTIBLE">CONVERTIBLE</label>
            </div>
            <div className=" flex gap-3 py-3 pl-5">
              <input
                className="w-5 h-5  border border-Primary  "
                type="radio"
                id="COUPLE"
                name="brand"
                value="COUPLE"
                checked
              />
              <label htmlFor="COUPLE">COUPLE</label>
            </div>
            <div className=" flex gap-3 py-3 pl-5">
              <input
                className="w-5 h-5  border border-Primary  "
                type="radio"
                id="STATION_WARGON"
                name="brand"
                value="STATION_WARGON"
                checked
              />
              <label htmlFor="STATION_WARGON">STATION WARGON</label>
            </div>
            <div className=" flex gap-3 py-3 pl-5">
              <input
                className="w-5 h-5  border border-Primary  "
                type="radio"
                id=" SPORT-UTILITY"
                name="brand"
                value=" SPORT-UTILITY"
                checked
              />
              <label htmlFor=" SPORT-UTILITY">
                {" "}
                SPORT-UTILITY VEHICLE (suv)
              </label>
            </div>
          </div>
        </div>
        <div className="h-screen w-1 rounded-full bg-slate-900 border border-Primary "></div>
        <div className="">
          <div className="pl-4">
            <div>21 items found</div>
            <div className="text-gray-400"> showing 11 to 20 of 21 entries</div>
          </div>

          <div className=" grid grid-cols-4 gap-12 pt-4 pl-10">
            {products.map((product) => (
              <div className="h-72 max-w-[15rem] relative shadow-2xl rounded-2xl border hover:border-black ">
                <img src={favorite} alt="like" className="absolute " />
                <Link  to={`/details/${product.slug}`}>
                  <img
                    className="rounded-t-2xl h-1/2 ease-in-out w-full object-contain"
                    src={product.image}
                    alt=""
                  />
                </Link>

                <div className="flex flex-col h-1/2 gap-2 w-full justify-center items-center px-4 pb-2">
                  <h1 className="text-sm font-medium  truncate w-32  mx-auto">
                    {product.title}
                  </h1>

                  <div className="flex items-center mt-auto pb-3">
                    <div className="flex flex-col">
                      <div className="text-lg font-medium ">
                        {product.price} TND
                      </div>
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
            ))}
          </div>
        </div>
      </div>

      <div className="flex  justify-between items-baseline ml-72">
        <button className="bg-white hover:bg-gray-100  font-semibold py-2 px-4 border-gray-400 rounded shadow">
          Previous
        </button>
        <div className="flex gap-4 items-baseline">
          <div>1</div>
          <div className="bg-Primary px-2 py-1 text-white">2</div>
          <div>3</div>
          <div className="text-gray-400">4</div>
        </div>
        <button className="bg-white hover:bg-gray-100  font-semibold py-2 px-4 border-gray-400 rounded shadow">
          Next
        </button>
      </div>
    </section>
  );
};

export default Search;
