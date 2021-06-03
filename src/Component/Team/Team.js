import React from "react";

import { useHistory } from 'react-router-dom';
import "./Team.css";

const Team = (props) => {
  const { strTeam, strLeague, strTeamBadge, strLeague2 , idTeam} = props.team;
  const history = useHistory();
  const handleClick = (id) => {
      const url = `/team/${id}`;
      history.push(url);
  }
  return (
    <div className="container">
      <div className="card">
        <img className="image" src={strTeamBadge} alt=""></img>
       <div class ="card2" >
       <h1> {strTeam} </h1>
        <p>{strLeague}</p>
        <p>{strLeague2}</p>
        <button  onClick={() => handleClick(idTeam)}>Show Detail</button>
        
       
       </div>
      </div>
    </div>
  );
};

export default Team;