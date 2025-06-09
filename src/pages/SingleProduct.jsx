import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { MdVerified } from "react-icons/md";
import { FaShippingFast, FaMoneyBillWave, FaUndo, FaShoppingCart } from "react-icons/fa";

const SingleProduct = () => {
  const { id } = useParams();
  const [mainProduct, setMainProduct] = useState(null);
  const [otherProducts, setOtherProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const res = await fetch("https://glore-bd-backend-node-mongo.vercel.app/api/product");
        const data = await res.json();
        const products = data.products || data.data;
        const main = products.find((p) => p._id === id);
        setMainProduct(main);
        setOtherProducts(products.filter((p) => p._id !== id));
      } catch (error) {
        console.error("Failed to load product:", error);
      }
    };
    fetchProductData();
  }, [id]);

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  if (!mainProduct) {
    return <p className="text-center mt-10 text-lg">Loading or product not found...</p>;
  }

  const imageUrl = mainProduct?.images?.[0]?.secure_url || "";

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Product Image + Details */}
      <div className="rounded-xl p-4 shadow-lg flex flex-col md:flex-row gap-10">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={imageUrl}
            alt={mainProduct.name}
            className="w-full max-h-[600px] object-contain rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{mainProduct.name}</h1>
            <p className="text-yellow-500 text-xl">★★★★★</p>
            <p className="text-3xl text-pink-600 font-semibold mt-4 mb-2">
              <span className="text-lg">৳</span> {mainProduct.price}
            </p>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              এই পণ্যটি ফ্যাশন ও স্টাইলে অনন্য। এখনই অর্ডার করুন!
            </p>

            {/* Quantity Controls */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-lg font-semibold">পরিমাণ:</span>
              <button onClick={decreaseQty} className="bg-gray-200 px-4 py-1 rounded text-xl hover:bg-gray-300">-</button>
              <span className="text-2xl">{quantity}</span>
              <button onClick={increaseQty} className="bg-gray-200 px-4 py-1 rounded text-xl hover:bg-gray-300">+</button>
            </div>

            {/* GloreBD Style Order Button */}
            <button className="bg-[#ec4899] hover:bg-[#db2777] text-white font-bold py-3 px-10 rounded-full text-lg transition duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
              <FaShoppingCart /> অর্ডার করুন
            </button>
          </div>

          {/* Highlights */}
          <div className="space-y-3 text-gray-700 text-sm mb-40">
            <div className="flex items-center gap-3">
              <MdVerified className="text-green-600 text-xl" />
              <span>100% অরিজিনাল প্রোডাক্ট</span>
            </div>
            <div className="flex items-center gap-3">
              <FaShippingFast className="text-blue-600 text-xl" />
              <span>দ্রুত শিপিং সার্ভিস</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMoneyBillWave className="text-yellow-600 text-xl" />
              <span>ক্যাশ অন ডেলিভারি সুবিধা</span>
            </div>
            <div className="flex items-center gap-3">
              <FaUndo className="text-red-500 text-xl" />
              <span>সহজ ৩ দিনের রিটার্ন পলিসি</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">আরও পণ্য দেখুন</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherProducts.slice(0, 4).map((p) => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
