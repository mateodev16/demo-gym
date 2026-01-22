import { useEffect, useState } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa6";

export default function Testimonios() {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch('https://demo-gym-backend.onrender.com/api/comentarios') 
      .then(response => response.json())
      .then(data => {
        setData(data); 
      })
      .catch(error => console.error("Error:", error));
  }, []);

  return (
    <section className="bg-black py-20 px-4">
   
      <div className="text-center mb-16">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
          Historias de Éxito
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Miles de personas ya alcanzaron sus objetivos con nosotros
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {data.map((item) => (
          <article 
            key={item.id} 
            className="border-2 bg-black border-zinc-900 rounded-2xl p-8 hover:border-zinc-700 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex mb-8 justify-between items-start">
                <div className="flex gap-1">
                  {[...Array(item.estrellas)].map((_, i) => (
                    <FaStar key={i} className="text-brand-secondary size-5" />
                  ))}
                </div>
                <FaQuoteLeft className="text-brand-secondary/20 size-12" />
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                "{item.texto}"
              </p>
            </div>

            <div className="border-t border-zinc-800 pt-6">
              <h4 className="text-white font-bold text-xl">{item.usuario}</h4>
              <span className="text-brand-primary font-medium block mt-1 uppercase text-sm tracking-wider">
                {item.logro}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}