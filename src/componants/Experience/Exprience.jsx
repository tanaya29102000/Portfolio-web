import React from 'react';
import '../Experience/Experience.css'; // Importing the CSS file

const Experience = () => {
  return (
    <div className="experience-container">
      <h1>Experience</h1>
      <div className="experience-card">
        <h2>Microsoft SQL Developer Intern</h2>
        <h3>Ocean Software Technologies, Nagpur</h3>
        <p><strong>Duration:</strong> [Start Date] - [End Date]</p>
        <p>
          During my internship at Ocean Software Technologies, I gained hands-on experience with Microsoft SQL Server.
          My role involved working on various aspects of database management and development. Here are some highlights of my experience:
        </p>
        <ul>
          <li><strong>SQL Server:</strong> Proficient in using SQL Server for database management and development.</li>
          <li><strong>Triggers:</strong> Developed and managed database triggers to automate tasks and maintain data integrity.</li>
          <li><strong>Joins:</strong> Utilized SQL joins for complex queries and data retrieval from multiple tables.</li>
          <li><strong>Normalization:</strong> Applied normalization techniques to design efficient and scalable databases.</li>
          <li><strong>Stored Procedures:</strong> Created and optimized stored procedures to streamline database operations and enhance performance.</li>
          <li><strong>Views:</strong> Designed and implemented database views to simplify data access and reporting.</li>
        </ul>
        <h4>Project:</h4>
        <p><strong>Agent Cash Collection Mobile App:</strong> Contributed to a live project involving extensive database design and implementation. This project focused on developing a mobile application for cash collection, which required intricate database structuring and management.</p>
        <h4>Skills:</h4>
        <ul>
          <li>SQL Server</li>
          <li>Triggers</li>
          <li>Joins</li>
          <li>Normalization</li>
          <li>Stored Procedures</li>
          <li>Views</li>
        </ul>
        <h4>Key Achievements:</h4>
        <ul>
          <li>Successfully designed and implemented a comprehensive database schema for the Agent Cash Collection Mobile App.</li>
          <li>Enhanced database performance through optimization of stored procedures and efficient query design.</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
