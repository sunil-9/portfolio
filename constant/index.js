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
} from "react-icons/si";



const techStacks = [
  {
    name: "Android",
    category: "Mobile Development",
    icon: <FaAndroid fontSize="20px" className="text-green-500" />,
    url: "https://www.android.com/",
  },
  {
    name: "Kotlin",
    category: "Mobile Development",
    icon: <SiKotlin fontSize="20px" className="text-purple-500" />,
    url: "https://kotlinlang.org/",
  },
  {
    name: "Java",
    category: "Language",
    icon: <FaJava fontSize="20px" />,
    url: "https://www.java.com/en/",
  },
  {
    name: "Dart",
    category: "Language",
    icon: <SiDart fontSize="20px" className="text-blue-500" />,
    url: "https://dart.dev/",
  },
  {
    name: "Javascript",
    category: "Language",
    icon: <FaJs fontSize="20px" className="text-yellow-400" />,
    url: "https://www.javascript.com/",
  },
  {
    name: "Typescript",
    category: "Language",
    icon: <SiTypescript fontSize="20px" className="text-blue-500" />,
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "Terraform",
    category: "Language",
    icon: <SiTerraform fontSize="20px" className="text-purple-500" />,
    url: "https://www.terraform.io/",
  },
  {
    name: "PHP",
    category: "Language",
    icon: <FaPhp fontSize="20px" className="text-blue-300" />,
    url: "https://www.php.net/",
  },
  {
    name: "Firebase",
    category: "Web Development",
    icon: <SiFirebase fontSize="20px" className="text-yellow-400" />,
    url: "https://firebase.google.com/",
  },
  {
    name: "Laravel",
    category: "Web Development",
    icon: <SiLaravel fontSize="20px" className="text-red-600" />,
    url: "https://laravel.com/",
  },
  {
    name: "Next.js",
    category: "Web Development",
    icon: <SiNextdotjs fontSize="20px" />,
    url: "https://nextjs.org/",
  },
  {
    name: "Github Actions",
    category: "DevOps",
    icon: <FaGitAlt fontSize="20px" />,
    url: "https://www.github.com/",
  },
  {
    name: "Linux",
    category: "DevOps",
    icon: <SiLinux fontSize="20px" />,
    url: "https://www.linux.com/",
  },
  {
    // icon: <FaGitAlt fontSize="20px" />,
    name: "Jenkins",
    category: "DevOps",
    icon: <SiJenkins fontSize="20px" />,
    url: "https://www.jenkins.io/",
  },
  {
    name: "Docker & Kubernetes",
    category: "DevOps",
    icon: (
      <>
        <SiDocker fontSize="20px" className="text-blue-400" />
        <SiKubernetes fontSize="20px" className="text-blue-600" />
      </>
    ),
    url: "https://www.docker.com/",
  },
  {
    name: "Premetheus & Grafana",
    category: "DevOps",
    icon: (
      <>
        <SiPrometheus fontSize="20px" className="text-orange-500" />
        <SiGrafana fontSize="20px" className="text-orange-600" />
      </>
    ),
    url: "https://prometheus.io/",
  },
  {
    // icon: <FaGitAlt fontSize="20px" />,
    name: "CI/CD - Fastlane & Terraform",
    category: "DevOps",
    icon: (
      <>
        <SiFastlane fontSize="20px" />
        <SiTerraform fontSize="20px" className="text-purple-500" />
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
    title: "Gaintplay",
    alt: "qumon image",
    url: "https://gaintplay.com/",
    role: "Node.js Backend Developer / Devops Engineer",
    skills: [
      "Java",
      "Node.js",
      "docker",
      "Kubernetes",
      "Linode LKE",
      "terraform",
    ],
    period: "May 2022 - Present",
    logo: "/gaintplay.png",
  },
  {
    title: "Race Groups",
    alt: "race groups",
    url: "https://racegroups.com/",
    role: "Inrastructure Engineer/ IT head",
    skills: [
      "Android",
      "PHP",
      "API Testing",
      "AWS",
      "Docker",
      "CI/CD",
      "Linux",
    ],
    period: "Dec 2020 - Jan 2022",
    logo: "/race.png",
  },
];

const educations = [
  {
    title: "Lagrandee International College (LGIC)",
    alt: "la grandee image",
    url: "https://lagrandee.edu.np/",
    role: "Bachelor's Degree in Computer Application",
    skills: [
      "CGPA - 3.03",
      "software development",
      "Android Application Development",
      "Application Security",
    ],
    period: "Sept 2016 - Sept 2021",
    logo: "/la.jpg",
  },
  {
    title: "Spiral Galaxy Higher Secondary School",
    alt: "spiral galaxy image",
    url: "https://spiralgalaxy.edu.np/",
    role: "+2 in Management and Computer Science",
    skills: ["65%", "C", "Networking", "mathematics", "Digital logic"],
    period: "Jan 2014 - Jun 2016",
    logo: "/sghss.jpg",
  },
  // {
  //   title: "Hemja Boarding School",
  //   alt: "hemja boarding image",
  //   url: "https://www.facebook.com/profile.php?id=100057032697172",
  //   role: "SLC",
  //   skills: ["70%", "Computer Basics", "HTML", "CSS"],
  //   period: "Jan 2014 - Jun 2016",
  //   logo: "/sghss.jpg",
  // },
];

const liveProjects = [
  {
    name: "Learn Maths Quiz",
    imageUrl:
      "https://play-lh.googleusercontent.com/-BBmID2jDtqf0vc3guqx_SMDPiIZdNKgqK8fpbumjPEe1Z94WVpOYWOn4KIS_XFZAh4=w240-h480-rw",
    alt: "Learn Maths Quiz",
    summary:
      "This app is developed for students to learn maths with qui and also to test their knowledge. This app is developed using Java and Android Studio and is available on Google Play Store.",
    playstore: "https://play.google.com/store/apps/details?id=com.dhanas.maths",
  },
  {
    name: "Find Dots - Brain Training",
    imageUrl:
      "https://play-lh.googleusercontent.com/MI3OibymYzIACP9wEVdyp0Uxu9A0-GLt3QIdmdXxLl9zD6FyRJ-Ry5vvh-0jVqVPkw=w240-h480-rw",
    alt: "Find Dots - Brain Training",
    summary:
      "Our brain training game find dots. This game is developed using Kotlin and Android Studio and is available on Google Play Store.",
    playstore:
      "https://play.google.com/store/apps/details?id=com.dhanas.finddotsfun",
  },
  {
    name: "Rebbit bubble",
    imageUrl:
      "https://play-lh.googleusercontent.com/cRCDuZfVqw6FSGlFkVZ-7DkPOZ8ahQ0N4dMQ1Fn4pddRWHjB5e5K5TD9E_EHMafRX2bM=w240-h480-rw",
    alt: "Rebbit bubble",
    summary:
      "Rebbit bubble is a bubble shooter game. This game is available on Google Play Store.",
    playstore:
      "https://play.google.com/store/apps/details?id=com.dhanas.rabbits",
  },
  {
    name: "Gaint Play",
    imageUrl:
      "https://play-lh.googleusercontent.com/iws1w0-QBRkfh6-dNxOqPLLGXyHfMs3JfLlAKz_uX6JDUGKawadxxnFOqSK66aekb3I=w240-h480-rw",
    alt: "Gaint Play",
    summary:
      "Gaintplay is a great app to make some extra money. This app is available on Google Play Store.",
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

