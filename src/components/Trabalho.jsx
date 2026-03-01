import foto from "../assets/trabalhamos.jpg";
import clausula from '../assets/clausulas.pdf';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Trabalho() {
    const [ref, isInView] = useScrollAnimation(0.2);

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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
            },
        },
    };

    return (
        <section id="work" className="md:h-[65vh] h-[100vh] bg-gradient-to-t from-black/95 to-black/90 text-white" ref={ref}>
            <motion.div 
                className="md:max-w-5xl px-10 md:px-0 m-auto h-full flex items-center justify-center"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <div className=" w-full md:h-[80%] h-full flex flex-col md:flex-row items-center justify-center md:gap-8">
                    <motion.div className="p-2 md:w-1/2 text-center space-y-4 md:h-full h-1/3 w-full" variants={itemVariants}>
                       <img src={foto} alt="Trabalho" className="w-full h-full object-cover rounded-lg" />
                    </motion.div>
                    <motion.div className="p-2 md:w-1/2 w-full text-start md:space-y-4 space-y-2" variants={itemVariants}>
                        <span className="text-blue-700 font-bold md:text-lg text-sm">Cláusulas de Trabalho</span>
                        <h3 className="md:text-4xl text-2xl font-bold">Como Trabalhamos</h3>
                        <p className="text-justify md:text-lg">Acreditamos na clareza. Todos os nossos projctos 
                            seguem normas rigorosas de entrega, prazos e suporte pós-venda.
                        </p>
                        <p className="text-justify md:text-lg">
                            Consulte os nossos termos de Transparência e Garantia para mais detalhes sobre nossos processos e políticas.
                        </p>

                        <a 
                            href={clausula}
                            className="border border-black/80 md:w-1/2 shadow py-3 md:px-4 px-10 hover:bg-blue-700 transition ease-in-out
                            rounded-md border-l-3 border-l-blue-800 cursor-pointer hover:scale-105 hover:delay-150 duration-200 flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <path d="M14 2v6h6" />
                                <path d="M8 12h8" />
                                <path d="M8 16h8" />
                            </svg>
                            <span className="underline">Ver Cláusulas</span>
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}