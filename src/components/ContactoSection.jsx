// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ContactoSection() {
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
        <section id="contact" className="h-[100vh] bg-black/90 text-white" ref={ref}>
            <motion.div 
                className="md:max-w-5xl px-5 md:px-0 m-auto h-full flex items-center justify-center"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <div className=" w-full md:h-[80%] flex md:flex-row flex-col items-center md:gap-8 gap-4">
                    <motion.div className="p-2 md:w-1/2 text-center md:space-y-4 space-y-2" variants={itemVariants}>
                        <h3 className="md:text-4xl text-2xl font-bold">Junte-se à Nossa Equipe!</h3>
                        <p>Syntax & Core - para o crescimento do seu negócio</p>
                        <div className="border border-black/80 shadow border-b-3 py-4 bg-gradient-to-r 
                        border-b-blue-800 rounded cursor-pointer from-black to-black/40 space-y-2">
                            <span className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-700 to-blue-500 rounded-md text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M22 6v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </span>
                            <h4 className="font-extrabold md:text-xl">Syntaxandcore@gmail.com</h4>
                            <p className="text-sm">Endereço de Email</p>
                        </div>
                    </motion.div>
                    <motion.form 
                        action="https://formsubmit.co/Syntaxandcore@gmail.com"
                        method="post"
                        className="p-2 md:w-1/2 space-y-3"
                        variants={itemVariants}
                    >
                            <input 
                                type="text"
                                name="name"
                                placeholder="Nome..."
                                className="outline-none border w-full rounded p-2 border-black shadow shadow-black bg-black/40 " />
                            <input 
                                type="email"
                                name="email"
                                placeholder="Email..."
                                className="outline-none border w-full rounded p-2 border-black shadow shadow-black bg-black/40" />
                             <input 
                                type="text"
                                name="endereço"
                                placeholder="Endereço..."
                                className="outline-none border w-full rounded p-2 border-black shadow shadow-black bg-black/40 " />
                            <textarea 
                                name="mensagem"
                                className="border w-full md:h-[150px] p-2 border-black shadow shadow-black bg-black/40"
                                placeholder="Mensagem...">

                            </textarea>

                            <button className="border border-black/80 shadow w-full py-2 hover:bg-blue-700 transition ease-in-out
                            rounded-md border-l-3 border-l-blue-800 cursor-pointer hover:scale-105 hover:delay-150 duration-200 flex items-center justify-center gap-3">
                                <span className="text-sm font-medium">Enviar Mensagem</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M5 12h14" />
                                    <path d="M12 5l7 7-7 7" />
                                </svg>
                            </button>
                    </motion.form>
                </div>
            </motion.div>
        </section>
    )
}