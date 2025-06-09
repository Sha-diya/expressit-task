import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    axios
      .get("https://glore-bd-backend-node-mongo.vercel.app/api/product")
      .then((res) => {
        setProducts(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "All" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const uniqueCategories = ["All", ...new Set(products.map((p) => p.category))];

  return (
    <div className="space-y-5 bg-pink-100 text-gray-900 min-h-screen">
      {/* 🔥 Hero Section */}
      <div className="bg-pink-100 py-10 px-4">
        <div className="bg-pink-100 max-w-7xl mx-auto">
          <div className="bg-pink-50 rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Text */}
            <div className="text-center space-y-4 w-full md:w-1/2 flex flex-col items-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800">নতুন <br /> কালেকশন</h1>
              <p className="text-lg text-gray-600 max-w-md">
                ✨ <span className="font-semibold text-pink-600">GloreBD</span> - এর সাথে ফ্যাশনে পা রাখুন নতুন দিগন্তে! ❤️
              </p>
              <p className="text-lg text-gray-600 max-w-md">
                এক্সক্লুসিভ নতুন কালেকশন এখন উপলব্ধ! <br />
                নিজেকে সাজান অনন্যভাবে। ❤️
              </p>
              <a
                href="#products"
                className="inline-block bg-pink-500 text-bold text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
              >
                এখনই কিনুন
              </a>
            </div>

            {/* Image */}
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

      {/* 🔎 Filters */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none w-full md:w-1/2"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none w-full md:w-1/3"
        >
          {uniqueCategories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* 🛍 Product Grid */}
      <div className="max-w-7xl mx-auto px-4" id="products">
        <h2 className="text-2xl font-semibold mb-6 text-center">Latest Products</h2>

        {loading ? (
          <div className="text-center text-lg text-gray-600">Loading...</div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center text-lg text-red-500">No products found.</div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.slice(0, visibleCount).map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>

            {/* Load More */}
            {visibleCount < filteredProducts.length && (
              <div className="text-center mt-6">
                <button
                  onClick={handleLoadMore}
                  className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
                >
                  See More
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Scroll to Top */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-pink-600 text-white px-4 py-2 rounded-full shadow hover:bg-gray-800 transition"
        >
          ↑ Top
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
