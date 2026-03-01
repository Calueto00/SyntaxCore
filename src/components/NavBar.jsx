import { useEffect, useState } from "react";
import logo from '../assets/logo.svg';

export default function NavBar(){
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const links = [
        { label: 'Ínicio', href: '#hero' },
        { label: 'Sobre Nós', href: '#about' },
        {label: 'Cláusulas', href: '#work'},
        { label: 'Serviços', href: '#services' },
       
    ];

    return (
        <nav className={`fixed w-full z-50 transition-shadow ${scrolled ? 'shadow-lg' : ''}`} aria-label="Main navigation">
            <div className="bg-black/95 text-white backdrop-blur-md">
                <div className="md:max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="border w-13 h-12">
                            <img 
                                src={logo}
                                className="object-cover w-full h-full" 
                                alt="" />
                        </div>
                        <div>
                            <a href="#" className="md:text-lg text-base md:text-lg font-bold text-white">Syntax <span className="text-blue-400">&amp; Core</span></a>
                            <div className="text-xs text-gray-400">Precise Syntax · Powerful Core</div>
                        </div>
                    </div>

                    <div className="hidden md:flex md:items-center md:gap-8">
                        <ul className="flex gap-6 list-none m-0 p-0">
                            {links.map(link => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-gray-300 md:text-lg hover:text-white transition-colors">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                        <a href="#contact" className="ml-4 inline-flex md:text-lg items-center gap-2 bg-blue-700 hover:bg-blue-600 px-3 py-2 rounded-md text-sm transition">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M21 15a2 2 0 0 1-2 2h-4l-3 3v-3H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>
                            Contacto
                        </a>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu" className="p-2 rounded-md bg-white/5">
                            {menuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <line x1="3" y1="12" x2="21" y2="12" />
                                    <line x1="3" y1="18" x2="21" y2="18" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {menuOpen && (
                    <div className="md:hidden px-4 pb-6">
                        <ul className="flex flex-col gap-4">
                            {links.map(link => (
                                <li key={link.label}>
                                    <a href={link.href} className="block px-3 py-2 rounded-md text-gray-300 hover:bg-white/5 hover:text-white transition">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4">
                            <a href="#contact" className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-600 px-3 py-2 rounded-md text-sm transition">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15a2 2 0 0 1-2 2h-4l-3 3v-3H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                                Contacto
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}