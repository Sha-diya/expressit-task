import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://glore-bd-backend-node-mongo.vercel.app/api/product/${id}`)
      .then(res => setProduct(res.data.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <img 
        src={product?.images?.[0]?.secure_url} 
        alt={product?.name} 
        className="object-cover rounded-xl" 
      />
      <h1 className="text-2xl font-bold mt-4">{product?.name}</h1>
      <p className="text-gray-600">{product?.description}</p>
      <p className="mt-2 font-medium text-green-600">{product?.price} TK</p>
    </div>
  );
};

export default SingleProduct;
