import React,{useEffect, useState} from 'react';
import Leaderboard from './components/Leaderboard.js';

const App = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => { //set interval
    // Fetch data from API
    fetch('http://localhost:3001/teams')
      .then(response => response.json())
      .then(data => {
        // Update state with fetched data
        console.log(data)
        setTeams(data.teams);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="main">
      <Leaderboard teams={teams} />
    </div>
  );
};

export default App;
