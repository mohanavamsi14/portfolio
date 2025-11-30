// components/Certificates.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const CERTIFICATES = [
  {
    id: 1,
    title: "Oracle Certificate",
    issuer: "Oracle University",
    year: "2025",
    file: "/oracle(eCertificate).pdf",
  },
  {
    id: 2,
    title: "AIML Techinal Internship",
    issuer: "EDU Skills",
    year: "2025",
    file: "/aiml_techinical_internship.pdf",
  },
  {
    id: 3,
    title: "Linguaskill",
    issuer: "Cambridge University",
    year: "2024",
    file: "/Linguaskill_cambridge.pdf",
  },
  {
    id: 4,
    title: "Social Internship",
    issuer: "KL University",
    year: "2024",
    file: "/SIL_CRETIFICATE.pdf",
  },
  // ➜ Add more here, keep file paths matching files in /public
];

export default function Certificates() {
  const [selected, setSelected] = useState(CERTIFICATES[0]);

  return (
    <div className="resume-page cert-page">
      <div className="resume-top-bar">
        <Link to="/" className="btn ghost">
          ← Back to Portfolio
        </Link>
        <a
          href={selected.file}
          target="_blank"
          rel="noopener noreferrer"
          className="btn primary"
          >
          Open in New Tab
        </a>

        <a
          href={selected.file}
          download
          className="btn ghost"
          >
          Download
        </a>

      </div>

      <div className="cert-layout">
        {/* LEFT: list */}
        <div className="cert-list">
          {CERTIFICATES.map((cert) => (
            <button
              key={cert.id}
              className={
                "cert-item" + (selected.id === cert.id ? " active" : "")
              }
              onClick={() => setSelected(cert)}
            >
              <div className="cert-title">{cert.title}</div>
              <div className="cert-meta">
                <span>{cert.issuer}</span>
                <span className="cert-dot">•</span>
                <span>{cert.year}</span>
              </div>
            </button>
          ))}
        </div>

        {/* RIGHT: viewer */}
        <div className="resume-frame cert-viewer">
          <div className="cert-viewer-top">
            <div className="cert-viewer-title">{selected.title}</div>
            <div className="cert-viewer-actions">
              
            </div>
          </div>

          <iframe
            src={selected.file}
            title={selected.title}
            className="resume-iframe"
          />
        </div>
      </div>
    </div>
  );
}
