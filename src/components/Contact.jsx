'use client';

import { motion } from "framer-motion";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Erro ao enviar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Erro ao enviar. Tente novamente.");
    }
  };
  return (
  <section
    id="contact"
    className="bg-white relative py-16 px-4 sm:px-6 lg:px-8 bg-surface text-light-textPrimary dark:text-light-textPrimary min-h-screen flex flex-col justify-center"
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

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8"

      >
        <h3 className="text-3xl font-bold text-center mb-8 text-primary">Fale Conosco</h3>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Seu Nome"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 rounded border border-primary text-primary placeholder-primary/50 focus:ring-primary focus:border-primary bg-white dark:bg-dark-surface"
          />
          <input
            type="email"
            name="email"
            placeholder="Seu E-mail"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 rounded border border-primary text-primary placeholder-primary/50 focus:ring-primary focus:border-primary bg-white dark:bg-dark-surface"
          />
          <textarea
            name="message"
            placeholder="Sua Mensagem"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 rounded border border-primary text-primary placeholder-primary/50 focus:ring-primary focus:border-primary bg-white dark:bg-dark-surface"
          />

          <button
            type="submit"
            className="flex items-center justify-center bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700 text-white py-3 px-6 rounded font-semibold hover:opacity-90 transition"
          >
            <PaperAirplaneIcon className="w-5 h-5 mr-2" />
            Enviar Mensagem
          </button>
        </form>
      </motion.div>
    </section>

  );
}
