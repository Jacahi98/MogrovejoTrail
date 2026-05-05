'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, User } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const mailtoLink = `mailto:Mogrovejo10ktrail@gmail.com?subject=Contacto%20desde%20web:%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`)}`;
      window.location.href = mailtoLink;

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error sending form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="font-roboto-condensed text-2xl font-bold text-[var(--text-primary)] mb-6">
        Envíanos un mensaje
      </h3>

      <div className="space-y-4 mb-6">
        {/* Name */}
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">Nombre</label>
          <div className="relative">
            <User className="absolute left-3 top-3 w-5 h-5 text-[var(--text-secondary)]" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2.5 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
              placeholder="Tu nombre"
            />
          </div>
        </motion.div>

        {/* Email */}
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}>
          <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 w-5 h-5 text-[var(--text-secondary)]" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2.5 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
              placeholder="tu@email.com"
            />
          </div>
        </motion.div>

        {/* Message */}
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">Mensaje</label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-[var(--text-secondary)]" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full pl-10 pr-4 py-2.5 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors resize-none"
              placeholder="Cuéntanos..."
            />
          </div>
        </motion.div>
      </div>

      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-700 text-sm"
        >
          ¡Gracias! Tu mensaje ha sido enviado correctamente.
        </motion.div>
      )}

      <motion.button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3 bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white font-semibold rounded-lg transition-all disabled:opacity-50"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {loading ? 'Enviando...' : 'Enviar mensaje'}
      </motion.button>
    </motion.form>
  );
}
