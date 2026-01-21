import { useState } from "react"
import { Logo } from "../assets/Logo"


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <header className="sticky top-0 z-50 bg-black w-full border-b-2 border-brand-primary">
            <div className="max-w-7xl mx-auto pl-2 sm:pl-4 lg:pl-6 pr-4 sm:pr-6 lg:pr-8 py-3 sm:py-4 flex items-center justify-between">
                <button 
                    onClick={scrollToTop}
                    onTouchStart={scrollToTop}
                    className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-brand-primary active:opacity-80 touch-manipulation min-h-[44px] min-w-[44px] flex items-center"
                    aria-label="Scroll to top"
                >
                    <Logo className="w-16 sm:w-14 md:w-16 h-auto" />
                </button>
                
         
                <button
                    onClick={toggleMenu}
                    className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-brand-primary"
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>

          
                <ul className="hidden md:flex items-center gap-4 sm:gap-6  text-white">
                    <li className="hover:text-brand-primary transition-colors duration-300">
                        <a href="#home">Inicio</a>
                    </li>
                    <li className="hover:text-brand-primary transition-colors duration-300">
                        <a href="#benefits">Beneficios</a>
                    </li>
                    <li className="hover:text-brand-primary transition-colors duration-300">
                        <a href="#activities">Clases</a>
                    </li>
                    <li className="hover:text-brand-primary transition-colors duration-300">
                        <a href="#pricing">Planes</a>
                    </li>
                    <li className="hover:shadow-lg hover:bg-brand-secondary transition-colors duration-300 p-2 bg-brand-primary text-black rounded-lg font-bold">
                        <a href="#start-now" className="font-color-black">Únete Ahora</a>
                    </li>
                </ul>
            </div>


            {isMenuOpen && (
                <div className="md:hidden bg-black border-t border-brand-primary">
                    <ul className="flex flex-col py-4 px-4 gap-4 text-white">
                        <li className="hover:text-brand-primary transition-colors duration-300">
                            <a href="#home" onClick={closeMenu}>Inicio</a>
                        </li>
                        <li className="hover:text-brand-primary transition-colors duration-300">
                            <a href="#benefits" onClick={closeMenu}>Beneficios</a>
                        </li>
                        <li className="hover:text-brand-primary transition-colors duration-300">
                            <a href="#activities" onClick={closeMenu}>Clases</a>
                        </li>
                        <li className="hover:text-brand-primary transition-colors duration-300">
                            <a href="#pricing" onClick={closeMenu}>Planes</a>
                        </li>
                        <li className="hover:shadow-lg hover:bg-brand-secondary transition-colors duration-300 p-2 bg-branbrand-primary text-black rounded-sm font-bold">
                            <a href="#start-now" onClick={closeMenu}>Únete Ahora</a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    )
}
