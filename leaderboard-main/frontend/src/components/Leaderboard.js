import React from 'react';
import './Leaderboard.css';

const Leaderboard = ({ teams }) => {
  // Sort teams based on score
  const sortedTeams = teams.sort((a, b) => b.score - a.score);

  return (
    <div className="leaderboard">
      <h2 className='leaderboardHeading'>Leaderboard</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th className="header">Rank</th>
            <th className="header-left">Team Name</th>
            <th className="header">Total Games Played</th>
            <th className="header">Score</th>
          </tr>
        </thead>
        <tbody>
          {sortedTeams.map((team, index) => (
            <tr key={team.id} className={index % 2 === 0 ? "even-row" : "odd-row"}>
              <td className="centered">
                {index < 3 ? (
                  index === 0 ? (
                    <img src="https://wrapup.playstation.com/_ipx/w_3840,q_100//assets/trophies/antman-trophy-gold.png?url=/assets/trophies/antman-trophy-gold.png&w=3840&q=100" alt="Badge 1" className="badge" />
                  ) : index === 1 ? (
                    <img src="https://wrapup.playstation.com/_ipx/w_3840,q_100//assets/trophies/antman-trophy-silver.png?url=/assets/trophies/antman-trophy-silver.png&w=3840&q=100" alt="Badge 2" className="badge" />
                  ) : (
                    <img src="https://wrapup.playstation.com/_ipx/w_3840,q_100//assets/trophies/antman-trophy-bronze.png?url=/assets/trophies/antman-trophy-bronze.png&w=3840&q=100" alt="Badge 3" className="badge" />
                  )
                ) : (
                  <span className="rank-number">{index + 1}</span>
                )}
              </td>
              <td className="avatar-column">
                <div className="avatar">
                  <img src={team.avatar}/>
                </div>
                <div className="team-details">
                  <h3>{team.name}</h3>
                </div>
              </td>
              <td className="centered">{team.totalGamesPlayed}</td>
              <td className="centered">{team.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
