import { PhoneIcon } from '@heroicons/react/24/solid';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12">
      {/* Top Features */}
      <div className="bg-pink-100 text-black py-6 px-4 flex flex-col md:flex-row justify-around items-center text-center gap-6">
        <div>
          <img src="/exchange-icon.svg" alt="Exchange" className="w-12 h-12 mx-auto mb-2" />
          <p className="font-semibold text-sm">Easy Exchange Policy</p>
          <p className="text-sm">We offer hassle-free exchange policy</p>
        </div>
        <div>
          <img src="/return-icon.svg" alt="Return" className="w-12 h-12 mx-auto mb-2" />
          <h4 className="font-semibold text-sm">3 Days Return Policy</h4>
          <p className="text-sm">We provide 3 days free return policy</p>
        </div>
        <div>
          <PhoneIcon className="w-12 h-12 text-black-500 mx-auto mb-2" />
          <h4 className="font-semibold text-sm">Best Customer Support</h4>
          <p className="text-sm">We provide 24/7 customer support</p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* Logo & Tagline */}
        <div>
          <h1 className="text-pink-500 text-[38px] font-bold mb-2">G' LORE</h1>
          <p className="mb-2">CLOTHES THAT SMILE</p>
          <p className="text-gray-300 text-[12px]">
            আমাদের কালেকশন আপনাকে দিবে ফ্যাশনের আধুনিকতা এবং প্রতিদিনের একটি নিখুঁত সমঝোতা।
          </p>
        </div>

        {/* Explore More */}
        <div>
          <h2 className="font-bold text-lg mb-3">Explore More</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-500 hover:text-pink-500">New Arrivals</a></li>
            <li><a href="#" className="text-gray-500 hover:text-pink-500">About Us</a></li>
            <li><a href="#" className="text-gray-500 hover:text-pink-500">Contact</a></li>
          </ul>
        </div>

        {/* Client Experience */}
        <div>
          <h2 className="font-bold text-lg  mb-3">Client Experience</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-500 hover:text-pink-500">Track Your Order</a></li>
            <li><a href="#" className="text-gray-500 hover:text-pink-500">Returns & Exchanges</a></li>
            <li><a href="#" className="text-gray-500 hover:text-pink-500">Customer Reviews</a></li>
            <li><a href="#" className="text-gray-500 hover:text-pink-500">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-500 hover:text-pink-500">FAQ</a></li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h2 className="font-bold text-lg mb-3">GET IN TOUCH</h2>
          <p className="text-gray-500">মোবাইল নং: (+88) 01855-375963</p>
          <p className="text-gray-500">ইমেইল: hello@glorebd.com</p>
          <div className="flex space-x-4 mt-4">
            <a href="#"><img src="/fb.svg" alt="Facebook" className="w-8 h-6" /></a>
            <a href="#"><img src="/messenger.svg" alt="Messenger" className="w-8 h-6" /></a>
            <a href="#"><img src="/twitter.svg" alt="Twitter" className="w-8 h-6" /></a>
            <a href="#"><img src="/instagram.svg" alt="Instagram" className="w-8 h-6" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-lg text-gray-400 py-4">
        © 2025 Powered by <span className="text-orange-400 font-semibold text-lg">Shadia</span>
      </div>
    </footer>
  );
};

export default Footer;
