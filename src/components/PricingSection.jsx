import { FaBolt, FaCheck } from "react-icons/fa6";

export default function Pricing() {
  return (
    <section  className="bg-black pt-16 pb-20 px-4">
  
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
        
   
        <article className="flex flex-col p-8 md:p-12 bg-black border-2 border-zinc-800 rounded-2xl">
          <div className="text-center mb-8">
            <h3 className="text-white text-3xl font-bold mb-2">Plan Smart</h3>
            <p className="text-gray-400 font-medium">Acceso a 1 unidad</p>
          </div>
          <div className="text-center mb-10">
            <div className="flex items-start justify-center text-brand-secondary">
              <span className="text-3xl font-bold mt-2 mr-1">$</span>
              <span className="text-5xl md:text-6xl font-black tracking-tighter">990</span>
            </div>
            <p className="text-gray-500 text-lg mt-1">por mes</p>
          </div>
          <ul className="space-y-4 mb-12 grow">
            <li className="flex items-start text-gray-300">
              <FaCheck className="text-brand-secondary mt-1 mr-3 shrink-0 size-5" />
              <span className="text-base font-medium">Entrenamiento ilimitado en 1 sede</span>
            </li>
            <li className="flex items-start text-gray-300">
              <FaCheck className="text-brand-secondary mt-1 mr-3 shrink-0 size-5" />
              <span className="text-base font-medium">Clases grupales incluidas</span>
            </li>
            <li className="flex items-start text-gray-300">
              <FaCheck className="text-brand-secondary mt-1 mr-3 shrink-0 size-5" />
              <span className="text-base font-medium">Acceso 24/7</span>
            </li>
            <li className="flex items-start text-gray-300">
              <FaCheck className="text-brand-secondary mt-1 mr-3 shrink-0 size-5" />
              <span className="text-base font-medium">App móvil</span>
            </li>
            <li className="flex items-start text-gray-300">
              <FaCheck className="text-brand-secondary mt-1 mr-3 shrink-0 size-5" />
              <span className="text-base font-medium">Vestuarios equipados</span>
            </li>
          </ul>
          <button className="w-full py-4 rounded-xl font-black text-lg bg-white text-black hover:scale-105 cursor-pointer transition-transform">
            Elegir Plan
          </button>
        </article>

  
        <article className="flex flex-col p-8 md:p-12 bg-zinc-950 border-2 rounded-2xl border-brand-secondary z-10 relative shadow-[0_0_40px_rgba(183,255,26,0.3)]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full text-black px-6 py-2 bg-brand-primary font-bold whitespace-nowrap shadow-lg">
            MÁS ELEGIDO
          </div>
          <div className="text-center mb-8">
            <h3 className="text-white text-3xl font-bold mb-2">Plan Black</h3>
            <p className="text-gray-400 font-medium">Acceso a todas las unidades</p>
          </div>
          <div className="text-center mb-10">
            <div className="flex items-start justify-center text-brand-secondary">
              <span className="text-3xl font-bold mt-2 mr-1">$</span>
              <span className="text-5xl md:text-6xl font-black tracking-tighter">1.490</span>
            </div>
            <p className="text-gray-500 text-lg mt-1">por mes</p>
          </div>
          <ul className="space-y-4 mb-12 grow">
            <li className="flex items-start text-gray-300">
              <FaCheck className="text-brand-secondary mt-1 mr-3 shrink-0 size-5" />
              <span className="text-base font-medium">Entrenamiento ilimitado en todas las sedes</span>
            </li>
            <li className="flex items-start text-gray-300">
              <FaCheck className="text-brand-secondary mt-1 mr-3 shrink-0 size-5" />
              <span className="text-base font-medium">+100 clases grupales incluidas</span>
            </li>
            <li className="flex items-start text-gray-300">
              <FaCheck className="text-brand-secondary mt-1 mr-3 shrink-0 size-5" />
              <span className="text-base font-medium">Acceso 24/7 sin restricciones</span>
            </li>
            <li className="flex items-start text-gray-300">
              <FaCheck className="text-brand-secondary mt-1 mr-3 shrink-0 size-5" />
              <span className="text-base font-medium">Invitá un amigo gratis 1 vez al mes</span>
            </li>
            <li className="flex items-start text-gray-300">
              <FaCheck className="text-brand-secondary mt-1 mr-3 shrink-0 size-5" />
              <span className="text-base font-medium">Descuentos en productos</span>
            </li>
          </ul>
          <button className="w-full cursor-pointer py-4 rounded-xl font-black text-lg bg-brand-secondary text-black hover:scale-105 transition-transform">
            Elegir Plan
          </button>
        </article>

     
        <article className="flex flex-col p-8 md:p-12 bg-black border-2 border-zinc-800 rounded-2xl">
          <div className="text-center mb-8">
            <h3 className="text-white text-3xl font-bold mb-2">Plan Anual</h3>
            <p className="text-gray-400 font-medium">Ahorrá 2 meses</p>
          </div>
          <div className="text-center mb-10">
            <div className="flex items-start justify-center text-brand-secondary">
              <span className="text-3xl font-bold mt-2 mr-1">$</span>
              <span className="text-5xl md:text-6xl font-black tracking-tighter">11.990</span>
            </div>
            <p className="text-gray-500 text-lg mt-1">por año</p>
          </div>
          <ul className="space-y-4 mb-12 grow">
            <li className="flex items-start text-gray-300">
              <FaCheck className="text-brand-secondary mt-1 mr-3 shrink-0 size-5" />
              <span className="text-base font-medium">Todo lo del Plan Black</span>
            </li>
            <li className="flex items-start text-gray-300">
              <FaCheck className="text-brand-secondary mt-1 mr-3 shrink-0 size-5" />
              <span className="text-base font-medium">Ahorrás $5.880 al año</span>
            </li>
            <li className="flex items-start text-gray-300">
              <FaCheck className="text-brand-secondary mt-1 mr-3 shrink-0 size-5" />
              <span className="text-base font-medium">Acceso prioritario a eventos</span>
            </li>
            <li className="flex items-start text-gray-300">
              <FaCheck className="text-brand-secondary mt-1 mr-3 shrink-0 size-5" />
              <span className="text-base font-medium">Kit de bienvenida</span>
            </li>
            <li className="flex items-start text-gray-300">
              <FaCheck className="text-brand-secondary mt-1 mr-3 shrink-0 size-5" />
              <span className="text-base font-medium">Congelamiento de 30 días</span>
            </li>
          </ul>
          <button className="w-full py-4 rounded-xl font-black text-lg bg-white text-black hover:scale-105 transition-transform cursor-pointer">
            Elegir Plan
          </button>
        </article>

      </div>
      <p className="text-gray-400 text-center pt-12">Todos los precios son en pesos uruguayos (UYU) • Consultas: 2345-6789</p>
    </section>
  );
}