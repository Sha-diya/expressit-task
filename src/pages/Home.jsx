import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://glore-bd-backend-node-mongo.vercel.app/api/product")
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="space-y-5 bg-pink-100 text-gray-900 min-h-screen">
      {/* 🔥 Hero Section with image beside text, styled as a card */}
      <div className="bg-pink-100 py-10 px-4">
        <div className="bg-pink-100 max-w-7xl mx-auto">
          <div className="bg-pink-50 rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left side – Centered Bangla Text */}
            <div className="text-center space-y-4 w-full md:w-1/2 flex flex-col items-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
                নতুন <br /> কালেকশন
              </h1>
              <p className="text-lg text-gray-600 max-w-md">
                ✨ <span className="font-semibold text-pink-600">GloreBD</span> - এর সাথে ফ্যাশনে পা রাখুন নতুন দিগন্তে! ❤️
              </p>
              <p className="text-lg text-gray-600 max-w-md">
                আমাদের এক্সক্লুসিভ নতুন কালেকশন এখন উপলব্ধ! <br />
                আপনার প্রিয় ফ্যাশন স্টাইল খুঁজে নিন আর নিজেকে সাজান অনন্যভাবে। ❤️
              </p>
              <a
                href="#products"
                className="inline-block bg-pink-500 text-bold text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
              >
                এখনই কিনুন
              </a>
            </div>

            {/* Right side – image */}
            <div className="md:w-1/2">
              <img
                src="/cover-img.jpeg"
                alt="Fashion Banner"
                className="w-full h-auto rounded-xl shadow"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 🛍 Product Grid */}
      <div className="max-w-7xl mx-auto px-4" id="products">
        <h2 className="text-2xl font-semibold mb-6 text-center">Latest Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
