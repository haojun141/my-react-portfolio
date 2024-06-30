import project1 from "../assets/projects/web.jpeg";
import project2 from "../assets/projects/telebotimage.jpeg";
import project3 from "../assets/projects/pf.png";

export const MY_CONTENT = `As a soon-to-be graduate, I am deeply enthusiastic about crafting engaging user interfaces and seamless experiences. With a solid foundation in JavaScript, React, and Vue.js, I am eager to dive into the world of web development. Additionally, my familiarity with database technologies such as MySQL and Firebase positions me to contribute effectively to both front-end and back-end development tasks. I am excited to collaborate with teams to bring innovative ideas to life and contribute to the creation of impactful digital solutions.`;

export const ABOUT_TEXT = `I'm passionate about creating engaging user experiences. During my nearly year-long internship, I honed my skills in JavaScript, React, and Firebase, and I'm excited to launch a company website in September. This experience has strengthened my technical proficiency and creative problem-solving abilities. I'm eager to continue my journey in web development, contributing to impactful projects and driving business success through innovative digital solutions.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Full stack Developer",
    company: "ATTOPOLIS (B2B International Medical Digital Platform)",
    description: `Led the development of key features for the company's website. Integrated a third-party AI audio summarizer API, improving user experience by providing concise summaries of audio content. Implemented mass email registration with duplicate detection, ensuring database cleanliness. These projects enhanced my technical skills and prepared me for future contributions.`,
    technologies: ["Javascript", "React", "Vue", "Firebase", "Tailwind"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website (Fully functional by September)",
    image: project1,
    description:
      "An innovative AI-powered note-taking tool designed to assist businesses in recording meetings and summarizing key points, enhancing productivity and ensuring nothing important is missed.",
    technologies: ["Firebase", "React", "Stripe", "Google Cloud"],
    link: "https://login.quiklah.com/login",
  },
  {
    title: "Telegram Remindere bot",
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
    link: "https://haojunwebdev.tech",
  },
];

export const CONTACT = {
  email: "haojun0114@outlook.com",
  telephone: "8113 0633",
};
