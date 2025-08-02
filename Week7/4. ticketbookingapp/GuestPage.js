import React from 'react';

function GuestPage() {
  return (
    <div>
      <h2>Welcome Guest!</h2>
      <p>You can browse available flight details but cannot book tickets.</p>
      <ul>
        <li>Flight 101 - Mumbai to Delhi</li>
        <li>Flight 202 - Bangalore to Kolkata</li>
        <li>Flight 303 - Hyderabad to Chennai</li>
      </ul>
    </div>
  );
}

export default GuestPage;
