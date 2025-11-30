// components/Resume.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";   // ✅ SAME folder

export default function Resume() {
  return (
    <div className="resume-page">
      <div className="resume-top-bar">
        <Link to="/" className="btn ghost">
          ← Back to Portfolio
        </Link>
        <a
          href="/mohan_resume(visa).pdf"
          className="btn primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in New Tab
        </a>
        <a
          href="/mohan_resume(visa).pdf"
          className="btn ghost"
          download="Mohana_Vamsi_Resume.pdf"
        >
          Download PDF
        </a>
      </div>

      <div className="resume-frame">
        <iframe
          src="/mohan_resume(visa).pdf"
          title="Mohana Vamsi Resume"
          className="resume-iframe"
        />
      </div>
    </div>
  );
}
