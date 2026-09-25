export const profile = {
  name: "Anuhya Talamanchi",
  role: "Junior Fullstack Developer",
  location: "Stockholm, Sweden",
  email: "anuhya92@gmail.com",
  phone: "+46 76 432 4928",
  linkedin: "https://www.linkedin.com/in/anuhya-talamanchi-376a48263/",
  github: "https://github.com/anuhya92",
  resume: "/anuhya-talamanchi-cv.pdf",
};

export const bio = `I'm a recent graduate and a mother of two, building a second career in software after a decade with a background in electronics and communication engineering. Over the past year I've worked through a full-stack program in Sweden — first the frontend, then the backend — and I'm now looking for a junior fullstack role where I can turn that groundwork into real, shipped work. I learn fast, I show up for my team, and I don't rattle easily.`;

export const skillGroups = [
  {
    label: "Interface",
    items: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    label: "Server & data",
    items: ["Node.js", "Express", "REST APIs", "Swagger", "PostgreSQL", "Supabase"],
  },
  {
    label: "Quality & workflow",
    items: ["Testing", "Integration testing", "Git", "Postman"],
  },
  {
    label: "Beyond the code",
    items: ["Software development", "Strategic planning & visioning"],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  tag?: string;
  icon: string;
  image?: string;
};

// Ordered roughly by how the underlying skills build on each other:
// plain HTML/CSS/JS first, then API-driven React apps, then paired/group
// work, ending with the real client project.
export const projects: Project[] = [
  {
    title: "Stockholm Games",
    description: "A first project exploring page structure and styling — building layout and visual design skills in plain HTML and CSS.",
    tech: ["HTML", "CSS"],
    liveUrl: "https://stockholm-games.vercel.app/",
    repoUrl: "https://github.com/Anuhya92/StockholmGames",
    tag: "Solo",
    icon: "🎮",
    image: "/projects/stockholmGame.jpg",
  
  },
  {
    title: "Word Detective Game",
    description: "A browser word-guessing game built to practice DOM manipulation and game-state logic in plain JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://word-detective-game.vercel.app/",
    repoUrl: "https://github.com/Anuhya92/Word-Detective-Game",
    tag: "Solo",
    icon: "🔎",
    image: "/projects/word-detective-game.jpg",
  },
  {
    title: "Animal Zoo",
    description: "A group assignment building a zoo animal directory, splitting components and features across the team.",
    tech: ["React"],
    liveUrl: "https://fg-animal-zoo-group-assignment.vercel.app/",
    repoUrl: "https://github.com/SuneethaBandaru/FG-AnimalZoo-GroupAssignment",
    tag: "Group project",
    icon: "🦁",
    image: "/projects/animal-zoo.jpg",
  },
  
  {
    title: "Pokémon Explorer",
    description: "A pair-programmed Pokémon browser, built together with a classmate to practice working in someone else's code.",
    tech: ["React", "PokéAPI"],
    liveUrl: "https://pokemon-explorer-gamma-umber.vercel.app/",
    repoUrl: "https://github.com/sowjanya-gangisetty/pokemon_explorer",
    tag: "Pair project",
    icon: "⚡",
    image: "/projects/pokemon-explorer.jpg",
  },
  {
    title: "Willys Store",
    description: "A grocery-store storefront clone with an Express/Node.js backend behind the product listings and layout.",
    tech: ["HTML", "CSS", "JavaScript", "Express", "Node.js"],
    liveUrl: "https://willys-store.vercel.app/",
    tag: "Solo",
    icon: "🛒",
    image: "/projects/willys-store.jpg",
  },
  {
    title: "Indian Bistro",
    description: "A restaurant website with a menu and info pages, backed by an Express/Node.js server — built with a team.",
    tech: ["Next.js", "React", "Express", "Node.js"],
    liveUrl: "https://indian-bistro.vercel.app/",
    repoUrl: "https://github.com/smitaisverige/indian_bistro",
    tag: "Group project",
    icon: "🍽️",
    image: "/projects/indian-bistro.jpg",
  },
  {
    title: "Animal Explorer",
    description: "A course assignment building a browsable animal catalog with filtering and detail views.",
    tech: ["React"],
    liveUrl: "https://assignment-animal-explorer.vercel.app/",
    tag: "Assignment",
    icon: "🐾",
    image: "/projects/animal-explorer.jpg",
  },
  {
    title: "Weather App",
    description: "A weather lookup app built with Material UI, fetching live conditions from a public weather API.",
    tech: ["React", "Material UI", "REST API"],
    liveUrl: "https://weather-mui.vercel.app/",
    tag: "Solo",
    icon: "⛅",
    image: "/projects/weather-app.jpg",
  },
  {
    title: "notes App",
    description: "A simple notes app built with React and tailwind CSS.",
    tech: ["React", "tailwind CSS", "REST API", "LocalStorage"],
    repoUrl: "https://github.com/Anuhya92/note-app.git",
    liveUrl: "https://notes-app.vercel.app/",
    tag: "Solo",
    icon: "📝",
    image: "/projects/my-notes.jpg",
  },
  {
    title: "HSS Scouterna",
    description: "A real-time client project delivered for an actual organization over two months — the team's biggest test of working from real requirements, on a deadline, with a live client.",
    tech: ["React", "Next.js", "Node.js"],
    liveUrl: "https://hss-scouterna.vercel.app/",
    repoUrl: "https://github.com/Busanz/hss_scouterna",
    tag: "Client project · May-Jun 2026",
    icon: "🤝",
    image: "/projects/hss-scouterna.jpg",
  },
  {
    title: "Product Catalog",
    description: "A product catalog built with an emphasis on test coverage — unit and integration tests alongside the UI.",
    tech: ["React", "Testing", "Integration testing"],
    liveUrl: "https://product-cata-log-testing-anuhya-khaki.vercel.app/",
    tag: "Solo",
    icon: "📦",
    image: "/projects/product-catalog.jpg",
  },
  {
    title: "Recipe Explorer",
    description: "A recipe search and browsing app built on top of TheMealDB API, with search and detail views.",
    tech: ["React", "TheMealDB API"],
    liveUrl: "https://recipe-mealdb-five.vercel.app/",
    tag: "Solo",
    icon: "🍳",
    image: "/projects/recipe-explorer.jpg",
  },
];

export const tools = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Supabase",
  "Git",
  "Postman",
];

export const journey: {
  period: string;
  place: string;
  role: string;
  detail: string;
  current?: boolean;
}[] = [
  {
    period: "Sep 2025 — May 2027",
    place: "Futurgame",
    role: "Frontend Developer course",
    detail:
      "Currently studying — deepening frontend skills, and alongside it, learning database work with PostgreSQL and Supabase.",
    current: true,
  },
  {
    period: "Jan 2025 — Jun 2025",
    place: "Sundsgårdens folkhögskola, Helsingborg",
    role: "Backend Developer track",
    detail:
      "Second half of a full-stack program: server-side JavaScript, APIs, and databases, building on the frontend foundation from the term before.",
  },
  {
    period: "Aug 2024 — Jan 2025",
    place: "Sundsgårdens folkhögskola, Helsingborg",
    role: "Frontend Developer track",
    detail:
      "First half of the program: HTML, CSS, JavaScript and React, moving from static pages to interactive, component-based interfaces.",
  },
  {
    period: "Jun 2009 — May 2013",
    place: "JNTU, Anantapur",
    role: "B.Tech, Electronics & Communication Engineering",
    detail:
      "Undergraduate engineering degree — the analytical foundation she's now applying to software.",
  },
];

export const languages = [
  { name: "English", level: "Professional" },
  { name: "Swedish", level: "Beginner" },
  { name: "Telugu", level: "Mother tongue" },
];