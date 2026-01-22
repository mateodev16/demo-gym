import { FaCheck } from "react-icons/fa6";

export default function PricingCard({ title, subtitle, price, period, features = [], isPopular }) {
    return (
      <article className={`flex flex-col p-8 md:p-12 border-2 rounded-2xl transition-all ${
        isPopular 
          ? "bg-zinc-950 border-brand-secondary z-10 relative shadow-[0_0_40px_rgba(183,255,26,0.3)]" 
          : "bg-black border-zinc-800"
      }`}>
        
        {isPopular && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full text-black px-6 py-2 bg-brand-primary font-bold whitespace-nowrap shadow-lg">
            MÁS ELEGIDO
          </div>
        )}
  
        <div className="text-center mb-8">
          <h3 className="text-white text-3xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400 font-medium">{subtitle}</p>
        </div>
  
        <div className="text-center mb-10">
          <div className="flex items-start justify-center text-brand-secondary">
            <span className="text-3xl font-bold mt-2 mr-1">$</span>
            <span className="text-5xl md:text-6xl font-black tracking-tighter">{price}</span>
          </div>
          <p className="text-gray-500 text-lg mt-1">{period}</p>
        </div>
  
        <ul className="space-y-4 mb-12 grow">
       
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-gray-300">
              <FaCheck className="text-brand-secondary mt-1 mr-3 shrink-0 size-5" />
              <span className="text-base font-medium">{feature}</span>
            </li>
          ))}
        </ul>
  
        <button className={`w-full py-4 rounded-xl font-black text-lg transition-transform hover:scale-105 cursor-pointer ${
          isPopular ? "bg-brand-secondary text-black" : "bg-white text-black"
        }`}>
          Elegir Plan
        </button>
      </article>
    );
  }