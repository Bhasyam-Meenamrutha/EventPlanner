import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ ServiceCard';

const HomePage = () => {
  const services = [
    { id: 1, name: 'Hotel Booking', description: 'Book luxury hotels at great prices.' },
    { id: 2, name: 'Flight Booking', description: 'Find affordable flights to any destination.' },
  ];

  return (
    <div>
      <header>
        <h1>Online Booking System</h1>
      </header>
      <div>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
