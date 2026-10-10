import { useState } from "react";
import { useColorMode } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { FaArrowRight, FaBriefcase, FaCode, FaGraduationCap, FaMapMarkerAlt, FaRobot } from "react-icons/fa";
import { companies, educations } from "../constant";
import styles from "../styles/About.module.css";

const descriptions = {
  "Imitation Machines": "Building robot software with ROS2 and validating behavior in MuJoCo and NVIDIA Isaac Sim. Connecting perception, control, and sim-to-real workflows with Python and C++.",
  "Tutoral Hub": "Creating a learning resource for BCA students, with course content, study materials, and important questions in one place.",
  "International School of Management and Technology (ISMT) college": "Teaching machine learning and business process support, while supporting student projects and academic operations.",
  Oarkflow: "Developing production-ready machine learning systems alongside backend services and React front ends.",
  "La Grandee International College": "Teaching Android and Linux, developing curriculum, and guiding students through their software projects.",
  "Ad Break Media/Gaintplay LLC": "Building Node.js backend services and managing cloud deployments, Kubernetes infrastructure, and CI/CD pipelines.",
  "Race Groups": "Growing from developer to IT Head: delivering PHP and MySQL systems, automating deployments, and overseeing technical operations across four branches.",
};
const categories = { career: "Career", education: "Education", project: "Personal project" };
const startDate = (period) => Date.parse(period.split(" - ")[0].replace("Sept ", "Sep ")) || 0;
const milestones = [
  ...companies.map((item) => ({ ...item, category: item.role === "Personal Project" ? "project" : "career" })),
  ...educations.map((item) => ({ ...item, category: "education" })),
].sort((a, b) => startDate(b.period) - startDate(a.period));

export default function About() {
  const { colorMode } = useColorMode();
  const [filter, setFilter] = useState("all");
  const visible = milestones.filter((item) => filter === "all" || item.category === filter);
  return (
    <main className={styles.page} data-theme={colorMode}>
      <Head><title>About Me | Sunil Sapkota</title><meta name="description" content="Explore Sunil Sapkota's journey through software development, DevOps, teaching, and robotics." /></Head>
      <header className={styles.hero}>
        <div><p className={styles.eyebrow}>ABOUT ME / MY JOURNEY</p>
          <h1>A curiosity for software.<br /><span>A journey into robotics.</span></h1>
          <p className={styles.intro}>I’m Sunil Sapkota, a software engineer based in Australia. From building web applications to teaching the next generation and developing robot software, every chapter has added a new perspective.</p>
          <p className={styles.location}><FaMapMarkerAlt aria-hidden="true" /> Australia <span>•</span> Software, systems & simulation</p>
        </div>
        <aside className={styles.focus} aria-label="Current focus"><div className={styles.focusIcon}><FaRobot aria-hidden="true" /></div><p className={styles.eyebrow}>CURRENT CHAPTER</p><h2>Robotics Software<br />Engineer</h2><p>Imitation Machines</p><div className={styles.focusTags}><span>ROS2</span><span>MuJoCo</span><span>Isaac Sim</span></div></aside>
      </header>
      <section className={styles.journey} aria-labelledby="journey-title">
        <div className={styles.sectionHeader}><div><p className={styles.eyebrow}>THE MILESTONES</p><h2 id="journey-title">Learning. Building. Evolving.</h2><p>A timeline of my work, education, and independent projects.</p></div><div className={styles.legend}><span><i data-category="career" />Career</span><span><i data-category="education" />Education</span><span><i data-category="project" />Project</span></div></div>
        <div className={styles.filters} role="group" aria-label="Filter timeline">{[['all', 'All milestones'], ['career', 'Career'], ['education', 'Education'], ['project', 'Projects']].map(([value, label]) => <button key={value} type="button" onClick={() => setFilter(value)} aria-pressed={filter === value}>{label}</button>)}</div>
        <p className={styles.timelineNote} aria-live="polite">{visible.length} milestones · Most recent start date first</p>
        <ol className={styles.timeline}>{visible.map((item, index) => {
          const Icon = item.category === "education" ? FaGraduationCap : item.category === "project" ? FaCode : FaBriefcase;
          return <li key={`${item.title}-${item.period}`} className={styles.milestone} data-category={item.category}>
            <div className={styles.date}><span>{item.period.split(" - ")[0]}</span><small>{String(index + 1).padStart(2, "0")} / {categories[item.category]}</small></div>
            <span className={styles.node}><Icon aria-hidden="true" /></span>
            <article className={styles.card}><div className={styles.cardTop}><span className={styles.category}>{categories[item.category]}</span>{/Present|Current/.test(item.period) && <span className={styles.ongoing}>Ongoing</span>}</div><p className={styles.period}>{item.period}</p><h3>{item.role}</h3>
              <a className={styles.organization} href={item.url} target="_blank" rel="noopener noreferrer">{item.title}<FaArrowRight aria-hidden="true" /><span className={styles.srOnly}> (opens in a new tab)</span></a>
              {descriptions[item.title] && <p className={styles.description}>{descriptions[item.title]}</p>}
              <ul className={styles.tags} aria-label="Skills and highlights">{item.skills.filter((skill) => skill !== "Running").map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </article>
          </li>;
        })}</ol>
        <div className={styles.nextChapter}><span className={styles.spark}>✦</span><h2>Always a student. Always a builder.</h2><p>Continuing to explore the intersection of software engineering, intelligent systems, and the physical world.</p><Link href="/contact"><a>Let’s build something together <FaArrowRight aria-hidden="true" /></a></Link></div>
      </section>
    </main>
  );
}
