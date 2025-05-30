import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://glore-bd-backend-node-mongo.vercel.app/api/product")
      .then(res => {
        setProducts(res.data.data); // Corrected data extraction
      })
      .catch(err => console.error(err));
  }, []);

  // ধরে নিচ্ছি প্রথম প্রোডাক্টকে হাইলাইট করবা
  const featuredProduct = products[0];
  const otherProducts = products.slice(1);

  return (
    <div className="p-4 space-y-10">
      {/* 🔷 উপরের বড় প্রোডাক্ট */}
      {featuredProduct && (
        <div className="object-cover w-full h-160 bg-pink-100 p-6 rounded-xl flex flex-col md:flex-row items-center space-x-6">
          <img
            src={featuredProduct.images?.[0]?.secure_url}
            alt={featuredProduct.name}
            className="h-150 object-cover rounded-xl"
          />
          <div>
            <h1 className="text-3xl font-bold mb-2">{featuredProduct.name}</h1>
            <p className="text-gray-700 mb-4">{featuredProduct.description}</p>
            <p className="text-xl font-semibold text-green-600 mb-4">{featuredProduct.price} TK</p>
            <a
              href={`/single-product/${featuredProduct._id}`}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              View Product
            </a>
          </div>
        </div>
      )}

      {/* 🔽 নিচের গ্রিড (বাকি প্রোডাক্টগুলো) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherProducts.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
