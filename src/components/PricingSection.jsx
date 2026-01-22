import { FaBolt, FaCheck } from "react-icons/fa6";
import { PLANS } from "../data/plans"; 
import PricingCard from "./PricingCard";

export default function PricingSection() {
  return (
    <section className="bg-black pt-16 pb-20 px-4">
  
      <article className="font-bold flex flex-col items-center justify-center mx-auto bg-brand-secondary w-full md:w-9/12 px-8 py-10 rounded-2xl mb-16">
        <div className="flex items-center justify-center rounded-2xl">
          <FaBolt className="text-black size-7 mr-3" />
          <h3 className="text-2xl md:text-3xl text-black">¡Promoción de Lanzamiento!</h3>
        </div>
        <p className="text-black font-semibold text-center text-lg mt-2">
          Matriculación GRATIS en todos los planes • Sin compromiso de permanencia
        </p>
      </article>

      <header id="pricing" className="text-center mb-16">
        <h2 className="font-bold text-4xl md:text-5xl text-white mb-4">Elegí tu plan</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Todas las opciones incluyen acceso ilimitado y clases grupales
        </p>
      </header>

    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {PLANS.map((plan) => (
          <PricingCard 
            key={plan.id} 
            {...plan} 
          />
        ))}
      </div>

      <p className="text-gray-400 text-center pt-12">
        Todos los precios son en pesos uruguayos (UYU) • Consultas: 2345-6789
      </p>
    </section>
  );
}