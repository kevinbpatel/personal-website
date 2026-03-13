const person = {
  firstName: "Kevin",
  lastName: "Patel",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/avatar.jpg",
  email: "kevinbpatel@icloud.com",
  location: "Brampton, Ontario",
};

const social = [
  {
    name: "GitHub",
    link: "https://github.com/kevinbpatel",
  },
  {
    name: "GitLab",
    link: "https://gitlab.com/kevinbpatel",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kevinbpatel",
  },
  {
    name: "Bluesky",
    link: "https://bsky.app/profile/kevinbpatel.com",
  },
  {
    name: "Mastodon",
    link: "https://mastodon.social/@kevinbpatel",
  },
  {
    name: "Email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: "Kevin Patel",
  subline: "Front-End Developer. Brampton, Ontario",
  featured: {
    display: true,
    title: "Recent project: FlyNext",
    href: "/work/flynext",
  },
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  intro: {
    display: true,
    title: "Introduction",
    description:
      "I'm a recent graduate from the University of Toronto with hands-on experience in web development, especially on the front end. I'm eager to contribute to meaningful projects, keep learning, and grow as a developer.",
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "The Game of Social Life",
        timeframe: "Oct. 2024 - Apr. 2025",
        role: "Game Development Lead",
        achievements: [
          "Created character poses and digital artwork assets for an online educational game focused on social justice themes",
          "Participated in weekly development meetings discussing UI/UX design and user interface elements",
          "Provided input on visual design decisions and user experience considerations during team collaborations",
        ],
        images: [],
      },
      {
        company: "MathMatize",
        timeframe: "Oct. 2021 - Mar. 2022",
        role: "Full Stack Developer",
        achievements: [
          "Developed and designed landing pages and mockups for Mathmatize, an educational platform used by tens of thousands of students and incorporated into hundreds of classrooms across North America",
          "Quickly learned HTML and CSS to develop and launch responsive landing pages under tight deadlines, while balancing academic responsibilities",
        ],
        images: [
          {
            src: "/images/projects/mathmatize/landing-page.png",
            alt: "MathMatize landing page",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "University of Toronto Mississauga",
        description: "Honours Bachelor of Science in Computer Science",
      },
    ],
  },
};

const work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const gallery = {
  path: "/gallery",
  label: "Artwork",
  title: `Artwork – ${person.name}`,
  description: `Artwork by ${person.name}`,
  images: [
    // Paintings & portraits (most impressive)
    { src: "/images/gallery/vertical-1.jpg", alt: "Wolf warrior painting", orientation: "vertical" as const },
    { src: "/images/gallery/vertical-8.jpg", alt: "Woman with moon halo", orientation: "vertical" as const },
    { src: "/images/gallery/vertical-7.jpg", alt: "Anatomical brain painting", orientation: "vertical" as const },
    { src: "/images/gallery/vertical-6.jpg", alt: "Abstract warm swirl oil painting", orientation: "vertical" as const },
    { src: "/images/gallery/vertical-4.jpg", alt: "Portrait painting", orientation: "vertical" as const },
    { src: "/images/gallery/vertical-5.jpg", alt: "Female portrait painting", orientation: "vertical" as const },
    { src: "/images/gallery/portrait-pastel.jpg", alt: "Male pastel portrait", orientation: "vertical" as const },
    // Detailed drawings & illustrations
    { src: "/images/gallery/vertical-3.jpg", alt: "Gothic cathedral pencil drawing", orientation: "vertical" as const },
    { src: "/images/gallery/vertical-2.jpg", alt: "Snowy owl illustration", orientation: "vertical" as const },
    { src: "/images/gallery/horizontal-2.jpg", alt: "Canadian space program illustration", orientation: "horizontal" as const },
    { src: "/images/gallery/painting-silhouette.jpg", alt: "Silhouette figure painting", orientation: "horizontal" as const },
    { src: "/images/gallery/drawing-abstract.jpg", alt: "Abstract colored bars drawing", orientation: "horizontal" as const },
    // Logo & graphic design
    { src: "/images/gallery/logo-pretty-boy-rose.jpg", alt: "Pretty Boy rose logo", orientation: "vertical" as const },
    { src: "/images/gallery/logo-pretty-boy-tiger.png", alt: "Team Pretty tiger logo", orientation: "vertical" as const },
    { src: "/images/gallery/logo-archery.jpg", alt: "Mayfield Archery logo", orientation: "vertical" as const },
    // Sculpture & 3D work
    { src: "/images/gallery/sculpture-metal.jpg", alt: "Metal mixed-media sculpture", orientation: "horizontal" as const },
    { src: "/images/gallery/sculpture-dice.jpg", alt: "Dice tunnel sculpture", orientation: "horizontal" as const },
    { src: "/images/gallery/sculpture-apple.jpg", alt: "Apple clay sculpture", orientation: "horizontal" as const },
    { src: "/images/gallery/sculpture-ceramic.jpg", alt: "Ceramic wall piece", orientation: "horizontal" as const },
    // Character design & figure drawing
    { src: "/images/gallery/character-punch.jpg", alt: "Character design – punch pose", orientation: "vertical" as const },
    { src: "/images/gallery/character-kick.jpg", alt: "Character design – kick pose", orientation: "vertical" as const },
    { src: "/images/gallery/figure-kick.png", alt: "Figure drawing – side kick", orientation: "horizontal" as const },
    { src: "/images/gallery/figure-standing.png", alt: "Figure drawing – standing pose", orientation: "vertical" as const },
    { src: "/images/gallery/figure-stance.png", alt: "Figure drawing – fighting stance", orientation: "horizontal" as const },
    { src: "/images/gallery/figure-sitting.png", alt: "Figure drawing – sitting pose", orientation: "horizontal" as const },
    // Studies & other
    { src: "/images/gallery/drawing-orbits.jpg", alt: "Orbital spheres color study", orientation: "horizontal" as const },
    { src: "/images/gallery/drawing-thumbnails.jpg", alt: "Color study thumbnails", orientation: "horizontal" as const },
    { src: "/images/gallery/horizontal-1.jpg", alt: "MathMatize landing page design", orientation: "horizontal" as const },
  ],
};

export { person, social, home, about, work, gallery };
