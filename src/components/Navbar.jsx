import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">Express IT Store</Link>
      </div>
    </nav>
  );
};

export default Navbar;
