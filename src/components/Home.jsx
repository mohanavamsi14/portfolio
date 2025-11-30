// components/Home.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";              // ✅ SAME folder
import profileImage from "./profileimage.jpg"; // ✅ SAME folder

export default function Home() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <div className="app">
      <div
        className="cursor-glow"
        style={{ left: cursor.x, top: cursor.y }}
      />

      <div className="page">
        {/* HERO CARD */}
        <section className="hero-card">
          <div className="hero-overlay" />

          <div className="hero-content">
            <div className="hero-avatar">
              <img src={profileImage} alt="Mohana Vamsi" />
            </div>

            <p className="hero-label">Software Intern</p>

            <h1 className="hero-heading">Mohana Vamsi Chennamsetti</h1>

            <p className="hero-sub">
              Aspiring Software Engineering Intern with strong foundations in
              data structures and algorithms, computer architecture, and
              compiler design. Eager to contribute to high-performance systems
              and learn from cutting-edge projects in a fast-paced engineering
              team.
            </p>

            <div className="hero-buttons">
              <Link to="/resume" className="btn primary">
                View Resume
              </Link>
              <Link to="/certificates" className="btn primary">
                certificates
              </Link>
              <a href="mailto:2300033095cseh1@gmail.com" className="btn ghost">
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section-card">
          <h2>About</h2>
          <p>
            I&apos;m a Computer Science & Engineering student at KL University,
            passionate about building reliable software systems. I enjoy working
            on full-stack applications, high-performance backends, and AI-driven
            tools, with a strong interest in computer architecture and compiler
            design.
          </p>
        </section>

        {/* SKILLS */}
        <section className="section-card">
          <h2>Skills</h2>
          <ul className="pill-list">
            <li>Java</li>
            <li>Python</li>
            <li>C</li>
            <li>Full Stack Application Development</li>
            <li>Computer Architecture</li>
            <li>Compiler Design</li>
            <li>React &amp; Spring Boot</li>
            <li>MySQL</li>
          </ul>
        </section>

        {/* PROJECTS */}
        <section className="section-card">
          <h2>Projects</h2>

          <div className="project-item">
            <h3>Blood Banking System</h3>
            <p>
              Designed a blood banking system for managing donor data, blood
              units, and transfusion safety. Built a user-friendly and optimised
              platform improving hospital–donor data accessibility.
            </p>
            <span className="tag">React JS • CSS • Spring Boot • MySQL</span>
          </div>

          <div className="project-item">
            <h3>Student Information System</h3>
            <p>
              Implemented a student record system using dynamic memory
              allocation and linked lists to support attendance, class
              management, grading, and centralized student data.
            </p>
            <span className="tag">Java</span>
          </div>

          <div className="project-item">
            <h3>Real-Time Vehicle Detection System</h3>
            <p>
              Developed an AI-based real-time vehicle detection system capable of identifying vehicle types such as cars, trucks, buses, motorcycles, and bicycles.
              Used a curated dataset with preprocessing and augmentation to train a model for high-accuracy vehicle classification and detection.
            </p>
            <span className="tag">
              Python • Computer Vision • Deep Learning
            </span>
          </div>

          <div className="project-item">
            <h3>CCTV Incident Analysis Agent</h3>
            <p>
              Developed an AI system to detect incidents in CCTV footage using
              advanced computer vision models, with LLM-based automatic timeline
              and summary generation.
            </p>
            <span className="tag">
              Python • Deep Learning • Computer Vision • LLMs
            </span>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section-card">
          <h2>Education</h2>
          <div className="project-item">
            <h3>KL University</h3>
            <p>B.Tech in Computer Science and Engineering (2023 – 2027)</p>
            <span className="tag">Vijayawada</span>
          </div>
          <div className="project-item">
            <h3>Sri Chaitanya Educational Institution</h3>
            <p>Intermediate (MPC) (2021 – 2023)</p>
            <span className="tag">Vijayawada</span>
          </div>
          <div className="project-item">
            <h3>Sri Chaitanya High School</h3>
            <p>SSC (10th standard) (2020 – 2021)</p>
            <span className="tag">Repalle</span>
          </div>
        </section>

        {/* CONTACT & LINKS */}
        <section className="section-card">
          <h2>Contact</h2>
          <p>
            1-26-5, Vennela Residency, Tenali, 522201
            <br />
            Phone: +91 9132852852
            <br />
            Email:{" "}
            <a href="mailto:2300033095cseh1@gmail.com" className="inline-link">
              2300033095cseh1@gmail.com
            </a>
          </p>

          <div className="contact-actions">
            <a href="mailto:2300033095cseh1@gmail.com" className="btn primary">
              Say Hello 👋
            </a>
            <div className="links">
              <a
                href="https://www.linkedin.com/in/chennamsettimohan14"
                target="_blank"
                rel="noopener noreferrer"
                className="link-pill"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/mohanavamsi14"
                target="_blank"
                rel="noopener noreferrer"
                className="link-pill"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
