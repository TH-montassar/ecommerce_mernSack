import React, { useEffect } from "react";

import Return from "../../assert/image/re.svg";
import ReturnRv from "../../assert/image/rev.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/product.action";
import vdAbout from "../../assert/image/vd/cars.mp4";
import ReactPlayer from "react-player";
import favorite from "../../assert/image/fover.svg";
import car from "../../assert/image/v.jpg";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts({ limit: 8 }));
  }, []);

  const { /*isLoading ,*/ products } = useSelector((state) => {
    return state.productReducers;
  });

  return (
    <section className="pt-11">
      {/* -------------------------------------------------- */}
      <div className="flex justify-center rounded-2xl relative">
        <img
          src={Return}
          alt="Return"
          className="absolute z-10 left-2 top-[calc(50%-35px)]"
        />
        <div className="max-h-96 flex justify-center items-center">
          <div className="bg-Primary text-white h-full  rounded-l-2xl p-9 relative w-2/5 pl-24">
            <h1 className="text-center pb-3.5 font-bold text-5xl">hyundai</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              corrupti nisi nostrum voluptate, eaque ab pariatur nobis! Quasi
              possimus est odit natus molestias magni quibusdam repellat error
              unde, iste asperiores. Eius fuga animi quisquam veritatis minus
              eos aperiam ad voluptatum reiciendis. Facilis, laborum doloremque?
              Sequi nesciunt velit quisquam magni
            </p>
          </div>

          <img
            className="object-cover w-3/5 h-full rounded-r-2xl"
            src={car}
            alt="car"
          />
        </div>

        <img
          src={ReturnRv}
          alt="Return"
          className="absolute z-10 right-2 top-[calc(50%-35px)]"
        />
      </div>

      <div className="py-10">
        <h1 className="text-center font-bold text-3xl ">Shop products</h1>
        {/* ------------------------------------------- */}
        <div className="mt-10">
          <h2 className="pb-12 text-3xl">Newest Products</h2>

          <div className="flex flex-1 gap-12 overflow-x-auto snap-x	snap-mandatory pt-4 pl-10 pb-10">
            {products.map((product) => (
              <div
                key={product._id}
                className="h-96 min-w-6 relative shadow-2xl rounded-2xl border hover:border-black snap-center"
              >
                <img src={favorite} alt="like" className="absolute " />
                <Link to={`/details/${product.slug}`}>
                  <img
                    className="rounded-t-2xl h-1/2 ease-in-out w-full object-contain"
                    src={product.image}
                    alt={product.slug}
                  />
                </Link>
                <div className="flex flex-col h-1/2 gap-2 w-full justify-center items-center px-4 pb-2">
                  <h1 className="text-lg font-medium  text-center truncate w-72 mx-auto ">
                    {product.title}
                  </h1>

                  <div className="text-lg font-medium ">
                    {product.price} TND
                  </div>
                  <Link
                    to="/register"
                    className="bg-Info   mt-auto hover:bg-infoDark text-white font-bold py-2 px-4 rounded-full"
                  >
                    add to Cart
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* //*------------------------------------------ */}
        <div className="mt-10">
          <h2 className="pb-12 text-3xl">Best selling Product</h2>

          <div className="flex flex-1 gap-12 overflow-x-auto snap-x	snap-mandatory pt-4 pl-10 pb-10">
            {products.map((product) => (
              <div
                key={product._id}
                className="h-96 min-w-[20rem] relative shadow-2xl rounded-2xl border hover:border-black snap-center"
              >
                <img src={favorite} alt="like" className="absolute " />
                <Link to={`/details/${product.slug}`}>
                  <img
                    className="rounded-t-2xl h-1/2 ease-in-out w-full object-contain"
                    src={product.image}
                    alt={product.slug}
                  />
                </Link>
                <div className="flex flex-col h-1/2 gap-2 w-full justify-center items-center px-4 pb-2">
                  <h1 className="text-lg font-medium  text-center truncate w-72 mx-auto ">
                    {product.title}
                  </h1>

                  <div className="text-lg font-medium ">
                    {product.price} TND
                  </div>
                  <Link
                    to="/register"
                    className="bg-Info   mt-auto hover:bg-infoDark text-white font-bold py-2 px-4 rounded-full"
                  >
                    add to Cart
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* ---------------------------------- */}
      </div>
      <div className="">
        <h2 className="pb-12 text-3xl">About us</h2>
        <div className="flex gap-20 items-center pb-10 pl-10 flex-wrap ">
          <ReactPlayer
            className="react-player fixed-bottom max-w-lg"
            url={vdAbout}
            controls={true}
          />

          <div className="max-w-xl">
            <h1 className="pb-10 text-xl	 font-semibold	"> about us</h1>
            <p>
              ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus,
              maxime delectus. Officia porro maxime perferendis hic dolorum. Ut
              facilis quasi iure recusandae ducimus ipsum reiciendis velit
              minima ipsa. Nihil voluptas blanditiis dolores quos, voluptates
              voluptatem ab eaque, molestiae, consectetur sit laudantium
              exercitationem! Consequuntur soluta, odio doloremque voluptatem
              eligendi dolor. Eveniet fugiat dolorem, impedit hic odit vero illo
              vitae optio ab veritatis. In illum, quae obcaecati autem natus
              temporibus ratione ullam repellendus blanditiis dolorum
              exercitationem modi fugit quos tempore aut fugiat facere quisquam
              a! At, provident atque? Exercitationem repellat itaque, vero
              corrupti iure quasi iste, pariatur facere, tempora cupiditate
              maiores dolor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
