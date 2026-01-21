import { cld } from "../assets/Cloudinary";
import { AdvancedImage } from '@cloudinary/react';
import ButtonPartner from "./ButtonPartner"
import SeePricingButton from "./SeePricingButton";
import { FaLocationDot } from "react-icons/fa6"; 


export default function Main() {
    const myImg = cld.image("photo-1758875569612-94d5e0f1a35f_yoq0pc")
    .format('auto') 
  .quality('auto'); 
    const imageUrl = myImg.toURL();

    return (
        <main 
        className="relative min-h-[110vh] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
    >
      
        <div className="absolute inset-0  bg-black/25 md:bg-black/75"></div>
    
      
        <div className="absolute inset-0 shadow-[inset_450px_0_1000px_-100px_black,inset_-150px_0_500px_-100px_black]"></div>
    
       
      
<div className="relative z-10 flex min-h-[115vh] items-start justify-start md:justify-center px-5 md:px-10">
    
   
    <section id="home" className="flex flex-col items-start lg:mt-20 mt-10 w-full md:w-2/4">
        
        <span className="bg-brand-primary mb-10 font-bold px-6 py-3 rounded-lg whitespace-nowrap text-black">
            ¡OFERTA ESPECIAL!
        </span>
        
        <h1 className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-7xl font-bold whitespace-nowrap tracking-tighter">
            Entrená sin límites
        </h1>
        <p className="text-brand-primary text-7xl font-bold mt-10">
            Desde $990
        </p>
        <h2 className="text-white font-bold mt-10 text-2xl">El gimnasio más completo de Uruguay</h2>
        <ul className="text-white marker:text-brand-primary marker:text-xl sm:text-xl mt-10 ml-6 list-disc">
            <li>Más de 100 actividades grupales incluidas</li>
            <li>Acceso ilimitado 24/7</li>
            <li>Equipamiento de última generación</li>
        </ul>
        <div className="flex flex-col md:flex-row">
        <ButtonPartner />
        <SeePricingButton />
        </div>
        <div className="flex items-center gap-2 mt-10 text-white">
            <FaLocationDot className="text-brand-primary size-5" />
            <span>Encontrá la unidad más cercana a vos</span>
        </div>
    </section>
</div>
    </main>
    )
}