import React from 'react';
import styles from '../styles/ServiceCard.module.css';

const ServiceCard = ({ title, description, icon }) => (
  <div className={styles.serviceCard}>
    <div className={styles.serviceIcon}>
      <img src={icon} alt={title} />
    </div>
    <div className={styles.serviceInfo}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default ServiceCard;
