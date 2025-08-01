import { CgAlbum } from "react-icons/cg";
import {
  FaAndroid,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaJs,
  FaLinkedin,
  FaMedium,
  FaPhp,
  FaStackOverflow
} from "react-icons/fa";
import {
  SiDart,
  SiDocker,
  SiFastlane,
  SiFirebase,
  SiGmail,
  SiGrafana,
  SiJenkins,
  SiKotlin,
  SiKubernetes,
  SiLaravel,
  SiLinux,
  SiNextdotjs,
  SiPrometheus,
  SiTerraform,
  SiTypescript,
  SiMysql,
  SiMongodb 
} from "react-icons/si";



const techStacks = [
  {
    name: "Typescript",
    category: "Language",
    icon: <SiTypescript fontSize="30px" className="text-blue-500" />,
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "Javascript",
    category: "Language",
    icon: <FaJs fontSize="30px" className="text-yellow-400" />,
    url: "https://www.javascript.com/",
  },
  {
    name: "Mysql Database",
    category: "Database",
    icon: <SiMysql  fontSize="30px" className="text-yellow-500" />,
    url: "https://www.mysql.com/",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: <SiMongodb   fontSize="30px" className="text-green-500" />,
    url: "https://www.mongodb.com/",
  },
  {
    name: "Android",
    category: "Mobile Development",
    icon: <FaAndroid fontSize="30px" className="text-green-500" />,
    url: "https://www.android.com/",
  },
  {
    name: "Kotlin",
    category: "Mobile Development",
    icon: <SiKotlin fontSize="30px" className="text-purple-500" />,
    url: "https://kotlinlang.org/",
  },
  {
    name: "Java",
    category: "Language",
    icon: <FaJava fontSize="30px" />,
    url: "https://www.java.com/en/",
  },
  {
    name: "Dart",
    category: "Language",
    icon: <SiDart fontSize="30px" className="text-blue-500" />,
    url: "https://dart.dev/",
  },
  {
    name: "Terraform",
    category: "Language",
    icon: <SiTerraform fontSize="30px" className="text-purple-500" />,
    url: "https://www.terraform.io/",
  },
  {
    name: "PHP",
    category: "Language",
    icon: <FaPhp fontSize="30px" className="text-blue-300" />,
    url: "https://www.php.net/",
  },
  {
    name: "Firebase",
    category: "Web Development",
    icon: <SiFirebase fontSize="30px" className="text-yellow-400" />,
    url: "https://firebase.google.com/",
  },
  {
    name: "Laravel",
    category: "Web Development",
    icon: <SiLaravel fontSize="30px" className="text-red-600" />,
    url: "https://laravel.com/",
  },
  {
    name: "Next.js",
    category: "Web Development",
    icon: <SiNextdotjs fontSize="30px" />,
    url: "https://nextjs.org/",
  },
  {
    name: "Github Actions",
    category: "DevOps",
    icon: <FaGitAlt fontSize="30px" />,
    url: "https://www.github.com/",
  },
  {
    name: "Linux",
    category: "DevOps",
    icon: <SiLinux fontSize="30px" />,
    url: "https://www.linux.com/",
  },
  {
    // icon: <FaGitAlt fontSize="30px" />,
    name: "Jenkins",
    category: "DevOps",
    icon: <SiJenkins fontSize="30px" />,
    url: "https://www.jenkins.io/",
  },
  {
    name: "Docker & Kubernetes",
    category: "DevOps",
    icon: (
      <>
        <SiDocker fontSize="30px" className="text-blue-400" />
        <SiKubernetes fontSize="30px" className="text-blue-600" />
      </>
    ),
    url: "https://www.docker.com/",
  },
  {
    name: "Premetheus & Grafana",
    category: "DevOps",
    icon: (
      <>
        <SiPrometheus fontSize="30px" className="text-orange-500" />
        <SiGrafana fontSize="30px" className="text-orange-600" />
      </>
    ),
    url: "https://prometheus.io/",
  },
  {
    // icon: <FaGitAlt fontSize="30px" />,
    name: "CI/CD - Fastlane & Terraform",
    category: "DevOps",
    icon: (
      <>
        <SiFastlane fontSize="30px" />
        <SiTerraform fontSize="30px" className="text-purple-500" />
      </>
    ),
    url: "https://fastlane.tools/",
  },
];

const menuLinks = [
  { name: "About Me", route: "/about" },
  // { name: "Experience", route: "/experience" },
  { name: "Live Projects", route: "/projects" },
  { name: "Github", route: "/github" },
  { name: "Articles", route: "/article" },
  { name: "Contact", route: "/contact" },
];

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Sunil Sapkota. All Rights Reserved.`,
  author: {
    name: "Sunil Sapkota",
    accounts: [
      {
        url: "https://github.com/sunil-9",
        icon: <FaGithub />,
        name: "Github",
        type: "gray",
      },
      {
        url: "https://www.linkedin.com/in/sunilsapkota09/",
        icon: <FaLinkedin />,
        name: "Linkedin",
        type: "linkedin",
      },
      {
        url: "https://stackoverflow.com/users/8008979/sunil-sapkota",
        icon: <FaStackOverflow />,
        name: "StackOverflow",
        type: "orange",
      },
      {
        url: "https://sunil-9.medium.com/",
        icon: <FaMedium />,
        name: "Medium",
        type: "gray",
      },
      {
        url: "mailto:sunilsapkota9@gmail.com",
        icon: <SiGmail />,
        name: "Gmail",
        type: "red",
      },
    ],
  },
};

const resume = {
  // url: "https://drive.google.com/file/d/1SBxpt3V-QqQg7PJLTHoUxcTVvFsJQbY_/view",
  url: "https://sapkotasunil.com.np/resume.pdf",
  icon: <CgAlbum />,
  name: "Resume",
};

// const techStacks = [
//   {
//     name: "Android",
//     icon: <FaAndroid fontSize="20px" />,
//     url: "https://www.android.com/",
//   },
//   {
//     name: "React Native",
//     icon: <FaReact fontSize="20px" />,
//     url: "https://reactnative.dev/",
//   },
//   {
//     name: "Kotlin",
//     icon: <SiKotlin fontSize="20px" />,
//     url: "https://kotlinlang.org/",
//   },
//   {
//     name: "Java",
//     icon: <FaJava fontSize="20px" />,
//     url: "https://www.java.com/en/",
//   },
//   {
//     name: "Javascript",
//     icon: <FaJs fontSize="20px" />,
//     url: "https://www.javascript.com/",
//   },
//   {
//     name: "Firebase",
//     icon: <SiFirebase fontSize="20px" />,
//     url: "https://firebase.google.com/",
//   },
//   {
//     name: "Github & GitLab",
//     icon: <FaGitAlt fontSize="20px" />,
//     url: "https://www.gitlab.com/",
//   },
//   {
//     name: "CI/CD - Fastlane and Terraform",
//     icon: <SiFastlane fontSize="20px" />,
//     url: "https://fastlane.tools/",
//   },
// ];

const companies = [
    {
    title: "Tutoral Hub",
    alt: "Tutoral Hub logo",
    url: "https://dds.com.np/",
    role: "Personal Project",
    skills: [
      "javascript",
      "Typescript",
      "Document Management System",
      "docusaurus",
    ],
    period: "Jan 2022 - Present",
    logo: "/dds.svg",
  },
  {
    title: "International School of Management and Technology (ISMT) college",
    alt: "International School of Management and Technology (ISMT) college logo",
    url: "https://ismt.edu.np/",
    role: "Assistant Professor",
    skills: [
      "Machine Learning teaching",
      "Business Process Support Teaching",
      "Project Management",
      "Administration"
    ],
    period: "July 2024 - July 2025",
    logo: "/ismt.png",
  },
  {
    title: "Oarkflow",
    alt: "Oarkflow logo",
    url: "https://oarkflow.com/",
    role: "Full Stack / ML Engineer",
    skills: [
      "ML Development",
      "Backend Development",
      "react.js (Frontend)",
      
    ],
    period: "Nov 2024 - July 2025",
    logo: "/oarkflow.png",
  },
  {
    title: "La Grandee International College",
    alt: "La Grandee International College logo",
    url: "https://lagrandee.edu.np/",
    role: "Assistant Professor",
    skills: [
      "Android teaching",
      "Linux Teaching",
      "Project Management",
      "Administration",
      "Curriculum Development",
      "project supervision",
    ],
    period: "Jan 2023 - July 2025",
    logo: "/la.jpg",
  },
  {
    title: "Ad Break Media/Gaintplay LLC",
    alt: "Ad Break Media/Gaintplay LLC logo",
    url: "https://gaintplay.com/",
    role: "Node.js Backend Developer / Devops Engineer",
    skills: [
      "Java",
      "Node.js",
      "docker",
      "Kubernetes",
      "Linode LKE",
      "terraform",
      "Cloud Computing",
      "DNS and Server Management",
    ],
    period: "Jan 2022 - Jan 2024",
    logo: "/gaintplay.png",
  },
  {
    title: "Race Groups",
    alt: "race groups",
    url: "https://racegroups.com/",
    role: "Developer / IT Head",
    skills: [
      "project management",
      "PHP",
      "API Development/Testing",
      "MySQL database",
      "Docker",
      "CI/CD",
      "Linux",

    ],
    period: "Nov 2020 - Jan 2022",
    logo: "/race.png",
  },
];

const educations = [
  {
    title: "Victoria University of Sydney",
    alt: "victoria university image",
    url: "https://www.vu.edu.au/",
    role: "Master's Degree in Information Technology",
    skills: [
      "Running",
    ],
    period: "July 2025 - Current",
    logo: "/vu.jpg",
  },
  {
    title: "Lagrandee International College (LGIC)",
    alt: "la grandee image",
    url: "https://lagrandee.edu.np/",
    role: "Bachelor's Degree in Computer Application",
    skills: [
      "CGPA - 3.03"
    ],
    period: "Sept 2016 - Sept 2021",
    logo: "/la.jpg",
  },
  {
    title: "Spiral Galaxy Higher Secondary School",
    alt: "spiral galaxy image",
    url: "https://spiralgalaxy.edu.np/",
    role: "+2 in Management and Computer Science",
    skills: ["First Division", ],
    period: "Jan 2014 - Jun 2016",
    logo: "/sghss.jpg",
  },
  {
    title: "Hemja Boarding School",
    alt: "hemja boarding image",
    url: "https://www.facebook.com/profile.php?id=100057032697172",
    role: "SLC",
    skills: ["First Division", ],
    period: "Jan 2001 - Jun 2014",
    logo: "/hbs.jpg",
  },
];

const liveProjects = [
  {
    name: "Oarkflow",
    imageUrl:
      "/oarkflow.png",
    alt: "Learn Maths Quiz",
    summary:
      "Use operations and build your business flow pipeline efficiently. Clean CSV, Validate Phone and many tools essential for your business.",
      website: "https://oarkflow.com/",
  },
  {
    name: "Study website",
    imageUrl:
      "/dds.png",
    alt: "Tutoral Hub",
    summary:
      "Your comprehensive resource for BCA studies at Pokhara University. Access important questions, course content, and study materials all in one place.",
      website: "https://dds.com.np/",
  },
  {
    name: "Ad Break Media",
    imageUrl:
      "/adbreak.svg",
    alt: "Ad Break Media",
    summary:
      "Elevate your apps with offerwall ads. Monetize without compromising user experience. Earn money while expressing opinions and playing.",
    website: "https://adbreakmedia.com/",
  },
  {
    name: "Race Groups",
    imageUrl:
      "race.png",
    alt: "Race Groups",
    summary:
      "One of the top construction firms in Nepal, Race Groups offers services in architecture, building, interior design, and house remodeling. A one-stop solution for all your construction needs.",
    website:
      "https://racegroups.com/",
    },
    {
    
    name: "Gaint Play",
    imageUrl:
      "https://play-lh.googleusercontent.com/iws1w0-QBRkfh6-dNxOqPLLGXyHfMs3JfLlAKz_uX6JDUGKawadxxnFOqSK66aekb3I=w240-h480-rw",
    alt: "Gaint Play",
    summary:
      "Gaintplay is a next-generation Cash/Crypto rewards platform, Users earn free Crypto/Cash by interacting and completing tasks. ",
    playstore:
      "https://play.google.com/store/apps/details?id=com.gaintplay.makemoney.android",
  },
];

export {
  menuLinks,
  techStacks,
  siteConfig,
  resume,
  companies,
  educations,
  liveProjects,
  // techStacksWeb,
  // techStacksDevOps,
  // techStacksAndroid,
};

