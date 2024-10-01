import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { RESET_PLAYER_ACTION } from "../../actions/field";
import FieldContext from "../../contexts/FieldContext";
import Button from "../Button/Button";
import PlayerStat from "../PlayerStat/PlayerStat";
import PlayerScore from "../PlayerScore/PlayerScore";

const PlayerCardData = ({ player }) => {
  const { score, dispatch } = useContext(FieldContext);

  const [showPlayerStat, setShowPlayerStat] = useState(false);
  const [showPlayerStatus, setShowPlayerStatus] = useState(false);

  const resetPlayer = () => {
    dispatch({ type: RESET_PLAYER_ACTION, payload: player });
  };

  useEffect(() => {
    if (score && score.length) {
      setShowPlayerStat(true);
      setShowPlayerStatus(true);
    } else {
      setShowPlayerStat(false);
      setShowPlayerStatus(false);
    }
  }, [score]);

  useEffect(() => {
    if (player.repos && player.repos.length) setShowPlayerStat(true);
  }, [player.repos]);

  return player.data ? (
    <div className="card__data">
      {showPlayerStatus && <PlayerScore player={player} />}

      <img
        className="data__img"
        src={player.data.avatar_url}
        alt={player.data.login}
      />
      <p className="data__title">{player.data.login}</p>

      {showPlayerStat ? (
        <PlayerStat player={player} />
      ) : (
        <Button title={"Reset"} handleClick={resetPlayer} />
      )}
    </div>
  ) : null;
};

export default PlayerCardData;
