import project1 from "../assets/projects/telebotimage.jpeg";
import project2 from "../assets/projects/telebotimage.jpeg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `As a recent graduate with a specialization in front-end development, I am deeply enthusiastic about crafting engaging user interfaces and seamless experiences. Armed with a solid foundation in JavaScript, React, and Vue.js, I am eager to dive into the world of web development. Additionally, my familiarity with database technologies such as MySQL and Firebase positions me to contribute effectively to both front-end and back-end development tasks. I am eager to collaborate with teams to bring innovative ideas to life and contribute to the creation of impactful digital solutions.`;

export const ABOUT_TEXT = `As a recent front-end development graduate, I'm thrilled to bring my passion for crafting engaging user experiences to new opportunities. After completing an internship where I dedicated nearly a year to honing my skills, I'm excited to share that I've successfully launched a website for the company. This hands-on experience has strengthened my proficiency in JavaScript, React, and Vue.js and provided invaluable insights into the real-world challenges of web development. With a solid foundation in front-end technologies and a flair for creative problem-solving, I'm eager to continue my journey in the industry, contributing to impactful projects and driving business success through innovative digital solutions.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Full stack Developer",
    company: "ATTOPOLIS (B2B International Medical Digital Platform)",
    description: `During my internship, I led the development of key features for the company's website. One significant addition was implementing a mass email registration function with duplicate detection, ensuring a clean database. Additionally, I independently created an AI audio summarizer, enhancing user experience by providing concise summaries of audio content. These experiences have honed my skills and readiness to contribute effectively to new projects.`,
    technologies: ["Javascript", "React", "Vue", "Firebase"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website, quiklah.com",
    image: project1,
    description:
      "An innovative AI-powered note-taking tool designed to assist businesses in recording meetings and summarizing key points, enhancing productivity and ensuring nothing important is missed.",
    technologies: ["Firebase", "React", "Stripe", "Google Cloud"],
    link: "https://www.quiklah.com",
  },
  {
    title: "Telegram Remindere bot @dontfrogetbot",
    image: project2,
    description:
      " Easily set reminders for tasks or events with a simple and user-friendly interface.",
    technologies: ["Javascript", "Heroku"],
    link: "https://t.me/dontfrogetbot",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind"],
    link: "https://www.yourportfolio.com",
  },
];

export const CONTACT = {
  email: "haojun0114@outlook.com",
};
