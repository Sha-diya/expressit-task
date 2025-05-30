import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-pink-120 p-4 rounded-xl shadow-50 hover:shadow-lg transition">
      <img
        src={product?.images?.[0]?.secure_url}
        alt={product?.name}
        className="h-100 object-cover rounded-md"
      />
      <h2 className="text-xl font-semibold mt-2">{product?.name}</h2>
      <p className="text-gray-500">{product?.price} TK</p>
      <Link
        to={`/single-product/${product._id}`}
        className="text-blue-600 hover:underline mt-2 inline-block"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
