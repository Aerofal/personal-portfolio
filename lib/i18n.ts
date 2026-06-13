export type Lang = 'en' | 'id'

/** Link kinds drive which icon renders and how the link behaves. */
export type LinkKind = 'web' | 'code' | 'demo' | 'pdf' | 'doc'

export interface ProjectLink {
  kind: LinkKind
  label: string
  url: string
}

/** Why → How → What → Learning. The core Apple-style case-study structure. */
export interface CaseStudy {
  why: string
  how: string
  what: string
  learning: string
}

export interface Project {
  title: string
  year: string
  /** Short badges for quick scanning, e.g. ["Group Project", "Live Product"]. */
  labels: string[]
  role: string
  /** One- or two-sentence card summary. */
  summary: string
  /** Expandable Why/How/What/Learning. */
  story: CaseStudy
  /** Naufal's personal contribution — shown for group projects. */
  contribution?: string
  tech: string[]
  links?: ProjectLink[]
  /** Honest, non-clickable note (disclaimer, repo status, future direction). */
  note?: string
}

/** A single bulleted sub-item beneath a role (e.g. a specific program led). */
export interface ExperienceSubItem {
  title: string
  points: string[]
}

export interface ExperienceRole {
  role: string
  period: string
  summary?: string
  /** Optional event/venue context line. */
  context?: string
  items?: ExperienceSubItem[]
}

export interface ExperienceGroup {
  /** Small affiliation label above the org name, e.g. "BINUS University". */
  kicker?: string
  org: string
  roles: ExperienceRole[]
}

export interface VolunteerEntry {
  org: string
  role: string
  period: string
  description: string
  link?: ProjectLink
}

export interface SkillGroup {
  label: string
  /** Neutral, honest labeling for the whole group (e.g. "Used in projects"). */
  note?: string
  skills: string[]
}

interface Content {
  nav: {
    about: string
    capabilities: string
    projects: string
    experience: string
    volunteer: string
    contact: string
  }
  hero: {
    name: string
    identities: string[]
    bio: string[]
    location: string
    availability: string
    ctaPrimary: string
    ctaSecondary: string
    ctaCv: string
  }
  about: {
    title: string
    bio: string[]
    facts: string[]
    photoAlt: string
  }
  skills: {
    title: string
    groups: SkillGroup[]
  }
  projects: {
    title: string
    readStory: string
    hideStory: string
    labelWhy: string
    labelHow: string
    labelWhat: string
    labelContribution: string
    labelLearning: string
    labelRole: string
    labelTech: string
    projects: Project[]
  }
  experience: {
    title: string
    showMore: string
    showLess: string
    groups: ExperienceGroup[]
  }
  volunteer: {
    title: string
    entries: VolunteerEntry[]
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
      capabilities: 'Capabilities',
      projects: 'Projects',
      experience: 'Experience',
      volunteer: 'Volunteer',
      contact: 'Contact',
    },
    hero: {
      name: 'Naufal Maulana Ichlas',
      identities: [
        'Problem Solver.',
        'Software Engineering Student.',
        'Aspiring Domain Expert.',
        'Product-Minded Builder.',
        'Project Leader.',
        'People & Process Organizer.',
        'Turning ambiguity into structured execution.',
      ],
      bio: [
        'A goal-oriented Computer Science undergraduate in the Software Engineering stream at BINUS University, building a Domain Expert profile in product, project, people, and event operations.',
        'I connect user needs, business context, team coordination, and technical execution to move ideas from uncertainty into concrete outcomes.',
      ],
      location: 'Currently based in BSD, Indonesia',
      availability:
        'Open to multidisciplinary collaborations, product challenges, and project leadership opportunities.',
      ctaPrimary: 'View Projects',
      ctaSecondary: 'Get in Touch',
      ctaCv: 'Download CV',
    },
    about: {
      title: 'About',
      bio: [
        "Hi, I'm Naufal.",
        "I'm a Computer Science student at BINUS University, currently focusing on the Software Engineering stream.",
        'Building software is one part of how I work. I also enjoy understanding people, organizing teams, shaping product direction, and turning uncertain ideas into structured plans.',
        'Some of my most meaningful experiences came from projects that did not begin smoothly — when responsibilities were unclear, timelines were moving, or the team had different ideas. Those situations taught me how to listen, clarify expectations, divide work, and keep people moving toward the same outcome.',
        "I'm developing my path as a Domain Expert who can connect people, product reasoning, project execution, and technology.",
      ],
      facts: [
        'Based in BSD, Indonesia',
        'Software Engineering Stream',
        'HRD Staff at BNCC — Bina Nusantara Computer Club',
        'Product & Project Operations',
        'Open to Multidisciplinary Collaboration',
      ],
      photoAlt: 'Portrait of Naufal Maulana Ichlas',
    },
    skills: {
      title: 'Capabilities & Toolkit',
      groups: [
        {
          label: 'Domain & Leadership',
          skills: [
            'Product Strategy',
            'Project Management',
            'People Development',
            'Event Operations',
            'Team Coordination',
            'Problem Framing',
            'Communication & Facilitation',
            'User-Centered Problem Solving',
          ],
        },
        {
          label: 'Technical Execution',
          note: 'Used in projects or coursework — depth varies by tool.',
          skills: [
            'JavaScript',
            'TypeScript',
            'Python',
            'Java',
            'C',
            'C++',
            'React',
            'Next.js',
            'Flutter',
            'Node.js',
            'Express',
            'Supabase',
            'MySQL',
            'Git',
          ],
        },
        {
          label: 'Product & Collaboration Tools',
          skills: [
            'GitHub',
            'Figma',
            'Notion',
            'Google Workspace',
            'Microsoft Excel',
            'Discord',
            'VS Code',
            'Postman',
          ],
        },
        {
          label: 'Currently Learning',
          note: 'Direction, not finished expertise.',
          skills: [
            'Swift',
            'Apple Platform Fundamentals',
            'Product Discovery',
            'Cross-Disciplinary Product Development',
          ],
        },
      ],
    },
    projects: {
      title: 'Projects',
      readStory: 'Read the Story',
      hideStory: 'Hide the Story',
      labelWhy: 'Why',
      labelHow: 'How',
      labelWhat: 'What',
      labelContribution: 'My contribution',
      labelLearning: 'What I learned',
      labelRole: 'Role',
      labelTech: 'Built with',
      projects: [
        {
          title: 'Naufal Studio',
          year: '2026',
          labels: ['Self-Initiated', 'Live Product'],
          role: 'Founder · Product Direction · UX · Web Development',
          summary:
            'A self-initiated website studio built to answer a practical question: how can a new service business earn trust before it has a long client history?',
          story: {
            why: 'I wanted to start offering website-development services, but a new studio has no track record to point to. The studio site itself had to become the first proof of quality — not just something attractive, but something that could explain the offer, reduce confusion, build trust, and guide visitors toward the right package.',
            how: 'I worked through positioning and target market first, then defined clear service boundaries and package structures. I designed a package finder to help visitors self-select, balanced premium visuals with plain-language clarity, and handled bilingual and light/dark theme considerations. After deployment and domain setup, I kept refining the copy and flow based on how the site actually read to people.',
            what: 'A live studio website that presents packages, concept previews, a real project, and clear WhatsApp conversion paths. It now does two jobs at once: the storefront for the business and the first substantial piece in this portfolio.',
            learning:
              'Product quality is not created by adding more features. It comes from making deliberate decisions about what users need to understand, trust, and do next.',
          },
          tech: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Vercel'],
          links: [{ kind: 'web', label: 'Visit Website', url: 'https://naufalstudio.com' }],
        },
        {
          title: 'NaufalMaulana.com',
          year: '2026',
          labels: ['Self-Initiated', 'Live Product'],
          role: 'Product Direction · Content Strategy · Design · Development',
          summary:
            'An evolving personal portfolio built to communicate technical ability, leadership experience, and project thinking — more honestly than a one-page résumé can.',
          story: {
            why: 'My earlier portfolio leaned heavily on technology and assignments. I needed a clearer identity that showed both execution and leadership, and a static résumé could not show process, decisions, or growth over time.',
            how: 'I reorganized the content around projects, experience, leadership, and reflection, and treated the site as something iterated rather than finished once. The architecture keeps all content in one bilingual data layer, so the writing can keep evolving without touching the interface.',
            what: 'A responsive, bilingual personal website with real project links, CV access, light and dark themes, and case studies that grow as the work does.',
            learning:
              "Personal branding is not about presenting every achievement. It is about choosing the evidence that supports a clear and honest professional direction.",
          },
          tech: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
          links: [{ kind: 'web', label: 'Visit Website', url: 'https://naufalmaulana.com' }],
        },
        {
          title: 'Genshin Import',
          year: '2026',
          labels: ['Class Assignment', 'Group Project'],
          role: 'Mobile Application Team — Member',
          summary:
            'A Flutter-based mobile commerce app inspired by the Genshin Impact universe, built around role-based access, virtual-currency purchases, and customizable profiles.',
          story: {
            why: 'The project explored how a themed, game-flavored experience could make a standard e-commerce workflow more engaging. Pulling that off meant connecting mobile UI, authentication, business rules, and backend data into one coherent flow.',
            how: 'The team split frontend and backend responsibilities and built parallel User and Admin experiences. The hard parts were authentication (JWT plus Google Sign-In), keeping the in-app Mora balance synchronized across screens, validating purchases against stock, and wiring profile editing with image upload — on top of the usual local network and environment configuration friction.',
            what: 'A working app covering login and registration, an item catalogue with detail views, admin item management, a Mora balance with simulated top-up, purchase transactions, transaction history, and profile customization with light and dark themes.',
            learning:
              'A working application depends on coordination across layers. A polished interface is not enough when authentication, data consistency, roles, and transaction rules all have to agree with each other.',
          },
          contribution:
            'Contributed as part of the mobile application team across the User and Admin flows. (Exact responsibility split to be confirmed.)',
          tech: ['Flutter', 'Dart', 'Node.js', 'Express', 'MySQL', 'JWT', 'Google Sign-In', 'Multer'],
          note: 'Repository coming soon · Genshin Impact assets are used for an educational, non-commercial academic project only.',
        },
        {
          title: 'NoteNook',
          year: '2026',
          labels: ['Class Assignment', 'Group Project', 'Work in Progress'],
          role: 'Group Project Member',
          summary:
            'A Flutter-based student community and academic-support concept where students exchange knowledge, join discussions, and consult selected mentors or teaching assistants.',
          story: {
            why: 'Students often struggle to find reliable academic guidance, and ordinary forums do not always connect them to trusted mentors. NoteNook explores a structured bridge between open peer discussion and guided, mentor-assisted support — distinct from simply sharing notes.',
            how: 'We scoped the experience around a student forum, mentor profiles, topic categories, and a consultation flow, and worked to define where community content ends and vetted mentor guidance begins. Several areas remain planned or prototype-stage rather than fully implemented.',
            what: 'A defined product direction and an in-progress Flutter build. The community-discussion and mentor-consultation flows are designed; some features are still planned or prototype-stage and labeled as such.',
            learning:
              'Scoping and trust design matter as much as features. Deciding early what a student-support platform should not do is what keeps community content and mentor guidance from blurring together.',
          },
          contribution:
            'Contributed to scoping, product direction, and feature definition with the team. (Exact responsibility split to be confirmed.)',
          tech: ['Flutter', 'Dart'],
          note: 'Work in progress · repository link coming soon.',
        },
        {
          title: 'Giby',
          year: '2025',
          labels: ['Class Assignment', 'Group Project', 'Concept Project'],
          role: 'CEO / Project Lead (assigned academic team role)',
          summary:
            'A parenting-community product concept for parents of children aged 0–7, combining structured forums, expert consultation, nutrition support, product recommendations, and membership services.',
          story: {
            why: 'Parents face fragmented and sometimes conflicting information, and credible specialists can be expensive or hard to reach — while experts struggle to answer individual questions at scale. Our team explored a single platform connecting community knowledge, expert guidance, and practical nutrition tools.',
            how: 'This was one of my earliest projects with a leadership-heavy role, and at first I underestimated how hard it would be to divide responsibilities, align different ideas, and keep everyone moving at the same pace. I focused on clarifying the product direction, dividing responsibilities, coordinating deliverables, and keeping the problem, solution, and final presentation aligned — supporting the team when priorities got unclear rather than trying to own every slide or design.',
            what: 'The team produced a comprehensive concept and prototype: target-customer analysis, parent and expert personas, empathy mapping, a value proposition, feature planning (forums, expert consultation, a nutrition calculator, parenting events), and monetization through a Parenthood+ membership. The final concept was recognized by the lecturer as one of the favored projects in the class.',
            learning:
              'Giby changed how I understood leadership. Leading is not about having every answer — it is about creating clarity, giving people ownership, listening when the plan does not work, and helping the team move forward together.',
          },
          contribution:
            'Clarified product direction, divided responsibilities, coordinated deliverables, and aligned the team’s problem–solution–presentation narrative.',
          tech: ['Product Strategy', 'User Research', 'Empathy Mapping', 'Value Proposition Design', 'Figma'],
          links: [{ kind: 'pdf', label: 'View Project PDF', url: '/giby-final-project.pdf' }],
          note: 'Concept stage — not yet a working application. A future revisit would add stronger product validation and technical execution.',
        },
        {
          title: 'Lock-In',
          year: '2026',
          labels: ['Class Assignment', 'Group Project'],
          role: 'Team Member',
          summary:
            'A note-sharing platform that helps BINUS students find and post lecture notes and course materials, then organize them into collections to share, upvote, and bookmark.',
          story: {
            why: 'Useful course material is scattered across chats, drives, and individuals. Lock-In gives students one place to contribute notes — from peers, organizations, or lecturers — and surface the most helpful ones.',
            how: 'The team built contribution, collection, upvoting, and bookmarking flows on a TypeScript stack (Vite + React on the front, Hono on Bun on the back) with PostgreSQL and S3-compatible storage for files. Designing the collection-and-upvote model was the core challenge: it had to reward genuinely useful material without becoming noisy.',
            what: 'A working platform where students post notes, group them into shareable collections, upvote to boost reach, and bookmark what they want to keep. (This is note sharing and organization — distinct from NoteNook’s community-and-mentor focus.)',
            learning:
              "Clear data modeling early — what a 'note,' a 'collection,' and an 'upvote' really mean — saves a lot of confusion later when the features start interacting.",
          },
          contribution:
            'Contributed as part of the development team. (Exact responsibility split to be confirmed.)',
          tech: ['TypeScript', 'Bun', 'Vite + React', 'Hono', 'PostgreSQL', 'S3 Storage'],
          links: [
            { kind: 'code', label: 'View Code', url: 'https://github.com/sunibshare/lock-in' },
            {
              kind: 'demo',
              label: 'Video Demo',
              url: 'https://drive.google.com/drive/folders/1OON8KziusbAY46Gmo25hwJpCLP6mWeyb?usp=sharing',
            },
          ],
        },
        {
          title: 'FinSet',
          year: '2026',
          labels: ['Class Assignment', 'Group Project'],
          role: 'Team Member',
          summary:
            'A personal finance tracker with a separate web frontend and API backend, built to record and review transactions through a clean, focused interface.',
          story: {
            why: 'Personal spending is easy to lose track of when it lives across receipts and memory. FinSet gives a simple, structured place to record transactions and see where the money goes.',
            how: 'Built as a Software Architecture course project with a clear front/back separation: a React + Vite client and an Express API backed by MongoDB, with JWT authentication and hashed passwords. Splitting the system into independent frontend and backend services kept responsibilities clean and the pieces independently deployable.',
            what: 'A deployed React client (live on Vercel) talking to an Express + MongoDB API with secure authentication and transaction management.',
            learning:
              'A clean contract between frontend and backend is what lets a small team work in parallel without constantly stepping on each other.',
          },
          contribution:
            'Contributed within the project team. (Exact responsibility split to be confirmed.)',
          tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT'],
          links: [
            { kind: 'demo', label: 'Live Demo', url: 'https://financial-tracker-frontend-lemon.vercel.app' },
            { kind: 'code', label: 'Frontend', url: 'https://github.com/ValeryanRizky/financial-tracker-frontend' },
            { kind: 'code', label: 'Backend', url: 'https://github.com/ValeryanRizky/financial-tracker-Backend' },
          ],
        },
        {
          title: 'WSpeedrun API',
          year: '2026',
          labels: ['Class Assignment', 'Individual Project'],
          role: 'Backend / API Developer',
          summary:
            'A centralized backend for managing competitive speedrun records, built on a microservices architecture with independent Auth, Games, and Runs services.',
          story: {
            why: 'Speedrun records need a reliable, well-structured backend. This lab was a chance to practice strict separation of concerns and scalable service design rather than a single monolith.',
            how: 'I split the system into independent Auth, Games, and Runs services that communicate asynchronously, documented everything with Swagger UI, and secured it with JWT. The interesting trade-off was keeping services genuinely independent while still letting them coordinate cleanly.',
            what: 'A documented, JWT-secured microservices API with independent services and comprehensive Swagger UI documentation.',
            learning:
              'Microservices buy you separation and scalability, but they charge you in coordination and documentation. Writing the API contracts down clearly is what makes the boundaries worth it.',
          },
          tech: ['TypeScript', 'NestJS', 'Microservices', 'Prisma ORM', 'MySQL', 'Swagger'],
          links: [
            {
              kind: 'code',
              label: 'View Code',
              url: 'https://github.com/Aerofal/Software-Architecture_Lab-WSpeedrun',
            },
          ],
        },
      ],
    },
    experience: {
      title: 'Experience',
      showMore: 'Show details',
      showLess: 'Hide details',
      groups: [
        {
          kicker: 'BINUS University',
          org: 'BNCC — Bina Nusantara Computer Club',
          roles: [
            {
              role: 'Human Resource Development Staff',
              period: 'September 2025 – Present',
              summary:
                'Plan, organize, and run programs that develop the soft skills and sense of community of internal members.',
              items: [
                {
                  title: 'Seleksi Calon Aktivis — Project Leader',
                  points: [
                    'Managed the end-to-end activist recruitment timeline.',
                    'Coordinated large-scale candidate communication via the official Discord community.',
                    'Aligned interview schedules with board-member availability for a smoother selection experience.',
                  ],
                },
                {
                  title: 'Training & Development (Git) — Project Leader',
                  points: [
                    'Led the full execution of the Git upskilling program.',
                    'Developed training materials covering branching, merging, and integration.',
                    'Helped activists build practical, hands-on Git competency.',
                  ],
                },
              ],
            },
            {
              role: 'Human Resource Development Activist',
              period: 'December 2024 – August 2025',
              summary: 'Created foundational learning modules for fellow activists.',
              items: [
                {
                  title: 'TnD Figma — Module Creator',
                  points: ['Developed a foundational UI/UX learning module as a guide before the main training.'],
                },
                {
                  title: 'TnD AI Prompting — Module Creator',
                  points: [
                    'Developed an introductory module on effective AI prompting and workflow improvement.',
                  ],
                },
              ],
            },
            {
              role: 'Technoscape 2026 — Event Division',
              period: 'February 2026 – June 2026',
              context: 'Hackathon · June 12–14 · Hotel Neo Tendean, Jakarta',
              summary: 'Operated across stage, floor, and workshop roles for a major BNCC event.',
              items: [
                {
                  title: 'Hackathon — Stage Manager',
                  points: [
                    'Coordinated potential judges and mentors before the event.',
                    'Managed on-stage technical and operational flow against the rundown.',
                    'Monitored timing and participant readiness, in real-time contact with the technical team.',
                  ],
                },
                {
                  title: 'Hackathon — Floor Manager',
                  points: [
                    'Managed participant and guest movement and monitored venue flow.',
                    'Responded to on-site issues and coordinated floor, stage, committee, and technical operations.',
                  ],
                },
                {
                  title: 'Workshop Team',
                  points: [
                    'Prepared pre-event requirements for the “Fintech Data Analytics & Business Intelligence” workshop.',
                  ],
                },
              ],
            },
          ],
        },
        {
          kicker: 'BINUS University',
          org: 'Jollybee BINUS',
          roles: [
            {
              role: 'Jollybasic 2025 — Participant',
              period: 'February 2025 – July 2025',
              summary:
                'Participated in foundational competitive-programming training using C++.',
            },
          ],
        },
        {
          kicker: 'Earlier Leadership · SMAS Cendana Mandau',
          org: 'Palang Merah Remaja (PMR)',
          roles: [
            {
              role: 'Vice Head of Community Service',
              period: 'July 2022 – April 2024',
              summary:
                'Helped organize community-service activities, coordinated teams, joined field activities, and supported humanitarian and health-related initiatives.',
            },
          ],
        },
      ],
    },
    volunteer: {
      title: 'Volunteer',
      entries: [
        {
          org: 'Peduly.com',
          role: 'Volunteer',
          period: 'February 2026 – March 2026',
          description:
            'Collaborated with a volunteer team to prepare and distribute fast-breaking meals for children at an orphanage. The experience strengthened my understanding of empathy, teamwork, and the importance of creating a welcoming human connection beyond the task itself.',
          link: { kind: 'web', label: 'Visit Peduly', url: 'https://peduly.com' },
        },
      ],
    },
    contact: {
      title: "Let's build something meaningful together.",
      text: "I'm open to multidisciplinary projects, product challenges, community initiatives, and opportunities where I can contribute through leadership, structured execution, and technology.",
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
      capabilities: 'Kapabilitas',
      projects: 'Proyek',
      experience: 'Pengalaman',
      volunteer: 'Relawan',
      contact: 'Kontak',
    },
    hero: {
      name: 'Naufal Maulana Ichlas',
      identities: [
        'Pemecah Masalah.',
        'Mahasiswa Software Engineering.',
        'Calon Domain Expert.',
        'Pembangun Berpikir Produk.',
        'Pemimpin Proyek.',
        'Penata Tim & Proses.',
        'Mengubah ketidakpastian menjadi eksekusi yang terstruktur.',
      ],
      bio: [
        'Mahasiswa Ilmu Komputer di jalur Software Engineering BINUS University yang berorientasi pada tujuan, sedang membangun profil Domain Expert di bidang produk, proyek, manusia, dan operasional acara.',
        'Saya menghubungkan kebutuhan pengguna, konteks bisnis, koordinasi tim, dan eksekusi teknis untuk membawa ide dari ketidakpastian menjadi hasil yang nyata.',
      ],
      location: 'Saat ini berdomisili di BSD, Indonesia',
      availability:
        'Terbuka untuk kolaborasi lintas disiplin, tantangan produk, dan peluang memimpin proyek.',
      ctaPrimary: 'Lihat Proyek',
      ctaSecondary: 'Hubungi Saya',
      ctaCv: 'Unduh CV',
    },
    about: {
      title: 'Tentang',
      bio: [
        'Halo, saya Naufal.',
        'Saya mahasiswa Ilmu Komputer di BINUS University, saat ini berfokus pada jalur Software Engineering.',
        'Membangun perangkat lunak hanyalah satu bagian dari cara saya bekerja. Saya juga senang memahami orang, menata tim, membentuk arah produk, dan mengubah ide yang masih kabur menjadi rencana yang terstruktur.',
        'Beberapa pengalaman paling bermakna justru datang dari proyek yang awalnya tidak berjalan mulus — saat tanggung jawab belum jelas, tenggat terus berjalan, atau tim punya banyak ide berbeda. Situasi itu mengajari saya cara mendengarkan, menyamakan ekspektasi, membagi tugas, dan menjaga semua orang bergerak menuju hasil yang sama.',
        'Saya sedang mengembangkan jalan saya sebagai Domain Expert yang mampu menghubungkan manusia, penalaran produk, eksekusi proyek, dan teknologi.',
      ],
      facts: [
        'Berdomisili di BSD, Indonesia',
        'Jalur Software Engineering',
        'Staf HRD di BNCC — Bina Nusantara Computer Club',
        'Operasional Produk & Proyek',
        'Terbuka untuk Kolaborasi Lintas Disiplin',
      ],
      photoAlt: 'Foto Naufal Maulana Ichlas',
    },
    skills: {
      title: 'Kapabilitas & Perangkat',
      groups: [
        {
          label: 'Domain & Kepemimpinan',
          skills: [
            'Strategi Produk',
            'Manajemen Proyek',
            'Pengembangan SDM',
            'Operasional Acara',
            'Koordinasi Tim',
            'Pembingkaian Masalah',
            'Komunikasi & Fasilitasi',
            'Pemecahan Masalah Berpusat Pengguna',
          ],
        },
        {
          label: 'Eksekusi Teknis',
          note: 'Dipakai di proyek atau perkuliahan — kedalaman bervariasi tiap alat.',
          skills: [
            'JavaScript',
            'TypeScript',
            'Python',
            'Java',
            'C',
            'C++',
            'React',
            'Next.js',
            'Flutter',
            'Node.js',
            'Express',
            'Supabase',
            'MySQL',
            'Git',
          ],
        },
        {
          label: 'Alat Produk & Kolaborasi',
          skills: [
            'GitHub',
            'Figma',
            'Notion',
            'Google Workspace',
            'Microsoft Excel',
            'Discord',
            'VS Code',
            'Postman',
          ],
        },
        {
          label: 'Sedang Dipelajari',
          note: 'Arah belajar, bukan keahlian yang sudah jadi.',
          skills: [
            'Swift',
            'Dasar Platform Apple',
            'Product Discovery',
            'Pengembangan Produk Lintas Disiplin',
          ],
        },
      ],
    },
    projects: {
      title: 'Proyek',
      readStory: 'Baca Ceritanya',
      hideStory: 'Tutup Cerita',
      labelWhy: 'Mengapa',
      labelHow: 'Bagaimana',
      labelWhat: 'Hasil',
      labelContribution: 'Kontribusi saya',
      labelLearning: 'Yang saya pelajari',
      labelRole: 'Peran',
      labelTech: 'Dibangun dengan',
      projects: [
        {
          title: 'Naufal Studio',
          year: '2026',
          labels: ['Inisiatif Pribadi', 'Produk Aktif'],
          role: 'Pendiri · Arah Produk · UX · Pengembangan Web',
          summary:
            'Studio pembuatan website yang saya rintis sendiri untuk menjawab satu pertanyaan praktis: bagaimana bisnis jasa baru bisa membangun kepercayaan sebelum punya rekam jejak klien yang panjang?',
          story: {
            why: 'Saya ingin mulai menawarkan jasa pembuatan website, tetapi studio baru belum punya rekam jejak yang bisa ditunjukkan. Situs studio itu sendiri harus menjadi bukti kualitas pertama — bukan sekadar tampil menarik, tetapi mampu menjelaskan penawaran, mengurangi kebingungan, membangun kepercayaan, dan mengarahkan pengunjung ke paket yang tepat.',
            how: 'Saya mulai dari positioning dan target pasar, lalu menetapkan batasan layanan dan struktur paket yang jelas. Saya merancang package finder agar pengunjung bisa memilih sendiri, menyeimbangkan visual premium dengan bahasa yang lugas, serta menangani aspek dwibahasa dan tema terang/gelap. Setelah deployment dan setup domain, saya terus menyempurnakan teks dan alur berdasarkan bagaimana situs benar-benar dibaca orang.',
            what: 'Situs studio yang aktif, menampilkan paket, pratinjau konsep, satu proyek nyata, dan jalur konversi WhatsApp yang jelas. Kini ia menjalankan dua peran sekaligus: etalase bisnis dan karya pertama yang substansial di portofolio ini.',
            learning:
              'Kualitas produk tidak lahir dari menambah banyak fitur. Ia lahir dari keputusan yang sengaja dibuat tentang apa yang perlu dipahami, dipercaya, dan dilakukan pengguna selanjutnya.',
          },
          tech: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Vercel'],
          links: [{ kind: 'web', label: 'Kunjungi Situs', url: 'https://naufalstudio.com' }],
        },
        {
          title: 'NaufalMaulana.com',
          year: '2026',
          labels: ['Inisiatif Pribadi', 'Produk Aktif'],
          role: 'Arah Produk · Strategi Konten · Desain · Pengembangan',
          summary:
            'Portofolio pribadi yang terus berkembang untuk menyampaikan kemampuan teknis, pengalaman kepemimpinan, dan cara berpikir proyek — lebih jujur dari yang bisa dilakukan résumé satu halaman.',
          story: {
            why: 'Portofolio saya sebelumnya terlalu menonjolkan teknologi dan tugas kuliah. Saya butuh identitas yang lebih jelas yang menampilkan eksekusi sekaligus kepemimpinan, dan résumé statis tidak bisa menunjukkan proses, keputusan, atau pertumbuhan dari waktu ke waktu.',
            how: 'Saya menata ulang konten di sekitar proyek, pengalaman, kepemimpinan, dan refleksi, serta memperlakukan situs ini sebagai sesuatu yang terus diiterasi, bukan sekali jadi. Arsitekturnya menyimpan seluruh konten dalam satu lapisan data dwibahasa, sehingga tulisannya bisa terus berkembang tanpa menyentuh antarmuka.',
            what: 'Situs pribadi yang responsif dan dwibahasa dengan tautan proyek nyata, akses CV, tema terang dan gelap, serta studi kasus yang ikut tumbuh seiring karyanya.',
            learning:
              'Personal branding bukan soal menampilkan setiap pencapaian. Ia soal memilih bukti yang mendukung arah profesional yang jelas dan jujur.',
          },
          tech: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
          links: [{ kind: 'web', label: 'Kunjungi Situs', url: 'https://naufalmaulana.com' }],
        },
        {
          title: 'Genshin Import',
          year: '2026',
          labels: ['Tugas Kuliah', 'Proyek Kelompok'],
          role: 'Tim Aplikasi Mobile — Anggota',
          summary:
            'Aplikasi mobile commerce berbasis Flutter yang terinspirasi semesta Genshin Impact, dibangun di sekitar akses berbasis peran, transaksi mata uang virtual, dan profil yang dapat dikustomisasi.',
          story: {
            why: 'Proyek ini mengeksplorasi bagaimana pengalaman bertema dan bernuansa game bisa membuat alur e-commerce yang standar terasa lebih menarik. Mewujudkannya berarti menghubungkan UI mobile, autentikasi, aturan bisnis, dan data backend menjadi satu alur yang utuh.',
            how: 'Tim membagi tanggung jawab frontend dan backend serta membangun pengalaman User dan Admin secara paralel. Bagian tersulit adalah autentikasi (JWT plus Google Sign-In), menjaga saldo Mora tetap sinkron di seluruh layar, memvalidasi pembelian terhadap stok, dan menyambungkan edit profil dengan unggah gambar — di atas kerumitan konfigurasi jaringan lokal dan environment.',
            what: 'Aplikasi yang berfungsi, mencakup login dan registrasi, katalog item dengan halaman detail, pengelolaan item oleh admin, saldo Mora dengan simulasi top-up, transaksi pembelian, riwayat transaksi, dan kustomisasi profil dengan tema terang dan gelap.',
            learning:
              'Aplikasi yang berfungsi bergantung pada koordinasi antarlapisan. Antarmuka yang rapi tidak cukup ketika autentikasi, konsistensi data, peran, dan aturan transaksi semuanya harus saling sepakat.',
          },
          contribution:
            'Berkontribusi sebagai bagian dari tim aplikasi mobile pada alur User dan Admin. (Pembagian tanggung jawab persisnya masih perlu dikonfirmasi.)',
          tech: ['Flutter', 'Dart', 'Node.js', 'Express', 'MySQL', 'JWT', 'Google Sign-In', 'Multer'],
          note: 'Repositori segera hadir · Aset Genshin Impact digunakan hanya untuk proyek akademik yang bersifat edukatif dan non-komersial.',
        },
        {
          title: 'NoteNook',
          year: '2026',
          labels: ['Tugas Kuliah', 'Proyek Kelompok', 'Dalam Pengembangan'],
          role: 'Anggota Proyek Kelompok',
          summary:
            'Konsep komunitas mahasiswa dan pendukung akademik berbasis Flutter tempat mahasiswa bertukar pengetahuan, ikut diskusi, dan berkonsultasi dengan mentor atau asisten dosen terpilih.',
          story: {
            why: 'Mahasiswa sering kesulitan menemukan bimbingan akademik yang tepercaya, dan forum biasa tidak selalu menghubungkan mereka dengan mentor yang kredibel. NoteNook mengeksplorasi jembatan terstruktur antara diskusi sesama mahasiswa dan dukungan terbimbing dari mentor — berbeda dari sekadar berbagi catatan.',
            how: 'Kami menetapkan cakupan pengalaman di sekitar forum mahasiswa, profil mentor, kategori topik, dan alur konsultasi, serta berusaha menentukan batas antara konten komunitas dan bimbingan mentor yang terverifikasi. Beberapa bagian masih berstatus rencana atau prototipe, belum sepenuhnya terimplementasi.',
            what: 'Arah produk yang sudah terdefinisi dan build Flutter yang sedang berjalan. Alur diskusi komunitas dan konsultasi mentor sudah dirancang; sebagian fitur masih berupa rencana atau prototipe dan diberi label sebagaimana adanya.',
            learning:
              'Penentuan cakupan dan desain kepercayaan sama pentingnya dengan fitur. Memutuskan sejak awal apa yang tidak boleh dilakukan sebuah platform pendukung mahasiswa adalah yang menjaga konten komunitas dan bimbingan mentor tidak saling kabur.',
          },
          contribution:
            'Berkontribusi pada penentuan cakupan, arah produk, dan definisi fitur bersama tim. (Pembagian tanggung jawab persisnya masih perlu dikonfirmasi.)',
          tech: ['Flutter', 'Dart'],
          note: 'Dalam pengembangan · tautan repositori segera hadir.',
        },
        {
          title: 'Giby',
          year: '2025',
          labels: ['Tugas Kuliah', 'Proyek Kelompok', 'Proyek Konsep'],
          role: 'CEO / Pemimpin Proyek (peran kepemimpinan dalam tim akademik)',
          summary:
            'Konsep produk komunitas pengasuhan untuk orang tua dengan anak usia 0–7 tahun, memadukan forum terstruktur, konsultasi pakar, dukungan gizi, rekomendasi produk, dan layanan keanggotaan.',
          story: {
            why: 'Orang tua menghadapi informasi yang terpencar dan kadang saling bertentangan, sementara akses ke spesialis kredibel bisa mahal atau sulit — dan pakar pun kewalahan menjawab pertanyaan individu dalam jumlah besar. Tim kami mengeksplorasi satu platform yang menghubungkan pengetahuan komunitas, bimbingan pakar, dan alat gizi yang praktis.',
            how: 'Ini salah satu proyek paling awal dengan porsi kepemimpinan yang besar, dan awalnya saya meremehkan betapa sulitnya membagi tanggung jawab, menyatukan ide yang berbeda, dan menjaga semua orang bergerak dalam tempo yang sama. Saya berfokus memperjelas arah produk, membagi tanggung jawab, mengoordinasikan deliverable, dan menjaga keselarasan antara masalah, solusi, dan presentasi akhir — mendukung tim saat prioritas menjadi tidak jelas, alih-alih berusaha menguasai setiap slide atau desain.',
            what: 'Tim menghasilkan konsep dan prototipe yang menyeluruh: analisis target pelanggan, persona orang tua dan pakar, empathy mapping, value proposition, perencanaan fitur (forum, konsultasi pakar, kalkulator gizi, acara parenting), dan monetisasi melalui keanggotaan Parenthood+. Konsep akhirnya diapresiasi dosen sebagai salah satu proyek favorit di kelas.',
            learning:
              'Giby mengubah cara saya memahami kepemimpinan. Memimpin bukan soal punya semua jawaban — ia soal menciptakan kejelasan, memberi orang rasa kepemilikan, mendengarkan saat rencana tidak berjalan, dan membantu tim bergerak maju bersama.',
          },
          contribution:
            'Memperjelas arah produk, membagi tanggung jawab, mengoordinasikan deliverable, dan menyelaraskan narasi masalah–solusi–presentasi tim.',
          tech: ['Strategi Produk', 'Riset Pengguna', 'Empathy Mapping', 'Value Proposition Design', 'Figma'],
          links: [{ kind: 'pdf', label: 'Lihat PDF Proyek', url: '/giby-final-project.pdf' }],
          note: 'Tahap konsep — belum menjadi aplikasi yang berjalan. Pengembangan lanjutan akan menambah validasi produk dan eksekusi teknis yang lebih kuat.',
        },
        {
          title: 'Lock-In',
          year: '2026',
          labels: ['Tugas Kuliah', 'Proyek Kelompok'],
          role: 'Anggota Tim',
          summary:
            'Platform berbagi catatan yang membantu mahasiswa BINUS mencari dan memposting catatan kuliah serta materi, lalu menatanya dalam koleksi untuk dibagikan, di-upvote, dan di-bookmark.',
          story: {
            why: 'Materi kuliah yang berguna tersebar di chat, drive, dan banyak orang. Lock-In memberi mahasiswa satu tempat untuk menyumbang catatan — dari sesama mahasiswa, organisasi, atau dosen — dan memunculkan yang paling membantu.',
            how: 'Tim membangun alur kontribusi, koleksi, upvote, dan bookmark di atas stack TypeScript (Vite + React di depan, Hono di atas Bun di belakang) dengan PostgreSQL dan penyimpanan kompatibel S3 untuk berkas. Merancang model koleksi-dan-upvote adalah tantangan inti: ia harus menghargai materi yang benar-benar berguna tanpa menjadi gaduh.',
            what: 'Platform yang berfungsi tempat mahasiswa memposting catatan, mengelompokkannya menjadi koleksi yang bisa dibagikan, mem-upvote untuk memperluas jangkauan, dan mem-bookmark yang ingin disimpan. (Ini soal berbagi dan menata catatan — berbeda dari fokus komunitas-dan-mentor milik NoteNook.)',
            learning:
              'Pemodelan data yang jernih sejak awal — apa makna sebenarnya dari sebuah "catatan", "koleksi", dan "upvote" — menghemat banyak kebingungan saat fitur-fitur mulai saling berinteraksi.',
          },
          contribution:
            'Berkontribusi sebagai bagian dari tim pengembang. (Pembagian tanggung jawab persisnya masih perlu dikonfirmasi.)',
          tech: ['TypeScript', 'Bun', 'Vite + React', 'Hono', 'PostgreSQL', 'S3 Storage'],
          links: [
            { kind: 'code', label: 'Lihat Kode', url: 'https://github.com/sunibshare/lock-in' },
            {
              kind: 'demo',
              label: 'Video Demo',
              url: 'https://drive.google.com/drive/folders/1OON8KziusbAY46Gmo25hwJpCLP6mWeyb?usp=sharing',
            },
          ],
        },
        {
          title: 'FinSet',
          year: '2026',
          labels: ['Tugas Kuliah', 'Proyek Kelompok'],
          role: 'Anggota Tim',
          summary:
            'Pelacak keuangan pribadi dengan frontend web dan backend API yang terpisah, dibuat untuk mencatat dan meninjau transaksi melalui antarmuka yang bersih dan fokus.',
          story: {
            why: 'Pengeluaran pribadi mudah lepas dari pantauan ketika tercecer di antara struk dan ingatan. FinSet memberi tempat yang sederhana dan terstruktur untuk mencatat transaksi dan melihat ke mana uang pergi.',
            how: 'Dibangun sebagai proyek mata kuliah Software Architecture dengan pemisahan depan/belakang yang jelas: klien React + Vite dan API Express yang didukung MongoDB, dengan autentikasi JWT dan kata sandi ter-hash. Memecah sistem menjadi layanan frontend dan backend yang independen menjaga tanggung jawab tetap rapi dan tiap bagian bisa di-deploy terpisah.',
            what: 'Klien React yang ter-deploy (aktif di Vercel) berkomunikasi dengan API Express + MongoDB yang dilengkapi autentikasi aman dan manajemen transaksi.',
            learning:
              'Kontrak yang bersih antara frontend dan backend adalah yang memungkinkan tim kecil bekerja paralel tanpa terus-menerus saling tabrakan.',
          },
          contribution:
            'Berkontribusi di dalam tim proyek. (Pembagian tanggung jawab persisnya masih perlu dikonfirmasi.)',
          tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT'],
          links: [
            { kind: 'demo', label: 'Demo Langsung', url: 'https://financial-tracker-frontend-lemon.vercel.app' },
            { kind: 'code', label: 'Frontend', url: 'https://github.com/ValeryanRizky/financial-tracker-frontend' },
            { kind: 'code', label: 'Backend', url: 'https://github.com/ValeryanRizky/financial-tracker-Backend' },
          ],
        },
        {
          title: 'WSpeedrun API',
          year: '2026',
          labels: ['Tugas Kuliah', 'Proyek Individu'],
          role: 'Pengembang Backend / API',
          summary:
            'Backend terpusat untuk mengelola rekor competitive speedrun, dibangun dengan arsitektur microservices berisi layanan Auth, Games, dan Runs yang independen.',
          story: {
            why: 'Rekor speedrun butuh backend yang andal dan terstruktur. Lab ini menjadi kesempatan melatih pemisahan tanggung jawab yang ketat dan desain layanan yang skalabel, alih-alih satu monolit.',
            how: 'Saya memecah sistem menjadi layanan Auth, Games, dan Runs yang independen dan berkomunikasi secara asinkron, mendokumentasikan semuanya dengan Swagger UI, dan mengamankannya dengan JWT. Trade-off yang menarik adalah menjaga layanan benar-benar independen sambil tetap membuatnya berkoordinasi dengan rapi.',
            what: 'API microservices yang terdokumentasi dan diamankan JWT, dengan layanan-layanan independen serta dokumentasi Swagger UI yang menyeluruh.',
            learning:
              'Microservices memberi pemisahan dan skalabilitas, tetapi menagih ongkos di koordinasi dan dokumentasi. Menuliskan kontrak API dengan jelas adalah yang membuat batas-batas itu sepadan.',
          },
          tech: ['TypeScript', 'NestJS', 'Microservices', 'Prisma ORM', 'MySQL', 'Swagger'],
          links: [
            {
              kind: 'code',
              label: 'Lihat Kode',
              url: 'https://github.com/Aerofal/Software-Architecture_Lab-WSpeedrun',
            },
          ],
        },
      ],
    },
    experience: {
      title: 'Pengalaman',
      showMore: 'Lihat detail',
      showLess: 'Tutup detail',
      groups: [
        {
          kicker: 'BINUS University',
          org: 'BNCC — Bina Nusantara Computer Club',
          roles: [
            {
              role: 'Staf Human Resource Development',
              period: 'September 2025 – Sekarang',
              summary:
                'Merencanakan, mengorganisir, dan menjalankan program yang mengembangkan soft skill dan rasa kebersamaan anggota internal.',
              items: [
                {
                  title: 'Seleksi Calon Aktivis — Project Leader',
                  points: [
                    'Mengelola timeline rekrutmen aktivis dari awal hingga akhir.',
                    'Mengoordinasikan komunikasi kandidat berskala besar melalui komunitas Discord resmi.',
                    'Menyelaraskan jadwal wawancara dengan ketersediaan pengurus demi pengalaman seleksi yang lebih mulus.',
                  ],
                },
                {
                  title: 'Training & Development (Git) — Project Leader',
                  points: [
                    'Memimpin pelaksanaan penuh program peningkatan kemampuan Git.',
                    'Menyusun materi pelatihan yang mencakup branching, merging, dan integration.',
                    'Membantu aktivis membangun kompetensi Git yang praktis dan langsung pakai.',
                  ],
                },
              ],
            },
            {
              role: 'Aktivis Human Resource Development',
              period: 'Desember 2024 – Agustus 2025',
              summary: 'Membuat modul pembelajaran dasar untuk sesama aktivis.',
              items: [
                {
                  title: 'TnD Figma — Pembuat Modul',
                  points: ['Menyusun modul pembelajaran dasar UI/UX sebagai panduan sebelum pelatihan utama.'],
                },
                {
                  title: 'TnD AI Prompting — Pembuat Modul',
                  points: [
                    'Menyusun modul pengantar tentang AI prompting yang efektif dan peningkatan alur kerja.',
                  ],
                },
              ],
            },
            {
              role: 'Technoscape 2026 — Divisi Acara',
              period: 'Februari 2026 – Juni 2026',
              context: 'Hackathon · 12–14 Juni · Hotel Neo Tendean, Jakarta',
              summary: 'Menjalankan peran panggung, lapangan, dan workshop untuk acara besar BNCC.',
              items: [
                {
                  title: 'Hackathon — Stage Manager',
                  points: [
                    'Mengoordinasikan calon juri dan mentor sebelum acara.',
                    'Mengatur alur teknis dan operasional di panggung sesuai rundown.',
                    'Memantau waktu dan kesiapan peserta, berkomunikasi real-time dengan tim teknis.',
                  ],
                },
                {
                  title: 'Hackathon — Floor Manager',
                  points: [
                    'Mengatur pergerakan peserta dan tamu serta memantau alur venue.',
                    'Menangani isu di lokasi dan mengoordinasikan operasi lapangan, panggung, panitia, dan teknis.',
                  ],
                },
                {
                  title: 'Tim Workshop',
                  points: [
                    'Menyiapkan kebutuhan pra-acara untuk workshop “Fintech Data Analytics & Business Intelligence”.',
                  ],
                },
              ],
            },
          ],
        },
        {
          kicker: 'BINUS University',
          org: 'Jollybee BINUS',
          roles: [
            {
              role: 'Jollybasic 2025 — Peserta',
              period: 'Februari 2025 – Juli 2025',
              summary: 'Mengikuti pelatihan dasar competitive programming menggunakan C++.',
            },
          ],
        },
        {
          kicker: 'Kepemimpinan Awal · SMAS Cendana Mandau',
          org: 'Palang Merah Remaja (PMR)',
          roles: [
            {
              role: 'Wakil Ketua Bidang Bakti Masyarakat',
              period: 'Juli 2022 – April 2024',
              summary:
                'Membantu mengorganisir kegiatan bakti masyarakat, mengoordinasikan tim, terjun ke lapangan, dan mendukung inisiatif kemanusiaan serta kesehatan.',
            },
          ],
        },
      ],
    },
    volunteer: {
      title: 'Relawan',
      entries: [
        {
          org: 'Peduly.com',
          role: 'Relawan',
          period: 'Februari 2026 – Maret 2026',
          description:
            'Berkolaborasi dengan tim relawan untuk menyiapkan dan membagikan takjil bagi anak-anak di sebuah panti asuhan. Pengalaman ini memperkuat pemahaman saya tentang empati, kerja tim, dan pentingnya membangun koneksi manusia yang hangat melampaui tugasnya itu sendiri.',
          link: { kind: 'web', label: 'Kunjungi Peduly', url: 'https://peduly.com' },
        },
      ],
    },
    contact: {
      title: 'Mari bangun sesuatu yang bermakna bersama.',
      text: 'Saya terbuka untuk proyek lintas disiplin, tantangan produk, inisiatif komunitas, dan peluang di mana saya bisa berkontribusi lewat kepemimpinan, eksekusi yang terstruktur, dan teknologi.',
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
