import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetailsPage = () => {
  const { serviceId } = useParams();
  const serviceDetails = {
    1: { name: 'Hotel Booking', description: 'Details about hotel booking services.' },
    2: { name: 'Flight Booking', description: 'Details about flight booking services.' },
  };

  const service = serviceDetails[serviceId];

  return (
    <div>
      <header>
        <h2>{service.name}</h2>
      </header>
      <p>{service.description}</p>
    </div>
  );
};

export default ServiceDetailsPage;
