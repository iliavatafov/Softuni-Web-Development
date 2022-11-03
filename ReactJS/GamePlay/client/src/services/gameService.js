import * as request from "./requester";

const baseUrl = "http://localhost:3030/data/games";

export const getAll = () => request.get(`${baseUrl}`);

export const getOne = (gameId) => request.get(`${baseUrl}/${gameId}`);

export const getLatestGames = () =>
  request.get(`${baseUrl}?sortBy=_createdOn%20desc&distinct=category`);

export const getComments = (gameId) =>
  request.get(
    `http://localhost:3030/data/comments?where=gameId%3D%22${gameId}%22`
  );

export const create = (gameData) => request.post(baseUrl, gameData);

export const createComment = (commentData) =>
  request.post("http://localhost:3030/data/comments", commentData);

export const edit = (gameId, gameData) =>
  request.put(`${baseUrl}/${gameId}`, gameData);

export const deleteGame = (gameId) => request.del(`${baseUrl}/${gameId}`);
