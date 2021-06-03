import {
  faFlag,
  faFutbol,
  faMapMarkerAlt,
  faMars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import facebook from "../Icon/Facebook.png";
import twitter from "../Icon/Twitter.png";
import youtube from "../Icon/YouTube.png";

import "./Details.css";

const TeamDetail = () => {
  const { id } = useParams();
  const [team, setTeam] = useState({});
  const {
    strTeam,
    intFormedYear,
    strTeamLogo,
    strCountry,
    strSport,
    strGender,
    strTeamFanart3,
    strDescriptionEN,
  } = team;

  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
      .then((res) => res.json())
      .then((data) => setTeam(data.teams[0]));
  }, [id]);
  return (
    <div>
      <div className="header">
        <img src={strTeamLogo} alt="" />
      </div>
      <div
        className="team-details"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div style={{ paddingLeft: "20px" }}>
          <h1>{strTeam}</h1>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            Founded: {intFormedYear}
          </p>
          <p>
            <FontAwesomeIcon icon={faFlag} />
            Country: {strCountry}
          </p>
          <p>
            <FontAwesomeIcon icon={faFutbol} />
            Sport Type: {strSport}
          </p>
          <p>
            <FontAwesomeIcon icon={faMars} />
            Gender: {strGender}
          </p>
        </div>
        <div>
          <img
            src={strTeamFanart3}
            alt=""
            style={{ width: "300px", height: "200px", padding: "10px" }}
          />
        </div>
      </div>
      <div className="desc">
        <p>{strDescriptionEN}</p>
      </div>
      <div class="icon">
        <a href="/">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="/">
          <img src={twitter} alt="Twitter" />
        </a>
        <a href="/">
          <img src={youtube} alt="" />
        </a>
      </div>
    </div>
  );
};

export default TeamDetail;
