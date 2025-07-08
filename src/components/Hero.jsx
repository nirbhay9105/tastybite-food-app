import heroImg from "../assets/images/hero-food.png";

const Hero = () => {
  return (
    <section className="bg-orange-50 min-h-screen flex items-center">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-20">
        
{/* Left Content */}
<div className="md:w-1/2 text-center md:text-left pl-4 md:pl-12">
  <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-4 leading-tight">
    Craving Delicious Food?<br /> We've Got You Covered!
  </h1>
  <p className="text-gray-700 text-lg mb-6">
    Order from a variety of mouthwatering meals, crafted with love & delivered at lightning speed. Whether it’s a cheesy pizza, juicy burger, or a chilled drink — your hunger ends here!
  </p>

  {/* Key Highlights */}
  <ul className="text-left text-base text-gray-600 mb-6 space-y-2">
    <li>🍕 Wide range of cuisines</li>
    <li>🚀 Superfast delivery</li>
    <li>💸 Affordable pricing & combo offers</li>
    <li>📍 Serving across 100+ cities</li>
  </ul>

  {/* Button */}
  <button
    onClick={() => {
      document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
    }}
    className="px-8 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition"
  >
    Explore Menu
  </button>
</div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img src={heroImg} alt="Delicious Food" 
           className="w-full max-w-xl mx-auto drop-shadow-xl rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
