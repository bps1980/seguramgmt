import React from 'react';
import ServiceCard from '../components/ServiceCard';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import styles from '../styles/Services.module.css';

const services = [
    {
        title: "Frontend Development",
        description: "React, Redux Toolkit, Webpack, CSS, Jest, and more for building scalable and dynamic user interfaces.",
        icon: "/assets/frontend.jpg"  // Correct path
      },
      {
        title: "Backend Development",
        description: "Node.js, NestJS, PostgreSQL, TypeORM, RESTful APIs, and GraphQL for building robust server-side applications.",
        icon: "/assets/backend.jpg",  // Correct path
      },
      {
        title: "DevOps & Infrastructure",
        description: "AWS, Docker, Kubernetes, GitHub Actions, Jenkins for seamless deployment, monitoring, and scaling.",
        icon: "/assets/DevOps.jpg",  // Correct path
      },
      {
        title: "Security",
        description: "TLS/SSL, AES-256 encryption, Cloudflare, Snyk, and more for ensuring top-notch security.",
        icon: "/assets/security.jpg",  // Correct path
      },
      {
        title: "Scalability & Performance",
        description: "AWS ELB, CloudFront CDN, Auto-scaling, Database Optimization for handling large-scale applications.",
        icon: "/assets/scalability_performance.jpg",  // Correct path
      },
      {
        title: "UX/UI Design",
        description: "Figma, InVision, Material UI, A/B Testing with Optimizely for crafting intuitive and beautiful designs.",
        icon: "/assets/UX_UI.jpg",  // Correct path
      },
      {
        title: "Testing and Quality Assurance",
        description: "Cypress, JMeter, SonarQube for comprehensive testing and maintaining code quality.",
        icon: "/assets/Testing_QA.jpg",  // Correct path
      },
      {
        title: "Analytics & Reporting",
        description: "Google Analytics, Mixpanel, Tableau, Power BI for data-driven insights and reporting.",
        icon: "/assets/Analytics_Reporting.jpg",  // Correct path
      },
      {
        title: "Legal & Compliance",
        description: "OneTrust, DocuSign, GDPR compliance, and regular policy updates to stay legally sound.",
        icon: "/assets/Legal_Compliance.jpg",  // Correct path
      },
      {
        title: "Support & Community",
        description: "Zendesk, Freshdesk, Discourse, Confluence for top-notch client support and community engagement.",
        icon: "/assets/Support_Community.jpg",  // Correct path
      },
    ];

const Services = () => (
  <div>
    <Header />
    <NavBar />
    <div className={styles.container}>
      <h2>Our Services</h2>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Services;
