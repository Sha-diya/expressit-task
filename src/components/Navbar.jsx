import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiMenu,
  FiShoppingCart,
  FiShoppingBag,
  FiSearch,
  FiX,
} from "react-icons/fi";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-pink-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left: Menu + Search (Desktop) */}
        <div className="hidden md:flex items-center space-x-4 text-gray-700 flex-shrink-0 relative">
          <div
            className="relative flex items-center space-x-2 cursor-pointer text-lg"
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <FiMenu className="text-2xl text-pink-600" />
            <span className="text-pink-600 font-semibold">Menu</span>
            <div
              className={`absolute left-0 top-full w-48 bg-pink-100 shadow-lg rounded-r-xl py-4 px-3 transition-all duration-300 ${
                menuOpen
                  ? "opacity-100 translate-x-0 pointer-events-auto"
                  : "opacity-0 -translate-x-6 pointer-events-none"
              }`}
              style={{ zIndex: 50 }}
            >
              <nav className="flex flex-col space-y-3 text-lg text-gray-800">
                <Link to="/" className="hover:text-pink-600">
                  Home
                </Link>
                <Link to="/products" className="hover:text-pink-600">
                  Products
                </Link>
                <Link to="/about" className="hover:text-pink-600">
                  About
                </Link>
                <Link to="/contact" className="hover:text-pink-600">
                  Contact
                </Link>
              </nav>
            </div>
          </div>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="flex items-center border rounded-full px-3 py-1 bg-white"
          >
            <input
              type="text"
              value={searchTerm}
              placeholder="Search products..."
              onChange={(e) => setSearchTerm(e.target.value)}
              className="outline-none px-2 py-1 w-32 md:w-48"
            />
            <button
              type="submit"
              className="text-gray-600 hover:text-pink-600"
              aria-label="Search"
            >
              <FiSearch className="text-lg" />
            </button>
          </form>
        </div>

        {/* Mobile: Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-pink-600 text-2xl"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Center: Logo */}
        <div className="flex-grow flex justify-center md:justify-center">
          <Link to="/" className="text-2xl font-bold text-pink-600">
            G' LORE
          </Link>
        </div>

        {/* Right: Shop + Cart */}
        <div className="hidden md:flex items-center space-x-6 flex-shrink-0 text-lg text-gray-700">
          <Link
            to="/products"
            className="flex items-center space-x-1 hover:text-pink-600"
          >
            <FiShoppingBag className="text-xl text-pink-600" />
            <span className="text-[15px] text-pink-600 font-bold">Shop</span>
          </Link>
          <Link
            to="/cart"
            className="text-2xl text-pink-600 hover:text-pink-800"
          >
            <FiShoppingCart />
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-pink-50 px-4 pb-4">
          <nav className="flex flex-col space-y-3 text-lg text-gray-800">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-pink-600">
              Home
            </Link>
            <Link to="/products" onClick={() => setMobileMenuOpen(false)} className="hover:text-pink-600">
              Products
            </Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-pink-600">
              About
            </Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-pink-600">
              Contact
            </Link>
            {/* Mobile Search */}
            <form
              onSubmit={(e) => {
                handleSearch(e);
                setMobileMenuOpen(false);
              }}
              className="flex items-center border rounded-full px-3 py-1 bg-white mt-2"
            >
              <input
                type="text"
                value={searchTerm}
                placeholder="Search..."
                onChange={(e) => setSearchTerm(e.target.value)}
                className="outline-none px-2 py-1 w-full"
              />
              <button
                type="submit"
                className="text-gray-600 hover:text-pink-600"
                aria-label="Search"
              >
                <FiSearch className="text-lg" />
              </button>
            </form>
          </nav>
          <div className="mt-3 flex space-x-4">
            <Link to="/products" onClick={() => setMobileMenuOpen(false)} className="flex items-center text-pink-600">
              <FiShoppingBag className="mr-1" /> Shop
            </Link>
            <Link to="/cart" onClick={() => setMobileMenuOpen(false)} className="text-pink-600">
              <FiShoppingCart />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
