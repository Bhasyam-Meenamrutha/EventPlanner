import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  return (
    <div className="card">
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <Link to={`/service/${service.id}`}>
        <button>View Details</button>
      </Link>
      <Link to={`/book/${service.id}`}>
        <button>Book Now</button>
      </Link>
    </div>
  );
};

export default ServiceCard;
