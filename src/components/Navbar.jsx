import { motion } from "framer-motion";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar o menu no mobile
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-light-background text-light-textPrimary dark:bg-dark-background dark:text-dark-textPrimary shadow"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo da Empresa" className="h-12 w-auto" />
            <span className="text-xl font-bold gold-gradient whitespace-nowrap hidden md:inline-block">
              M R SERVIÇOS CORPORATIVOS
            </span>

          </div>

          {/* Botão Hambúrguer para mobile */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent transition"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label="Abrir menu"
            >
              {/* Ícone do hambúrguer */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  // Ícone de X para fechar
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  // Ícone de hambúrguer
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Menu desktop */}
          <ul className="hidden md:flex space-x-6 text-lg">
            <li>
              <a href="#services" className="hover:text-accent transition">
                Serviços
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-accent transition">
                Sobre
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-accent transition">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Menu mobile (dropdown) */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <ul className="px-2 pt-2 pb-4 space-y-1 text-lg">
            <li>
              <a
                href="#services"
                className="block px-3 py-2 rounded-md hover:text-accent transition"
                onClick={() => setIsOpen(false)} // Fecha o menu ao clicar
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block px-3 py-2 rounded-md hover:text-accent transition"
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md hover:text-accent transition"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      )}
    </motion.nav>
  );
}
