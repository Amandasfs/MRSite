'use client';

import { motion } from 'framer-motion';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6 text-light-textPrimary">
      <h3 className="text-4xl font-extrabold mb-12 text-center text-primary">
        Nossos Serviços
      </h3>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch">
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
