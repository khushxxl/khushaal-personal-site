import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Khushaal Choithramani",
  initials: "Khush",
  url: "https://khushcodezz.net",
  location: "Dundee, United Kingdom",
  description: "Software Engineer & Freelancer",
  summary:
    "Started programming in 2021, and haven't stopped since. I've worked on a variety of projects, from building SaaS products to freelancing, and have shipped more than 10+ apps to the App Store. Right now I am studying Computer Science at the University of Dundee and I am in my 3rd year. I have managed to do quite a few internships and freelance projects, and I am always looking for new opportunities to work on.",
  avatarUrl:
    "https://pbs.twimg.com/profile_images/1887198835547443200/HhFgZDsX_400x400.jpg",
  skills: [
    "React Native",
    "Expo",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
    "Java",
    "C++",
    "Java",
    "Springboot",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "khushaalchoithramani@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/khushxxl",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/khushcodes/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/khushaal_04",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@codewithkhush",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:khushaal.choithramani@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Barclays",
      badges: [],
      href: "https://www.barclays.co.uk",
      location: "London, UK",
      title: "Software Engineer Intern",
      logoUrl:
        "https://companieslogo.com/img/orig/BCS-745d30bf.png?t=1720244491",
      start: "June 2025",
      end: "Present",
      description: `
      Working as a Technical Summer Intern at Barclays, focusing on developing a critical internal tool.
      - Leading development of an enterprise tool that will be utilized by 60+ teams across the organization
      - Building robust and scalable solutions using Java and Spring Boot to support wide-scale adoption
      - Collaborating with multiple teams to gather requirements and ensure the tool meets diverse needs
      - Following agile methodologies and best practices for enterprise software development
      `,
    },
    {
      company: "Pathaka AI",
      badges: [],
      href: "https://pathaka.ai",
      location: "Remote",
      title: "Lead Mobile & AI Developer",
      logoUrl:
        "https://www.pathaka.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapp-logo.6a5b6242.png&w=64&q=75&dpl=dpl_SCfFZ4eJmx7yA9PwQrjM3hciySux",
      start: "Nov 2024",
      end: "Present",
      description: `
      Built the complete frontend for an AI-driven financial advisory platform designed to generate reports and
      deliver in-depth analytics.
      - Developed the frontend using Next.js and React, enabling a smooth and intuitive user interface.
      - Integrated MongoDB with the frontend for seamless data handling and retrieval.
      - Utilized React Query and AI frameworks (Llama, Claude, LangChain) to power complex data queries and
      generate AI responses & React Charts for Analytics
      `,
    },
    {
      company: "Regulaitor AI",
      badges: [],
      href: "",
      location: "Remote",
      title: "Frontend & AI Intern",
      logoUrl: "https://i.ibb.co/YQPTHsz/Group-1171274978.png",
      start: "Sept 2024",
      end: "Nov 2024",
      description: `
      Built the complete frontend for an AI-driven financial advisory platform designed to generate reports and
      deliver in-depth analytics.
      - Developed the frontend using Next.js and React, enabling a smooth and intuitive user interface.
      - Integrated MongoDB with the frontend for seamless data handling and retrieval.
      - Utilized React Query and AI frameworks (Llama, Claude, LangChain) to power complex data queries and
      generate AI responses & React Charts for Analytics
      `,
    },
    {
      company: "Makamba Maternity",
      badges: [],
      href: "https://apps.apple.com/app/id6469010105",
      location: "Remote",
      title: "Full Stack App Developer Intern",
      logoUrl: "https://i.ibb.co/qNmq5PS/Screenshot-2024-11-27-at-02-34-56.png",
      start: "Jan 2023",
      end: "April 2023",
      description: `Makamba Maternity - is a mobile app built for pregnant women to help them with their
pregnancy and to deal with doctors while tracking their progress
- I managed to build the entire frontend of the mobile app using React Native and Typescript.
- Managed to implement in-app payments, push notifications & Google Cloud Storage.
- The app extends more complex features like booking a meeting with doctor, messaging and much more.`,
    },
    {
      company: "Viia",
      href: "https://apps.apple.com/gb/app/viia/id6447322346",
      badges: [],
      location: "Remote",
      title: "Full Stack App Developer Intern",
      logoUrl: "https://i.ibb.co/KDZD0j7/Screenshot-2024-11-27-at-02-35-59.png",
      start: "Sept 2022",
      end: "Feb 2023",
      description: `Developed Viia, a carpooling app for users in Manchester, Birmingham, and London, aimed at
reducing travel costs.
- Developed a high-performing mobile frontend using React Native and TypeScript.
- Integrated Google Cloud Maps and Firebase Storage, enabling in-app payments, real-time
driver locations, and driver messaging.`,
    },
  ],
  education: [
    {
      school: "University of Dundee",
      href: "https://dundee.ac.uk",
      degree: "BSc(Hons) Computer Science",
      logoUrl:
        "https://imgs.search.brave.com/nktYxrZaYcR3XFgpbmW83nU8rwGt7ckfMyPMp3I0CEw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi84Lzg4L0Fy/bXNfb2ZfdGhlX1Vu/aXZlcnNpdHlfb2Zf/RHVuZGVlLnN2Zy81/MTJweC1Bcm1zX29m/X3RoZV9Vbml2ZXJz/aXR5X29mX0R1bmRl/ZS5zdmcucG5n",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Whispra",
      href: "https://apps.apple.com/gb/app/whispra-voice-journal-diary/id6746568356",
      active: true,
      description:
        "A real-time voice journaling app with an AI companion that talks back to you. Features include voice conversations, text chat, progress insights, and mood tracking. The AI provides personalized responses and helps users process their thoughts and emotions.",
      technologies: [
        "React Native",
        "Expo",
        "OpenAI",
        "Supabase",
        "WebSocket",
        "WebRTC",
      ],
      links: [
        {
          type: "Mobile App",
          href: "https://apps.apple.com/app/whispra",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://i.ibb.co/Nd7TH58b/Shots-Mockups-72.png",
      dates: "",
      downloads: "1000+",
    },

    {
      title: "Strand AI",
      href: "https://apps.apple.com/gb/app/strand-ai-hair-style-analysis/id6743377249",
      active: true,
      description:
        "An AI powered hair analysis app, that can help you analyze 20+ attributes of your hair. It also generates a personalized hair care plan for you with an AI hair coach to give you best style recommendations.",
      technologies: [
        "React Native",
        "React",
        "Node.js",
        "Expo",
        "Supabase",
        "OpenAI",
      ],
      links: [
        {
          type: "Mobile App",
          href: "https://apps.apple.com/gb/app/strand-ai-hair-style-analysis/id6743377249",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://i.ibb.co/CpM5MVHm/466shots-so.png",
      dates: "",
      downloads: "5500+",
    },
    {
      title: "Pathaka AI",
      href: "https://apps.apple.com/us/app/pathaka-ai-generate-podcasts/id6740544344",
      active: true,
      description:
        "From a prompt to a podcast, Pathaka AI is a podcast generator that can help you generate a podcast from a prompt. Not a simple wrapper, gives you a complete 25 mins+ podcast, covering topic in depth. 1000+ podcasts in content library.",
      technologies: [
        "React Native",
        "React",
        "Node.js",
        "Expo",
        "Supabase",
        "AWS",
        "ElevenLabs",
        "OpenAI",
        "Claude",
      ],
      links: [
        {
          type: "Mobile App",
          href: "https://apps.apple.com/us/app/pathaka-ai-generate-podcasts/id6740544344",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://i.ibb.co/GQR5fV1F/371shots-so.png",
      dates: "",
      downloads: "600+",
    },
    {
      title: "Viia",
      href: "https://apps.apple.com/gb/app/viia/id6447322346",
      active: true,
      description:
        "Developed a carpooling application that can help users lower down their travel expenses by a great percentage, without cutting down on a great travel experience, with a great provided security. Primary goal of the app was to travel safest, with necessary and extended security.",
      technologies: ["React Native", "React", "Node.js", "Expo", "MongoDB"],
      links: [
        {
          type: "Mobile App",
          href: "https://apps.apple.com/gb/app/viia/id6447322346",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://i.ibb.co/RQVXGJZ/918shots-so.png",
      dates: "",
    },
    {
      title: "Makamba Maternity",
      href: "https://apps.apple.com/app/id6469010105",
      active: true,
      description:
        "Developed a pregnancy tracker app, which includes all the functionalities for a mother, and makes her pregnancy tracking easy. Includes a on service doctor on chat / call subscriptions. A complete SASS product.",
      technologies: ["React Native", "React", "Node.js", "Expo", "Firebase"],
      links: [
        {
          type: "Mobile App",
          href: "https://apps.apple.com/app/id6469010105",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://i.ibb.co/g3MgYF4/370shots-so.png",
      dates: "",
      downloads: "",
    },
    {
      title: "Fitness Centre",
      href: "https://apps.apple.com/gb/app/fit-center/id6479176792",
      active: true,
      description:
        "Developed a fitness centre app, which allows users to get personally trained, tailored workout plans, track their progress and much more. The app is compleely scalable and is being used by actual users & trainers",
      technologies: [
        "React Native",
        "React",
        "Node.js",
        "Expo",
        "Firebase",
        "Stripe",
      ],
      links: [
        {
          type: "Mobile App",
          href: "https://apps.apple.com/gb/app/fit-center/id6479176792",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://i.ibb.co/ZJy3vgM/575shots-so.png",
      dates: "",
      downloads: "",
    },
    {
      title: "The Green Life - BlackRock Hackathon Winner 🏆",
      dates: "May 2025",
      location: "",
      description:
        "Developed a software for 'The Green Life', a BlackRock charity organization's initiative. Created a comprehensive platform with a 3D interactive map visualization showing global impact and reach. The platform manages social media content, handles campaign applications, schedules posts, and streamlines the application review process.",
      technologies: [
        "Next.js",
        "React",
        "Three.js",
        "TailwindCSS",
        "Supabase",
        "Shadcn/UI",
      ],
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="size-3" />,
          href: "https://quackathon-2025.vercel.app/",
        },
      ],
      image: "https://i.ibb.co/356br7Wy/Shots-Mockups-73.png",
      downloads: "",
    },
    {
      title: "Just Signup Me",
      href: "https://justsignup.me",
      active: true,
      description:
        "Allows you to simply collec emails from the frontend with no need of backend, a email service or a server - handles everything by itslef. Gives anlytical data, table of signed up users and more.",
      technologies: [
        "Next.js",
        "Typescript",
        "Supabase",
        "Resend",
        "TailwindCSS",
        "Stripe",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://justsignup.me",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://i.ibb.co/nQ7K5Nn/265shots-so.png",
      dates: "",
      downloads: "",
    },
  ],
  hackathons: [
    {
      title: "Quackathon: University of Dundee - Winner 🏆",
      dates: "May 2025",
      location: "Dundee, United Kingdom",
      description:
        "Developed an admin panel for 'The Green Life', a BlackRock charity organization's initiative. Created a comprehensive platform with a 3D interactive map visualization showing global impact and reach. The platform manages social media content, handles campaign applications, schedules posts, and streamlines the application review process.",

      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://quackathon-2025.vercel.app/",
        },
      ],
    },
    {
      title: "DurHack - Durham University",
      dates: "Nov 2nd - 4th, 2024",
      location: "Durham, United Kingdom",
      description:
        "Developed a mobile app which allows users/financial advisors to analyse fraud calls to & be safe from legal frauds. The app uses AI to analyse the call and provide a report on the call.",
      image: "https://durhack.com/assets/branding/durhack-2024-mark.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/khushxxl/durhack_atom_mobile_app",
        },
      ],
    },
    {
      title: "Quackathon - University of Dundee",
      dates: "May 2024",
      location: "Dundee, United Kingdom",
      description:
        "A blockchain based platform which allows users to create and trade their own NFTs. It's a learning platform for users to learn about blockchain and NFTs. Trade, Track, Create, Learn.",
      image: "https://ducs.dev/images/ducs_logo.webp",

      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://quackathon-2024.vercel.app/",
        },
      ],
    },
    {
      title: "Quackathon - University of Dundee",
      dates: "May 2023",
      location: "Dundee, United Kingdom",
      description:
        "A mobile app which allows users to literate themselves about money and finance. The app uses AI to provide personalised financial advice to users. Consisted of a piggy bank, a quiz and a chatbot.",
      image: "https://ducs.dev/images/ducs_logo.webp",
      links: [],
    },
  ],
} as const;
