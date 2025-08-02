// src/ListOfPlayers.js
import React from 'react';

const ListOfPlayers = () => {
  const players = [
    { name: "Virat", score: 85 },
    { name: "Rohit", score: 92 },
    { name: "Dhoni", score: 60 },
    { name: "Rahul", score: 77 },
    { name: "Hardik", score: 50 },
    { name: "Bumrah", score: 30 },
    { name: "Shami", score: 65 },
    { name: "Gill", score: 95 },
    { name: "Pant", score: 45 },
    { name: "Ashwin", score: 73 },
    { name: "Jadeja", score: 80 },
  ];

  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players:</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
      <h3>Players with score below 70:</h3>
      <ul>
        {below70.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfPlayers;
