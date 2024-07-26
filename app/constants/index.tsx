export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: "/web.webp",
  },

  {
    title: "Backend Developer",
    icon: "/backend.webp",
  },
  {
    title: "Frontend Developer",
    icon: "/creator.webp",
  },
  {
    title: "UI/UX Designer",
    icon: "/mobile.webp",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "/tech/html.webp",
  },
  {
    name: "CSS 3",
    icon: "/tech/css.webp",
  },
  {
    name: "JavaScript",
    icon: "/tech/javascript.webp",
  },
  {
    name: "TypeScript",
    icon: "/tech/typescript.webp",
  },
  {
    name: "Python",
    icon: "/tech/python.png",
  },
  {
    name: "React.js",
    icon: "/tech/reactjs.webp",
  },
  {
    name: "Next.js",
    icon: "/tech/nextjs.svg",
  },
  {
    name: "Redux Toolkit",
    icon: "/tech/redux.webp",
  },
  {
    name: "Tailwind CSS",
    icon: "/tech/tailwind.webp",
  },

  {
    name: "git",
    icon: "/tech/git.webp",
  },
  {
    name: "figma",
    icon: "/tech/figma.webp",
  },
  {
    name: "wordpress",
    icon: "/tech/wordpress.webp",
  },
  {
    name: "bootstrap",
    icon: "/tech/bootstrap.webp",
  },
  {
    name: "Node.js",
    icon: "/tech/node.png",
  },
  {
    name: "Express.js",
    icon: "/tech/express.png",
  },
  {
    name: "Nest.js",
    icon: "/tech/nest.png",
  },
];

const experiences = [
  {
    title: "",
    company_name: "Sehat 365",
    icon: "/company/avm.webp",
    iconBg: "#383E56",
    date: "2020 -  2021",
    points: [
      "Collecting Accounts Receivable Data",
      "Creating and Analyzing Social Media Content",

    ],
  },
  {
    title: "Fullstack Web Developer",
    company_name: "Ganesha Operation (Pusat)",
    icon: "/company/avm.webp",
    // iconBg: "#E6DEDD",
    date: "Oktober 2022 - Present",
    points: [
      "Develop and maintain web applications and web services",
      " Monitor and optimize web application performance",

    ],
  },
];

const testimonials = [
  {
    id: 1,
    testimonial:
      "Behance is a social media platform owned by Adobe whose main focus is to showcase and discover creative work.",
    name: "Om Patel",
    image: "/socialmedia/behance.svg",
    link: "https://www.behance.net/omthecreator",
  },
  {
    id: 2,
    testimonial:
      "LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
    name: "Om Patel",
    image: "/socialmedia/linkedin.svg",
    link: "https://www.linkedin.com/in/om-patel-401068143/",
  },
  {
    id: 3,
    testimonial:
      "Dribbble is a self-promotion and social networking platform for digital designers and creatives. It serves as a design portfolio.",
    name: "Om Patel",
    image: "/socialmedia/dribble.svg",
    link: "https://dribbble.com/om2121",
  },
  {
    id: 4,
    testimonial:
      "Also do check out my UI/UX Portfolio where I have shared by design studies.",
    name: "Om Patel",
    image: "/socialmedia/portfolio.svg",
    link: "https://omthecreator.netlify.app/",
  },
  {
    id: 5,
    testimonial:
      "Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
    name: "Om Patel",
    image: "/tech/github.webp",
    link: "https://github.com/omunite215",
  },
];

const projects = [
  {
    name: "Official Website Ganesha Operation (Beta)",
    description:
      "The official website for Ganesha Operation, featuring various content and products for sale.",
    tags: [
      {
        name: "nextJs",
        // color: "blue-text-gradient",
      },

      {
        name: "bootstrap",
        // color: "green-text-gradient",
      },
    ],
    image: "/projectimg/ganesha.png",
    // source_code_link:
    //   "https://github.com/omunite215/FCC-Random-Quote-Generator",
    // netlify_link: "https://randomquotegeneratorbyom.netlify.app/",
  },
  {
    name: "Admin Dashboard + CMS Produk",
    description:
      "Admin dashboard for managing content and products on the Ganesha Operation website.",


    tags: [
      {
        name: "react",
        // color: "blue-text-gradient",
      },


      {
        name: "tailwind",
        // color: "green-text-gradient",
      },
    ],
    image: "/projectimg/admindashboard.png",
    // source_code_link: "https://github.com/omunite215/React-Admin-DashBoard",
    // netlify_link: "https://reactadmindashboardbyom.netlify.app/",
  },
  {
    name: "Teaser GO",
    description:
      "Teaser GO is a teaser website for conducting tryout exams with blocking time.After the user completes the exam, results and explanations are provided immediately.",
    tags: [
      {
        name: "reactjs",
        // color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        // color: "green-text-gradient",
      },
    ],
    image: "/projectimg/teaser.png",
    // source_code_link: "https://github.com/omunite215/hoobank",
    // netlify_link: "https://hoobankbyom.netlify.app/",
  },
  {
    name: "API Blog Ganesha Operation",
    description:
      "The API for Ganesha Operation's blog provides comprehensive endpoints for managing all aspects of the blog. It allows for the creation, retrieval, updating, and deletion of blog posts, categories, and comments.",
    tags: [
      {
        name: "postgresql",
        // color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        // color: "green-text-gradient",
      },
    ],
    image: "/projectimg/content-api.jpg",
    // source_code_link: "https://github.com/omunite215/hoobank",
    // netlify_link: "https://hoobankbyom.netlify.app/",
  },


];

export { services, technologies, experiences, testimonials, projects };
