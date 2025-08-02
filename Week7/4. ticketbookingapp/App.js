import React, { useState } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let pageToRender;
  if (isLoggedIn) {
    pageToRender = <UserPage />;
  } else {
    pageToRender = <GuestPage />;
  }

  return (
    <div className="App">
      <h1>Ticket Booking App</h1>
      {pageToRender}
      <br />
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
}

export default App;
