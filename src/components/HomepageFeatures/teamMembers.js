import React from "react";
import "./teamMembers.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useColorMode } from "@docusaurus/theme-common";

const team = [
  {
    name: "Arpita Patel",
    role: "DevOps Manager and Enterprise Architect",
    image: "/img/teamMember1.png",
    linkedin: "https://www.linkedin.com/in/example-arpita"
  },
  {
    name: "Benjamin Lee",
    role: "DevOps Engineer",
    image: "/img/teamMember2.png",
    linkedin: "https://www.linkedin.com/in/example-benjamin"
  },
  {
    name: "Trupesh Patel",
    role: "Research Software Engineer",
    image: "/img/teamMember3.png",
    linkedin: "https://www.linkedin.com/in/example-trupesh"
  },
  {
    name: "Manjila Singh",
    role: "Graduate Research Assistant",
    image: "/img/teamMember4.png",
    linkedin: "https://www.linkedin.com/in/example-manjila"
  },
  {
    name: "Nia Minor",
    role: "Graduate Research Assistant",
    image: null,
    initial: "NM",
    linkedin: "https://www.linkedin.com/in/example-nia"
  },
  {
    name: "Zimuzo Ernest-Eze",
    role: "Undergraduate Student Assistant",
    image: "/img/teamMember6.png",
    linkedin: "https://www.linkedin.com/in/example-zimuzo"
  }
];

export default function TeamMembers() {
  return (
    <section className="team-section">
      <h2 className="team-title">Meet DocuHub Team</h2>
      <div className="team-divider"></div>

      <div className="team-grid-list">
        {team.map((member, index) => (
          <div className="profile-card" key={index}>
            <div className="profile-img-wrapper">
              {member.image ? (
                <img
                  src={useBaseUrl(member.image)}
                  alt={member.name}
                  className="profile-img"
                />
              ) : (
                <div className="profile-placeholder">{member.initial}</div>
              )}
            </div>

            <div className="card-content">
              <h3 className="profile-name">{member.name}</h3>
              <p className="profile-role">{member.role}</p>

              {/* LINKEDIN BUTTON WITH IMAGE */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-btn"
              >
                <img
                  src="https://logospng.org/download/linkedin/logo-linkedin-icon-1536.png"
                  alt="LinkedIn"
                  className="linkedin-icon-img"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
