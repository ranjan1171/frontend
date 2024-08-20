import React, { useRef } from "react";
import { useSelector } from "react-redux";
import CardFeature from "../component/CardFeature";
import HomeCard from "../component/HomeCard";
import { GrPrevious, GrNext } from "react-icons/gr";
import FilterProduct from "../component/FilterProduct";
import AllProduct from "../component/AllProduct";
import { Link } from "react-router-dom";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);

  // Select a range of products (e.g., first 4 products)
  const homeProductCartList = productData.slice(1, 5);

  // Filter products by categories (fixing the filter logic)
  const categoriesToShow = ["icecream", "egg", "cupcake", "cake","mixedfruit","briyani","Garlic naan","chinese"];
  const homeProductCartListVegetables = productData.filter((el) =>
    categoriesToShow.includes(el.category)
  );

  // Loading state arrays
  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  // Carousel functionality
  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900 items-align">Fastest Bike Delivery</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
              className="h-7"
              alt="Delivery Icon"
            />
          </div>
          <h2 className="text-4xl md:text-7xl font-bold py-3">
            Better Taste,{" "}
            <span className="text-green-500">Better Health</span>
          </h2>
          <p className="py-3 text-base">
            Khana Khazana provides you with the best food quality, prepared with love and hygiene. Our main motto is to make food and deliver it to you as quickly as possible. WE ARE YOU, AND YOU ARE <span className='text-green-600'>KHANA KHAZANA</span>
          </p>
          {/* <button className="font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md">
          
            Order Now
          </button> */}
        </div>

        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCartList.length > 0
            ? homeProductCartList.map((el) => (
                <HomeCard
                  key={el._id}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  price={el.price}
                  category={el.category}
                />
              ))
            : loadingArray.map((_, index) => (
                <HomeCard key={index + "loading"} loading={"Loading..."} />
              ))}
        </div>
      </div>

      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            Our Featured Menu
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {homeProductCartListVegetables.length > 0
            ? homeProductCartListVegetables.map((el) => (
                <CardFeature
                  key={el._id}
                  id={el._id}
                  name={el.name}
                  category={el.category}
                  price={el.price}
                  image={el.image}
                />
              ))
            : loadingArrayFeature.map((_, index) => (
                <CardFeature loading="Loading..." key={index + "cartLoading"} />
              ))}
        </div>
      </div>
      
      <AllProduct heading={"Your Product"} />
    </div>
  );
};

export default Home;
