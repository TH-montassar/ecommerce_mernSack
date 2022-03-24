import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategories } from "../../actions/category.action";

const Categories = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  const { isLoading, categories } = useSelector((state) => {
    return state.categoryReducers;
  });

  return (
    <section className="py-10">
      <h1 className="text-center font-bold text-3xl  py-10">All Categories</h1>
      <div className=" grid grid-cols-4 gap-12 pt-4 pl-10">
        {categories.map((category) => (
          <div   key={category._id} className="h-72 max-w-[15rem] relative shadow-2xl rounded-2xl border hover:border-black ">
            <Link to={`/search?category=${category.slug}`}>
              <img
                className="rounded-t-2xl h-1/2 ease-in-out w-full object-contain"
                src={category.image}
                alt=""
              />
            </Link>

            <div className="flex flex-col h-1/2 gap-2 w-full justify-center items-center px-4 pb-2">
              <h1 className="text-lg font-medium text-center truncate w-72">
                {category.title}
              </h1>

              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
