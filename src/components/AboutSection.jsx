import sobre from '../assets/meeting.jpg';
import meeting2 from '../assets/meeting2.jpg';
import marketing from '../assets/marketing.jpg';
import { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function AboutSection(){
    const [size, setSize] = useState(window.innerWidth);
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

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
            },
        },
    };

    useEffect(() =>{
        window.addEventListener('resize',()=>{
            setSize(window.innerWidth);
        })
    },[])

    return(
        <section id='about' className="py-20 px-4 md:py-32 bg-black/95 to-gray-700" ref={ref}>
            <motion.div 
                className="md:max-w-5xl lg:max-w-5xl px-10 md:px-0 mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Imagem */}

                    {size > 768 && <motion.div className="relative md:h-[500px]" variants={imageVariants}>
                        <img 
                                src={meeting2} 
                                alt="Sobre a Syntax & Core"
                                className="absolute z-10 bottom-0 h-96 md:h-[240px] md:w-[250px] rounded-2xl " 
                            />
                            <img 
                                src={marketing} 
                                className="absolute z-20 border border-slate-100 top-30 right-0 h-96 md:h-[250px] md:w-[250px] rounded-2xl bg-white"
                                alt="" />
                            <img 
                                src={sobre} 
                                alt="Sobre a Syntax & Core"
                                className="absolute z-10 top-0 h-96 md:h-[240px] md:w-[250px] rounded-2xl " 
                            />
                    </motion.div>}

                    {/* Conteúdo */}
                    <motion.div className="space-y-6" variants={itemVariants}>
                        <span className='text-sm text-blue-600 font-bold uppercase tracking-wider'>Sobre Nós</span>
                        <h1 className='font-bold text-2xl md:text-4xl leading-tight text-white mt-3'>
                            A Nossa Engenharia,<br /> O Seu Sucesso
                        </h1>
                        <div className='md:text-lg text-gray-300 space-y-4 leading-relaxed'>
                            <p className='text-justify'>
                                Na Syntax & Core, acreditamos que a tecnologia deve ser invisivel e eficiente.
                            </p>
                            <p className='text-justify'>
                                Somos uma empresa de engenharia informática focada em criar a estrutura 
                                necessária para que o Seu negócio cresça com a precisão que o mercado exige.
                            </p>
                            <div className='text-justify'>
                                Nossos valores - <span className='text-white font-semibold'>Precisão Técnica, Transparência Jurídica e Entrega Escalável</span>
                            </div>
                        </div>

                        <button className='hover:bg-gradient-to-r border-l-3 border-l-blue-700 border border-gray-900 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 
                        px-8 rounded-lg shadow-lg transform delay-150 hover:scale-105 transition-ease-in-out duration-300  cursor-pointer'>
                            Saber Mais
                        </button>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}