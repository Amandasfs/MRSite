'use client';

import { motion } from 'framer-motion';

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white relative py-20 px-6 text-light-textPrimary min-h-screen flex flex-col justify-center"
    >
       {/* SVG preenchendo todo o fundo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 500 500"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-20 dark:opacity-20"
        >
          {[...Array(20)].map((_, i) => {
            const offset = i * 25;
            return (
              <line
                key={i}
                x1={offset}
                y1="0"
                x2="0"
                y2={offset}
                stroke="#b78f00"
                strokeWidth="2"
              />
            );
          })}
          {[...Array(20)].map((_, i) => {
            const offset = 25 * i;
            return (
              <line
                key={i + 20}
                x1="500"
                y1={offset}
                x2={500 - offset}
                y2="500"
                stroke="#b78f00"
                strokeWidth="2"
              />
            );
          })}
        </svg>
      </div>

      <h3 className="text-4xl font-extrabold mb-12 text-center text-primary relative z-10">
        Nossos Serviços
      </h3>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch relative z-10">
        {/* Serviços Administrativos */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-1 rounded-lg bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700 h-full"
        >
          <div className="bg-white rounded-md p-6 shadow-lg flex flex-col h-full">
            <h4 className="text-xl font-bold mb-2 text-primary text-center">Serviços Administrativos</h4>
            <ul className="mx-auto max-w-xs text-left text-primary text-base list-disc list-inside space-y-1">
              <li>Recursos humanos</li>
              <li>Cotação e compra de materiais diversos</li>
              <li>Emissão de notas fiscais e boletos</li>
              <li>Banco de dados</li>
              <li>Digitação documental</li>
            </ul>
          </div>
        </motion.div>

        {/* Gestão Financeira */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-1 rounded-lg bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700 h-full"
        >
          <div className="bg-white rounded-md p-6 shadow-lg flex flex-col h-full">
            <h4 className="text-xl font-bold mb-2 text-primary text-center">Gestão Financeira</h4>
            <ul className="mx-auto max-w-xs text-left text-primary text-base list-disc list-inside space-y-1">
              <li>Controle de fluxo de caixa</li>
              <li>Consulta cadastral a órgãos públicos</li>
              <li>Terceiro setor</li>
            </ul>
          </div>
        </motion.div>

        {/* Atendimento */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-1 rounded-lg bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700 h-full"
        >
          <div className="bg-white rounded-md p-6 shadow-lg flex flex-col h-full">
            <h4 className="text-xl font-bold mb-2 text-primary text-center">Atendimento</h4>
            <ul className="mx-auto max-w-xs text-left text-primary text-base list-disc list-inside space-y-1">
              <li>Contato ao cliente</li>
              <li>Serviço de cobrança</li>
              <li>Suporte</li>
              <li>Acompanhamento e logística de produtos</li>
            </ul>
          </div>
        </motion.div>

        {/* Tecnologia da Informação */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-1 rounded-lg bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700 h-full"
        >
          <div className="bg-white rounded-md p-6 shadow-lg flex flex-col h-full">
            <h4 className="text-xl font-bold mb-2 text-primary text-center">TI - Tecnologia da Informação</h4>
            <ul className="mx-auto max-w-xs text-left text-primary text-base list-disc list-inside space-y-1">
              <li>Suporte Técnico</li>
              <li>Gestão de Infraestrutura</li>
              <li>Segurança da Informação</li>
              <li>Serviços em Nuvem</li>
              <li>Automação de Processos</li>
              <li>Desenvolvimento de Sistemas Simples</li>
              <li>Gestão de Acessos e Usuários</li>
              <li>Consultoria de TI</li>
              <li>Inventário e Controle de Ativos</li>
              <li>Treinamento e Suporte em Ferramentas</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
