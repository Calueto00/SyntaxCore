import { useState } from "react"

const SocialIcon = ({ name, href }) => {
  const icons = {
    "E-mail": (
      <svg className="w-6 h-6 hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
    "WhatsApp": (
      <svg className="w-6 h-6 hover:text-green-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371 0-.57 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.105 0-2.193.474-2.957 1.238-1.543 1.543-1.543 4.05 0 5.593 1.543 1.543 4.05 1.543 5.593 0 1.543-1.543 1.543-4.05 0-5.593-.763-.764-1.852-1.238-2.957-1.238"/>
      </svg>
    ),
    "LinkedIn": (
      <svg className="w-6 h-6 hover:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.728-2.004 1.431-.103.25-.129.599-.129.949v5.425h-3.554s.05-8.736 0-9.646h3.554v1.364c.429-.662 1.196-1.604 2.905-1.604 2.12 0 3.714 1.383 3.714 4.355v5.531zM5.337 9.433c-1.144 0-1.915-.759-1.915-1.71 0-.955.77-1.71 1.954-1.71 1.184 0 1.915.755 1.94 1.71 0 .951-.756 1.71-1.979 1.71zm1.575 10.019H3.762V9.807h3.15v9.645zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
      </svg>
    ),
    "Instagram": (
      <svg className="w-6 h-6 hover:text-pink-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.331.012 7.052.07 3.406.272.97 2.686.772 6.332.012 7.611 0 8.036 0 12c0 3.964.012 4.389.07 5.668.198 3.646 2.634 6.061 6.28 6.263 1.279.058 1.704.07 5.68.07 3.977 0 4.401-.012 5.68-.07 3.646-.202 6.061-2.634 6.263-6.28.058-1.279.07-1.704.07-5.68 0-3.976-.012-4.401-.07-5.68C23.798 2.686 21.364.272 17.668.07 16.389.012 15.964 0 12 0z"/>
        <circle cx="12" cy="12" r="3.565"/>
        <circle cx="18.406" cy="5.594" r=".833"/>
      </svg>
    )
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-110 transition-transform">
      {icons[name] || null}
    </a>
  )
}

export default function Footer(){
    const [data] = useState(new Date())
    
    const socialLinks = [
      { name: "E-mail", href: "mailto:Syntaxandcore@gmail.com" },
      { name: "WhatsApp", href: "https://wa.me/958354061" },
      { name: "LinkedIn", href: "https://ao.linkedin.com/in/syntax-and-core-2ab5293b3" },
      { name: "Instagram", href: "https://www.instagram.com/syntax_and_core?igsh=MWkycDZqYW1pZ3Q5dA==" }
    ]

    const navLinks = ["Ínicio", "Sobre Nós", "Serviços", "Contacto"]

    return(
        <footer className="bg-gradient-to-b from-black to-black/95 text-white border-t border-gray-800">
           <div className="md:max-w-6xl mx-auto md:px-4 px-5 py-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-xl font-bold text-blue-400">Syntax & Core</h3>
                            <p className="text-gray-400 text-sm">Precise Syntax - Powerful Core</p>
                        </div>
                        
                        <div>
                            <h4 className="text-sm font-semibold text-gray-300 mb-3">Conecte-se conosco</h4>
                            <div className="flex gap-4">
                                {socialLinks.map(link => (
                                    <SocialIcon key={link.name} name={link.name} href={link.href} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    
                        <div>
                            <h4 className="font-semibold text-blue-400 mb-4">Navegação</h4>
                            <ul className="space-y-2">
                                {navLinks.map(link => (
                                    <li key={link} className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm">
                                        {link}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="">
                            <h4 className="font-semibold text-blue-400 mb-4">Informações</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li className="hover:text-white transition-colors cursor-pointer">Localização</li>
                                <li className="hover:text-white transition-colors cursor-pointer">Privacidade</li>
                                <li className="hover:text-white transition-colors cursor-pointer">Termos de Uso</li>
                            </ul>
                        </div>
                    
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-center text-center md:text-left gap-4 text-sm text-gray-400">
                        <span>
                            © {data.getFullYear()} <span className="text-white font-semibold">Syntax & Core</span>. Todos direitos reservados.
                        </span>
                       
                    </div>
                </div>
           </div>
        </footer>
    )
}