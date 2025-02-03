import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Victor Micco",
  initials: "VM",
  url: "https://www.victormicco.com.br/",
  location: "São Paulo, Brazil",
  locationLink:
    "https://www.google.com/maps/place/S%C3%A3o+Paulo,+State+of+S%C3%A3o+Paulo/@-23.6824124,-46.5952992,10z/data=!3m1!4b1!4m6!3m5!1s0x94ce448183a461d1:0x9ba94b08ff335bae!8m2!3d-23.5557714!4d-46.6395571!16zL20vMDIycGZt?entry=ttu",
  description:
    "Software Engineer who loves impact people through lines of code.",
  summary:
    "I started with technology when I was 9, in a NGO in my neighborhood, over there I did my first line of code, and I fell in love with it. So I started to study by myself, and when I was 16 I started to work as a freelancer. ",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Postgres",
    "Docker",
    "Prisma",
    "Nest.js",
    "MySql",
    "Vitest",
    "Jest",
    "Supabase",
    "TailwindCSS",
    "Fastify",
    "Express",
    "Git",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "victor.oficial093@gmail.com",
    tel: "+55 11 978853808",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/victormicco",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/victormicco/",
        icon: Icons.linkedin,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "HP inc.",
      href: "https://www.hp.com/",
      badges: [],
      location: "Worldwide - Indirect Contract",
      title: "Fullstack Engineer - Indirect Contract",
      logoUrl: "/hp.png",
      start: "September 2024",
      end: "Present",
      description:
        "Responsible for developing and maintaining Hp.dev platform delivering new features to others developers and partners. Collaborated with a team of developers to create public Api's and services.",
    },
    {
      company: "Wipro",
      href: "https://www.wipro.com/",
      badges: [],
      location: "Worldwide",
      title: "Fullstack Engineer",
      logoUrl: "/wipro.png",
      start: "September 2024",
      end: "Present",
      description:
        "Responsible for developing and maintaining a variety of software applications, including web applications, APIs, and microservices. Collaborated with a team of developers to create innovative solutions that meet the needs of clients. Utilized a variety of technologies to create high-quality software applications.",
    },
    {
      company: "Comhub",
      href: "https://comhub.com.br/",
      badges: [],
      location: "São Paulo, SP",
      title: "Fullstack Engineer",
      logoUrl: "/comhub.png",
      start: "May 2024",
      end: "August 2024",
      description:
        "Implemented AI and CRM Integration System: Developed an innovative system integrating artificial intelligence and CRM's to automate client summary creation. This optimizes customer service by allowing agents to proceed with conversations without needing to review entire histories. - News and Utilities Website for Accountants: Engineered a responsive, interactive frontend for a news and utilities website tailored for accountants. Implemented advanced features for recursive upload, navigation, and sharing. ",
    },
    {
      company: "Anjun Brazil",
      badges: [],
      href: "https://anjunexpress.com.br/",
      location: "São Paulo, SP",
      title: "Frontend Engineer",
      logoUrl: "/anjun.png",
      start: "October 2023",
      end: "May 2024",
      description:
        "Responsible for lead the development of an innovative MDFE, CTE, and NFSE software (front-end), overseeing the entire lifecycle from creation to closure. Collaborated with a dynamic team to facilitate document creation, editing, consultation, cancellation, and closure through requests on SEFAZ.",
    },
    {
      company: "Nitro",
      href: "https://nitro.com.br/",
      badges: [],
      location: "São Paulo, SP",
      title: "Information Technology Infrastructure",
      logoUrl: "/nitro.png",
      start: "July 2023",
      end: "October 2023",
      description:
        "Dedicated to resolving infrastructure issues with an unwavering commitment to finding innovative solutions that prevent the recurrence of the same problems. Constantly exploring new approaches and methodologies to create robust and sustainable fixes, ensuring a proactive approach to infrastructure stability.",
    },
    {
      company: "Metrô de São Paulo",
      href: "https://www.metro.sp.gov.br/",
      badges: [],
      location: "São Paulo, SP",
      title: "Mechatroincs Technician",
      logoUrl: "/metro.png",
      start: "May 2022",
      end: "July 2023",
      description:
        "Engaged in the acquisition of mechatronics techniques, delving into the realms of mechanics, electronics, and programming. Spearheaded the development of various projects and tests aimed at honing skills and advancing training in the field.",
    },
  ],
  education: [
    {
      school: "ETEC Parque Belém",
      href: "https://www.etecpqbelem.com.br/",
      degree: "High School - Mechatronics Technician",
      logoUrl: "/etec.png",
      start: "2020",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Todoroki",
      href: "https://github.com/victormicco/todoroki",
      active: true,
      description:
        "Developed a CLI for developers to easily create projects with the latest technologies. Todoroki offers templates for Front-end and Back-end projects, with the ability to customize the project name, description, and technologies.",
      technologies: [
        "Typescript",
        "Commander",
        "Node.js",
        "Biome",
        "Velite",
        "Next",
        "Kanpeki",
      ],
      links: [
        {
          type: "Website",
          href: "https://todoroki.victormicco.com.br/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/victormicco/todoroki",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/todoroki.png",
      video: "",
    },
    {
      title: "Data Dashboard Challenge",
      href: "https://desafio-front-end-phi.vercel.app",
      active: true,
      description:
        "Challenge to create a data dashboard using the latest technologies.",
      technologies: [
        "Next.js",
        "Typescript",
        "Turbo",
        "Vitest",
        "TailwindCSS",
        "Zod",
        "Fastify",
        "React Testing Library",
        "ShadcnUI",
        "Ky",
        "Recharts",
      ],
      links: [
        {
          type: "Website",
          href: "https://desafio-front-end-phi.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/victormicco/desafio-front-end",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/blue.png",
      video: "",
    },
    {
      title: "Killuicon",
      href: "https://killuicon.vercel.app/",
      active: true,
      description:
        "You can find any icon just with an domain and one click! And convert images and files to another format.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "@fellipeutaka/ui",
        "Ffmpeg",
        "Zod",
        "ky",
      ],
      links: [
        {
          type: "Website",
          href: "https://killuicon.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/victormicco/killuicon/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/killuicon.png",
      video: "",
    },
    {
      title: "Midoryia",
      href: "https://midoriya-pink.vercel.app/",
      active: true,
      description: "A quiz to test your knowledge about digital marketing.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Typebot",
        "Spline",
        "Husky",
        "Zod",
      ],
      links: [
        {
          type: "Website",
          href: "https://midoriya-pink.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/victormicco/midoriya",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/midoryia.png",
      video: "",
    },
  ],
} as const;
