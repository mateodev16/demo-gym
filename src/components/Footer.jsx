import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaRegClock } from 'react-icons/fa';
import { Logo } from "../assets/Logo"

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 px-6 font-sans border-t-2 border-brand-primary">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
      
        <div className="space-y-6">
          <div className="flex items-center">
          
            <Logo className="w-16 sm:w-14 md:w-16 h-auto"/>
          </div>
          <p className="text-sm leading-relaxed max-w-[250px]">
            El gimnasio más completo de Uruguay. Entrená sin límites con equipamiento de primera y más de 100 clases grupales.
          </p>
          <div className="flex gap-2">
            <SocialButton icon={<FaFacebookF size={16} />} />
            <SocialButton icon={<FaInstagram size={16} />} />
            <SocialButton icon={<FaTwitter size={16} />} />
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold text-lg mb-6">Enlaces Rápidos</h3>
          <ul className="space-y-3 text-sm">
            {['Inicio', 'Beneficios', 'Clases', 'Planes', 'Unidades'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-brand-secondary transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>


        <div>
          <h3 className="text-white font-bold text-lg mb-6">Ayuda</h3>
          <ul className="space-y-3 text-sm">
            {['Preguntas Frecuentes', 'Términos y Condiciones', 'Política de Privacidad', 'Formas de Pago', 'Trabaja con Nosotros'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-brand-secondary transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

      
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Contacto</h3>
          <ul className="space-y-4 text-sm">
            <ContactItem icon={<FaMapMarkerAlt />} text="Av. 18 de Julio 1234, Minas, Uruguay" />
            <ContactItem icon={<FaPhoneAlt />} text="2345-6789" />
            <ContactItem icon={<FaEnvelope />} text="info@demogym.uy" />
            <ContactItem icon={<FaRegClock />} text="Atención: Lun a Vie 9-20hs" />
          </ul>
        </div>
      </div>


      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center text-[11px] text-zinc-500 uppercase tracking-widest">
        <p>© 2026 Demo Gym. Todos los derechos reservados.</p>
        <p>
          Powered by <span className="text-brand-primary font-bold">Uruguay Fitness</span>
        </p>
      </div>
    </footer>
  );
}

const SocialButton = ({ icon }) => (
  <a href="#" className="bg-zinc-900 w-9 h-9 flex items-center justify-center rounded-md hover:bg-zinc-800 transition-all text-zinc-400 hover:text-brand-primary">
    {icon}
  </a>
);

const ContactItem = ({ icon, text }) => (
  <li className="flex items-start gap-3">
    <span className="text-brand-primary mt-1 shrink-0">{icon}</span>
    <span className="leading-tight">{text}</span>
  </li>
);