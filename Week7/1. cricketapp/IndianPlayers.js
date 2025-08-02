// src/IndianPlayers.js
import React from 'react';

const IndianPlayers = () => {
  const oddTeam = ["Virat", "Dhoni", "Gill", "Shami", "Jadeja"];
  const evenTeam = ["Rohit", "Rahul", "Hardik", "Bumrah", "Pant", "Ashwin"];

  const [odd1, odd2, ...restOdd] = oddTeam;
  const [even1, even2, ...restEven] = evenTeam;

  const T20 = ["Virat", "Rohit", "Rahul"];
  const Ranji = ["Pujara", "Iyer", "Jaiswal"];
  const mergedPlayers = [...T20, ...Ranji];

  return (
    <div>
      <h2>Odd Team Players:</h2>
      <ul>
        {[odd1, odd2, ...restOdd].map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <h2>Even Team Players:</h2>
      <ul>
        {[even1, even2, ...restEven].map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <h2>Merged T20 & Ranji Players:</h2>
      <ul>
        {mergedPlayers.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
