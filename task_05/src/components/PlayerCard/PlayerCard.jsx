import React, { useEffect, useState } from "react";

import PlayerForm from "../PlayerForm/PlayerForm";
import PlayerCardData from "../PlayerCardData/PlayerCardData";

const PlayerCard = ({ player, index }) => {
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    setShowForm((prevState) =>
      player.data && Object.keys(player.data).length ? false : true
    );
  }, [player.data]);

  return (
    <div className="card">
      {showForm ? (
        <PlayerForm player={player} index={index} />
      ) : (
        <PlayerCardData player={player} />
      )}
    </div>
  );
};

export default PlayerCard;
