import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import syntax from '../assets/syntax.mp4';

export default function HeroSection(){
    const [videoKey, setVideoKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setVideoKey(k => k + 1), 12000);
        return () => clearInterval(interval);
    }, []);

    // Framer Motion animation configuration
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
            },
        },
    };

    return(
        <section id="hero" className="relative h-screen overflow-hidden">
            {/* Background video */}
            <video
                key={videoKey}
                autoPlay
                muted
                loop
                className="absolute inset-0 w-full h-full object-cover"
                aria-hidden="true"
            >
                <source src={syntax} type="video/mp4" />
            </video>

            {/* Soft overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

            {/* Content */}
            <motion.div 
                className="relative z-10 md:max-w-5xl lg:max-w-5xl px-5 md:px-0 mx-auto h-full flex flex-col justify-center md:px-6 text-center md:text-left"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="md:max-w-3xl">
                    <motion.p 
                        className="inline-flex items-center mt-5 md:mt-0 gap-2 text-sm text-blue-300 font-medium mb-4"
                        variants={itemVariants}
                    >
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-white/10 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 12h18" />
                                <path d="M3 6h18" />
                                <path d="M3 18h18" />
                            </svg>
                        </span>
                        Soluções digitais &amp; Engenharia
                    </motion.p>

                    <motion.h1 
                        className="text-3xl md:text-6xl font-extrabold leading-tight text-white"
                        variants={itemVariants}
                    >
                        Precise Syntax <span className="text-blue-400">·</span> <span className="text-blue-300">Powerful Core</span>
                    </motion.h1>

                    <motion.p 
                        className="mt-4 text-gray-300 text-lg md:text-xl"
                        variants={itemVariants}
                    >Transformamos ideias complexas em produtos digitais escaláveis, performáticos e seguros.</motion.p>

                    <motion.div 
                        className="mt-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center md:justify-start"
                        variants={itemVariants}
                    >
                        <a href="#services" className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-md shadow-md transform hover:-translate-y-0.5 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M14 2v7l3-3 4 4-9 9-4-4 4-9 3 3V2z" />
                            </svg>
                            Explorar Soluções
                        </a>

                        <a href="#contact" className="inline-flex items-center gap-2 border border-white/10 text-white px-4 py-2 rounded-md hover:bg-white/5 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M21 15a2 2 0 0 1-2 2h-4l-3 3v-3H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>
                            Contacto
                        </a>
                    </motion.div>

                    <motion.div 
                        className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left"
                        variants={itemVariants}
                    >
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-white/5 rounded-md inline-flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 12h3l3 8 4-16 3 8h4" />
                                </svg>
                            </div>
                            <div>
                                <div className="font-semibold text-white">Performance</div>
                                <div className="text-sm text-gray-400">Otimização e escalabilidade desde o início.</div>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-white/5 rounded-md inline-flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                            </div>
                            <div>
                                <div className="font-semibold text-white">Confiabilidade</div>
                                <div className="text-sm text-gray-400">Arquiteturas seguras e testes automatizados.</div>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-white/5 rounded-md inline-flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-pink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                </svg>
                            </div>
                            <div>
                                <div className="font-semibold text-white">Suporte</div>
                                <div className="text-sm text-gray-400">Apoio contínuo e manutenção dedicada.</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll hint */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-300 animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </div>
        </section>
    )
}