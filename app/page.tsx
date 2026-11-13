import Image from "next/image";
import FooterYear from "./components/FooterYear";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  MapPin,
  GraduationCap,
  Code2,
  Monitor,
  Server,
  Layers3,
  Sparkles,
  ExternalLink,
  BookOpen,
} from "lucide-react";

type IconProps = { size?: number; className?: string };

function Github({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

function Linkedin({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
const GITHUB_URL = "https://github.com/AdityaKumar740";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/aditya-kumar-853915223/";

const EMAIL = "adittokumar730@gmail.com";

const skills = [
  { name: "HTML5", category: "Frontend", level: "Markup" },
  { name: "CSS3", category: "Frontend", level: "Styling" },
  { name: "JavaScript", category: "Language", level: "Programming" },
  { name: "TypeScript", category: "Language", level: "Programming" },
  { name: "React", category: "Frontend", level: "Library" },
  { name: "Next.js", category: "Frontend", level: "Framework" },
  { name: "Node.js", category: "Backend", level: "Runtime" },
  { name: "Express.js", category: "Backend", level: "Framework" },
];

const services = [
  {
    icon: Monitor,
    title: "Frontend Development",
    description:
      "Creating modern, responsive, and interactive user interfaces using React, Next.js, JavaScript, and Tailwind CSS.",
    number: "01",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Developing server-side applications, REST APIs, authentication systems, and backend functionality.",
    number: "02",
  },
  {
    icon: Layers3,
    title: "Full Stack Development",
    description:
      "Building complete web applications by connecting beautiful frontend experiences with powerful backend systems.",
    number: "03",
  },
];

const projects = [
  {
    number: "01",
    title: "Community Connect",
    category: "Full Stack Development",
    description:
      "A community-driven social development events platform where users can create, discover, join, and manage social service events.",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    link: GITHUB_URL,
  },
  {
    number: "02",
    title: "More Projects Coming Soon",
    category: "Personal Development",
    description:
      "I'm continuously exploring new technologies and building projects to improve my development skills. Check out my GitHub for updates.",
    technologies: ["React", "JavaScript", "TypeScript"],
    link: GITHUB_URL,
  },
];

const socials = [
  {
    name: "GitHub",
    href: GITHUB_URL,
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: LINKEDIN_URL,
    icon: Linkedin,
  },
];

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#080D18] text-slate-100">

      {/* BACKGROUND EFFECTS */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute -right-40 top-[35%] h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      {/* NAVBAR */}

      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#080D18]/90 backdrop-blur-2xl">

        <nav className="section-container flex h-20 items-center justify-between">

          <a href="#home" className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-400/10 text-xl font-bold text-sky-300">
              A.
            </div>

            <div>
              <p className="font-bold tracking-wide text-white">
                ADITYA
              </p>

              <p className="text-[10px] tracking-[0.2em] text-slate-500">
                FULL STACK DEVELOPER
              </p>
            </div>

          </a>

          <div className="hidden items-center gap-7 text-sm text-slate-400 lg:flex">

            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="transition hover:text-sky-300"
              >
                {item.name}
              </a>
            ))}

          </div>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-sky-400/30 px-5 py-2.5 text-sm font-medium text-sky-300 transition hover:bg-sky-400 hover:text-slate-950 sm:flex"
          >
            Let&apos;s Talk
            <ArrowUpRight size={16} />
          </a>

          <a
            href="#mobile-navigation"
            aria-label="Open navigation links"
            className="text-sm text-sky-300 lg:hidden"
          >
            MENU
          </a>

        </nav>

        {/* MOBILE NAVIGATION */}

        <div
          id="mobile-navigation"
          className="section-container flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 py-4 text-xs text-slate-300 lg:hidden"
        >
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-sky-300"
            >
              {item.name}
            </a>
          ))}
        </div>

      </header>

      {/* HERO SECTION */}

      <section
        id="home"
        className="section-container relative z-10 grid min-h-[750px] items-center gap-16 py-20 lg:grid-cols-2"
      >

        {/* HERO LEFT */}

        <div>

          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2 text-xs text-emerald-300">

            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

            OPEN TO LEARNING & OPPORTUNITIES

          </div>

          <p className="mb-4 font-mono text-sm tracking-[0.25em] text-sky-300">
            HELLO, WORLD! I&apos;M
          </p>

          <h1 className="text-5xl font-extrabold leading-[1.13] tracking-tight text-white sm:text-6xl xl:text-7xl">

            Aditya Kumar

            <br />

            <span className="text-gradient">
              Das Gaurav.
            </span>

          </h1>

          <div className="mt-7 flex items-center gap-3">

            <span className="h-px w-10 bg-sky-400" />

            <p className="text-sm font-semibold tracking-[0.2em] text-slate-300">
              FULL STACK DEVELOPER
            </p>

          </div>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400">

            I build modern web applications with clean interfaces,
            efficient backend systems, and thoughtful user experiences.

            Passionate about technology, problem-solving, and continuous learning.

          </p>

          <div className="mt-9 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="group flex items-center gap-3 rounded-xl bg-sky-400 px-7 py-4 text-sm font-bold text-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.2)] transition hover:-translate-y-1 hover:bg-sky-300"
            >
              Explore My Work

              <ArrowUpRight
                size={18}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />

            </a>

            <a
              href="#contact"
              className="flex items-center gap-3 rounded-xl border border-white/15 px-7 py-4 text-sm font-semibold text-white transition hover:border-sky-400/50 hover:bg-white/5"
            >
              Contact Me
              <ArrowDown size={17} />
            </a>

          </div>

          {/* SOCIAL LINKS */}

          <div className="mt-12 flex items-center gap-5">

            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:-translate-y-1 hover:border-sky-400/40 hover:text-sky-300"
                >
                  <Icon size={19} />
                </a>
              );
            })}

            <div className="h-px w-12 bg-white/10" />

            <span className="text-xs tracking-widest text-slate-500">
              CONNECT WITH ME
            </span>

          </div>

        </div>

        {/* HERO RIGHT - PROFILE IMAGE */}

        <div className="relative mx-auto w-full max-w-[460px]">

          <div className="absolute -inset-8 rounded-full bg-sky-500/10 blur-[90px]" />

          <div className="absolute -left-5 top-12 h-24 w-24 rounded-2xl border border-sky-400/20 bg-sky-400/5" />

          <div className="absolute -bottom-5 -right-5 h-28 w-28 rounded-full border border-blue-400/20" />

          <div className="relative rounded-[30px] border border-white/10 bg-gradient-to-br from-sky-400/20 via-slate-800 to-blue-500/10 p-3 shadow-2xl shadow-sky-950/40">

            <div className="relative h-[490px] overflow-hidden rounded-[23px] bg-slate-800 sm:h-[540px]">

              <Image
                src="/aditya-profile.jpeg"
                alt="Aditya Kumar Das Gaurav"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 460px"
                className="object-cover object-center"
              />

              <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#080D18]/95 to-transparent" />

              <div className="absolute bottom-6 left-6">

                <p className="text-xs font-medium tracking-[0.25em] text-sky-300">
                  DEVELOPER
                </p>

                <h2 className="mt-2 text-2xl font-bold text-white">
                  Aditya Kumar
                </h2>

                <p className="mt-1 text-sm text-slate-300">
                  Full Stack Developer
                </p>

              </div>

            </div>

          </div>

          {/* FLOATING CARDS */}

          <div className="glass absolute -right-5 top-16 hidden items-center gap-3 rounded-2xl p-4 shadow-glow sm:flex">

            <div className="rounded-xl bg-sky-400/10 p-3 text-sky-300">
              <Code2 size={23} />
            </div>

            <div>
              <p className="text-xs text-slate-400">
                Development
              </p>

              <p className="font-semibold text-white">
                Full Stack
              </p>
            </div>

          </div>

          <div className="glass absolute -bottom-8 -left-5 hidden items-center gap-3 rounded-2xl p-4 sm:flex">

            <div className="rounded-xl bg-purple-400/10 p-3 text-purple-300">
              <Sparkles size={23} />
            </div>

            <div>
              <p className="text-xs text-slate-400">
                Mindset
              </p>

              <p className="font-semibold text-white">
                Always Learning
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* INTRO STRIP */}

      <section className="relative z-10 border-y border-white/[0.07] bg-white/[0.02]">

        <div className="section-container grid grid-cols-2 gap-5 py-9 text-center sm:grid-cols-4">

          {[
            "FRONTEND DEVELOPMENT",
            "BACKEND DEVELOPMENT",
            "PROBLEM SOLVING",
            "CONTINUOUS LEARNING",
          ].map((item) => (
            <p
              key={item}
              className="text-[10px] font-medium tracking-[0.15em] text-slate-400 sm:text-xs"
            >
              {item}
            </p>
          ))}

        </div>

      </section>

      {/* ABOUT SECTION */}

      <section id="about" className="section-container relative z-10 py-28">

        <div className="section-label">
          01 / ABOUT ME
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">

          <div>

            <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">

              Building the web,

              <br />

              <span className="text-gradient">
                one idea at a time.
              </span>

            </h2>

            <p className="mt-7 max-w-lg text-sm leading-8 text-slate-400">

              I&apos;m Aditya Kumar Das Gaurav, a Full Stack Developer
              passionate about developing modern and useful web applications.

            </p>

          </div>

          <div className="space-y-5 text-sm leading-8 text-slate-400">

            <p>
              I enjoy working on both frontend and backend development.
              My goal is to create applications that are not only visually
              appealing but also functional, reliable, and easy to use.
            </p>

            <p>
              I work with JavaScript, TypeScript, React, Next.js,
              Node.js, and Express.js. I continuously improve my
              development skills by learning new concepts and building projects.
            </p>

            <div className="flex items-center gap-3 border-t border-white/10 pt-5 text-sky-300">

              <MapPin size={18} />

              <span>Bangladesh</span>

            </div>

          </div>

        </div>

      </section>

      {/* EDUCATION SECTION */}

      <section
        id="education"
        className="relative z-10 border-y border-white/[0.07] bg-[#0D1523] py-24"
      >

        <div className="section-container">

          <div className="section-label">
            02 / EDUCATION
          </div>

          <h2 className="mb-12 text-4xl font-bold tracking-tight sm:text-5xl">

            My academic

            <span className="text-gradient">
              {" "}background.
            </span>

          </h2>

          <div className="glass group relative overflow-hidden rounded-3xl p-7 transition hover:border-sky-400/30 sm:p-10">

            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue-500/10 blur-[80px]" />

            <div className="relative flex flex-col gap-7 sm:flex-row sm:items-start">

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-300">

                <GraduationCap size={32} />

              </div>

              <div className="flex-1">

                <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1.5 text-xs text-sky-300">
                  UNDERGRADUATE EDUCATION
                </span>

                <h3 className="mt-5 text-2xl font-bold leading-snug text-white sm:text-3xl">

                  BSc in Computer Science and Engineering (CSE)

                </h3>

                <h4 className="mt-4 text-lg font-semibold leading-relaxed text-sky-300">

                  Ahsania Mission University of Science and Technology

                </h4>

                <p className="mt-4 text-sm leading-7 text-slate-400">

                  Currently pursuing my undergraduate degree while
                  strengthening my knowledge of computer science,
                  programming, software development, and modern web technologies.

                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">

                    <div className="flex items-center gap-2 text-xs text-slate-500">

                      <BookOpen size={15} className="text-sky-300" />

                      CURRENT STUDY LEVEL

                    </div>

                    <p className="mt-2 font-semibold text-white">
                      2nd Year
                    </p>

                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">

                    <div className="flex items-center gap-2 text-xs text-slate-500">

                      <GraduationCap size={15} className="text-sky-300" />

                      CURRENT SEMESTER

                    </div>

                    <p className="mt-2 font-semibold text-white">
                      1st Semester
                    </p>

                  </div>

                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-400">

                  <span className="flex items-center gap-2">

                    <MapPin size={15} className="text-sky-300" />

                    Bangladesh

                  </span>

                  <span className="h-1 w-1 rounded-full bg-slate-600" />

                  <span>
                    Computer Science & Engineering
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SKILLS SECTION */}

      <section id="skills" className="section-container relative z-10 py-28">

        <div className="section-label">
          03 / TECHNICAL SKILLS
        </div>

        <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">

            My development

            <br />

            <span className="text-gradient">
              toolkit.
            </span>

          </h2>

          <p className="max-w-md text-sm leading-7 text-slate-400">

            Technologies I use to create responsive interfaces,
            develop APIs, and build complete web applications.

          </p>

        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

          {skills.map((skill, index) => (

            <div
              key={skill.name}
              className="glass group relative rounded-2xl p-6 transition duration-300 hover:-translate-y-2 hover:border-sky-400/40 hover:bg-sky-400/[0.06]"
            >

              <div className="mb-8 flex items-center justify-between">

                <span className="font-mono text-xs text-slate-600">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <Code2
                  size={19}
                  className="text-sky-400 transition group-hover:scale-110"
                />

              </div>

              <h3 className="text-lg font-bold text-white sm:text-xl">
                {skill.name}
              </h3>

              <p className="mt-2 text-xs text-sky-300">
                {skill.category}
              </p>

              <p className="mt-1 text-[11px] text-slate-500">
                {skill.level}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* SERVICES SECTION */}

      <section
        id="services"
        className="relative z-10 border-y border-white/[0.07] bg-[#0D1523] py-28"
      >

        <div className="section-container">

          <div className="section-label">
            04 / WHAT I DO
          </div>

          <h2 className="mb-14 text-4xl font-bold tracking-tight sm:text-5xl">

            What I bring to

            <span className="text-gradient">
              {" "}the table.
            </span>

          </h2>

          <div className="grid gap-5 md:grid-cols-3">

            {services.map((service) => {

              const Icon = service.icon;

              return (

                <article
                  key={service.number}
                  className="glass group rounded-2xl p-7 transition duration-300 hover:-translate-y-2 hover:border-sky-400/30"
                >

                  <div className="mb-9 flex items-center justify-between">

                    <span className="font-mono text-sm text-slate-600">
                      {service.number}
                    </span>

                    <div className="rounded-xl bg-sky-400/10 p-3 text-sky-300 transition group-hover:bg-sky-400 group-hover:text-slate-950">

                      <Icon size={24} />

                    </div>

                  </div>

                  <h3 className="mb-4 text-xl font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-7 text-slate-400">
                    {service.description}
                  </p>

                  <div className="mt-8 h-px w-full bg-white/10" />

                  <p className="mt-5 flex items-center gap-2 text-xs font-medium tracking-wider text-sky-300">

                    BUILDING DIGITAL SOLUTIONS

                    <ArrowUpRight size={15} />

                  </p>

                </article>

              );

            })}

          </div>

        </div>

      </section>

      {/* PROJECTS SECTION */}

      <section id="projects" className="section-container relative z-10 py-28">

        <div className="section-label">
          05 / FEATURED PROJECTS
        </div>

        <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">

            Selected

            <span className="text-gradient">
              {" "}work.
            </span>

          </h2>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-sky-200"
          >

            View GitHub

            <ExternalLink size={16} />

          </a>

        </div>

        <div className="space-y-5">

          {projects.map((project) => (

            <article
              key={project.number}
              className="glass group grid gap-7 rounded-3xl p-7 transition duration-300 hover:border-sky-400/30 sm:grid-cols-[80px_1fr_50px] sm:p-9"
            >

              <div className="font-mono text-sm text-sky-400">
                /{project.number}
              </div>

              <div>

                <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white transition group-hover:text-sky-300 sm:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {project.technologies.map((technology) => (

                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[11px] text-slate-300"
                    >
                      {technology}
                    </span>

                  ))}

                </div>

              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Explore ${project.title}`}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-sky-300 transition hover:bg-sky-400 hover:text-slate-950"
              >

                <ArrowUpRight size={21} />

              </a>

            </article>

          ))}

        </div>

      </section>

      {/* CONTACT SECTION */}

      <section
        id="contact"
        className="relative z-10 overflow-hidden border-t border-white/10 bg-gradient-to-br from-[#101C30] via-[#0B1422] to-[#080D18] py-28"
      >

        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-sky-500/10 blur-[120px]" />

        <div className="section-container relative">

          <div className="section-label">
            06 / GET IN TOUCH
          </div>

          <div className="max-w-3xl">

            <p className="mb-6 font-mono text-xs tracking-[0.2em] text-sky-300">
              HAVE AN IDEA OR OPPORTUNITY?
            </p>

            <h2 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-7xl">

              Let&apos;s build

              <br />

              <span className="text-gradient">
                something great.
              </span>

            </h2>

            <p className="mt-7 max-w-xl text-sm leading-8 text-slate-400">

              I&apos;m always happy to connect with developers,
              collaborate on interesting projects, and explore
              new opportunities. Feel free to reach out.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href={`mailto:${EMAIL}?subject=Portfolio%20Contact`}
                className="flex items-center gap-3 rounded-xl bg-sky-400 px-7 py-4 text-sm font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-sky-300"
              >

                <Mail size={19} />

                Email Me

                <ArrowUpRight size={17} />

              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-white/15 px-7 py-4 text-sm font-semibold text-white hover:border-sky-400/50 hover:text-sky-300"
              >

                <Linkedin size={19} />

                LinkedIn

                <ArrowUpRight size={17} />

              </a>

            </div>

            {/* EMAIL ADDRESS */}

            <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-slate-400">

              <Mail size={17} className="text-sky-300" />

              <a
                href={`mailto:${EMAIL}`}
                className="transition hover:text-sky-300"
              >
                {EMAIL}
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="relative z-10 border-t border-white/[0.07] bg-[#060A12]">

        <div className="section-container flex flex-col items-center justify-between gap-6 py-9 sm:flex-row">

          <a href="#home" className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-sky-400/30 text-sky-300">
              A.
            </div>

            <div>

              <p className="text-sm font-bold text-white">
                ADITYA
              </p>

              <p className="text-[9px] tracking-widest text-slate-500">
                FULL STACK DEVELOPER
              </p>

            </div>

          </a>

          <p className="text-center text-[11px] text-slate-500">
            Designed & Built by Aditya Kumar Das Gaurav
          </p>

          <a
            href="#home"
            className="text-xs font-medium text-slate-400 hover:text-sky-300"
          >
            BACK TO TOP &uarr;
          </a>

        </div>

        <div className="border-t border-white/[0.05] py-5 text-center text-[11px] text-slate-600">

          &copy; <FooterYear /> Aditya Kumar Das Gaurav. All rights reserved.

        </div>

      </footer>

    </main>
  );
}
