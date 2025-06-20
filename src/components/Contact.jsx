'use client';

import { motion } from "framer-motion";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode integrar com algum serviço de envio de email
    console.log("Form enviado:", formData);
    alert("Mensagem enviada com sucesso!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 bg-surface dark:bg-dark-background text-light-textPrimary dark:text-light-textPrimary"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
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
