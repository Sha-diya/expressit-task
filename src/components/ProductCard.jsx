import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const imageUrl = product?.images?.[0]?.secure_url || "";

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden group mx-auto max-w-full">
      <Link to={`/single-product/${product._id}`} className="block h-full">
        {/* Image Container */}
        <div className="flex justify-center items-center h-[30rem] bg-white overflow-visible">
          <div className="inline-block h-[30rem] overflow-hidden">
            <img
              src={imageUrl}
              alt={product.name}
              className="h-full w-auto object-contain transition-transform duration-300 ease-in-out group-hover:scale-115"
            />
          </div>
        </div>

        {/* Content */}
        <div className="text-center p-4 space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>

          {/* Flex container with button left, price right */}
          <div className="flex justify-between items-center">
            <button className="bg-pink-500 text-bold text-white text-sm px-4 py-2 rounded-full hover:bg-gray-800 transition">
              অর্ডার দিন
            </button>
            <p className="text-green-600 font-bold text-md text-sm flex items-center text-pink-500">
              <span className="text-sm">৳</span> {product.price}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
