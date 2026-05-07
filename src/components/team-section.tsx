'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';

interface TeamMember {
  id: number;
  name: string;
  role: 'team.role.raceDirector' | 'team.role.supplyCoordinator' | 'team.role.securityManager' | 'team.role.volunteersCoordinator' | 'team.role.technicalDirector' | 'team.role.medicalManager';
  initials: string;
  color: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Javier Morales',
    role: 'team.role.raceDirector',
    initials: 'JM',
    color: 'bg-blue-500',
  },
  {
    id: 2,
    name: 'María González',
    role: 'team.role.supplyCoordinator',
    initials: 'MG',
    color: 'bg-purple-500',
  },
  {
    id: 3,
    name: 'Carlos Ruiz',
    role: 'team.role.securityManager',
    initials: 'CR',
    color: 'bg-red-500',
  },
  {
    id: 4,
    name: 'Ana Pérez',
    role: 'team.role.volunteersCoordinator',
    initials: 'AP',
    color: 'bg-green-500',
  },
  {
    id: 5,
    name: 'Roberto López',
    role: 'team.role.technicalDirector',
    initials: 'RL',
    color: 'bg-amber-500',
  },
  {
    id: 6,
    name: 'Teresa Sánchez',
    role: 'team.role.medicalManager',
    initials: 'TS',
    color: 'bg-pink-500',
  },
];

export function TeamSection() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="equipo" className="py-16 bg-[var(--bg-primary)] border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <motion.h2
          className="font-roboto-condensed text-4xl font-bold text-[var(--text-primary)] mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('equipo.title')}
        </motion.h2>

        {/* Grid de equipo */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg overflow-hidden hover:border-[var(--text-primary)] transition-all duration-300 flex flex-col items-center p-6 text-center"
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              {/* Avatar */}
              <div
                className={`w-16 h-16 rounded-full ${member.color} flex items-center justify-center mb-4 text-white font-bold text-xl shadow-lg`}
              >
                {member.initials}
              </div>

              {/* Nombre */}
              <h3 className="font-roboto-condensed font-bold text-[var(--text-primary)] text-lg mb-1">
                {member.name}
              </h3>

              {/* Rol */}
              <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                {t(member.role)}
              </p>

              {/* Separador visual */}
              <div className="w-8 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* Sección de agradecimiento */}
        <motion.div
          className="mt-16 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-roboto-condensed text-2xl font-bold text-[var(--text-primary)] mb-3">
            {t('team.volunteers.title')}
          </h3>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            {t('team.volunteers.text')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
