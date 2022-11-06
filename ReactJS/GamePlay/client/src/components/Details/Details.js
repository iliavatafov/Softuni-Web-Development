import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GameContext } from "../../context/GameContext";

import * as gameService from "../../services/gameService";
import { AddComment } from "./AddComment";
import { CommentCard } from "./CommentCard";

export const Details = () => {
  const { gameId } = useParams();
  const { onDelete, games } = useContext(GameContext);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    gameService.getComments(gameId).then((result) => {
      setComments(result);
    });
  }, []);

  const currentGame = games.filter((x) => x._id === gameId)[0];

  const isOwner =
    JSON.parse(localStorage.getItem("auth"))._id === currentGame._ownerId;

  const isLogedIn = JSON.parse(localStorage.getItem("auth"))._id;

  const addCommentHandler = (e, comment) => {
    e.preventDefault();

    if (comment.length < 10) {
      window.alert("The comment should be 10 symbols at least!");
      return;
    }
    gameService.createComment({ gameId, comment }).then((result) => {
      setComments((oldState) => [...oldState, result]);
    });
  };

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={currentGame.imageUrl} />
          <h1>{currentGame.title}</h1>
          <span className="levels">MaxLevel: {currentGame.maxLevel}</span>
          <p className="type">{currentGame.category}</p>
        </div>
        <p className="text">{currentGame.summary}</p>

        <div className="details-comments">
          <h2>Comments:</h2>

          <ul>
            {comments?.map((x) => (
              <CommentCard key={x._id} comment={x.comment} />
            ))}
          </ul>

          {!comments && <p className="no-comment">No comments.</p>}
        </div>

        {isOwner && (
          <div className="buttons">
            <Link to={`/games/${gameId}/edit`} className="button">
              Edit
            </Link>
            <Link to="/" onClick={() => onDelete(gameId)} className="button">
              Delete
            </Link>
          </div>
        )}
      </div>
      {!isOwner && isLogedIn && <AddComment onSubmit={addCommentHandler} />}
    </section>
  );
};
