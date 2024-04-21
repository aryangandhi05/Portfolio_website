import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  localisation,
  collabconnect,
  memegenerator,
  newsresearch,
  mernchatapp,
  threejs,
  cplus,
  c,
  python,
  java,
  // redux,
  // figma,
  // visualstudiocode,
  // jupyterlab,
  langchain,
  expressjs,
  nextjs,
  wordpress,
  codingcatalysts,
  chegg,
  digitalocean,
  jiit,
} from "../assets";

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
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Generative AI Developer",
    icon: backend,
  },
  {
    title: "Wordpress Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "C++",
    icon: cplus,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "Lanchain",
    icon: langchain,
  },
  {
    name: "Wordpress",
    icon: wordpress,
  },
];

const experiences = [
  {
    title: "Public Relations coordinator",
    company_name: "Jaypee Institute of Information Technology",
    icon: jiit,
    iconBg: "#383E56",
    date: "Mar 2022 - Present",
    points: [
      "Enhanced communicationm skills and Gained experinece for Handling the community under me as a Leader.",
      "Collaborating with cross-functional teams and all others hubs and societies of college for conducting successfull events.",
      "Talking and arranging sponsors for college tech, cultural events and annual fest.",
    ],
  },
  {
    title: "Chegg Applied Physics Tutor Expert",
    company_name: "Chegg",
    icon: chegg,
    iconBg: "#383E56",
    date: "May 2023 - Feb 2024",
    points: [
      "Enhanced communicationm skills and Gained invaluable knowledge in Physics concepts through hands-on experience.",
      "Collaborating with cross-functional teams including tutors of computer science, Physics, and students to create high-quality answers.",
      "Participating in answer reviews and providing constructive feedback to other tutors and students.",
    ],
  },
  {
    title: "Opensource Developer @Hacktoberfest",
    company_name: "DigitalOcean",
    icon: digitalocean,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Oct 2023",
    points: [
      "Created and improved multiple Github Actions(CI/CD) for various workflows.",
      "Understading other organisations and individual's codes for creating better code, fix bugs to create high-quality code.",
      "Improve the Design code in Review webite by Harsh Garg.",
    ],
  },
  {
    title: "Wordpress Developer",
    company_name: "codingcatalysts",
    icon: codingcatalysts,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using javascript and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Localisation in 2D for Internet of things(IOT) and Machinelearning",
    description:
      "Addressing problem of position estimation in wireless sensor networks (WSNs) by Locally linear Embedding & Landmark. Uses in industries like healthcare,logistics etc. For instance, Localise effect of capsule in human body, In warehouse to located all products.",
    tags: [
      {
        name: " LLE",
        color: "blue-text-gradient",
      },
      {
        name: "LLL",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: " WSN",
        color: "blue-text-gradient",
      },
      {
        name: " LLE",
        color: "blue-text-gradient",
      },
    ],
    image: localisation,
    source_code_link: "https://github.com/aryangandhi05/Localisation",
    project_link:
      "https://drive.google.com/file/d/1nvPvugsqFABmI0okm6s-ZCsRcbArUnwU/view",
  },
  {
    name: "CoLabconnect",
    description:
      "It is your Go-to hub and Proof of concept for finding meaningful collaborationsthat align with your interests and capabilities. Whether you're a student seeking hands-on experience, a professional looking to expand your portfolio, or an introvert eager to break through social barriers break through social.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Socket.io",
        color: "green-text-gradient",
      },
      {
        name: "Postman API ",
        color: "pink-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Html",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
    ],
    image: collabconnect,
    source_code_link: "https://github.com/aryangandhi05/CoLabconnect",
    project_link:
      "https://drive.google.com/file/d/1blITWbKWh8UE28RfEboW4VFv6Wt8n38S/view",
  },
  {
    name: "MERN ChatApp",
    description:
      "This is a Personalised ChatApp where you can talk with anyone ensuring that your each message is encrypt end-to-end for security. Here you can form groups of your choice friends, family, community and able to chat, talk on video call with anyone who is registered with app.",
    tags: [
      {
        name: " ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Socket.io",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "pink-text-gradient",
      },
      {
        name: "Postman API",
        color: "pink-text-gradient",
      },
    ],
    image: mernchatapp,
    source_code_link: "https://github.com/aryangandhi05/MERN-ChatApp",
    project_link:
      "https://drive.google.com/file/d/1Zjrir4rmNMmKgBeGfRGohtHwNv-g4m-F/view?usp=sharing",
  },

  {
    name: "Meme Generator",
    description:
      "Create awesome looking memes with Meme Generator and share them with your friends. Acquired hands-on experience navigating API keys and other technical nuances, mastering the art of crafting awesome memes.",
    tags: [
      {
        name: "ReactApp",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: " MongoDB Compass",
        color: "blue-text-gradient",
      },
      {
        name: "ImgFlip API",
        color: "green-text-gradient",
      },
      {
        name: "Html",
        color: "pink-text-gradient",
      },
    ],
    image: memegenerator,
    source_code_link: "https://github.com/aryangandhi05/Meme-Generator",
    project_link: "https://meme-generator-qhms.onrender.com/",
  },
  {
    name: "News_Researcher",
    description:
      "This project is Proof of concept in investment companies as it saves so much time by analysing the share articles/balance sheet and most attractive part is it's availability to give answer of your question from that articles directly.",
    tags: [
      {
        name: "langchain",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
      {
        name: "Large Language Model(LLM)",
        color: "blue-text-gradient",
      },
      {
        name: "GenerativeAI",
        color: "green-text-gradient",
      },
    ],
    image: newsresearch,
    source_code_link: "https://github.com/aryangandhi05/Market_Research_Tool",
    // project_link: "",
  },
];

export { services, technologies, experiences, projects };
