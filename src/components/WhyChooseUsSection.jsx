import { BENEFITS } from "../data/benefits";
import BenefitCard from "./BenefitCard"; 

export default function WhyChooseUsSection() {
  return (
    <section id="benefits" className="flex md:min-h-screen flex-col items-center bg-black py-16">
      <h2 className="text-white text-center text-4xl sm:text-5xl font-bold">¿Por qué elegirnos?</h2>
      <p className="text-gray-400 text-xl mt-4 text-balance text-center">
        Todo lo que necesitás para alcanzar tus objetivos
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6 w-full max-w-7xl px-4">
        {BENEFITS.map((benefit) => (
          <BenefitCard 
            key={benefit.id} 
            {...benefit} 
          />
        ))}
      </div>
    </section>
  );
}