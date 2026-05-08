'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState, ReactNode } from 'react';

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

    // Modalities Section Short Info
    'modalities.trail.shortTitle': '10K Trail',
    'modalities.trail.shortDesc': 'Para corredores',
    'modalities.andarines.shortTitle': '10K Andarines',
    'modalities.andarines.shortDesc': 'Para senderistas',
    'modalities.infantiles.shortTitle': 'Carreras Infantiles',
    'modalities.infantiles.shortDesc': 'Para niños (3-16 años)',
    'modalities.routeCard.distance': 'Distancia',
    'modalities.routeCard.elevation': 'Desnivel',
    'modalities.routeCard.wikiloc': 'Ver ruta en Wikiloc →',

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

    // Hero Countdown
    'hero.countdown.days': 'Días',
    'hero.countdown.hours': 'Horas',
    'hero.countdown.minutes': 'Minutos',
    'hero.countdown.seconds': 'Segundos',

    // Modalities Start Times
    'modalities.trail.startTime': 'Salida: 11:30 h.',
    'modalities.andarines.startTime': 'Salida: 11:35 h.',
    'modalities.infantiles.startTime': 'Salida: 10:30 - 11:00 h.',

    // Workshop
    'workshop.title': 'Entrenamiento Previo',
    'workshop.subtitle': 'Técnica de Carrera, Calentamiento y Pisada',
    'workshop.date': '25 de julio de 2026',
    'workshop.time': '10:40 h.',
    'workshop.location': 'Arco de Salida',
    'workshop.description': 'Aprende técnicas esenciales de trail running directamente de un instructor especializado. Esta charla previa a la carrera cubre calentamiento adecuado, técnica de pisada en montaña y consejos prácticos para optimizar tu rendimiento. Perfecta para participantes de todas las modalidades.',
    'workshop.instructor': 'Instructor especializado en trail running',
    'workshop.cta': 'Inscribirse al Entreno',
    'workshop.form.name': 'Tu inscripción es importante para nosotros',
    'workshop.label.date': 'Fecha',
    'workshop.label.time': 'Hora',
    'workshop.label.location': 'Ubicación',
    'workshop.label.instructor': 'Instructor',
    'workshop.label.free': 'Precio',
    'workshop.noLimit': '✓ Sin límite de inscripciones',
    'workshop.free': 'Gratis',

    // FAQ with extended Q&A
    'faq.q4.question': '¿Qué pasa si no hago el corte de tiempo?',
    'faq.q4.answer': 'Entendemos que el trail puede ser exigente. Si no alcanzas un control en el tiempo establecido, nuestro equipo de seguridad te acompañará al siguiente punto. Tu seguridad es prioritaria.',
    'faq.q5.question': '¿Puedo llevar perro o mascota?',
    'faq.q5.answer': 'En la modalidad Andarines sí, siempre que tu mascota esté controlada. En el Trail no está permitido por seguridad de todos los participantes.',
    'faq.q6.question': '¿Hay límite de edad?',
    'faq.q6.answer': 'Los menores de 18 años deben ir acompañados de un adulto responsable. No hay límite máximo de edad, ¡somos inclusivos!',
    'faq.q7.question': '¿Qué material recomendado debo llevar en Andarines?',
    'faq.q7.answer': 'Calzado cómodo de montaña, ropa por capas, protección solar, agua y algo de comida energética. El clima en altura puede cambiar rápidamente.',
    'faq.q8.question': '¿Cuáles son los tiempos récord?',
    'faq.q8.answer': 'Los mejores tiempos rondan 1 hora para Trail y 2:30 horas para Andarines. Pero recuerda, el objetivo es disfrutar y terminar con seguridad.',
    'faq.q9.question': '¿Hay premios y trofeos?',
    'faq.q9.answer': 'Sí, tenemos premios para los primeros clasificados en cada categoría. Todos los finalizadores reciben un diploma y un recordatorio especial del evento.',

    // Reglamento
    'reglamento.title': 'Reglamento',
    'reglamento.schedule.title': 'Horarios y Recogida de Dorsales',
    'reglamento.schedule.bibPickup': 'Recogida de Dorsales',
    'reglamento.schedule.bibDate': 'Sábado 25 de julio de 2026',
    'reglamento.schedule.bibTime': '09:00 a 11:15 h.',
    'reglamento.schedule.bibLocation': 'Se retiran en el arco de salida (finca junto al pueblo de Mogrovejo)',
    'reglamento.schedule.startTimes': 'Horarios de Salida',
    'reglamento.schedule.startTrail': '🏃 Trail 10km: 11:30 h.',
    'reglamento.schedule.startAndarines': '🚶 Andarines 10km: 11:35 h.',
    'reglamento.schedule.startKids': '👶 Carreras infantiles: entre 10:30 y 11:00 h. (horario flexible)',
    'reglamento.prices': 'Precios e Inscripción',
    'reglamento.prices.colModality': 'Modalidad',
    'reglamento.prices.colBefore': 'Hasta 25 jun',
    'reglamento.prices.colAfter': 'Después 25 jun',
    'reglamento.prices.includes': 'Incluye: seguro de accidentes, dorsal, bolsa del corredor y acceso a avituallamiento.',
    'reglamento.prices.register': 'Inscripción: www.gedsports.com/race/mogrovejo-trail-2026',
    'reglamento.prices.modal10k': '10K Trail',
    'reglamento.prices.andarines10k': '10K Andarines',
    'reglamento.prices.early': '15€',
    'reglamento.prices.late': '20€',
    'reglamento.important.title': 'Información Importante',
    'reglamento.important.bib': '✓ Dorsal obligatorio: Debe llevarse visible en todo momento',
    'reglamento.important.clothing': '✓ Ropa obligatoria: Prohibido correr sin camiseta ni pantalón',
    'reglamento.important.animals': '✓ En la marcha (Andarines): Se permite participar con animales (atados)',
    'reglamento.important.noAnimals': '✓ En el Trail: Prohibida la participación con animales',
    'reglamento.important.insurance': '✓ Seguro: Incluido en la inscripción para todos los participantes',
    'reglamento.important.minors': '✓ Menores: Pueden participar acompañados por un adulto responsable',
    'reglamento.supplies.title': 'Avituallamientos',
    'reglamento.supplies.trail': 'Trail 10km',
    'reglamento.supplies.at5km': '~5km: Punto de líquidos',
    'reglamento.supplies.atFinish': 'Meta: Sólidos y líquidos',
    'reglamento.supplies.andarines': 'Marcha Andarines',
    'reglamento.supplies.andarinesText': 'Un punto de avituallamiento al inicio/fin de la prueba',
    'reglamento.supplies.tip': '💡 Se recomienda llevar un recipiente reutilizable para evitar residuos plásticos',
    'reglamento.refund.title': 'Política de Devoluciones',
    'reglamento.refund.noRefund': 'Las inscripciones son definitivas y no se realizará devolución en caso de no poder participar.',
    'reglamento.refund.exceptions': 'Excepciones: Se considerará devolución en caso de suspensión de la prueba por:',
    'reglamento.refund.noPermit': 'Falta de permisos necesarios',
    'reglamento.refund.authority': 'Prohibiciones de autoridades competentes',
    'reglamento.refund.traffic': 'Restricciones de tráfico',
    'reglamento.cta': 'Inscribirse en GedSports',
    'reglamento.readyToRace': '¿Listo para correr? Completa tu inscripción en GedSports',

    // Supply Points
    'modalities.supply.start': 'Inicio',
    'modalities.supply.startLabel': 'Inicio',
    'modalities.supply.liquids': 'Líquidos',
    'modalities.supply.at4km': '4km',
    'modalities.supply.solidsLiquids': 'Sólidos y Líquidos',
    'modalities.supply.finish': 'Meta',

    // Gallery
    'gallery.title': 'Galería Memorias de MogrovejoTrail 2025',

    // Team
    'team.role.raceDirector': 'Director de Carrera',
    'team.role.supplyCoordinator': 'Coordinadora Avituallamiento',
    'team.role.securityManager': 'Responsable Seguridad',
    'team.role.volunteersCoordinator': 'Coordinadora Voluntarios',
    'team.role.technicalDirector': 'Director Técnico',
    'team.role.medicalManager': 'Responsable Médico',
    'team.volunteers.title': 'Voluntarios',
    'team.volunteers.text': 'Gracias a más de 50 voluntarios que hacen posible cada edición del Mogrovejo Trail.',

    // Video Section
    'videoSection.title': 'Mogrovejo Trail 2025',
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

    // Modalities Section Short Info
    'modalities.trail.shortTitle': '10K Trail',
    'modalities.trail.shortDesc': 'For runners',
    'modalities.andarines.shortTitle': '10K Walkers',
    'modalities.andarines.shortDesc': 'For hikers',
    'modalities.infantiles.shortTitle': 'Kids Races',
    'modalities.infantiles.shortDesc': 'For kids (3-16)',
    'modalities.routeCard.distance': 'Distance',
    'modalities.routeCard.elevation': 'Elevation',
    'modalities.routeCard.wikiloc': 'View route on Wikiloc →',

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

    // Supply / Avituallamiento
    'avit.title': 'Aid Stations',
    'avit.water': 'Water',
    'avit.food': 'Food',
    'avit.medical': 'Medical',
    'avit.dropbag': 'Drop Bag',

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


    // Hero Countdown
    'hero.countdown.days': 'Days',
    'hero.countdown.hours': 'Hours',
    'hero.countdown.minutes': 'Minutes',
    'hero.countdown.seconds': 'Seconds',

    // Modalities Start Times
    'modalities.trail.startTime': 'Start: 11:30 AM',
    'modalities.andarines.startTime': 'Start: 11:35 AM',
    'modalities.infantiles.startTime': 'Start: 10:30 - 11:00 AM',

    // Workshop
    'workshop.title': 'Pre-Race Training',
    'workshop.subtitle': 'Running Technique, Warmup and Footwork',
    'workshop.date': 'July 25th, 2026',
    'workshop.time': '10:40 AM',
    'workshop.location': 'Start Line',
    'workshop.description': 'Learn essential trail running techniques directly from a specialized instructor. This pre-race talk covers proper warmup, mountain running footwork, and practical tips to optimize your performance. Perfect for participants of all modalities.',
    'workshop.instructor': 'Trail running specialist instructor',
    'workshop.cta': 'Register for Training',
    'workshop.form.name': 'Your registration is important to us',
    'workshop.label.date': 'Date',
    'workshop.label.time': 'Time',
    'workshop.label.location': 'Location',
    'workshop.label.instructor': 'Instructor',
    'workshop.label.free': 'Price',
    'workshop.noLimit': '✓ No registration limit',
    'workshop.free': 'Free',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.contact': 'More questions? Contact us',
    'faq.email': 'Mogrovejo10ktrail@gmail.com',
    'faq.q4.question': 'What if I miss the time cut?',
    'faq.q4.answer': 'We understand that trail running can be demanding. If you don\'t reach a control within the established time, our safety team will accompany you to the next point. Your safety is our priority.',
    'faq.q5.question': 'Can I bring a dog or pet?',
    'faq.q5.answer': 'In the Andarines modality yes, as long as your pet is under control. In the Trail it is not permitted for everyone\'s safety.',
    'faq.q6.question': 'Is there an age limit?',
    'faq.q6.answer': 'Minors under 18 must be accompanied by a responsible adult. There is no maximum age limit, we are inclusive!',
    'faq.q7.question': 'What recommended gear should I bring for Andarines?',
    'faq.q7.answer': 'Comfortable mountain footwear, layered clothing, sun protection, water and energy food. Weather at altitude can change quickly.',
    'faq.q8.question': 'What are the record times?',
    'faq.q8.answer': 'Best times are around 1 hour for Trail and 2:30 hours for Andarines. But remember, the goal is to enjoy and finish safely.',
    'faq.q9.question': 'Are there prizes and trophies?',
    'faq.q9.answer': 'Yes, we have prizes for top finishers in each category. All finishers receive a diploma and a special event memento.',

    // Reglamento
    'reglamento.title': 'Race Regulations',
    'reglamento.schedule.title': 'Schedule and Bib Pickup',
    'reglamento.schedule.bibPickup': 'Bib Pickup',
    'reglamento.schedule.bibDate': 'Saturday, July 25, 2026',
    'reglamento.schedule.bibTime': '9:00 to 11:15 AM',
    'reglamento.schedule.bibLocation': 'Collected at the start line (estate near Mogrovejo village)',
    'reglamento.schedule.startTimes': 'Start Times',
    'reglamento.schedule.startTrail': '🏃 Trail 10km: 11:30 AM',
    'reglamento.schedule.startAndarines': '🚶 Andarines 10km: 11:35 AM',
    'reglamento.schedule.startKids': '👶 Kids races: between 10:30 and 11:00 AM (flexible schedule)',
    'reglamento.prices': 'Prices and Registration',
    'reglamento.prices.colModality': 'Modality',
    'reglamento.prices.colBefore': 'Until Jun 25',
    'reglamento.prices.colAfter': 'After Jun 25',
    'reglamento.prices.includes': 'Includes: accident insurance, bib, runner\'s kit and access to aid stations.',
    'reglamento.prices.register': 'Registration: www.gedsports.com/race/mogrovejo-trail-2026',
    'reglamento.prices.modal10k': '10K Trail',
    'reglamento.prices.andarines10k': '10K Walkers',
    'reglamento.prices.early': '€15',
    'reglamento.prices.late': '€20',
    'reglamento.important.title': 'Important Information',
    'reglamento.important.bib': '✓ Mandatory bib: Must be worn visibly at all times',
    'reglamento.important.clothing': '✓ Mandatory clothing: Running without shirt or pants prohibited',
    'reglamento.important.animals': '✓ In the hike (Andarines): Animals allowed (leashed)',
    'reglamento.important.noAnimals': '✓ In the Trail: Animal participation prohibited',
    'reglamento.important.insurance': '✓ Insurance: Included for all participants',
    'reglamento.important.minors': '✓ Minors: Can participate with responsible adult',
    'reglamento.supplies.title': 'Aid Stations',
    'reglamento.supplies.trail': 'Trail 10km',
    'reglamento.supplies.at5km': '~5km: Liquid station',
    'reglamento.supplies.atFinish': 'Finish: Solids and liquids',
    'reglamento.supplies.andarines': 'Andarines Hike',
    'reglamento.supplies.andarinesText': 'One aid station at start/finish of the race',
    'reglamento.supplies.tip': '💡 We recommend bringing a reusable container to avoid plastic waste',
    'reglamento.refund.title': 'Refund Policy',
    'reglamento.refund.noRefund': 'Registrations are final and no refund will be issued if you cannot participate.',
    'reglamento.refund.exceptions': 'Exceptions: Refund will be considered in case of race cancellation due to:',
    'reglamento.refund.noPermit': 'Lack of required permits',
    'reglamento.refund.authority': 'Prohibitions by competent authorities',
    'reglamento.refund.traffic': 'Traffic restrictions',
    'reglamento.cta': 'Register on GedSports',
    'reglamento.readyToRace': 'Ready to race? Complete your registration on GedSports',

    // Supply Points
    'modalities.supply.start': 'Start',
    'modalities.supply.startLabel': 'Start',
    'modalities.supply.liquids': 'Liquids',
    'modalities.supply.at4km': '4km',
    'modalities.supply.solidsLiquids': 'Solids & Liquids',
    'modalities.supply.finish': 'Finish',

    // Gallery
    'gallery.title': 'Gallery Memories of MogrovejoTrail 2025',

    // Team
    'team.role.raceDirector': 'Race Director',
    'team.role.supplyCoordinator': 'Supply Coordinator',
    'team.role.securityManager': 'Safety Manager',
    'team.role.volunteersCoordinator': 'Volunteers Coordinator',
    'team.role.technicalDirector': 'Technical Director',
    'team.role.medicalManager': 'Medical Manager',
    'team.volunteers.title': 'Volunteers',
    'team.volunteers.text': 'Thanks to over 50 volunteers who make each edition of Mogrovejo Trail possible.',

    // Video Section
    'videoSection.title': 'Mogrovejo Trail 2025',
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

    // Modalities Section Short Info
    'modalities.trail.shortTitle': '10K Trail',
    'modalities.trail.shortDesc': 'Pour coureurs',
    'modalities.andarines.shortTitle': '10K Randonneurs',
    'modalities.andarines.shortDesc': 'Pour randonneurs',
    'modalities.infantiles.shortTitle': 'Courses Enfants',
    'modalities.infantiles.shortDesc': 'Pour enfants (3-16 ans)',
    'modalities.routeCard.distance': 'Distance',
    'modalities.routeCard.elevation': 'Dénivelé',
    'modalities.routeCard.wikiloc': 'Voir le parcours sur Wikiloc →',

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

    // Supply / Avituallamiento
    'avit.title': 'Ravitaillement',
    'avit.water': 'Eau',
    'avit.food': 'Aliments',
    'avit.medical': 'Médical',
    'avit.dropbag': 'Drop Bag',

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


    // Hero Countdown
    'hero.countdown.days': 'Jours',
    'hero.countdown.hours': 'Heures',
    'hero.countdown.minutes': 'Minutes',
    'hero.countdown.seconds': 'Secondes',

    // Modalities Start Times
    'modalities.trail.startTime': 'Départ : 11h30',
    'modalities.andarines.startTime': 'Départ : 11h35',
    'modalities.infantiles.startTime': 'Départ : 10h30 - 11h00',

    // Workshop
    'workshop.title': 'Entraînement Préalable',
    'workshop.subtitle': 'Technique de Course, Échauffement et Foulée',
    'workshop.date': '25 juillet 2026',
    'workshop.time': '10h40',
    'workshop.location': 'Ligne d\'Arrivée',
    'workshop.description': 'Apprenez les techniques essentielles du trail running directement auprès d\'un instructeur spécialisé. Cette conférence pré-course couvre l\'échauffement approprié, la technique de foulée en montagne et des conseils pratiques pour optimiser votre performance. Parfait pour les participants de toutes les modalités.',
    'workshop.instructor': 'Instructeur spécialisé en trail running',
    'workshop.cta': 'S\'inscrire à l\'Entraînement',
    'workshop.form.name': 'Votre inscription est importante pour nous',
    'workshop.label.date': 'Date',
    'workshop.label.time': 'Heure',
    'workshop.label.location': 'Lieu',
    'workshop.label.instructor': 'Instructeur',
    'workshop.label.free': 'Tarif',
    'workshop.noLimit': '✓ Sans limite d\'inscription',
    'workshop.free': 'Gratuit',

    // FAQ
    'faq.title': 'Questions Fréquemment Posées',
    'faq.contact': 'Plus de questions ? Contactez-nous',
    'faq.email': 'Mogrovejo10ktrail@gmail.com',
    'faq.q4.question': 'Que se passe-t-il si je rate la barrière horaire ?',
    'faq.q4.answer': 'Nous comprenons que le trail peut être exigeant. Si vous n\'atteignez pas un contrôle dans le temps établi, notre équipe de sécurité vous accompagnera au point suivant. Votre sécurité est notre priorité.',
    'faq.q5.question': 'Puis-je amener un chien ou un animal ?',
    'faq.q5.answer': 'Dans la modalité Andarines oui, tant que votre animal est sous contrôle. En Trail ce n\'est pas autorisé pour la sécurité de tous.',
    'faq.q6.question': 'Y a-t-il une limite d\'âge ?',
    'faq.q6.answer': 'Les mineurs de moins de 18 ans doivent être accompagnés d\'un adulte responsable. Il n\'y a pas de limite d\'âge maximum, nous sommes inclusifs !',
    'faq.q7.question': 'Quel équipement recommandé dois-je apporter pour les Andarines ?',
    'faq.q7.answer': 'Chaussures de montagne confortables, vêtements en couches, protection solaire, eau et nourriture énergétique. La météo en altitude peut changer rapidement.',
    'faq.q8.question': 'Quels sont les temps records ?',
    'faq.q8.answer': 'Les meilleurs temps sont autour d\'1 heure pour Trail et 2:30 heures pour Andarines. Mais n\'oubliez pas, l\'objectif est de profiter et de terminer en toute sécurité.',
    'faq.q9.question': 'Y a-t-il des prix et des trophées ?',
    'faq.q9.answer': 'Oui, nous avons des prix pour les premiers classés dans chaque catégorie. Tous les finishers reçoivent un diplôme et un souvenir spécial de l\'événement.',

    // Reglamento
    'reglamento.title': 'Règlement',
    'reglamento.schedule.title': 'Horaires et Retrait des Dossards',
    'reglamento.schedule.bibPickup': 'Retrait des Dossards',
    'reglamento.schedule.bibDate': 'Samedi 25 juillet 2026',
    'reglamento.schedule.bibTime': 'De 9h00 à 11h15',
    'reglamento.schedule.bibLocation': 'Retiré à la ligne de départ (domaine près du village de Mogrovejo)',
    'reglamento.schedule.startTimes': 'Horaires de Départ',
    'reglamento.schedule.startTrail': '🏃 Trail 10km: 11h30',
    'reglamento.schedule.startAndarines': '🚶 Andarines 10km: 11h35',
    'reglamento.schedule.startKids': '👶 Courses enfants: entre 10h30 et 11h00 (horaire flexible)',
    'reglamento.prices': 'Tarifs et Inscription',
    'reglamento.prices.colModality': 'Modalité',
    'reglamento.prices.colBefore': 'Jusqu\'au 25 juin',
    'reglamento.prices.colAfter': 'Après le 25 juin',
    'reglamento.prices.includes': 'Inclut: assurance accidents, dossard, kit coureur et accès aux ravitaillements.',
    'reglamento.prices.register': 'Inscription: www.gedsports.com/race/mogrovejo-trail-2026',
    'reglamento.prices.modal10k': '10K Trail',
    'reglamento.prices.andarines10k': '10K Randonneurs',
    'reglamento.prices.early': '15€',
    'reglamento.prices.late': '20€',
    'reglamento.important.title': 'Informations Importantes',
    'reglamento.important.bib': '✓ Dossard obligatoire: Doit être porté visiblement à tout moment',
    'reglamento.important.clothing': '✓ Tenue obligatoire: Interdiction de courir sans t-shirt ni pantalon',
    'reglamento.important.animals': '✓ Dans la marche (Andarines): Animaux autorisés (en laisse)',
    'reglamento.important.noAnimals': '✓ En Trail: Participation avec animaux interdite',
    'reglamento.important.insurance': '✓ Assurance: Incluse pour tous les participants',
    'reglamento.important.minors': '✓ Mineurs: Peuvent participer avec un adulte responsable',
    'reglamento.supplies.title': 'Ravitaillements',
    'reglamento.supplies.trail': 'Trail 10km',
    'reglamento.supplies.at5km': '~5km: Point de liquides',
    'reglamento.supplies.atFinish': 'Arrivée: Solides et liquides',
    'reglamento.supplies.andarines': 'Marche Andarines',
    'reglamento.supplies.andarinesText': 'Un point de ravitaillement au départ/arrivée de la course',
    'reglamento.supplies.tip': '💡 Nous recommandons d\'apporter un récipient réutilisable pour éviter les déchets plastiques',
    'reglamento.refund.title': 'Politique de Remboursement',
    'reglamento.refund.noRefund': 'Les inscriptions sont définitives et aucun remboursement ne sera accordé en cas d\'impossibilité de participer.',
    'reglamento.refund.exceptions': 'Exceptions: Le remboursement sera envisagé en cas d\'annulation de la course en raison de:',
    'reglamento.refund.noPermit': 'Manque de permis nécessaires',
    'reglamento.refund.authority': 'Interdictions par les autorités compétentes',
    'reglamento.refund.traffic': 'Restrictions de circulation',
    'reglamento.cta': 'S\'inscrire sur GedSports',
    'reglamento.readyToRace': 'Prêt à courir ? Complétez votre inscription sur GedSports',

    // Supply Points
    'modalities.supply.start': 'Départ',
    'modalities.supply.startLabel': 'Départ',
    'modalities.supply.liquids': 'Liquides',
    'modalities.supply.at4km': '4km',
    'modalities.supply.solidsLiquids': 'Solides & Liquides',
    'modalities.supply.finish': 'Arrivée',

    // Gallery
    'gallery.title': 'Galerie Souvenirs de MogrovejoTrail 2025',

    // Team
    'team.role.raceDirector': 'Directeur de Course',
    'team.role.supplyCoordinator': 'Coordinatrice Ravitaillement',
    'team.role.securityManager': 'Responsable Sécurité',
    'team.role.volunteersCoordinator': 'Coordinatrice Bénévoles',
    'team.role.technicalDirector': 'Directeur Technique',
    'team.role.medicalManager': 'Responsable Médical',
    'team.volunteers.title': 'Bénévoles',
    'team.volunteers.text': 'Merci à plus de 50 bénévoles qui rendent possible chaque édition du Mogrovejo Trail.',

    // Video Section
    'videoSection.title': 'Mogrovejo Trail 2025',
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

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('mgt-language', lang);
  }, []);

  const t = useCallback((key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key;
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t]
  );

  return (
    <LanguageContext.Provider value={value}>
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
