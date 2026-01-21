import { 
    FaMobileScreenButton, 
    FaShirt, 
    FaDroplet, 
    FaUsers, 
    FaRegClock,
    FaDumbbell
  } from "react-icons/fa6";

export default function Section() {
    return (
        <section id="benefits" className="flex md:max-h-[120dvh] flex-col items-center bg-black">
            <h2 className="text-white text-nowrap text-4xl sm:text-5xl font-bold mt-12 ">¿Por qué elegirnos?</h2>
            <p className="text-gray-400 text-xl mt-4 text-balance text-center">Todo lo que necesitás para alcanzar tus objetivos</p>
            

            <div className="grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-row-2 mt-10 gap-6 w-full max-w-7xl px-4">
                
                <article className="border-2 p-4 hover:border-brand-secondary w-full h-64 rounded-xl transition-all duration-300 group bg-zinc-950 border-zinc-800 flex flex-col justify-around">
                    <div className="h-16 w-16 bg-brand-primary/10 rounded-2xl p-3 flex items-center justify-center">
                        <FaRegClock className="text-brand-primary size-8" />
                    </div>
                    <h3 className="font-bold text-white text-lg">Abierto 24 horas</h3>
                    <p className="text-zinc-400">Entrená a cualquier hora del día, todos los días del año</p>
                </article>

                <article className=" border-2 p-4 hover:border-brand-secondary w-full h-64 rounded-xl transition-all duration-300 group bg-zinc-950 border-zinc-800 flex flex-col justify-around">
                    <div className="h-16 w-16 bg-brand-primary/10 rounded-2xl p-3 flex items-center justify-center">
                        <FaUsers className="text-brand-primary size-8" />
                    </div>
                    <h3 className="font-bold text-white text-lg">+100 Actividades</h3>
                    <p className="text-zinc-400">Clases grupales incluidas en tu membresía sin costo adicional</p>
                </article>

                <article className=" border-2 p-4 hover:border-brand-secondary w-full h-64 rounded-xl transition-all duration-300 group bg-zinc-950 border-zinc-800 flex flex-col justify-around">
                    <div className="h-16 w-16 bg-brand-primary/10 rounded-2xl p-3 flex items-center justify-center">
                        <FaDumbbell className="text-brand-primary size-8" />
                    </div>
                    <h3 className="font-bold text-white text-lg">Equipamiento Premium</h3>
                    <p className="text-zinc-400">Máquinas de última tecnología y área de peso libre completa</p>
                </article>

                <article className=" border-2 p-4 hover:border-brand-secondary w-full h-64 rounded-xl transition-all duration-300 group bg-zinc-950 border-zinc-800 flex flex-col justify-around">
                    <div className="h-16 w-16 bg-brand-primary/10 rounded-2xl p-3 flex items-center justify-center">
                        <FaMobileScreenButton className="text-brand-primary size-8" />
                    </div>
                    <h3 className="font-bold text-white text-lg">App Exclusiva</h3>
                    <p className="text-zinc-400">Reservá tus clases, seguí tu progreso y más desde tu celular</p>
                </article>

                <article className=" border-2 p-4 hover:border-brand-secondary w-full h-64 rounded-xl transition-all duration-300 group bg-zinc-950 border-zinc-800 flex flex-col justify-around">
                    <div className="h-16 w-16 bg-brand-primary/10 rounded-2xl p-3 flex items-center justify-center">
                        <FaShirt className="text-brand-primary size-8" />
                    </div>
                    <h3 className="font-bold text-white text-lg">Vestuarios</h3>
                    <p className="text-zinc-400">Lockers individuales, duchas y espacios cómodos</p>
                </article>

                <article className=" border-2 p-4 hover:border-brand-secondary w-full h-64 rounded-xl transition-all duration-300 group bg-zinc-950 border-zinc-800 flex flex-col justify-around">
                    <div className="h-16 w-16 bg-brand-primary/10 rounded-2xl p-3 flex items-center justify-center">
                        <FaDroplet className="text-brand-primary size-8" />
                    </div>
                    <h3 className="font-bold text-white text-lg">Zona de Hidratación</h3>
                    <p className="text-zinc-400">Estaciones de agua purificada disponibles en todo el gym</p>
                </article>
                
            </div>
        </section>
    )
}