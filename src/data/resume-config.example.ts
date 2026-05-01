import type { ResumeConfig } from './types'

/**
 * This is an example configuration file.
 * Copy this file to `resume-config.ts` and fill in your own information.
 *
 * All text fields that support multiple languages use the `LocalizedString` format:
 * { en: "English text", fr: "Texte français" }
 *
 * Add as many languages as you need — just make sure to list them in `languages.available`.
 */
export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'Landry Assereou OHIN',
    // Auto-detected: just drop your photo or profile image in public/images/ (any .jpg, .png, .webp)
    // You can also set a specific path here to override auto-detection:
    photo: '/images/photo.jpg',
    photoBackEmoji: '💻', // Shown when clicking the photo (3D flip)
    title: {
      en: 'Fullstack Developer',
      fr: 'Développeur Fullstack',
    },
    subtitle: {
      en: '+ 5 years of experience',
      fr: '+ 5 ans d\'expérience',
    },
    location: 'Cotonou, Bénin',
  },

  // ===== SEO (used in <head> meta tags) =====
  seo: {
    title: 'Landry Assereou OHIN — Fullstack Developer',
    description: 'Développeur Fullstack spécialisé en PHP, VueJS 3 et Symfony 7. Expert en création d’applications métiers (Fintech, Logistique) et solutions WordPress sur mesure.',
  },

  // ===== LANGUAGES =====
  languages: {
    default: 'en',
    available: ['en', 'fr'],
    labels: {
      en: 'EN',
      fr: 'FR',
    },
  },

  // ===== CONTACT =====
  contact: [
    { type: 'github', label: 'landryohin', href: 'https://github.com/landryohin' },
    { type: 'linkedin', label: 'Landry .A OHIN', href: 'https://www.linkedin.com/in/landry-a-ohin-053179188/' },
    { type: 'email', label: 'landrohin@gmail.com' },
    { type: 'phone', label: '+229 01 67 18 13 29' },
    { type: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/2290167181329' },
    { type: 'location', label: 'Cotonou, Bénin' },

  ],

  // ===== SKILLS =====
  skills: [
    {
      title: { en: 'Languages', fr: 'Langues' },
      type: 'languages',
      items: [
        { name: { en: 'French', fr: 'Français' }, level: { en: 'Native', fr: '(Natif)' } },
        { name: { en: 'English', fr: 'Anglais' }, level: { en: 'Intermediate', fr: '(Intermediate)' }, details: ' ' },
        { name: { en: 'Chinese', fr: 'Chinois' }, level: { en: 'Beginner', fr: 'Débutant (初学者)' }, details: 'HSK 2' },
      ],
    },
    {
      title: { en: 'Frontend', fr: 'Frontend' },
      type: 'badges',
      items: [
        { name: 'React' },
        { name: 'Vue.js' },
        { name: 'Nuxt.js' },
        { name: 'WordPress' },
        { name: 'Webflow' },
      ],
    },
    {
      title: { en: 'Backend', fr: 'Backend' },
      type: 'badges',
      items: [
        { name: 'Laravel' },
        { name: 'Symfony' },
        { name: 'WordPress' },
      ],
    },
    {
      title: { en: 'Database', fr: 'Base de données' },
      type: 'badges',
      items: [
        { name: 'PostgreSQL' },
        { name: 'MySQL' },
      ],
    },
    {
      title: { en: 'DevOps', fr: 'DevOps' },
      type: 'badges',
      items: [
        { name: 'Docker' },
        { name: 'GitHub' },
      ],
    },
    {
      title: { en: 'Graphics tools', fr: 'Graphisme' },
      type: 'badges',
      items: [
        { name: 'Photoshop' },
        { name: 'Illustrator' },
        { name: 'Boostrap studio' },
        { name: 'Figma' },
        { name: 'Canva' },
      ],
    },
    {
      title: { en: 'Methodologies', fr: 'Méthodologies' },
      type: 'text',
      items: [
        { name: { en: 'Agile/Scrum, Code Review', fr: 'Agile/Scrum,  Code Review' } },
      ],
    },
  ],

  // ===== PROFESSIONAL EXPERIENCES =====
  experiences: [
    {
      id: 'FREELANCE_EXPERIENCE',
      company: { en: 'Freelance', fr: 'Freelance' },
      role: { en: 'Fullstack Web Developer & Product Designer', fr: 'Développeur Web Fullstack & Product Designer' },
      type: { en: 'Freelance', fr: 'Freelance' },
      period: { en: 'Oct. 2024 - Present', fr: 'Oct. 2024 - Présent' },
      description: {

      },// Période à ajuster selon vos dates réelles
      techs: ['WordPress', 'PHP', 'VueJS 3', 'Next.js', 'JavaScript', 'SQL', 'Postman', 'PostgreSQL', 'UI/UX Design'],
      isHighlighted: true,
      details: {
        context: {
          en: 'Independent development and design of diverse digital solutions ranging from Fintech and Logistics to Green Tech and Real Estate for international clients (France, Benin, Burkina Faso).',
          fr: 'Développement et conception indépendante de solutions numériques variées, allant de la Fintech et Logistique à la Green Tech et l’Immobilier pour des clients internationaux (France, Bénin, Burkina Faso).',
        },
        tasks: {
          en: [
            'Easybail (France): Developed a rental management application for leases, contracts, and automated payment reminders',
            'Afric-uni (Benin): Built a ticket generation system and a real-time stock management application for fuel stations',
            'Sedomi App (Fintech): Developed the web platform for money transfers between Russia and Africa using VueJS 3 and Next.js API',

            'OQSF-BF (Burkina Faso): Designed UI prototypes for a customer complaint and suggestion management system',
            'Evolvener (Benin): Designed and developed a professional platform focused on renewable energy management',
            'RG Résidence (Benin): Created a hospitality showcase and booking website for furnished apartment rentals',
            'Sedomi App: Led product design (UI/UX) and community management to drive user adoption',
            'Managed full deployment cycles and server synchronization using Filezilla across multiple projects'
          ],
          fr: [
            'Easybail (France) : Développement d’une application de gestion locative (baux, contrats, loyers et relances automatisées)',
            'Afric-uni (Bénin) : Création d’un système de génération de tickets valeur et d’une application de gestion de stock pour stations-service',
            'Sedomi App (Fintech) : Développement de l’application web de transfert d’argent (Russie vers Afrique) avec VueJS 3 et Next.js API',

            'OQSF-BF (Burkina Faso) : Conception de la maquette UI de l’application de gestion des plaintes et suggestions clients',
            'Evolvener (Bénin) : Conception et développement du site web axé sur les technologies vertes et les énergies renouvelables',
            'RG Résidence (Bénin) : Création du site de réservation et vitrine pour la location d’appartements meublés',
            'Gestion complète des cycles de déploiement et synchronisation serveur via Filezilla pour l’ensemble des projets',
            'Sedomi App : Design produit (UI/UX) et gestion de la communauté pour favoriser l’adoption du service',
          ],
        },
        env: {
          en: 'WordPress / PHP / VueJS 3 / Next.js / JavaScript / Postman / Filezilla / UI-UX Design',
          fr: 'WordPress / PHP / VueJS 3 / Next.js / JavaScript / Postman / Filezilla / Design UI-UX',
        },
      },
    },





    {
      id: 'DGML_MEF',
      company: {
        en: 'Directorate General of Equipment and Logistics - Ministry of Economy and Finance',
        fr: 'Direction Générale du Matériel et de la Logistique - Ministère de l’Economie et des Finances (MEF)'
      },
      role: { en: 'Fullstack Web Developer', fr: 'Développeur Web Fullstack' },
      type: { en: 'Professional Project / Contract', fr: 'Projet Professionnel / Contractuel' },
      period: { en: '2022 - 2024', fr: '2022 - 2024' },
      description: {

      },// Période à ajuster selon vos dates réelles
      techs: ['Symfony 7', 'VueJS 3', 'Nuxt.js', 'Headless WordPress', 'API REST'],
      details: {
        context: {
          en: 'Modernization of administrative processes and digital presence for the Beninese Ministry of Economy and Finance through the development of specialized tools and official platforms.',
          fr: 'Modernisation des processus administratifs et de la présence numérique du Ministère de l’Economie et des Finances du Bénin via le développement d’outils métiers et de plateformes officielles.',
        },
        tasks: {
          en: [
            'Designed and developed the SAGA application for automated mail management using a decoupled architecture',
            'Built a robust REST API with Symfony 7 to handle administrative data workflows',
            'Developed a modern and reactive user interface with VueJS 3 for the internal management system',
            'Created the official DGML website (dgml.bj) using a Headless WordPress architecture',
            'Integrated Nuxt.js for the frontend to ensure optimal performance and SEO for the institutional portal',
            'Managed secure deployment and file synchronization using Filezilla and server-side protocols',
          ],
          fr: [
            'Conception et développement de l’application SAGA (Système de Gestion Automatique de courrier) en architecture découplée',
            'Réalisation d’une API REST robuste avec Symfony 7 pour la gestion des flux de données administratifs',
            'Développement d’une interface utilisateur moderne et réactive avec VueJS 3 pour le système de gestion',
            'Conception du site institutionnel de la DGML (dgml.bj) via une architecture Headless WordPress',
            'Utilisation de Nuxt.js en frontend pour garantir performance et SEO au portail officiel',
            'Gestion des déploiements et de la synchronisation des fichiers via Filezilla et protocoles serveurs',
          ],
        },
        env: {
          en: 'Symfony 7 (API) / VueJS 3 / Nuxt.js / Headless WordPress / Filezilla',
          fr: 'Symfony 7 (API) / VueJS 3 / Nuxt.js / Headless WordPress / Filezilla',
        },
      },
    },


    {
      id: 'KYSOLUTIONS',
      company: { en: 'KY-SOLUTIONS', fr: 'KY-SOLUTIONS' },
      role: { en: 'Web & Mobile Developer Intern', fr: 'Stagiaire Développeur Web & Mobile' },
      type: { en: 'Internship (8 months)', fr: 'Stage (08 mois)' },
      period: { en: 'Jan 2022 - Aug 2022', fr: 'Jan 2022 - Août 2022' },
      description: {

      },

      techs: ['PHP', 'WordPress', 'SQL', 'Mobile Dev', 'E-commerce'],
      details: {
        context: {
          en: 'Contributed to the development of several web and mobile applications for logistics, events, and e-commerce, while optimizing performance and user experience (UI).',
          fr: 'Participation au développement de plusieurs applications web et mobiles dans les secteurs de la logistique, de l’événementiel et de l’e-commerce, tout en optimisant les performances et l’expérience utilisateur (UI).',
        },
        tasks: {
          en: [
            'Developed mobile applications including eStock (logistics) and eWeeding (event management)',
            'Built various professional websites such as ekoworking.com, edwardsconciergie.com, and e-inventaire.com',
            'Managed the back office and optimized UI/UX for the Afrotouchkosmetics.fr e-commerce platform',
            'Maintained and updated applications to ensure compatibility with latest OS and device versions',
            'Analyzed user behavior data to optimize application speed, fluidity, and navigation paths',
            'Improved website traffic and conversion rates by optimizing page load speed and technical UI aspects',
          ],
          fr: [
            'Développement d’applications mobiles telles que eStock (logistique) et eWeeding (organisation d’événements)',
            'Réalisation de divers sites web professionnels (ekoworking.com, edwardsconciergie.com, e-inventaire.com, etc.)',
            'Gestion du back-office et optimisation graphique (UI/UX) de la plateforme e-commerce Afrotouchkosmetics.fr',
            'Maintenance et mise à jour des applications en fonction des évolutions des OS et des nouveaux terminaux',
            'Analyse des données de comportement utilisateur pour optimiser la vitesse, la fluidité et les parcours',
            'Optimisation technique (page load) et graphique du site de l’entreprise pour améliorer le taux de conversion',
          ],
        },
        env: {
          en: 'Laravel / WordPress / Vue.js / Nuxt.js / React / SQL / Flutter / Analytics',
          fr: 'Laravel / WordPress / Vue.js / Nuxt.js / React / SQL / Flutter / Analytics',
        },
      },
    },



    {
      id: 'GETECH',
      company: { en: 'GETECH', fr: 'GETECH' },
      role: { en: 'Fullstack Developer Intern', fr: 'Stagiaire Développeur Fullstack' },
      type: { en: 'Internship (6 months)', fr: 'Stage (6 mois)' },
      period: { en: 'Apr 2019 - Oct2019', fr: 'Avr 2019 - Oct 2019' },
      description: {

      },
      techs: ['Laravel', 'PHP', 'MySQL', 'Méthodologie agile'],
      details: {
        context: {
          en: 'During this internship, I optimized the user interface (UI) of the company website, contributed to the development of a mobile health application and designed a web platform for commercial exchanges for the agricultural sector.',
          fr: 'Durant ce stage, j\'ai optimisé l\'interface utilisateur (UI) du site web de l\'entreprise, contribué au développement d\'une application mobile de santé et conçu une plateforme web d\'échanges commerciaux pour la filière agricole.',
        },
        tasks: {
          en: [
            'Optimized the website User Interface (UI) by auditing user flows and modernizing visual components',
            'Contributed to the development of a mobile health application, including feature implementation and bug fixing',
            'Designed and built a web platform for agricultural trade and distribution between producers and processors',
            'Developed a real-time stock management system for agricultural raw materials',
            'Implemented responsive design to ensure cross-device compatibility for the corporate website',
            'Modeled and managed SQL databases for processing agricultural supply chain transactions',
          ],
          fr: [
            'Optimisation de l\'interface utilisateur (UI) du site web via l\'audit des parcours et la modernisation des composants visuels',
            'Participation au développement d\'une application mobile de santé, incluant l\'intégration de modules et la résolution de bugs',
            'Conception et mise en place d\'une plateforme web de vente et distribution entre producteurs et transformateurs agricoles',
            'Développement d\'un système de gestion de stock en temps réel pour les matières premières agricoles',
            'Mise en œuvre d\'un design responsive pour garantir la compatibilité multi-supports du site institutionnel',
            'Modélisation et gestion de bases de données SQL pour le suivi des transactions de la filière agricole',
          ],
        },
        env: {
          en: 'Laravel / PHP / MySQL / Agile methodology',
          fr: 'Laravel / PHP / MySQL / Méthodologie agile',
        },
      },
    },
  ],

  // ===== PROJECTS (optional) =====
  projects: [

    {
      id: 'easybail',
      title: { en: 'Easybail', fr: 'Easybail' },
      description: {
        en: 'Rental management application for leases, contracts, rents, receipts, and automated payment reminders.',
        fr: 'Application de gestion de location : gestion des baux, contrats, loyers, quittances et relances automatisées.',
      },
      techs: ['WordPress', 'PHP', 'JavaScript', 'API REST'],
      url: 'https://easybail.fr',
    },
    {
      id: 'afric-uni-tickets',
      title: { en: 'Afric-uni Sarl - Ticket System', fr: 'Afric-uni Sarl - Système de Tickets' },
      description: {
        en: 'Value ticket generation and order management application for service stations.',
        fr: 'Application de génération de tickets valeur et de gestion de commandes pour les stations-service.',
      },
      techs: ['WordPress', 'PHP', 'JavaScript'],
      url: 'https://africunisarl.com/',
    },

    {
      id: 'sedomi-app',
      title: { en: 'Sedomi App', fr: 'Sedomi App' },
      description: {
        en: 'Fintech platform for money transfers from Russia to Africa, including product design and community management.',
        fr: 'Plateforme Fintech de transfert d’argent de la Russie vers l’Afrique, incluant le design produit et le community management.',
      },
      techs: ['VueJS 3', 'Postman', 'UI/UX Design', 'Community Management'],
      url: 'https://www.sedomi.net/', // Ajoutez l'URL si disponible
    },

    {
      id: 'evolvener',
      title: { en: 'Evolvener', fr: 'Evolvener' },
      description: {
        en: 'Website focused on green technology and renewable energy management solutions.',
        fr: 'Site web axé sur la technologie verte et la gestion des solutions d’énergies renouvelables.',
      },
      techs: ['WordPress'],
      url: 'https://evolvener.com',
    },
    {
      id: 'rg-residence',
      title: { en: 'RG Residence', fr: 'RG Résidence' },
      description: {
        en: 'Showcase and booking website for hospitality services and furnished apartment rentals.',
        fr: 'Site vitrine et de réservation pour services d’hébergement et location d’appartements meublés.',
      },
      techs: ['WordPress', 'PHP', 'JavaScript'],
      url: 'https://residencelagrace.com',
    },

  ],


  // ===== EDUCATION =====
  education: [
    {
      school: { en: 'ESGIS Benin', fr: 'ESGIS Bénin' },
      degree: { en: 'Bachelor\'s degree in computer science, networks and telecommunications', fr: 'Licence en informatique, Réseaux et Télécommunication' },
      specialty: { en: 'Web & Mobile Development', fr: 'Développement Web & Mobile' },
      period: '2018 - 2021',
    },
    {
      school: { en: 'ISM Adonaï Benin ', fr: 'ISM Adonaï Benin ' },
      degree: { en: 'Bachelor\'s Degree in Marketing and Sales', fr: 'Licence en Marketing et Action Commerciale ' },
      period: '2014 - 2017',
    },
    {
      school: { en: 'College Catholic "Père Aupiais" ', fr: 'Collège Catholique Père Aupiais' },
      degree: { en: 'Bachelor\'s Degree in Marketing and Sales', fr: 'Licence en Marketing et Action Commerciale ' },
      period: '2014',
    },
  ],

  // ===== HOBBIES (optional) =====
  hobbies: [
    {
      title: { en: 'Gaming', fr: 'Gaming' },
      details: [
        { en: 'Video games', fr: 'Jeux vidéo' },
      ],
    },
    {
      title: { en: 'Science fiction', fr: 'Science-fiction' },
      details: [
        { en: 'Reading', fr: 'Lecture' },
      ],
    },
    {
      title: { fr: 'Documentaire', en: 'Documentary' },
    },
    {
      title: { fr: 'Voyage', en: 'Travel' },
    },
  ],

  // ===== PDF (optional) =====
  // Auto-detected: just drop your PDF files in public/cv/fr/ and public/cv/en/
  // The download button will appear automatically — no config needed!
  // Uncomment below only if you need to override the auto-detection:
  // pdf: {
  //   label: { en: 'Download PDF', fr: 'Télécharger le PDF' },
  //   path: { en: '/cv/en/resume-en.pdf', fr: '/cv/fr/resume-fr.pdf' },
  // },

  // ===== THEME =====
  theme: {
    preset: 'ocean', // 'minimal' | 'warm' | 'ocean' | 'forest' | 'slate' | 'lilac'
    // You can override individual colors:
    // colors: {
    //   primary: '#8B5A2B',
    //   primaryLight: '#D4A574',
    // },
  },

  // ===== UI LABELS =====
  labels: {
    sections: {
      contact: { en: 'CONTACT', fr: 'CONTACT' },
      skills: { en: 'SKILLS', fr: 'COMPÉTENCES' },
      experience: { en: 'PROFESSIONAL EXPERIENCE', fr: 'EXPÉRIENCES PROFESSIONNELLES' },
      education: { en: 'EDUCATION', fr: 'FORMATION' },
      projects: { en: 'PROJECTS', fr: 'PROJETS' },
      hobbies: { en: 'HOBBIES', fr: 'LOISIRS' },
    },
    experience: {
      mainTasks: { en: 'Main tasks:', fr: 'Tâches principales :' },
      moreTasks: { en: 'more tasks...', fr: 'autres tâches...' },
      training: { en: 'Training:', fr: 'Formations :' },
      techEnv: { en: 'Tech environment:', fr: 'Env. technique :' },
      technologies: { en: 'Technologies', fr: 'Technologies' },
    },
    actions: {
      clickHint: { en: 'Click on experiences to see more details', fr: 'Cliquez sur les expériences pour voir plus de détails' },
      switchTheme: { en: 'Toggle dark mode', fr: 'Changer le thème' },
      downloadPdf: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    },
  },
}
