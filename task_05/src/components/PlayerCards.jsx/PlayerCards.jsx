import React, { useContext } from "react";

import FieldContext from "../../contexts/FieldContext";
import PlayerCard from "../PlayerCard/PlayerCard";

const PlayerCards = () => {
  const { players } = useContext(FieldContext);

  return (
    <div className="cards">
      {players.map((player, index) => (
        <PlayerCard key={player.id} player={player} index={++index} />
      ))}
    </div>
  );
};

export default PlayerCards;
