export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      downloadCV: "Download CV",
    },
    hero: {
      greeting: "Hello, I am",
      name: "Your Name",
      title1: "Web Developer",
      title2: "Software Engineer",
      title3: "Full Stack Developer",
      description:
        "Professional with experience in developing digital solutions for various sectors, including legal services and industrial maintenance.",
      downloadCV: "Download CV",
      contact: "Contact Me",
      scrollDown: "Scroll Down",
    },
    about: {
      badge: "About Me",
      title: "Professional Background",
      description:
        "Web development professional with specialization in software engineering. My experience ranges from creating digital solutions for law firms to management systems for industrial maintenance.",
      experience: {
        title: "Experience",
        items: [
          {
            role: "Web Developer",
            company: "XYZ Law Firm",
            period: "2021-2023",
            description: "Development and maintenance of the web portal and case management system.",
          },
          {
            role: "IT Consultant",
            company: "ABC Industry",
            period: "2019-2021",
            description: "Implementation of industrial maintenance management system.",
          },
          {
            role: "Software Engineer",
            company: "Tech Solutions",
            period: "2018-2019",
            description: "Development of web applications and APIs for enterprise clients.",
          },
        ],
      },
      education: {
        title: "Education",
        items: [
          {
            degree: "Master in Software Engineering",
            institution: "National University",
            period: "2017-2019",
            description: 'Thesis: "Modern web architecture and scalable systems"',
          },
          {
            degree: "Bachelor in Systems Engineering",
            institution: "Technological University",
            period: "2013-2017",
            description: "Specialization in web development and mobile applications.",
          },
          {
            degree: "UX/UI Design Certification",
            institution: "Design Institute",
            period: "2018",
            description: "User-centered design and digital experiences.",
          },
        ],
      },
      interests: {
        title: "Interests",
        items: [
          "Web Development",
          "UX/UI Design",
          "Software Architecture",
          "Digital Transformation",
          "Artificial Intelligence",
          "Photography",
          "Travel",
        ],
      },
      languages: {
        title: "Languages",
        items: [
          {
            name: "Spanish",
            level: "Native",
            percentage: 100,
          },
          {
            name: "English",
            level: "Advanced",
            percentage: 85,
          },
        ],
      },
    },
    skills: {
      badge: "Skills",
      title: "Technical Skills",
      description:
        "A comprehensive set of technical skills and tools that I have mastered throughout my professional career.",
      categories: {
        frontend: {
          title: "Frontend Development",
          skills: [
            { name: "HTML/CSS", level: 90, icon: "/placeholder.svg" },
            { name: "JavaScript", level: 85, icon: "/placeholder.svg" },
            { name: "React", level: 80, icon: "/placeholder.svg" },
            { name: "Next.js", level: 75, icon: "/placeholder.svg" },
            { name: "Tailwind CSS", level: 85, icon: "/placeholder.svg" },
            { name: "UI/UX Design", level: 70, icon: "/placeholder.svg" },
          ],
        },
        backend: {
          title: "Backend Development",
          skills: [
            { name: "Node.js", level: 80, icon: "/placeholder.svg" },
            { name: "Express", level: 75, icon: "/placeholder.svg" },
            { name: "MongoDB", level: 70, icon: "/placeholder.svg" },
            { name: "PostgreSQL", level: 65, icon: "/placeholder.svg" },
            { name: "Firebase", level: 75, icon: "/placeholder.svg" },
            { name: "REST APIs", level: 85, icon: "/placeholder.svg" },
          ],
        },
        tools: {
          title: "Tools & Others",
          skills: [
            { name: "Git", level: 85, icon: "/placeholder.svg" },
            { name: "Docker", level: 65, icon: "/placeholder.svg" },
            { name: "AWS", level: 60, icon: "/placeholder.svg" },
            { name: "Figma", level: 75, icon: "/placeholder.svg" },
            { name: "Project Management", level: 80, icon: "/placeholder.svg" },
            { name: "SEO", level: 70, icon: "/placeholder.svg" },
          ],
        },
      },
    },
    projects: {
      badge: "Portfolio",
      title: "Featured Projects",
      description: "A selection of my most relevant projects in different sectors",
      viewDetails: "View details",
      role: "Role:",
      viewProject: "View project",
      description_label: "Description",
      technologies_label: "Technologies used",
      features_label: "Key features",
      close: "Close",
      items: [
        {
          id: 1,
          title: "Informative Website for Law Firm",
          shortDescription: "Complete web portal for a law firm",
          description:
            "Development of an informative website for a prestigious law firm. The platform includes information about the firm's history, lawyer profiles, specialized legal services, educational programs, and a professional contact section. Currently, work is being done on integrating an artificial intelligence-based virtual assistant to improve the user experience and optimize customer service.",
          thumbnail: "/firma.png",
          images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
          technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
          features: [
            "Informative section on the firm's history",
            "List of lawyers with detailed profiles",
            "Description of specialized legal services",
            "Educational programs offered by the firm",
            "Contact section with dynamic form",
            "Future integration of an AI virtual assistant",
          ],
          role: "Full-Stack Developer",
          year: "December 2024 - Present",
          githubUrl: "https://github.com/yourusername/law-firm-portal",
          liveUrl: "https://gygfirmadeabogados.com/",
        },
        {
          id: 2,
          title: "Industrial Maintenance System",
          shortDescription: "Management system for industrial maintenance",
          description:
            "Implementation of a web system for the management of preventive and corrective maintenance of industrial machinery. The system allows operators to record maintenance activities, change the status of work orders, and generate automatic reports to optimize task planning. The application facilitates real-time monitoring and improves operational efficiency.",
          thumbnail: "/mantenimiento.png",
          images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
          technologies: ["Next.js", "Flask", "PostgreSQL", "Docker", "Tailwind CSS"],
          features: [
            "Scheduling of preventive and corrective maintenance",
            "Automatic registration of work orders",
            "Status change and real-time tracking",
            "History of completed maintenance",
            "Report generation for analysis and auditing",
          ],
          role: "IT Consultant & Developer",
          year: "March 2024 - October 2024",
          githubUrl: "https://github.com/yourusername/maintenance-system",
          liveUrl: "https://mantenimientoapp.vercel.app/",
        },
        {
          id: 3,
          title: "Tourism Promotion Platform",
          shortDescription: "Digital platform for tourism promotion",
          description:
            "Development of a web platform for the promotion of tourism activities in San Andrés parish, with recommendations based on artificial intelligence. The application includes a virtual assistant to guide tourists and an informative section on sustainable local activities. Users can explore destinations, get personalized recommendations, and participate in eco-friendly experiences.",
          thumbnail: "/turismo.jpg",
          images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
          technologies: ["Next.js", "Firebase", "Mapbox", "Tailwind CSS", "Vercel"],
          features: [
            "Virtual assistant for tourism recommendations",
            "Interactive map with sustainable destinations",
            "Verified profiles of tour operators",
            "Panel for managing activities and events",
            "Generation of visit and access reports",
          ],
          role: "Researcher & Developer",
          year: "January 2023 - October 2023",
          githubUrl: "https://github.com/yourusername/tourism-platform",
          liveUrl: "https://tuwebdeturismo.com/",
        },
      ],
    },
    contact: {
      badge: "Get in Touch",
      title: "Contact Me",
      description: "Interested in working together? Contact me to discuss how I can help with your next project.",
      info: {
        title: "Contact Information",
        email: {
          label: "Email",
          value: "your.email@example.com",
        },
        phone: {
          label: "Phone",
          value: "+12 345 6789",
        },
        location: {
          label: "Location",
          value: "City, Country",
        },
      },
      availability: {
        title: "Availability",
        description: "Currently available for freelance projects and collaboration opportunities.",
        status: "Available for new projects",
      },
      response: {
        title: "Response Time",
        description: "I usually respond to messages within 24 hours. For urgent matters, please call me directly.",
      },
      form: {
        title: "Send Me a Message",
        name: {
          label: "Name",
          placeholder: "Your name",
          required: "Name is required",
        },
        email: {
          label: "Email",
          placeholder: "your@email.com",
          required: "Email is required",
          invalid: "Invalid email format",
        },
        subject: {
          label: "Subject",
          placeholder: "How can I help you?",
          required: "Subject is required",
        },
        message: {
          label: "Message",
          placeholder: "Write your message here...",
          required: "Message is required",
        },
        submit: "Send Message",
        submitting: "Sending...",
        successMessage: "Your message has been sent successfully. I will get back to you soon!",
      },
      whatsapp: {
        messageTitle: "New Contact Message",
        nameLabel: "Name:",
        emailLabel: "Email:",
        subjectLabel: "Subject:",
        messageLabel: "Message:",
      },
    },
    footer: {
      tagline: "Web Developer & Software Engineer",
      copyright: "All rights reserved.",
      madeWith: "Made with",
      using: "using",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
      downloadCV: "Descargar CV",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Tu Nombre",
      title1: "Desarrollador Web",
      title2: "Ingeniero de Software",
      title3: "Desarrollador Full Stack",
      description:
        "Profesional con experiencia en desarrollo de soluciones digitales para diversos sectores, incluyendo servicios legales y mantenimiento industrial.",
      downloadCV: "Descargar CV",
      contact: "Contáctame",
      scrollDown: "Desplázate",
    },
    about: {
      badge: "Sobre Mí",
      title: "Trayectoria Profesional",
      description:
        "Profesional del desarrollo web con especialización en ingeniería de software. Mi experiencia abarca desde la creación de soluciones digitales para despachos de abogados hasta sistemas de gestión para mantenimiento industrial.",
      experience: {
        title: "Experiencia",
        items: [
          {
            role: "Desarrollador Web",
            company: "Despacho Jurídico XYZ",
            period: "2021-2023",
            description: "Desarrollo y mantenimiento del portal web y sistema de gestión de casos.",
          },
          {
            role: "Consultor IT",
            company: "Industria ABC",
            period: "2019-2021",
            description: "Implementación de sistema de gestión de mantenimiento industrial.",
          },
          {
            role: "Ingeniero de Software",
            company: "Tech Solutions",
            period: "2018-2019",
            description: "Desarrollo de aplicaciones web y APIs para clientes empresariales.",
          },
        ],
      },
      education: {
        title: "Educación",
        items: [
          {
            degree: "Maestría en Ingeniería de Software",
            institution: "Universidad Nacional",
            period: "2017-2019",
            description: 'Tesis: "Arquitectura web moderna y sistemas escalables"',
          },
          {
            degree: "Licenciatura en Sistemas",
            institution: "Universidad Tecnológica",
            period: "2013-2017",
            description: "Especialización en desarrollo web y aplicaciones móviles.",
          },
          {
            degree: "Certificación en Diseño UX/UI",
            institution: "Instituto de Diseño",
            period: "2018",
            description: "Diseño centrado en el usuario y experiencias digitales.",
          },
        ],
      },
      interests: {
        title: "Intereses",
        items: [
          "Desarrollo Web",
          "Diseño UX/UI",
          "Arquitectura de Software",
          "Transformación Digital",
          "Inteligencia Artificial",
          "Fotografía",
          "Viajes",
        ],
      },
      languages: {
        title: "Idiomas",
        items: [
          {
            name: "Español",
            level: "Nativo",
            percentage: 100,
          },
          {
            name: "Inglés",
            level: "Avanzado",
            percentage: 85,
          },
        ],
      },
    },
    skills: {
      badge: "Habilidades",
      title: "Habilidades Técnicas",
      description:
        "Un conjunto completo de habilidades técnicas y herramientas que he dominado a lo largo de mi carrera profesional.",
      categories: {
        frontend: {
          title: "Desarrollo Frontend",
          skills: [
            { name: "HTML/CSS", level: 90, icon: "/placeholder.svg" },
            { name: "JavaScript", level: 85, icon: "/placeholder.svg" },
            { name: "React", level: 80, icon: "/placeholder.svg" },
            { name: "Next.js", level: 75, icon: "/placeholder.svg" },
            { name: "Tailwind CSS", level: 85, icon: "/placeholder.svg" },
            { name: "Diseño UI/UX", level: 70, icon: "/placeholder.svg" },
          ],
        },
        backend: {
          title: "Desarrollo Backend",
          skills: [
            { name: "Node.js", level: 80, icon: "/placeholder.svg" },
            { name: "Express", level: 75, icon: "/placeholder.svg" },
            { name: "MongoDB", level: 70, icon: "/placeholder.svg" },
            { name: "PostgreSQL", level: 65, icon: "/placeholder.svg" },
            { name: "Firebase", level: 75, icon: "/placeholder.svg" },
            { name: "APIs REST", level: 85, icon: "/placeholder.svg" },
          ],
        },
        tools: {
          title: "Herramientas y Otros",
          skills: [
            { name: "Git", level: 85, icon: "/placeholder.svg" },
            { name: "Docker", level: 65, icon: "/placeholder.svg" },
            { name: "AWS", level: 60, icon: "/placeholder.svg" },
            { name: "Figma", level: 75, icon: "/placeholder.svg" },
            { name: "Gestión de Proyectos", level: 80, icon: "/placeholder.svg" },
            { name: "SEO", level: 70, icon: "/placeholder.svg" },
          ],
        },
      },
    },
    projects: {
      badge: "Portafolio",
      title: "Proyectos Destacados",
      description: "Una selección de mis proyectos más relevantes en diferentes sectores",
      viewDetails: "Ver detalles",
      role: "Rol:",
      viewProject: "Ver proyecto",
      description_label: "Descripción",
      technologies_label: "Tecnologías utilizadas",
      features_label: "Características principales",
      close: "Cerrar",
      items: [
        {
          id: 1,
          title: "Portal para Despacho de Abogados",
          shortDescription: "Portal web completo para un despacho de abogados",
          description:
            "Desarrollo de un sitio web informativo para una prestigiosa firma de abogados. La plataforma incluye información sobre la historia de la firma, perfiles de los abogados, servicios legales especializados, programas educativos y una sección de contacto profesional. Actualmente, se está trabajando en la integración de un asistente virtual basado en inteligencia artificial para mejorar la experiencia del usuario y optimizar la atención al cliente.",
          thumbnail: "/firma.png",
          images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
          technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
          features: [
            "Sección informativa de la historia de la firma",
            "Listado de abogados con perfiles detallados",
            "Descripción de servicios legales especializados",
            "Programas educativos ofrecidos por la firma",
            "Sección de contacto con formulario dinámico",
            "Integración futura de un asistente virtual con IA",
          ],
          role: "Desarrollador Full-Stack",
          year: "Diciembre 2024 - Actualidad",
          githubUrl: "https://github.com/tunombre/portal-abogados",
          liveUrl: "https://gygfirmadeabogados.com/",
        },
        {
          id: 2,
          title: "Sistema de Mantenimiento Industrial",
          shortDescription: "Sistema de gestión para mantenimiento industrial",
          description:
            "Implementación de un sistema web para la gestión de mantenimientos preventivos y correctivos en maquinaria industrial. El sistema permite a los operarios registrar actividades de mantenimiento, cambiar el estado de las órdenes de trabajo y generar reportes automáticos para optimizar la planificación de tareas. La aplicación facilita el seguimiento en tiempo real y mejora la eficiencia operativa.",
          thumbnail: "/mantenimiento.png",
          images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
          technologies: ["Next.js", "Flask", "PostgreSQL", "Docker", "Tailwind CSS"],
          features: [
            "Programación de mantenimientos preventivos y correctivos",
            "Registro de incidencias y mantenimientos correctivos",
            "Gestión de inventario de repuestos",
            "Reportes y estadísticas en tiempo real",
            "Notificaciones automáticas",
          ],
          role: "Consultor IT y Desarrollador",
          year: "Marzo 2024 - Octubre 2024",
          githubUrl: "https://github.com/tunombre/sistema-mantenimiento",
          liveUrl: "https://mantenimientoapp.vercel.app/",
        },
        {
          id: 3,
          title: "Plataforma de Promoción Turística",
          shortDescription: "Plataforma digital para promoción turística",
          description:
            "Desarrollo de una plataforma web para la promoción de actividades turísticas en la parroquia San Andrés, con recomendaciones basadas en inteligencia artificial. La aplicación incluye un asistente virtual para guiar a los turistas y una sección informativa sobre actividades locales sostenibles. Los usuarios pueden explorar destinos, obtener recomendaciones personalizadas y participar en experiencias eco-amigables.",
          thumbnail: "/turismo.jpg",
          images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
          technologies: ["Next.js", "Firebase", "Mapbox", "Tailwind CSS", "Vercel"],
          features: [
            "Asistente virtual para recomendaciones turísticas",
            "Mapa interactivo con destinos sostenibles",
            "Perfiles verificados de operadores turísticos",
            "Panel para la gestión de actividades y eventos",
            "Generación de reportes de visitas y accesos",
          ],
          role: "Investigador y Desarrollador",
          year: "Enero 2023 - Octubre 2023",
          githubUrl: "https://github.com/tunombre/turismo-sostenible",
          liveUrl: "https://tuwebdeturismo.com/",
        },
      ],
    },
    contact: {
      badge: "Contacto",
      title: "Contáctame",
      description:
        "¿Interesado en trabajar juntos? Contáctame para discutir cómo puedo ayudarte con tu próximo proyecto.",
      info: {
        title: "Información de Contacto",
        email: {
          label: "Email",
          value: "tu.email@ejemplo.com",
        },
        phone: {
          label: "Teléfono",
          value: "+12 345 6789",
        },
        location: {
          label: "Ubicación",
          value: "Ciudad, País",
        },
      },
      availability: {
        title: "Disponibilidad",
        description: "Actualmente disponible para proyectos freelance y oportunidades de colaboración.",
        status: "Disponible para nuevos proyectos",
      },
      response: {
        title: "Tiempo de Respuesta",
        description:
          "Normalmente respondo a los mensajes en un plazo de 24 horas. Para asuntos urgentes, por favor llámame directamente.",
      },
      form: {
        title: "Envíame un Mensaje",
        name: {
          label: "Nombre",
          placeholder: "Tu nombre",
          required: "El nombre es obligatorio",
        },
        email: {
          label: "Email",
          placeholder: "tu@email.com",
          required: "El correo es obligatorio",
          invalid: "Formato de correo inválido",
        },
        subject: {
          label: "Asunto",
          placeholder: "¿En qué puedo ayudarte?",
          required: "El asunto es obligatorio",
        },
        message: {
          label: "Mensaje",
          placeholder: "Escribe tu mensaje aquí...",
          required: "El mensaje es obligatorio",
        },
        submit: "Enviar Mensaje",
        submitting: "Enviando...",
        successMessage: "¡Tu mensaje ha sido enviado con éxito! Me pondré en contacto contigo pronto.",
      },
      whatsapp: {
        messageTitle: "Nuevo Mensaje de Contacto",
        nameLabel: "Nombre:",
        emailLabel: "Email:",
        subjectLabel: "Asunto:",
        messageLabel: "Mensaje:",
      },
    },
    footer: {
      tagline: "Desarrollador Web & Ingeniero de Software",
      copyright: "Todos los derechos reservados.",
      madeWith: "Hecho con",
      using: "usando",
    },
  },
}

