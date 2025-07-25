import React from 'react';
import CohortDetails from './Components/CohortDetails';

function App() {
  return (
    <div>
      <CohortDetails 
        name="Cohort Alpha" 
        technology="ReactJS" 
        startDate="2025-07-01" 
        status="ongoing" 
      />
      <CohortDetails 
        name="Cohort Beta" 
        technology="Angular" 
        startDate="2025-06-01" 
        status="completed" 
      />
    </div>
  );
}

export default App;
