import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-light-background text-light-textPrimary dark:bg-dark-background dark:text-dark-textPrimary py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left"
      >
        {/* Endereço */}
        <div>
          <h4 className="text-xl font-semibold mb-2 text-primary">Endereço</h4>
          <p>Mogi das Cruzes - SP</p>
        </div>

        {/* Contatos */}
        <div>
          <h4 className="text-xl font-semibold mb-2 text-primary">Contato</h4>
          <p className="flex items-center justify-center md:justify-start space-x-2">
            <MapPinIcon className="w-5 h-5 text-accent" />
            <span>Mogi das Cruzes - SP</span>
          </p>
          <p className="flex items-center justify-center md:justify-start space-x-2 mt-2">
            <EnvelopeIcon className="w-5 h-5 text-accent" />
            <a
              href="mailto:mr.servicos.corporativos@gmail.com"
              className="hover:text-accent transition underline"
            >
              mr.servicos.corporativos@gmail.com
            </a>
          </p>
        </div>

        {/* Redes sociais */}
        <div>
          <h4 className="text-xl font-semibold mb-2 text-primary">Redes Sociais</h4>
          <div className="flex justify-center md:justify-start space-x-4 text-xl">
            <a href="https://wa.me/5511971281458" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="hover:text-accent transition" />
            </a>
            <a href="https://www.linkedin.com/company/mr-servicos" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-accent transition" />
            </a>
            <a href="https://www.instagram.com/mr.servicos.corporativos?igsh=MTM0aWg3NGVsaXM3Zw==" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-accent transition" />
            </a>
          </div>
        </div>
      </motion.div>

      <div className="text-center text-sm mt-6 text-light-textSecondary dark:text-dark-textSecondary">
        © {new Date().getFullYear()} MR Serviços Corporativos. Todos os direitos reservados.
      </div>
    </footer>
  );
}
