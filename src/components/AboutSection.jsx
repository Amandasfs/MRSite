import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-white relative px-6 bg-surface text-light-textPrimary dark:bg-dark-background dark:text-dark-textPrimary overflow-hidden min-h-screen flex flex-col justify-center"
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

      {/* Conteúdo com borda - animado */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative border border-[#0a1f32] p-4 sm:p-5 rounded-md shadow-sm bg-white/60 dark:bg-black/30 max-w-4xl mx-auto"
        style={{ zIndex: 1 }}
      >
        {/* Título */}
        <h3 className="text-2xl font-bold mb-4 text-primary text-center dark:gold-gradient">
          Sobre Nós
        </h3>

        {/* Texto */}
        <div className="text-justify space-y-4 text-base leading-relaxed text-primary dark:text-dark-textPrimary">
          <p>
            A MR Serviços Corporativos é uma empresa especializada em soluções práticas e eficientes para o dia a dia de negócios que buscam agilidade, economia e confiança.
          </p>
          <p>
            Atuamos com foco em serviços administrativos, suporte operacional, atendimento remoto, gestão de documentos e terceirização de processos internos, oferecendo profissionalismo e comprometimento em cada entrega. Nosso objetivo é facilitar a rotina de empresas de todos os portes, com atendimento personalizado, excelência nos resultados e total transparência.
          </p>
          <p>
            Na MR, cada cliente é atendido com dedicação, sempre com foco em produtividade, organização e crescimento sustentável.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
