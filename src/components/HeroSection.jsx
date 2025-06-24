'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="bg-light-background text-light-textPrimary dark:bg-dark-background dark:text-dark-textPrimary text-center px-4 min-h-screen flex flex-col justify-center items-center">
      {/* Título com efeito ouro só no dark mode */}
      <h2 className="text-4xl font-bold mb-6 gold-gradient">
        MR Serviços Corporativos
      </h2>

      {/* Descrição curta */}
      <p className="text-lg max-w-3xl mx-auto mb-8">
        Soluções práticas e eficientes para empresas que buscam agilidade, economia e confiança.
      </p>

      {/* Missão / Visão / Valores - em cards */}
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        
        {/* Missão */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-1 rounded-lg bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700 h-full"
        >
          <div className="p-6 rounded-md bg-primary shadow hover:shadow-lg transition text-center h-full flex flex-col">
            <div className="flex justify-center mb-4">
              {/* Ícone Missão */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="#d4af37" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2 gold-gradient">Missão</h3>
            <p className="text-sm flex-grow">
              Oferecer soluções corporativas inteligentes e personalizadas, otimizando processos internos e operacionais para empresas de todos os portes com eficiência, transparência e foco em resultados concretos.
            </p>
          </div>
        </motion.div>

        {/* Visão */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-1 rounded-lg bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700 h-full"
        >
          <div className="p-6 rounded-md bg-primary shadow hover:shadow-lg transition text-center h-full flex flex-col">
            <div className="flex justify-center mb-4">
              {/* Ícone Visão */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="#d4af37" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2 gold-gradient">Visão</h3>
            <p className="text-sm flex-grow">
              Ser referência nacional em serviços corporativos terceirizados, reconhecida pela excelência, inovação e confiabilidade no suporte a empresas que buscam crescer com organização e agilidade.
            </p>
          </div>
        </motion.div>

        {/* Valores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="p-1 rounded-lg bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700 h-full"
        >
          <div className="p-6 rounded-md bg-primary shadow hover:shadow-lg transition text-center h-full flex flex-col">
            <div className="flex justify-center mb-4">
              {/* Ícone Valores */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="#d4af37" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6l2.598 5.26L20 12l-5.202 0.74L12 18l-2.798-5.26L4 12l5.202-0.74L12 6z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2 gold-gradient">Valores</h3>
            <ul className="text-sm space-y-1 text-left list-disc list-inside flex-grow">
              <li>Comprometimento com o cliente</li>
              <li>Ética em todas as relações</li>
              <li>Excelência no atendimento</li>
              <li>Agilidade com responsabilidade</li>
              <li>Inovação contínua</li>
              <li>Valorização de pessoas e parcerias</li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="mt-10">
        <a
          href="#contact"
          className="inline-block bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700 text-white px-6 py-3 rounded font-semibold hover:opacity-90 transition"
        >
          Entre em Contato
        </a>
      </div>
    </section>
  );
}
