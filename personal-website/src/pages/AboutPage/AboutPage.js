﻿import React from 'react';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
    return (
        <div className="container">
            <Helmet>
                <title>Mark J. Hogan - Professional Summary</title>
            </Helmet>
            <h1>Professional Summary</h1>
            <p>
                Results-driven Senior Software Engineer with over 20 years of experience in IT, specializing in software development, 
                design, architecture, and Agile methodologies. Demonstrated expertise in leading engineering teams, managing complex projects, 
                and driving innovative solutions. Proven track record of achieving zero-outage releases, significantly enhancing product stability 
                and client satisfaction. Proficient in Microsoft .NET, REST/SOAP web services, real-time development, and utilizing CoPilot and AI 
                tools to optimize code quality and efficiency. Adept at designing and architecting robust software systems, and monitoring performance 
                to ensure continuous improvement. Dual Bachelor's degrees in Computer Science and Mathematics. Committed to fostering a culture of 
                continuous learning and collaboration, delivering high-quality, client-focused solutions.
            </p>

            <h2>Core Skills</h2>
            <ul>
                <li><strong>Technical Skills:</strong> Microsoft .NET (C#, VB, C++), REST/SOAP Web Service Development, ASP.NET, Microsoft SQL Server, T-SQL, Scripting, Real-Time Development, Multithreaded Development, Microsoft Windows API, CoPilot and AI Tools</li>
                <li><strong>Soft Skills:</strong> Team Oriented, Solid Communicator, Problem Resolution, Quality Assurance, Source Control, Git Flow</li>
            </ul>

            <h2>Selected Accomplishments</h2>
            <ul>
                <li>Led the design and implementation of a Backend for Frontend (BFF) project, transitioning a legacy WPF product to REACT and C# .NET Core, enabling a cross-platform product and reducing client cancellations by 4%.</li>
                <li>Spearheaded a quality initiative that achieved the first two consecutive production releases with zero "Severity 1" defects, improving product stability.</li>
                <li>Automated 100% hands-free system builds for Honeywell Experion and Yokogawa CENTUM VP systems, reducing build times by 50%-75%.</li>
                <li>Reduced system refresh cycles from two months to two weeks with Texaco’s Managed Desktop Solution.</li>
                <li>Implemented a plant-wide Real-Time SCADA System and Historian using Aspentech CIM/21, achieving 100% visibility of real-time data.</li>
            </ul>

            <h2>Professional Experience</h2>
            <h3>Accruent | New Orleans, LA | September 2018 – December 2024</h3>
            <ul>
                <li>Engaged in all aspects of project development, encompassing design, architecture, coding, unit testing, QA testing, and CI/CD pipeline management.</li>
                <li>Delivered a product prototype of a Backend for Frontend (BFF) project within five months, transitioning a legacy WPF product to REACT and C# .NET Core.</li>
                <li>Collaborated with the support team to perform root cause analysis on customer issues, resolving technical debt and bugs.</li>
                <li>Led a team through backlog refinement, resolving over 150 issues, improving efficiency by 17%, and streamlining processes.</li>
                <li>Mentored a diverse engineering team of 9 members across different countries and time zones, fostering collaboration and skill development.</li>
            </ul>

            <h3>General Dynamics Information Technology | New Orleans, LA | February 2016 - June 2018</h3>
            <ul>
                <li>Automated release management processes using C#/TFS APIs, Python, JSON, Jenkins/Groovy, and Nexus.</li>
                <li>Implemented custom TFS report and time sheet management applications, streamlining internal processes.</li>
            </ul>

            <h3>System Management Technologies, Inc. | New Orleans, LA | March 1999 – February 2016</h3>
            <ul>
                <li>Developed IT Works software management solution, automating system builds and reducing technician effort significantly.</li>
            </ul>

            <h3>Texaco, Inc. | Wilmington, CA | January 1997 – March 1999</h3>
            <ul>
                <li>Implemented Texaco Refining and Marketing’s Managed Desktop Solution, reducing system refresh cycles to two weeks.</li>
                <li>Designed a Distributed Control System (DCS) for real-time data transfer and plant-wide integration.</li>
            </ul>

            <h2>Education</h2>
            <ul>
                <li>Bachelor of Science in Mathematics – Nicholls State University – Thibodaux, LA</li>
                <li>Bachelor of Science in Computer Science – Nicholls State University – Thibodaux, LA</li>
            </ul>
        </div>
    );
};

export default AboutPage;