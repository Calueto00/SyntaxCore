import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function ServiceSection(){
    const cards = [
        {
            title: 'ERP — Enterprise Resource Planning',
            desc: 'Controle estoque, finanças e RH num único ecossistema inteligente.',
            colorClass: 'from-blue-700 to-blue-500',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                </svg>
            )
        },
        {
            title: 'CRM — Customer Relationship Management',
            desc: 'Organize suas vendas e nunca perca o histórico do cliente.',
            colorClass: 'from-green-600 to-green-400',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5" />
                    <circle cx="9" cy="7" r="4" />
                </svg>
            )
        },
        {
            title: 'Software de Faturação',
            desc: 'Soluções rápidas e certificadas para o mercado nacional.',
            colorClass: 'from-yellow-600 to-yellow-400',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="14" rx="2" />
                    <path d="M3 7h18" />
                </svg>
            )
        },
        {
            title: 'Sistemas à Medida',
            desc: 'Desenvolvimento de softwares específicos para fluxos de trabalho complexos.',
            colorClass: 'from-purple-700 to-purple-500',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="M4.9 4.9l1.4 1.4" />
                    <path d="M18.7 18.7l1.4 1.4" />
                    <path d="M4.9 19.1l1.4-1.4" />
                    <path d="M18.7 5.3l1.4-1.4" />
                </svg>
            )
        }
        ,
        {
            title: 'Aplicações Mobile',
            desc: 'Apps nativas e híbridas para iOS e Android com foco em UI/UX.',
            colorClass: 'from-indigo-600 to-indigo-400',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="7" y="2" width="10" height="20" rx="2" />
                    <circle cx="12" cy="18" r="1" />
                </svg>
            )
        },
        {
            title: 'WebSites & Web App',
            desc: 'Portais corporativos de alta perfomance e plataformas escaláveis.',
            colorClass: 'from-cyan-600 to-cyan-400',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="12" rx="2" />
                    <path d="M8 20h8" />
                </svg>
            )
        },
        {
            title: 'Branding e Logos',
            desc: 'Construção de identidades visuais que transmitem autoridade.',
            colorClass: 'from-pink-600 to-pink-400',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M6 4v6a6 6 0 0012 0V4" />
                    <path d="M4 20h16" />
                </svg>
            ),
        },{
            title: 'UI/UX Design',
            desc: 'Desenho de interfaces intuitivas que facilitam a vida do utilizador.',
            colorClass: 'from-pink-600 to-pink-400',
            icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M6 4v6a6 6 0 0012 0V4" />
                        <path d="M4 20h16" />
                </svg>
            ),
        },{
            title: 'Crescimento Digital e Gestão de Tráfego',
            desc: 'Estratégias de Ads para conversão imediata',
            colorClass: 'from-rose-600 to-rose-400',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 3v18h18" />
                    <path d="M7 14l4-4 4 6 4-10" />
                </svg>
            )
        }
    ]

    const chunkSize = 3
    const slides = []
    for (let i = 0; i < cards.length; i += chunkSize) slides.push(cards.slice(i, i + chunkSize))

    const [current, setCurrent] = useState(0)

    const [ref, isInView] = useScrollAnimation(0.2)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    }

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
    }

    useEffect(() => {
        if (slides.length === 0) return
        const id = setInterval(() => {
            setCurrent((p) => (p + 1) % slides.length)
        }, 4000)
        return () => clearInterval(id)
    }, [slides.length])

    return (
        <section id='services' className="py-16 bg-black/95 h-[100vh] relative " ref={ref}>
            <motion.div 
                className="md:max-w-5xl px-10 md:px-0 m-auto text-white flex items-center justify-center h-full"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <div className="">
                    <motion.div className="mb-6 text-center" variants={itemVariants}>
                        <h3 className="text-blue-700 font-semibold md:text-lg text-sm">Nossos Serviços</h3>
                        <h2 className="md:text-4xl text-2xl font-extrabold">Serviços Prestados Para Elevar Seu Negócio</h2>
                        <p className="text-gray-400 mt-2 text-justify md:text-center text-justify">Soluções tecnológicas pensadas para escalar operações, otimizar processos e melhorar a experiência do cliente.</p>
                    </motion.div>

                    <div className="">
                        <motion.div className="overflow-hidden" variants={itemVariants}>
                            <div className="flex flex-col md:flex-row md:gap-6 gap-3 transition-all delay-150 duration-200 ">
                                {slides.length > 0 && slides[current].map((card) => (
                                    <div key={card.title} className="flex-1 md:p-4 p-2 bg-black/90 space-y-2 border border-gray-800 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all">
                                        <div className="flex md:flex-col items-start md:gap-4 gap-2">
                                            <div className={`p-3 bg-gradient-to-r ${card.colorClass} rounded-md inline-flex items-center justify-center`}>
                                                {card.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold md:text-xl">{card.title}</h4>
                                                <p className="text-gray-400 md:mt-2 mt-1 text-sm">{card.desc}</p>
                                            </div>
                                        </div>
                                        <Link  
                                            to={`https://wa.me/958354061?text=Serviço: ${card.title} \n descrição: ${card.desc}`}
                                            className='text-blue-700 md:text-base text-sm font-semibold hover:border-b-2 transition-ease-in-out delay-150 duration-200'
                                            >Requisitar </Link>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.button
                            onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
                            aria-label="Anterior"
                            className="absolute left-6 cursor-pointer top-1/2 transition ease-in-out delay-150 duration-300
                            -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-4 hover:bg-blue-700  rounded-full"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6" />
                            </svg>
                        </motion.button>

                        <motion.button
                            onClick={() => setCurrent((c) => (c + 1) % slides.length)}
                            aria-label="Próximo"
                            className="absolute right-6 top-1/2 cursor-pointer transition ease-in-out delay-150 duration-300
                             -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-4 hover:bg-blue-700 rounded-full"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </motion.button>

                        <motion.div className="flex justify-center gap-2 mt-4" variants={itemVariants}>
                            {slides.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrent(idx)}
                                    aria-label={`Ir para slide ${idx + 1}`}
                                    className={`w-2 h-2 rounded-full ${idx === current ? 'bg-white' : 'bg-gray-600'}`}
                                />
                            ))}
                        </motion.div>
                    </div>

                </div>

            </motion.div>
        </section>
    )
}