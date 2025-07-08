import {
  Facebook,
  Instagram,
  Twitter
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-50 via-yellow-50 to-pink-55 text-gray-800 mt-10 px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Left - Brand Info */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-bold text-orange-700">TastyBite</h2>
          <p className="text-sm">Delivering happiness one bite at a time 🍕 🍔 🥤</p>
        </div>

        {/* Right - Social Icons */}
        <div className="flex space-x-6">
          <a href="#" className="hover:text-orange-600"><Instagram /></a>
          <a href="#" className="hover:text-orange-600"><Facebook /></a>
          <a href="#" className="hover:text-orange-600"><Twitter /></a>
        </div>
      </div>

      {/* Bottom - Centered Section */}
      <div className="text-center text-sm mt-6 text-gray-600 leading-relaxed flex flex-col items-center justify-center">
        
        {/* Center - Navigation Links */}
        <div className="flex space-x-6 mb-2 font-medium text-sm">
          <a href="#" className="hover:text-orange-600 transition">Privacy</a>
          <a href="#" className="hover:text-orange-600 transition">Terms</a>
          <a href="#" className="hover:text-orange-600 transition">Support</a>
        </div>

        {/* Credits */}
        <div>
          Crafted with <span className="text-pink-500">❤️</span> by <span className="underline">Nirbhay Singh</span><br />
          © {new Date().getFullYear()} <span className="font-bold text-orange-700">TastyBite</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
