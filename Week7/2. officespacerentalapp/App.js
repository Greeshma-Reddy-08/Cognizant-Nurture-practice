// src/App.js
import React from 'react';

function App() {
  // Single office data (object)
  const office1 = {
    name: "Skyline Tower",
    rent: 45000,
    address: "123 MG Road, Bangalore",
    image: "https://via.placeholder.com/300x200?text=Office+1"
  };

  // List of office spaces (array of objects)
  const officeList = [
    {
      name: "Tech Park",
      rent: 75000,
      address: "Electronic City, Bangalore",
      image: "https://via.placeholder.com/300x200?text=Office+2"
    },
    {
      name: "Startup Hub",
      rent: 55000,
      address: "Koramangala, Bangalore",
      image: "https://via.placeholder.com/300x200?text=Office+3"
    },
    {
      name: "Innovation Centre",
      rent: 95000,
      address: "Whitefield, Bangalore",
      image: "https://via.placeholder.com/300x200?text=Office+4"
    }
  ];

  return (
    <div>
      {/* Heading of the page */}
      <h1 style={{ textAlign: "center", color: "navy" }}>Office Space Rental App</h1>

      {/* Display single office info */}
      <div style={{ margin: "20px", padding: "10px", border: "1px solid #ccc" }}>
        <h2>{office1.name}</h2>
        <img src={office1.image} alt={office1.name} />
        <p><strong>Address:</strong> {office1.address}</p>
        <p>
          <strong>Rent:</strong>{" "}
          <span style={{ color: office1.rent < 60000 ? "red" : "green" }}>
            ₹{office1.rent}
          </span>
        </p>
      </div>

      {/* Display list of offices */}
      <h2 style={{ marginLeft: "20px" }}>More Office Spaces:</h2>
      {officeList.map((office, index) => (
        <div key={index} style={{ margin: "20px", padding: "10px", border: "1px solid #ccc" }}>
          <h3>{office.name}</h3>
          <img src={office.image} alt={office.name} />
          <p><strong>Address:</strong> {office.address}</p>
          <p>
            <strong>Rent:</strong>{" "}
            <span style={{ color: office.rent < 60000 ? "red" : "green" }}>
              ₹{office.rent}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
