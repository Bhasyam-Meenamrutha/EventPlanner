import React from 'react';

const BookingList = () => {
  const bookings = [
    { id: 1, name: 'Hotel Booking', date: '2024-12-10' },
    { id: 2, name: 'Flight Booking', date: '2024-12-15' },
  ];

  return (
    <div>
      {bookings.map((booking) => (
        <div className="card" key={booking.id}>
          <h3>{booking.name}</h3>
          <p>Date: {booking.date}</p>
          <button>Edit</button>
          <button>Cancel</button>
        </div>
      ))}
    </div>
  );
};

export default BookingList;
