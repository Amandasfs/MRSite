import { motion } from "framer-motion";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center justify-between p-4 bg-light-background text-light-textPrimary dark:bg-dark-background dark:text-dark-textPrimary shadow"
    >
      {/* Logo à esquerda */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo da Empresa" className="h-12 w-auto" />
        <span className="text-xl font-bold gold-gradient">M R SERVIÇOS CORPORATIVOS</span>
      </div>

      {/* Itens de navegação ao centro */}
      <ul className="flex space-x-6 text-lg">
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
    </motion.nav>
  );
}
