import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Rota para envio de email
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Configuração do transporte SMTP (Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Email do remetente (sua conta Gmail)
        pass: process.env.EMAIL_PASS, // Senha de app do Gmail
      },
    });

    // Conteúdo do email
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_RECEIVER, // Destinatário final
      subject: `Nova mensagem de ${name}`,
      text: `
        Nome: ${name}
        Email: ${email}
        Mensagem: ${message}
      `,
    };

    // Envia o email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Email enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    res.status(500).json({ success: false, message: "Erro ao enviar email." });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});