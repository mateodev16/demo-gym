import { cld } from "../assets/Cloudinary";
const YogaImg = `https://res.cloudinary.com/dcov7zrxx/image/upload/v1768777164/yoga_osqgdz.jpg`;
const HIITImg = `https://res.cloudinary.com/dcov7zrxx/image/upload/v1768681207/photo-1758875569612-94d5e0f1a35f_yoq0pc.jpg`;
const DumbbellsImg = `https://res.cloudinary.com/dcov7zrxx/image/upload/v1768777108/photo-1649068610862-ed43a08442cf_zxbmyi.jpg`;

export default function ActivitiesSection () {
    return (
        <section id="activities" className="bg-zinc-950 w-full md:max-h-[145dvh] pt-12 px-4">
          <h2 className="text-white text-center text-4xl sm:text-5xl font-bold">Nuestras actividades</h2>
          <p className="text-gray-400 text-xl mt-4 text-balance text-center">Más de 100 clases semanales incluidas en tu plan</p>
        
          <div className="grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-row-2 mt-10 gap-6 w-full max-w-full px-2">
                
            <article className="relative md:w-full md:h-full rounded-xl border-2 border-zinc-800 overflow-hidden group transition-all duration-300 hover:border-brand-secondary flex flex-col justify-end">
                <img 
                    src={HIITImg} 
                    alt="Funcional" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

  
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent transition-opacity duration-300"></div>

 
                <div className="relative z-10 p-6 flex flex-col gap-2">
                    <h3 className="text-white font-bold text-2xl">Funcional</h3>
                    <p className="text-zinc-300 text-sm">Entrenamiento de alta intensidad que mejora tu condición física</p>
                    
                    <div className="flex flex-row items-center gap-2">
                        <span className="text-brand-primary font-medium text-sm">Incluido en tu plan</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                    </div>
                </div>
            </article>

            <article className="relative h-80 w-full rounded-xl border-2 border-zinc-800 overflow-hidden group transition-all duration-300 hover:border-brand-secondary flex flex-col justify-end">
    

                <img 
                    src={DumbbellsImg} 
                    alt="Funcional" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />


                <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent transition-opacity duration-300"></div>


                <div className="relative z-10 p-6 flex flex-col gap-2">
                    <h3 className="text-white font-bold text-2xl">Spinning
                    </h3>
                    <p className="text-zinc-300 text-sm">Pedalea al ritmo de la música y quemá calorías</p>
                    
                    <div className="flex flex-row items-center gap-2">
                        <span className="text-brand-primary font-medium text-sm">Incluido en tu plan</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                    </div>
                </div>
            </article>

            <article className="relative h-80 w-full rounded-xl border-2 border-zinc-800 overflow-hidden group transition-all duration-300 hover:border-brand-secondary flex flex-col justify-end">
                

                <img 
                    src={YogaImg} 
                    alt="Funcional" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />


                <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent transition-opacity duration-300"></div>


                <div className="relative z-10 p-6 flex flex-col gap-2">
                    <h3 className="text-white font-bold text-2xl">Yoga
                    </h3>
                    <p className="text-zinc-300 text-sm">Equilibrio entre cuerpo y mente, flexibilidad y bienestar</p>
                    
                    <div className="flex flex-row items-center gap-2">
                        <span className="text-brand-primary font-medium text-sm">Incluido en tu plan</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                    </div>
                </div>
            </article>

            <article className="relative h-80 w-full rounded-xl border-2 border-zinc-800 overflow-hidden group transition-all duration-300 hover:border-brand-secondary flex flex-col justify-end">
                

                <img 
                    src={HIITImg} 
                    alt="Funcional" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />


                <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent transition-opacity duration-300"></div>


                <div className="relative z-10 p-6 flex flex-col gap-2">
                    <h3 className="text-white font-bold text-2xl">Zumba
                    </h3>
                    <p className="text-zinc-300 text-sm">Baila, divertite y ponete en forma al mismo tiempo</p>
                    
                    <div className="flex flex-row items-center gap-2">
                        <span className="text-brand-primary font-medium text-sm">Incluido en tu plan</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                    </div>
                </div>
            </article>

            <article className="relative h-80 w-full rounded-xl border-2 border-zinc-800 overflow-hidden group transition-all duration-300 hover:border-brand-secondary flex flex-col justify-end">
                

                <img 
                    src={YogaImg} 
                    alt="Funcional" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />


                <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent transition-opacity duration-300"></div>


                <div className="relative z-10 p-6 flex flex-col gap-2">
                    <h3 className="text-white font-bold text-2xl">GAP
                    </h3>
                    <p className="text-zinc-300 text-sm">Tonificá glúteos, abdomen y piernas de forma efectiva</p>
                    
                    <div className="flex flex-row items-center gap-2">
                        <span className="text-brand-primary font-medium text-sm">Incluido en tu plan</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                    </div>
                </div>
            </article>

            <article className="relative h-80 w-full rounded-xl border-2 border-zinc-800 overflow-hidden group transition-all duration-300 hover:border-brand-secondary flex flex-col justify-end">
                

                <img 
                    src={DumbbellsImg} 
                    alt="Funcional" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />


                <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent transition-opacity duration-300"></div>


                <div className="relative z-10 p-6 flex flex-col gap-2">
                    <h3 className="text-white font-bold text-2xl">Musculación
                    </h3>
                    <p className="text-zinc-300 text-sm">Área de peso libre y máquinas para ganar fuerza y masa muscular</p>
                    
                    <div className="flex flex-row items-center gap-2">
                        <span className="text-brand-primary font-medium text-sm">Incluido en tu plan</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                    </div>
                </div>
            </article>
                            
                        </div>

        </section>
    )
}