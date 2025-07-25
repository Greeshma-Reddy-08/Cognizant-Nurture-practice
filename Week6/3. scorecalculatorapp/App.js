import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore 
        name="Greeshma" 
        school="Johnson Grammar School" 
        total={450} 
        goal={500} 
      />
    </div>
  );
}

export default App;
