'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Language = 'es' | 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Navigation
    'nav.modalidades': 'Modalidades',
    'nav.home': 'Inicio',
    'nav.infoPage': 'Info',
    'nav.mediaPage': 'Media',
    'nav.contactPage': 'Contacto',
    'nav.informacion': 'Información',
    'nav.sponsors': 'Sponsors',
    'nav.contacto': 'Contacto',
    'nav.recorrido': 'Recorrido',
    'nav.galeria': 'Galería',
    'nav.resultados': 'Resultados',
    'nav.reglamento': 'Reglamento',
    'nav.acceso': 'Cómo Llegar',

    // Hero
    'hero.title': 'MOGROVEJO TRAIL 2026',
    'hero.date': '25 de julio',
    'hero.location': 'Mogrovejo, Cantabria',
    'hero.distances': '10K Trail',
    'hero.cta': 'Inscribirse',

    // Modalidades
    'modalidades.title': 'El Recorrido',
    'modalidades.distance': 'Distancia',
    'modalidades.elevation': 'Desnivel +',
    'modalidades.pace': 'Ritmo Técnico',
    'modalidades.easy': 'Iniciación',
    'modalidades.medium': 'Intermedia',
    'modalidades.hard': 'Avanzada',
    'modalidades.extreme': 'Experta',

    // Modalities Detail
    'modalities.title': 'Elige tu Modalidad',
    'modalities.trail.title': '10K Trail',
    'modalities.trail.description': 'Una carrera de montaña para corredores con experiencia. Recorrido técnico y exigente a través de senderos alpinos con vistas panorámicas.',
    'modalities.andarines.title': '10K Andarines',
    'modalities.andarines.description': 'Una marcha a pie de montaña para senderistas y caminantes. Mismo recorrido que el Trail pero a ritmo de marcha, perfecto para disfrutar del paisaje sin prisas.',
    'modalities.infantiles.title': 'Carreras Infantiles',
    'modalities.infantiles.description': 'Competiciones para niños de 3 a 16 años. Distancias adaptadas a cada categoría de edad para que los más pequeños disfruten de la carrera.',
    'modalities.profile': 'Perfil de la Carrera',
    'modalities.distance': 'Distancia',
    'modalities.elevation': 'Desnivel',
    'modalities.supplies': 'Avituallamiento',
    'modalities.max': 'Cota Máxima',
    'modalities.min': 'Cota Mínima',

    // Information
    'info.title': 'El Recorrido',
    'info.subtitle': 'Alta Montaña, Pura Adrenalina',
    'info.text1': 'Mogrovejo Trail te lleva a través de los paisajes más espectaculares. Con vistas panorámicas, senderos técnicos y naturaleza virgen, esta carrera combina el desafío físico con la belleza natural.',
    'info.text2': 'Desde los bosques de pinos hasta los pastizales de alta montaña, cada kilómetro te acerca más a ti mismo. Este es más que una carrera: es una experiencia de transformación.',

    // Sponsors
    'sponsors.title': 'Colaboradores Principales',

    // Footer
    'footer.contact': 'Contacto',
    'footer.follow': 'Síguenos',
    'footer.legal': 'Legal',
    'footer.info': 'Información',
    'footer.instagram': 'Instagram',
    'footer.facebook': 'Facebook',
    'footer.twitter': 'Twitter',
    'footer.youtube': 'YouTube',
    'footer.legal.notice': 'Aviso Legal',
    'footer.legal.privacy': 'Política de Privacidad',
    'footer.legal.cookies': 'Política de Cookies',
    'footer.legal.regulation': 'Reglamento',
    'footer.inscriptions': 'Inscripciones',
    'footer.routes': 'Recorridos',
    'footer.faq': 'FAQ',
    'footer.gallery': 'Galería',
    'footer.copyright': '© 2026 Mogrovejo Trail. Todos los derechos reservados.',

    // Cookies
    'cookie.text': 'Utilizamos cookies propias y de terceros para mejorar tu experiencia. Consulta nuestra',
    'cookie.policy': 'Política de cookies',
    'cookie.accept': 'Aceptar',
    'cookie.reject': 'Rechazar',

    // Route / Recorrido
    'recorrido.title': 'El Recorrido',
    'recorrido.gpx': 'Descargar GPX',
    'recorrido.wikiloc': 'Ver en Wikiloc',
    'recorrido.maxAlt': 'Cota máxima',
    'recorrido.minAlt': 'Cota mínima',

    // Gallery / Galería
    'galeria.title': 'Galería',
    'galeria.all': 'Todas',

    // Results / Resultados
    'resultados.title': 'Resultados',
    'resultados.pos': 'Pos.',
    'resultados.runner': 'Corredor',
    'resultados.time': 'Tiempo',
    'resultados.year': 'Año',
    'resultados.pendingTitle': 'Pendiente de publicación',
    'resultados.pendingBody': 'Los resultados oficiales se enlazarán aquí cuando GedSports los publique.',
    'resultados.pendingCta': 'Ver GedSports',

    // Videos
    'videos.title': 'Videos',
    'videos.featured': 'Videos Destacados',

    // Access / Acceso
    'acceso.title': 'Cómo Llegar',
    'acceso.parking': 'Aparcamiento',
    'acceso.maps': 'Abrir en Google Maps',
    'acceso.car': 'En Coche',
    'acceso.bus': 'En Autobús',
    'acceso.train': 'En Tren',
    'acceso.capacity': 'Capacidad',

    // Regulation / Reglamento
    'reglamento.title': 'Reglamento',
    'reglamento.gear': 'Material Obligatorio',
    'reglamento.prices': 'Precios e Inscripción',
    'reglamento.cutoffs': 'Tiempos de Corte',
    'reglamento.cta': 'Inscribirse en GedSports',

    // Supply / Avituallamiento
    'avit.title': 'Avituallamiento',
    'avit.water': 'Agua',
    'avit.food': 'Sólidos',
    'avit.medical': 'Médico',
    'avit.dropbag': 'Drop Bag',

    // FAQ
    'faq.title': 'Preguntas Frecuentes',
    'faq.contact': '¿Más dudas? Escríbenos',
    'faq.email': 'Mogrovejo10ktrail@gmail.com',

    // Volunteers / Voluntarios
    'volunteers.title': 'Nuestros Voluntarios',
    'volunteers.count': '15 voluntarios',
    'volunteers.text1': 'El Mogrovejo Trail es posible gracias a la dedicación y entrega de aproximadamente __COUNT__ que hacen posible este evento cada año.',
    'volunteers.text2': 'Desde la organización previa, pasando por la señalización del recorrido, los avituallamientos, la seguridad en los controles, hasta el montaje y desmontaje del evento, estos voluntarios son el corazón de la prueba. Les expresamos nuestro más profundo agradecimiento por su compromiso con la montaña, la comunidad de Mogrovejo y la promoción de eventos sostenibles en la región.',
    'volunteers.cta': 'Si quieres sumarte como voluntario en futuras ediciones, ¡contáctanos!',

    // Team / Equipo
    'equipo.title': 'El Equipo',
    'equipo.organizers': 'Organizadores',
    'equipo.volunteers': 'Voluntarios',

    // Floating CTA
    'floatingcta.text': 'Inscríbete',
    'floatingcta.register': 'Ir a Inscripciones',

    // Overview
    'overview.eyebrow': '',
    'overview.title': 'Prepara tu Mogrovejo Trail',
    'overview.description': '',
    'overview.info.title': 'Información de carrera',
    'overview.info.body': 'Cómo llegar, perfil del recorrido, avituallamientos, reglamento, resultados y preguntas frecuentes.',
    'overview.media.title': 'Fotos y vídeos',
    'overview.media.body': 'Recorrido, ambiente de carrera y vídeos de la prueba.',
    'overview.contact.title': 'Contacto',
    'overview.contact.body': 'Organización, ubicación del evento y vías directas para resolver dudas.',
    'overview.cta': 'Ver detalles',

    // Contact
    'contact.eyebrow': 'Contacto directo',
    'contact.title': 'La organización a una sola consulta',
    'contact.description': 'Inscripciones, logística del fin de semana, prensa, patrocinios y coordinación con clubs o voluntariado.',
    'contact.cards.email.title': 'Correo',
    'contact.cards.email.text': 'Consultas generales, incidencias de dorsal y colaboraciones.',
    'contact.cards.phone.title': 'Teléfono',
    'contact.cards.phone.text': 'Atención para organización y soporte previo al evento.',
    'contact.cards.location.title': 'Ubicación',
    'contact.cards.location.text': 'Centro operativo del evento y zona de salida en Mogrovejo.',
    'contact.cards.reply.title': 'Tiempo de respuesta',
    'contact.cards.reply.text': 'Intentamos responder todas las consultas en uno o dos días laborables.',
    'contact.box.title': 'Antes de escribirnos',
    'contact.box.description': 'Para recorridos, material obligatorio y accesos, consulta la información de carrera. Para incidencias o colaboraciones, escríbenos.',
    'contact.box.scheduleLabel': 'Horario de atención',
    'contact.box.schedule': 'Lunes a viernes, de 9:00 a 18:00',
    'contact.box.topicsLabel': 'Temas habituales',
    'contact.box.topics': 'Inscripciones, prensa, patrocinio, voluntariado y logística de carrera',
    'contact.box.cta': 'Ir a inscripciones',
  },
  en: {
    // Navigation
    'nav.modalidades': 'Routes',
    'nav.home': 'Home',
    'nav.infoPage': 'Info',
    'nav.mediaPage': 'Media',
    'nav.contactPage': 'Contact',
    'nav.informacion': 'Information',
    'nav.sponsors': 'Sponsors',
    'nav.contacto': 'Contact',
    'nav.recorrido': 'Route',
    'nav.galeria': 'Gallery',
    'nav.resultados': 'Results',
    'nav.reglamento': 'Regulation',
    'nav.acceso': 'How to Get There',

    // Hero
    'hero.title': 'MOGROVEJO TRAIL 2026',
    'hero.date': 'July 25th',
    'hero.location': 'Mogrovejo, Cantabria',
    'hero.distances': '10K Trail',
    'hero.cta': 'Register Now',

    // Modalidades
    'modalidades.title': 'The Race',
    'modalidades.distance': 'Distance',
    'modalidades.elevation': 'Elevation +',
    'modalidades.pace': 'Technical Pace',
    'modalidades.easy': 'Beginner',
    'modalidades.medium': 'Intermediate',
    'modalidades.hard': 'Advanced',
    'modalidades.extreme': 'Expert',

    // Modalities Detail
    'modalities.title': 'Choose Your Modality',
    'modalities.trail.title': '10K Trail',
    'modalities.trail.description': 'A mountain race for experienced runners. Technical and demanding course through alpine trails with panoramic views.',
    'modalities.andarines.title': '10K Walkers',
    'modalities.andarines.description': 'A mountain walk for hikers and trekkers. Same route as the Trail but at hiking pace, perfect to enjoy the landscape without rushing.',
    'modalities.infantiles.title': 'Kids Races',
    'modalities.infantiles.description': 'Competitions for children ages 3 to 16. Distances adapted to each age group so kids can enjoy the race.',
    'modalities.profile': 'Race Profile',
    'modalities.distance': 'Distance',
    'modalities.elevation': 'Elevation',
    'modalities.supplies': 'Aid Stations',
    'modalities.max': 'Max Altitude',
    'modalities.min': 'Min Altitude',

    // Information
    'info.title': 'The Route',
    'info.subtitle': 'High Mountain, Pure Adrenaline',
    'info.text1': 'Mogrovejo Trail takes you through the most spectacular landscapes. With panoramic views, technical trails and virgin nature, this race combines physical challenge with natural beauty.',
    'info.text2': 'From pine forests to high mountain meadows, every kilometer brings you closer to yourself. This is more than a race: it\'s a transformation experience.',

    // Sponsors
    'sponsors.title': 'Main Collaborators',

    // Footer
    'footer.contact': 'Contact',
    'footer.follow': 'Follow Us',
    'footer.legal': 'Legal',
    'footer.info': 'Information',
    'footer.instagram': 'Instagram',
    'footer.facebook': 'Facebook',
    'footer.twitter': 'Twitter',
    'footer.youtube': 'YouTube',
    'footer.legal.notice': 'Legal Notice',
    'footer.legal.privacy': 'Privacy Policy',
    'footer.legal.cookies': 'Cookie Policy',
    'footer.legal.regulation': 'Regulation',
    'footer.inscriptions': 'Registrations',
    'footer.routes': 'Routes',
    'footer.faq': 'FAQ',
    'footer.gallery': 'Gallery',
    'footer.copyright': '© 2026 Mogrovejo Trail. All rights reserved.',

    // Cookies
    'cookie.text': 'We use cookies to improve your experience. Check our',
    'cookie.policy': 'Cookie policy',
    'cookie.accept': 'Accept',
    'cookie.reject': 'Reject',

    // Route / Recorrido
    'recorrido.title': 'The Route',
    'recorrido.gpx': 'Download GPX',
    'recorrido.wikiloc': 'View on Wikiloc',
    'recorrido.maxAlt': 'Max Altitude',
    'recorrido.minAlt': 'Min Altitude',

    // Gallery / Galería
    'galeria.title': 'Gallery',
    'galeria.all': 'All',

    // Results / Resultados
    'resultados.title': 'Results',
    'resultados.pos': 'Pos.',
    'resultados.runner': 'Runner',
    'resultados.time': 'Time',
    'resultados.year': 'Year',
    'resultados.pendingTitle': 'Pending publication',
    'resultados.pendingBody': 'Official results will be linked here once GedSports publishes them.',
    'resultados.pendingCta': 'Open GedSports',

    // Videos
    'videos.title': 'Videos',
    'videos.featured': 'Featured Videos',

    // Access / Acceso
    'acceso.title': 'How to Get There',
    'acceso.parking': 'Parking',
    'acceso.maps': 'Open in Google Maps',
    'acceso.car': 'By Car',
    'acceso.bus': 'By Bus',
    'acceso.train': 'By Train',
    'acceso.capacity': 'Capacity',

    // Regulation / Reglamento
    'reglamento.title': 'Regulation',
    'reglamento.gear': 'Mandatory Gear',
    'reglamento.prices': 'Prices & Registration',
    'reglamento.cutoffs': 'Time Limits',
    'reglamento.cta': 'Register on GedSports',

    // Supply / Avituallamiento
    'avit.title': 'Aid Stations',
    'avit.water': 'Water',
    'avit.food': 'Food',
    'avit.medical': 'Medical',
    'avit.dropbag': 'Drop Bag',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.contact': 'More questions? Write us',
    'faq.email': 'Mogrovejo10ktrail@gmail.com',

    // Volunteers / Voluntarios
    'volunteers.title': 'Our Volunteers',
    'volunteers.count': '15 volunteers',
    'volunteers.text1': 'Mogrovejo Trail is possible thanks to the dedication and commitment of approximately __COUNT__ who make this event possible every year.',
    'volunteers.text2': 'From prior organization, route marking, aid stations, safety at control points, to event setup and takedown, these volunteers are the heart of the race. We express our deepest gratitude for their commitment to the mountains, the Mogrovejo community, and the promotion of sustainable events in the region.',
    'volunteers.cta': 'If you want to join us as a volunteer in future editions, contact us!',

    // Team / Equipo
    'equipo.title': 'The Team',
    'equipo.organizers': 'Organizers',
    'equipo.volunteers': 'Volunteers',

    // Floating CTA
    'floatingcta.text': 'Register',
    'floatingcta.register': 'Go to Registration',

    // Overview
    'overview.eyebrow': '',
    'overview.title': 'Prepare your Mogrovejo Trail',
    'overview.description': '',
    'overview.info.title': 'Race information',
    'overview.info.body': 'How to get there, route profile, aid stations, regulation, results, and frequently asked questions.',
    'overview.media.title': 'Photos and videos',
    'overview.media.body': 'Route views, race atmosphere, and footage from the event.',
    'overview.contact.title': 'Contact',
    'overview.contact.body': 'Organization, event location, and direct ways to reach the team.',
    'overview.cta': 'View details',

    // Contact
    'contact.eyebrow': 'Direct contact',
    'contact.title': 'The organization one message away',
    'contact.description': 'Registration, race weekend logistics, press, sponsorships, and coordination with clubs or volunteers.',
    'contact.cards.email.title': 'Email',
    'contact.cards.email.text': 'General questions, bib issues, and partnerships.',
    'contact.cards.phone.title': 'Phone',
    'contact.cards.phone.text': 'Support for organization and pre-event assistance.',
    'contact.cards.location.title': 'Location',
    'contact.cards.location.text': 'Event operations center and start area in Mogrovejo.',
    'contact.cards.reply.title': 'Reply time',
    'contact.cards.reply.text': 'We aim to answer every inquiry within one or two business days.',
    'contact.box.title': 'Before you write',
    'contact.box.description': 'For routes, mandatory gear, and access, check the race information. For issues or partnerships, write to us.',
    'contact.box.scheduleLabel': 'Office hours',
    'contact.box.schedule': 'Monday to Friday, 9:00 to 18:00',
    'contact.box.topicsLabel': 'Common topics',
    'contact.box.topics': 'Registration, press, sponsorship, volunteering, and race logistics',
    'contact.box.cta': 'Go to registration',
  },
  fr: {
    // Navigation
    'nav.modalidades': 'Parcours',
    'nav.home': 'Accueil',
    'nav.infoPage': 'Info',
    'nav.mediaPage': 'Media',
    'nav.contactPage': 'Contact',
    'nav.informacion': 'Information',
    'nav.sponsors': 'Sponsors',
    'nav.contacto': 'Contact',
    'nav.recorrido': 'Parcours',
    'nav.galeria': 'Galerie',
    'nav.resultados': 'Résultats',
    'nav.reglamento': 'Règlement',
    'nav.acceso': 'Comment Venir',

    // Hero
    'hero.title': 'MOGROVEJO TRAIL 2026',
    'hero.date': '25 juillet',
    'hero.location': 'Mogrovejo, Cantabria',
    'hero.distances': '10K Trail',
    'hero.cta': 'S\'inscrire',

    // Modalidades
    'modalidades.title': 'La Course',
    'modalidades.distance': 'Distance',
    'modalidades.elevation': 'Dénivelé +',
    'modalidades.pace': 'Rythme Technique',
    'modalidades.easy': 'Débutant',
    'modalidades.medium': 'Intermédiaire',
    'modalidades.hard': 'Avancé',
    'modalidades.extreme': 'Expert',

    // Modalities Detail
    'modalities.title': 'Choisissez Votre Modalité',
    'modalities.trail.title': '10K Trail',
    'modalities.trail.description': 'Une course de montagne pour les coureurs expérimentés. Parcours technique et exigeant à travers les sentiers alpins avec des vues panoramiques.',
    'modalities.andarines.title': '10K Randonneurs',
    'modalities.andarines.description': 'Une marche de montagne pour les randonneurs et marcheurs. Même parcours que le Trail mais à rythme de marche, parfait pour profiter du paysage sans stress.',
    'modalities.infantiles.title': 'Courses Enfants',
    'modalities.infantiles.description': 'Compétitions pour les enfants de 3 à 16 ans. Distances adaptées à chaque catégorie d\'âge pour que les plus jeunes profitent de la course.',
    'modalities.profile': 'Profil de la Course',
    'modalities.distance': 'Distance',
    'modalities.elevation': 'Dénivelé',
    'modalities.supplies': 'Ravitaillement',
    'modalities.max': 'Altitude Max',
    'modalities.min': 'Altitude Min',

    // Information
    'info.title': 'Le Parcours',
    'info.subtitle': 'Haute Montagne, Adrénaline Pure',
    'info.text1': 'Mogrovejo Trail vous emmène à travers les paysages les plus spectaculaires. Avec des vues panoramiques, des sentiers techniques et une nature vierge, cette course combine le défi physique avec la beauté naturelle.',
    'info.text2': 'Des forêts de pins aux prairies de haute montagne, chaque kilomètre vous rapproche de vous-même. C\'est bien plus qu\'une course : c\'est une expérience de transformation.',

    // Sponsors
    'sponsors.title': 'Collaborateurs Principaux',

    // Footer
    'footer.contact': 'Contact',
    'footer.follow': 'Suivez-nous',
    'footer.legal': 'Légal',
    'footer.info': 'Information',
    'footer.instagram': 'Instagram',
    'footer.facebook': 'Facebook',
    'footer.twitter': 'Twitter',
    'footer.youtube': 'YouTube',
    'footer.legal.notice': 'Avis Légal',
    'footer.legal.privacy': 'Politique de Confidentialité',
    'footer.legal.cookies': 'Politique de Cookies',
    'footer.legal.regulation': 'Règlement',
    'footer.inscriptions': 'Inscriptions',
    'footer.routes': 'Parcours',
    'footer.faq': 'FAQ',
    'footer.gallery': 'Galerie',
    'footer.copyright': '© 2026 Mogrovejo Trail. Tous droits réservés.',

    // Cookies
    'cookie.text': 'Nous utilisons des cookies pour améliorer votre expérience. Consultez notre',
    'cookie.policy': 'Politique de cookies',
    'cookie.accept': 'Accepter',
    'cookie.reject': 'Rejeter',

    // Route / Recorrido
    'recorrido.title': 'Le Parcours',
    'recorrido.gpx': 'Télécharger GPX',
    'recorrido.wikiloc': 'Voir sur Wikiloc',
    'recorrido.maxAlt': 'Altitude Max',
    'recorrido.minAlt': 'Altitude Min',

    // Gallery / Galería
    'galeria.title': 'Galerie',
    'galeria.all': 'Toutes',

    // Results / Resultados
    'resultados.title': 'Résultats',
    'resultados.pos': 'Pos.',
    'resultados.runner': 'Coureur',
    'resultados.time': 'Temps',
    'resultados.year': 'Année',
    'resultados.pendingTitle': 'Publication en attente',
    'resultados.pendingBody': 'Les résultats officiels seront liés ici dès que GedSports les publiera.',
    'resultados.pendingCta': 'Voir GedSports',

    // Videos
    'videos.title': 'Vidéos',
    'videos.featured': 'Vidéos en Vedette',

    // Access / Acceso
    'acceso.title': 'Comment Venir',
    'acceso.parking': 'Stationnement',
    'acceso.maps': 'Ouvrir dans Google Maps',
    'acceso.car': 'En Voiture',
    'acceso.bus': 'En Bus',
    'acceso.train': 'En Train',
    'acceso.capacity': 'Capacité',

    // Regulation / Reglamento
    'reglamento.title': 'Règlement',
    'reglamento.gear': 'Équipement Obligatoire',
    'reglamento.prices': 'Prix et Inscription',
    'reglamento.cutoffs': 'Barrières Horaires',
    'reglamento.cta': 'S\'inscrire sur GedSports',

    // Supply / Avituallamiento
    'avit.title': 'Ravitaillement',
    'avit.water': 'Eau',
    'avit.food': 'Aliments',
    'avit.medical': 'Médical',
    'avit.dropbag': 'Drop Bag',

    // FAQ
    'faq.title': 'Questions Fréquemment Posées',
    'faq.contact': 'Plus de questions? Écrivez-nous',
    'faq.email': 'Mogrovejo10ktrail@gmail.com',

    // Volunteers / Voluntarios
    'volunteers.title': 'Nos Bénévoles',
    'volunteers.count': '15 bénévoles',
    'volunteers.text1': 'Le Mogrovejo Trail est possible grâce au dévouement et à l\'engagement d\'environ __COUNT__ qui rendent cet événement possible chaque année.',
    'volunteers.text2': 'De l\'organisation préalable, en passant par le balisage du parcours, les ravitaillements, la sécurité aux postes de contrôle, jusqu\'à la mise en place et au démontage de l\'événement, ces bénévoles sont le cœur de la course. Nous leur exprimons notre plus profonde gratitude pour leur engagement envers la montagne, la communauté de Mogrovejo et la promotion d\'événements durables dans la région.',
    'volunteers.cta': 'Si tu veux nous rejoindre en tant que bénévole pour les éditions futures, contacte-nous!',

    // Team / Equipo
    'equipo.title': 'L\'Équipe',
    'equipo.organizers': 'Organisateurs',
    'equipo.volunteers': 'Bénévoles',

    // Floating CTA
    'floatingcta.text': 'S\'inscrire',
    'floatingcta.register': 'Aller à l\'Inscription',

    // Overview
    'overview.eyebrow': '',
    'overview.title': 'Préparez votre Mogrovejo Trail',
    'overview.description': '',
    'overview.info.title': 'Informations de course',
    'overview.info.body': 'Accès, profil du parcours, ravitaillements, règlement, résultats et questions fréquentes.',
    'overview.media.title': 'Photos et vidéos',
    'overview.media.body': 'Parcours, ambiance de course et vidéos de l’épreuve.',
    'overview.contact.title': 'Contact',
    'overview.contact.body': 'Organisation, lieu de l\'événement et moyens directs pour nous joindre.',
    'overview.cta': 'Voir les détails',

    // Contact
    'contact.eyebrow': 'Contact direct',
    'contact.title': 'L\'organisation à un message de distance',
    'contact.description': 'Inscriptions, logistique du week-end, presse, sponsors et coordination avec clubs ou bénévoles.',
    'contact.cards.email.title': 'Email',
    'contact.cards.email.text': 'Questions générales, incidents de dossard et collaborations.',
    'contact.cards.phone.title': 'Téléphone',
    'contact.cards.phone.text': 'Support pour l\'organisation et assistance avant l\'événement.',
    'contact.cards.location.title': 'Lieu',
    'contact.cards.location.text': 'Centre opérationnel de l\'événement et zone de départ à Mogrovejo.',
    'contact.cards.reply.title': 'Délai de réponse',
    'contact.cards.reply.text': 'Nous essayons de répondre à chaque demande sous un ou deux jours ouvrables.',
    'contact.box.title': 'Avant de nous écrire',
    'contact.box.description': 'Pour les parcours, le matériel obligatoire et l\'accès, consultez les informations de course. Pour les incidents ou collaborations, écrivez-nous.',
    'contact.box.scheduleLabel': 'Horaires',
    'contact.box.schedule': 'Du lundi au vendredi, de 9h00 à 18h00',
    'contact.box.topicsLabel': 'Sujets fréquents',
    'contact.box.topics': 'Inscription, presse, sponsoring, bénévolat et logistique de course',
    'contact.box.cta': 'Aller à l\'inscription',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * Proveedor de contexto de idioma
 * Soporta: Español, Inglés, Francés
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es');

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const saved = localStorage.getItem('mgt-language') as Language | null;
      if (saved === 'es' || saved === 'en' || saved === 'fr') {
        setLanguageState(saved);
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('mgt-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe usarse dentro de LanguageProvider');
  }
  return context;
}
