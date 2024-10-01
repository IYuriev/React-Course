import React, { useReducer, useEffect } from "react";

import "./style.css";
import PlayerCards from "../PlayerCards.jsx/PlayerCards";
import FieldContext from "../../contexts/FieldContext";
import {
  SET_PLAYER_DATA_ACTION,
  RESET_PLAYER_ACTION,
  SET_BATTLE_BTN_ACTION,
  SET_PLAYERS_REPOS_ACTION,
  SET_PLAYER_SCORE_ACTION,
  SET_RESTART_BTN_ACTION,
  RESET_PLAYERS_ACTION,
  RESET_SCORE_ACTION,
} from "../../actions/field";
import Button from "../Button/Button";
import service from "../../services/service";

const Field = () => {
  const initArgs = {
    players: [
      {
        id: 1,
        username: `mojombo`,
      },
      {
        id: 2,
        username: `defunkt`,
      },
    ],
    showBattleBtn: false,
    showRestartBtn: false,
  };
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case SET_PLAYER_DATA_ACTION:
        return {
          ...state,
          players: state.players.map((player) => {
            if (player.id === payload.id) {
              return { id: player.id };
            }
            return player;
          }),
        };
      case RESET_PLAYER_ACTION:
        return {
          ...state,
          players: state.players.map((player) => {
            if (player.id === payload.id) {
              delete player.username;
              delete player.data;
            }
            return player;
          }),
        };

      case SET_BATTLE_BTN_ACTION:
        return { ...state, showBattleBtn: payload };
      case SET_RESTART_BTN_ACTION:
        return { ...state, showRestartBtn: payload };
      case SET_PLAYERS_REPOS_ACTION:
        return {
          ...state,
          players: state.players.map((player) => {
            if (player.id === payload.id) player.repos = payload.repos;
            return player;
          }),
        };
      case SET_PLAYER_SCORE_ACTION:
        return {
          ...state,
          score: state.players
            .map((player) => {
              const followers = player.data.followers;
              const repos_stars = player.repos.reduce((stars, repo) => {
                return stars + repo.stargazers_count;
              }, 0);
              const score = followers + repos_stars;
              return { id: player.id, score };
            })
            .sort((a, b) => b.score - a.score),
        };
      case RESET_SCORE_ACTION:
        return { ...state, score: [] };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initArgs);

  useEffect(() => {
    console.log("in useEffect", state.players);
  }, [state.players]);

  useEffect(() => {
    const everyPlayerHasData = state.players.every(
      (player) => player.data && Object.keys(player.data).length
    );

    dispatch({ type: SET_BATTLE_BTN_ACTION, payload: everyPlayerHasData });
  }, [state.players]);

  useEffect(() => {
    const everyPlayerHasRepos = state.players.every((player) => player.repos);
    everyPlayerHasRepos && dispatch({ type: SET_PLAYER_SCORE_ACTION });
  }, [state.players]);

  useEffect(() => {
    console.log("in useEffect from state.score", state.score);
    if (state.score && state.score.length) {
      dispatch({ type: SET_BATTLE_BTN_ACTION, payload: false });
      dispatch({ type: SET_RESTART_BTN_ACTION, payload: false });
    }
  }, [state.score]);

  const startBattle = async () => {
    try {
      const validPlayers = state.players.filter(
        (player) => player.username.trim() !== ""
      );

      Promise.all(
        validPlayers.map((player) =>
          service
            .getUserRepos(player.data.login)
            .then((repos) => ({ ...player, repos }))
        )
      ).then((data) => {
        data.forEach((player) =>
          dispatch({ type: SET_PLAYERS_REPOS_ACTION, payload: player })
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  const restartBattle = () => {
    dispatch({ type: RESET_PLAYERS_ACTION });
    dispatch({ type: SET_RESTART_BTN_ACTION, payload: false });
    dispatch({ type: RESET_SCORE_ACTION });
  };

  return (
    <FieldContext.Provider value={{ ...state, dispatch }}>
      <div className="field">
        <h1>Let's Get Ready to Rumble 🥊</h1>
        <PlayerCards />
        {state.showBattleBtn && (
          <Button title={"Battle"} handleClick={startBattle} />
        )}
        {state.showRestartBtn && (
          <Button title={"Restart"} handleClick={restartBattle} />
        )}
      </div>
    </FieldContext.Provider>
  );
};

export default Field;
