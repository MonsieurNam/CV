import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const links = {
  email: "mailto:namnguyenfnw@gmail.com",
  phone: "tel:+84325235826",
  portfolio: "http://nguyennhatnam.id.vn/",
  linkedin: "https://www.linkedin.com/in/nguyen-nam-893b52280/",
  github: "https://github.com/MonsieurNam",
  scholar: "https://scholar.google.com/citations?user=OtccK6UAAAAJ",
};

const stats = [
  ["3", "peer-reviewed papers"],
  ["8.77", "GPA / 10"],
  ["0.17 GB", "lowest VLM training VRAM"],
  ["50%", "fewer trainable parameters"],
];

const projects = [
  {
    name: "Video Retrieval System",
    role: "Top 1 AI Challenge PTIT 2024",
    year: "2024",
    image: "/img/pixelplane.png",
    url: "https://github.com/MonsieurNam/object_video_retrieval",
    description:
      "A winning content-based video retrieval pipeline using YOLO, SAM, and CLIP with object tracking, temporal reasoning, database construction, and visual report generation.",
    tags: ["YOLO", "SAM", "CLIP", "Temporal Reasoning"],
  },
  {
    name: "SingLoRA-CLIP",
    role: "Primary Researcher & Developer",
    year: "2025",
    image: "/img/deepmirror.png",
    url: "https://github.com/MonsieurNam/singlora_clip",
    description:
      "Ultra-efficient VLM adaptation that replaces LoRA's dual-matrix update with a single symmetric matrix (AA^T), reducing trainable parameters by 50% while preserving few-shot performance.",
    tags: ["VLM", "PEFT", "PyTorch", "Few-shot"],
  },
  {
    name: "Dissecting QLoRA",
    role: "First Author & Primary Researcher",
    year: "2025",
    image: "/img/jetracer.jpg",
    url: "https://github.com/MonsieurNam/QLORA_CLIP_IxT",
    description:
      "A systematic study of static vs. dynamic memory in VLM fine-tuning, showing how gradient checkpointing can reduce peak training VRAM to 0.17 GB.",
    tags: ["QLoRA", "Memory", "Edge AI", "Optimization"],
  },
  {
    name: "Traffic Sign Detection",
    role: "Core Developer",
    year: "2025",
    image: "/img/pdfviewachatbot.png",
    url: "https://www.sciencedirect.com/science/article/pii/S2215098625000837",
    description:
      "A lightweight autonomous-vehicle traffic-sign detector using Grounding DINO and self-distillation on ResNet34 for edge-device deployment.",
    tags: ["ADAS", "Grounding DINO", "ResNet34", "Edge"],
  },
  {
    name: "PIXEL PLANE",
    role: "Core Developer",
    year: "2023",
    image: "/img/pixelplane.png",
    url: "https://github.com/MonsieurNam/PIXEL_PLANE",
    description:
      "A Generative AI Streamlit app that expands 100 source images into 10,000 synthetic autonomous-driving samples with GroundingDINO, SAM, PowerPaint, and Stable Video Diffusion.",
    tags: ["Synthetic Data", "Streamlit", "SAM", "PowerPaint"],
  },
];

const publications = [
  {
    title:
      "Enhancing Semantic Scene Segmentation for Indoor Autonomous Systems Using Advanced Attention-Supported Improved UNet",
    venue: "Signal, Image and Video Processing - Springer",
    year: "2025",
    url: "https://link.springer.com/article/10.1007/s11760-024-03779-w",
  },
  {
    title:
      "Semantic Scene Segmentation for Indoor Autonomous Vision Systems: Leveraging an Enhanced and Efficient U-Net Architecture",
    venue: "Multimedia Tools and Applications - Springer",
    year: "2025",
    url: "https://link.springer.com/article/10.1007/s11042-024-19302-9",
  },
  {
    title: "Grounding DINO and Distillation-Enhanced Model for Traffic Sign Detection",
    venue: "ScienceDirect / Elsevier",
    year: "2025",
    url: "https://www.sciencedirect.com/science/article/pii/S2215098625000837",
  },
];

const skills = [
  "Computer Vision",
  "Object Detection / Tracking",
  "Model Optimization",
  "ADAS",
  "Autonomous Systems",
  "PyTorch",
  "TensorFlow",
  "OpenCV",
  "Hugging Face / PEFT",
  "Python",
  "C++ (Basic)",
  "SQL",
  "Git",
  "Docker",
  "Jetson Nano",
  "Robotics",
];

function App() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <Projects />
      <Publications />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}

function Navigation() {
  return (
    <nav className="nav">
      <a href="#top" className="brand" aria-label="Back to top">
        NNNN
      </a>
      <div className="navLinks">
        <a href="#projects">Projects</a>
        <a href="#research">Research</a>
        <a href="#experience">Mentoring</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="hero section">
      <div className="heroCopy reveal">
        <p className="eyebrow">AI Researcher | Autonomous Systems Enthusiast</p>
        <h1>
          Building the <span>edge of vision</span>, the efficient way.
        </h1>
        <p className="heroText">
          I am Nguyen Ngo Nhat Nam, an AI undergraduate at FPT University Can Tho with a
          research focus on Computer Vision, VLM adaptation, and autonomous systems.
          I am seeking Intern or Fresher AI R&D Engineer roles in ADAS and autonomous driving.
        </p>
        <div className="heroActions">
          <a className="button primary" href={links.email}>
            Get in touch
          </a>
          <a className="button secondary" href="#projects">
            View work
          </a>
        </div>
      </div>
      <div className="portraitWrap reveal delayOne" aria-label="Portrait and availability">
        <div className="orbit one" />
        <div className="orbit two" />
        <img src="/img/me.jpg" alt="Nguyen Ngo Nhat Nam" className="portrait" />
        <div className="statusCard">
          <strong>Available 2026</strong>
          <span>Intern / Fresher AI R&D</span>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats" aria-label="Highlights">
      {stats.map(([value, label]) => (
        <div className="statCard reveal" key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </section>
  );
}

function About() {
  return (
    <section className="section split" id="about">
      <div>
        <p className="eyebrow">Education</p>
        <h2>Research-backed, deployment-minded.</h2>
      </div>
      <div className="panel">
        <h3>FPT University Can Tho</h3>
        <p>Bachelor of Artificial Intelligence, Oct 2023 - Present.</p>
        <p>
          GPA <strong>8.77/10</strong>. Expected Graduation: 2026. Good and Excellent
          Student of the Semester, Fall 2023 - Fall 2025.
        </p>
        <p>
          Core direction: high-performance, lightweight models for edge devices, with
          practical interest in ADAS, autonomous driving, and robotic perception.
        </p>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="sectionHeader">
        <p className="eyebrow">Selected work</p>
        <h2>Projects that compress research into something runnable.</h2>
      </div>
      <div className="projectGrid">
        {projects.map((project, index) => (
          <a
            className="projectCard reveal"
            style={{ animationDelay: `${index * 80}ms` }}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            key={project.name}
          >
            <img src={project.image} alt="" />
            <div className="projectBody">
              <div className="projectMeta">
                <span>{project.role}</span>
                <span>{project.year}</span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Publications() {
  return (
    <section className="section research" id="research">
      <div className="sectionHeader">
        <p className="eyebrow">Publications</p>
        <h2>Three peer-reviewed contributions across Springer and Elsevier.</h2>
      </div>
      <div className="publicationRail">
        {publications.map((paper) => (
          <a className="paper" href={paper.url} target="_blank" rel="noreferrer" key={paper.title}>
            <span>{paper.year}</span>
            <h3>{paper.title}</h3>
            <p>{paper.venue}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section split" id="experience">
      <div>
        <p className="eyebrow">Leadership & Mentoring</p>
        <h2>Helping teams turn moving robots into learning systems.</h2>
      </div>
      <div className="timeline">
        <article>
          <span>2023 - 2025</span>
          <h3>Vietnam Robotic Challenge (VORC)</h3>
          <p>
            Technical mentor for robot design and AI implementation, supporting teams
            through perception, control, and competition execution.
          </p>
        </article>
        <article>
          <span>2024</span>
          <h3>Autonomous Race Competition</h3>
          <p>
            Technical mentor and organizing committee member for an autonomous vehicle
            competition at FPT University Can Tho.
          </p>
        </article>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="sectionHeader">
        <p className="eyebrow">Technical stack</p>
        <h2>From model training to edge deployment.</h2>
      </div>
      <div className="skillCloud">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Let's build edge-ready intelligence together.</h2>
        <p>
          Based in Can Tho, Vietnam. Open to AI R&D roles, research collaborations,
          and autonomous-systems projects.
        </p>
      </div>
      <div className="contactLinks">
        <a href={links.email}>namnguyenfnw@gmail.com</a>
        <a href={links.phone}>+84 325 235 826</a>
        <a href={links.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={links.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={links.scholar} target="_blank" rel="noreferrer">
          Google Scholar
        </a>
      </div>
    </section>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
