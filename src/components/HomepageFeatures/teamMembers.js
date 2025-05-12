import React from 'react';
import './teamMembers.css';
import useBaseUrl from '@docusaurus/useBaseUrl'; 

const team = [
    { name: "Arpita Patel", initial: "AP", role: "DevOps Manager and Enterprise Architect", image: "/img/teamMember1.png"},
    { name: "Benjamin Lee", initial: "B", role: "DevOps Engineer", image: "/img/teamMember2.png" },
    { name: "Trupesh Patel", initial: "T", role: "Research Software Engineer", image: "/img/teamMember3.png"},
    { name: "Manjila Singh", initial: "M", role: "Graduate Research Assistant ", image: "/img/teamMember4.png"},
    { name: "Nia Minor", initial: "NM", role: "Graduate Research Assistant", image: null },
    { name: "Zimuzo Ernest-Eze", initial: "ZE", role: "Undergraduate Student Assistant", image: "/img/teamMember6.png"},
  ];
  
  export default function TeamMembers() {
    return (
      <section className="team-section" id="team-members">
        <h2 className="team-title">Meet DocuHub Team</h2>
        <div className="team-divider"></div>
  
        <div className="team-grid-list">
  {team.map((member, index) => (
    <div key={index} className="team-tile">
      {member.image ? (
        <img src={useBaseUrl(member.image)} alt={member.name} className="tile-avatar" />
      ) : (
        <div className="tile-initials">{member.initial}</div>
      )}
      <div className="tile-text">
        <p className="team-name">{member.name}</p>
        <p className="team-role">{member.role}</p>
      </div>
    </div>
  ))}
</div>

      </section>
    );
  }
