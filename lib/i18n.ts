export type Lang = 'en' | 'id'

export interface Project {
  title: string
  context: string
  description: string
  tech: string[]
  codeUrl?: string
  demoUrl?: string
  demoLabel?: string
  /** Hide the demo button entirely (e.g. backend APIs with nothing to demo). */
  noDemo?: boolean
}

export interface ExperienceEntry {
  role: string
  organization: string
  period: string
  description: string
}

export interface SkillGroup {
  label: string
  skills: string[]
}

interface Content {
  nav: {
    about: string
    portfolio: string
    experience: string
    contact: string
  }
  hero: {
    name: string
    identities: string[]
    bio: string
    location: string
    availability: string
    ctaPrimary: string
    ctaSecondary: string
    ctaCv: string
  }
  about: {
    title: string
    bio: string
    facts: string[]
    photoAlt: string
  }
  skills: {
    title: string
    groups: SkillGroup[]
  }
  portfolio: {
    title: string
    viewCode: string
    liveDemo: string
    projects: Project[]
  }
  experience: {
    title: string
    entries: ExperienceEntry[]
  }
  contact: {
    title: string
    text: string
    emailLabel: string
    linkedinLabel: string
    githubLabel: string
    instagramLabel: string
  }
  footer: {
    builtBy: string
  }
}

export const content: Record<Lang, Content> = {
  en: {
    nav: {
      about: 'About',
      portfolio: 'Portfolio',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      name: 'Naufal Maulana Ichlas',
      identities: [
        'Computer Science Student.',
        'Frontend Developer.',
        'Problem Solver.',
        'Lifelong Learner.',
      ],
      bio: 'A goal-oriented Computer Science undergraduate at Binus University, passionate about building clean, user-centric digital products and bridging technical execution with real business value.',
      location: 'Currently based in BSD, Indonesia',
      availability:
        'Open to freelance web development opportunities and collaborative projects.',
      ctaPrimary: 'View Portfolio',
      ctaSecondary: 'Get in Touch',
      ctaCv: 'Download CV',
    },
    about: {
      title: 'About',
      bio: "Hi, I'm Naufal. I'm a fourth-semester Computer Science student at Binus University, passionate about building clean, functional digital products. When I'm not coding, I'm usually running HR development programs at BNCC or sharpening my competitive programming skills.",
      facts: [
        'Based in BSD, Indonesia',
        'Top 3 OSN Informatics, Bengkalis Regency',
        'HRD Staff at BNCC',
        'Open to freelance work',
      ],
      photoAlt: 'Portrait of Naufal Maulana Ichlas',
    },
    skills: {
      title: 'Skills & Tech Stack',
      groups: [
        { label: 'Languages', skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C'] },
        { label: 'Frontend', skills: ['React', 'Next.js', 'Tailwind CSS'] },
        { label: 'Backend', skills: ['Express', 'Supabase'] },
        { label: 'Tools', skills: ['Git', 'Figma', 'VS Code'] },
        { label: 'Currently Learning', skills: ['Flutter (Mobile Development)'] },
      ],
    },
    portfolio: {
      title: 'Selected Work',
      viewCode: 'View Code',
      liveDemo: 'Live Demo',
      projects: [
        {
          title: 'Lock-In',
          context: 'Software Engineering · Binus University',
          description:
            'A note-sharing platform that helps Binus students find and post lecture notes and course materials, contributed by students, organizations, or lecturers. Users can group notes into collections to share or save them, upvote collections to help them reach more people, and bookmark the ones they want to keep.',
          tech: ['TypeScript', 'Bun', 'Vite + React', 'Hono', 'PostgreSQL', 'S3 Storage'],
          codeUrl: 'https://github.com/sunibshare/lock-in',
          demoUrl:
            'https://drive.google.com/drive/folders/1OON8KziusbAY46Gmo25hwJpCLP6mWeyb?usp=sharing',
          demoLabel: 'Video Demo',
        },
        {
          title: 'WSpeedrun API',
          context: 'Software Architecture · Binus University',
          description:
            'A centralized backend system for managing competitive speedrun records. Built with a Microservices architecture to ensure scalability and strict separation of concerns. Features independent services (Auth, Games, Runs) communicating asynchronously via Axios, with comprehensive Swagger UI documentation and JWT authentication.',
          tech: ['TypeScript', 'NestJS', 'Microservices', 'Prisma ORM', 'MySQL', 'Swagger'],
          codeUrl: 'https://github.com/Aerofal/Software-Architecture_Lab-WSpeedrun',
          noDemo: true,
        },
      ],
    },
    experience: {
      title: 'Experience',
      entries: [
        {
          role: 'Human Resource Development Staff',
          organization: 'Bina Nusantara Computer Club (BNCC)',
          period: 'Sep 2025 – Sep 2026',
          description:
            'Planning, organizing, and managing programs that develop the soft skills and sense of community of internal members. Led the Selcavis activist recruitment process and the TnD Git training program as project leader.',
        },
        {
          role: 'Human Resource Development Activist',
          organization: 'Bina Nusantara Computer Club (BNCC)',
          period: 'Dec 2024 – Aug 2025',
          description:
            'Responsible for activist engagement: assisted in performance evaluations to ensure continuous growth, and authored training modules on Figma UI/UX fundamentals and effective AI prompting.',
        },
        {
          role: 'Jollybasic 2025 Participant',
          organization: 'Jollybee Binus',
          period: 'Feb 2025 – Jul 2025',
          description:
            'Actively participated in the Jollybee Basic Training program, learning competitive programming fundamentals using C++.',
        },
      ],
    },
    contact: {
      title: "Let's connect.",
      text: "I'm always open to new projects, collaborations, or a good conversation about tech. Drop me a line anytime.",
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      instagramLabel: 'Instagram',
    },
    footer: {
      builtBy: 'Built by Naufal Maulana Ichlas',
    },
  },
  id: {
    nav: {
      about: 'Tentang',
      portfolio: 'Portofolio',
      experience: 'Pengalaman',
      contact: 'Kontak',
    },
    hero: {
      name: 'Naufal Maulana Ichlas',
      identities: [
        'Mahasiswa Ilmu Komputer.',
        'Frontend Developer.',
        'Pemecah Masalah.',
        'Pembelajar Seumur Hidup.',
      ],
      bio: 'Mahasiswa Ilmu Komputer Binus University yang berorientasi pada tujuan, dengan minat besar membangun produk digital yang bersih dan berpusat pada pengguna, serta menjembatani eksekusi teknis dengan nilai bisnis nyata.',
      location: 'Saat ini berdomisili di BSD, Indonesia',
      availability:
        'Terbuka untuk peluang freelance web development dan proyek kolaboratif.',
      ctaPrimary: 'Lihat Portofolio',
      ctaSecondary: 'Hubungi Saya',
      ctaCv: 'Unduh CV',
    },
    about: {
      title: 'Tentang',
      bio: 'Halo, saya Naufal. Saya mahasiswa Ilmu Komputer semester empat di Binus University, dengan minat besar membangun produk digital yang bersih dan fungsional. Di luar coding, saya biasanya menjalankan program pengembangan SDM di BNCC atau mengasah kemampuan competitive programming.',
      facts: [
        'Berdomisili di BSD, Indonesia',
        'Top 3 OSN Informatika Kab. Bengkalis',
        'Staf HRD di BNCC',
        'Terbuka untuk proyek freelance',
      ],
      photoAlt: 'Foto Naufal Maulana Ichlas',
    },
    skills: {
      title: 'Keahlian & Teknologi',
      groups: [
        { label: 'Bahasa Pemrograman', skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C'] },
        { label: 'Frontend', skills: ['React', 'Next.js', 'Tailwind CSS'] },
        { label: 'Backend', skills: ['Express', 'Supabase'] },
        { label: 'Tools', skills: ['Git', 'Figma', 'VS Code'] },
        { label: 'Sedang Dipelajari', skills: ['Flutter (Mobile Development)'] },
      ],
    },
    portfolio: {
      title: 'Karya Pilihan',
      viewCode: 'Lihat Kode',
      liveDemo: 'Demo Langsung',
      projects: [
        {
          title: 'Lock-In',
          context: 'Software Engineering · Binus University',
          description:
            'Platform berbagi catatan yang mempermudah mahasiswa Binus mencari dan memposting catatan atau materi mata kuliah, baik dari mahasiswa, organisasi, maupun dosen. Pengguna dapat membuat koleksi berisi beberapa catatan untuk dibagikan atau disimpan, memberi upvote pada koleksi agar menjangkau lebih banyak pengguna, dan mem-bookmark koleksi favorit.',
          tech: ['TypeScript', 'Bun', 'Vite + React', 'Hono', 'PostgreSQL', 'S3 Storage'],
          codeUrl: 'https://github.com/sunibshare/lock-in',
          demoUrl:
            'https://drive.google.com/drive/folders/1OON8KziusbAY46Gmo25hwJpCLP6mWeyb?usp=sharing',
          demoLabel: 'Video Demo',
        },
        {
          title: 'WSpeedrun API',
          context: 'Software Architecture · Binus University',
          description:
            'Sistem backend terpusat untuk mengelola rekor competitive speedrun. Dibangun dengan arsitektur Microservices demi skalabilitas dan pemisahan tanggung jawab yang ketat. Memiliki layanan-layanan independen (Auth, Games, Runs) yang berkomunikasi secara asinkron melalui Axios, dilengkapi dokumentasi Swagger UI yang komprehensif dan autentikasi JWT.',
          tech: ['TypeScript', 'NestJS', 'Microservices', 'Prisma ORM', 'MySQL', 'Swagger'],
          codeUrl: 'https://github.com/Aerofal/Software-Architecture_Lab-WSpeedrun',
          noDemo: true,
        },
      ],
    },
    experience: {
      title: 'Pengalaman',
      entries: [
        {
          role: 'Staf Human Resource Development',
          organization: 'Bina Nusantara Computer Club (BNCC)',
          period: 'Sep 2025 – Sep 2026',
          description:
            'Merencanakan, mengorganisir, dan mengelola program pengembangan soft skill serta rasa kebersamaan anggota internal. Memimpin proses rekrutmen aktivis Selcavis dan program pelatihan TnD Git sebagai project leader.',
        },
        {
          role: 'Aktivis Human Resource Development',
          organization: 'Bina Nusantara Computer Club (BNCC)',
          period: 'Des 2024 – Agu 2025',
          description:
            'Bertanggung jawab atas keterlibatan aktivis: membantu evaluasi kinerja untuk memastikan pertumbuhan berkelanjutan, serta menyusun modul pelatihan dasar UI/UX Figma dan teknik AI prompting.',
        },
        {
          role: 'Peserta Jollybasic 2025',
          organization: 'Jollybee Binus',
          period: 'Feb 2025 – Jul 2025',
          description:
            'Berpartisipasi aktif dalam program Jollybee Basic Training dan mempelajari dasar-dasar competitive programming menggunakan C++.',
        },
      ],
    },
    contact: {
      title: 'Mari terhubung.',
      text: 'Saya selalu terbuka untuk proyek baru, kolaborasi, atau sekadar obrolan seru seputar teknologi. Jangan ragu untuk menghubungi saya.',
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      instagramLabel: 'Instagram',
    },
    footer: {
      builtBy: 'Dibuat oleh Naufal Maulana Ichlas',
    },
  },
}
