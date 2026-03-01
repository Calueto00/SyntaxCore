import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Escolha(){
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
        <section className="h-screen bg-black/90 grid" ref={ref}>
            <motion.div 
                className=" text-white md:max-w-5xl xl:max-w-5xl px-10 md:px-0 m-auto"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <div className="flex flex-col  md:flex-row items-center gap-8">
                    <motion.div className="md:h-[500px] md:w-1/2 flex-col flex md:flex-col md:justify-center md:space-y-4 space-y-3" variants={itemVariants}>
                        <span className="text-blue-700 font-semibold md:text-lg text-sm">Porque nos escolher?</span>
                        <h1 className="font-bold md:text-4xl text-2xl">Soluções Customizadas <br /> para Sucesso do seu Negócio</h1>
                        <div>
                            <p className="md:text-lg text-gray-300 w-full text-justify">Nossa Equipe é especializada em criar 
                                soluções tecnológicas personalizadas para atender
                                 às necessidades do específicas do seu negócio. 
                             </p>
                        </div>

                        <div>
                            <a href="https://wa.me/958354061" target="_blank" rel="noreferrer" className="px-4 py-2 rounded text-white bg-blue-800 hover:scale-105 transition-ease-in-out delay-150 duration-200 cursor-pointer inline-flex items-center gap-2">
                                <span>Converse Connosco</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M20.52 3.48A11.88 11.88 0 0012 .5C6.21.5 1.5 5.21 1.5 11c0 1.92.5 3.79 1.45 5.42L.5 22l5.71-2.01A11.42 11.42 0 0012 22.5c5.79 0 10.5-4.71 10.5-10.5 0-1.95-.56-3.77-1.48-5.5z" />
                                    <path d="M17.53 14.37c-.25-.12-1.48-.73-1.71-.81-.23-.09-.4-.13-.57.13-.17.26-.65.82-.8.99-.15.16-.31.18-.57.06-.25-.11-1.06-.39-2.02-1.25-.75-.66-1.26-1.48-1.41-1.73-.15-.25-.02-.38.11-.51.11-.11.25-.31.38-.47.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.57-1.37-.78-1.87-.2-.49-.41-.42-.57-.42-.15 0-.33 0-.51 0-.17 0-.45.06-.69.31-.24.25-.92.9-.92 2.19 0 1.29.94 2.53 1.07 2.71.13.18 1.85 2.83 4.49 3.97 3.14 1.42 3.14 0 3.7-.36.26-.16 1.48-.6 1.69-1.18.21-.58.21-1.07.15-1.18-.06-.12-.23-.17-.48-.3z" />
                                </svg>
                            </a>
                        </div>
                    </motion.div>

                    {/* articles */}
                    <motion.div className="relative md:space-y-4 grid  grid-cols-2 gap-4 md:grid-cols-1 transition-all ease-in-out duration-300 md:w-[49%]" variants={containerVariants}>
                        <article className="border-l-3 border-blue-700 md:p-3 p-3 shadow space-y-2 hover:shadow-blue-700
                        rounded-md bg-black/20 cursor-pointer hover:scale-105 transition-ease-in-out delay-150 duration-200" as={motion.article} variants={itemVariants}>
                            <h3 className="md:text-xl text-sm font-bold">Precisão e Qualidade</h3>
                            <p className="text-gray-200 text-sm">Comprometemo-nos com a precisão técnica e a entrega 
                                de soluções escaláveis que atendam ás exigências do mercado moderno.</p>
                        </article>
                        <motion.article className="border-l-3 border-blue-700 md:p-3 p-3 shadow space-y-2 hover:shadow-blue-700
                        rounded-md bg-black/45 cursor-pointer hover:scale-105 transition-ease-in-out delay-150 duration-200" variants={itemVariants}>
                            <h3 className="md:text-xl text-sm font-semibold">Transparência e Confiabilidade</h3>
                            <p className="text-gray-200 text-sm">Trabalhamos com tranparência jurídica
                                 e ética, garantindo que você tenha confiança em nossa parceria.</p>
                        </motion.article>
                        <motion.article className="border-l-3 border-blue-700 md:p-3 p-3 shadow space-y-2 hover:shadow-blue-700
                        rounded-md bg-black/45 cursor-pointer hover:scale-105 transition-ease-in-out delay-150 duration-200" variants={itemVariants}>
                            <h3 className="md:text-xl text-sm font-semibold">Soluções Escaláveis</h3>
                            <p className="text-gray-200 text-sm">Nossas soluções s-ao projectadas para crescer 
                                com o seu negócio, adaptando-se às suas necessidades em constante evolução.</p>
                        </motion.article>
                        <motion.article className=" md:p-3 p-3 shadow border-l-3 border-blue-700 space-y-2 hover:shadow-blue-700
                        rounded-md bg-black/45 cursor-pointer hover:scale-105 transition-ease-in-out delay-150 duration-200" variants={itemVariants}>
                            <h3 className="md:text-xl text-sm font-semibold">Focados no Seu Sucesso</h3>
                            <p className="text-gray-200 text-sm">Acreditamos que a tecnológia deve ser invisível e eficiente, 
                                permitindo que você se concentre no que realmente importa.</p>
                        </motion.article>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}