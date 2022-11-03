import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GameContext } from "../../context/GameContext";

import * as gameService from "../../services/gameService";
import { AddComment } from "./AddComment";
import { CommentCard } from "./CommentCard";

export const Details = () => {
  const [comments, setComments] = useState([]);
  const { gameId } = useParams();
  const { games, onDelete } = useContext(GameContext);

  const game = games.find((x) => x._id === gameId);

  const isOwner =
    JSON.parse(localStorage.getItem("auth"))._id === game._ownerId;

  const isLogedIn = JSON.parse(localStorage.getItem("auth"))._id;

  const onSubmit = (e, comment, setComment) => {
    e.preventDefault();

    if (comment.length < 10) {
      window.alert("The comment should be 10 symbols at least!");
      return;
    }
    gameService.createComment({ gameId, comment });
    setComments((oldComments) => [...oldComments, comment]);
    setComment("");
  };

  useEffect(() => {
    gameService.getComments(gameId).then((result) => setComments(result));
  }, []);

  useEffect(() => {}, [comments]);

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={game.imageUrl} />
          <h1>{game.title}</h1>
          <span className="levels">MaxLevel: {game.maxLevel}</span>
          <p className="type">{game.category}</p>
        </div>
        <p className="text">{game.summary}</p>

        <div className="details-comments">
          <h2>Comments:</h2>
          {comments.length > 0 ? (
            <ul>
              {comments.map((x) => (
                <CommentCard key={x._id} comment={x.comment} />
              ))}
            </ul>
          ) : (
            <p className="no-comment">No comments.</p>
          )}
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
      {!isOwner && isLogedIn && <AddComment onSubmit={onSubmit} />}
    </section>
  );
};
