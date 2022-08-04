import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const paths = {
    allGamesPath: '/data/games?sortBy=_createdOn%20desc',
    homePath: '/data/games?sortBy=_createdOn%20desc&distinct=category',
    createGamePath: '/data/games',
    edintGamePath: (id) => '/data/games/' + id,
    detailsGamePath: (id) => '/data/games/' + id,
    deleteGamePath: (id) => '/data/games/' + id,
    allComentsPath: (gameId) => `/data/comments?where=gameId%3D%22${gameId}%22`,
    createNewComentPath: '/data/comments'
}

export async function getAllGames() {
    return api.get(paths.allGamesPath);
}

export async function getHomeGames() {
    return api.get(paths.homePath);
}

export async function createGame(data) {
    return api.post(paths.createGamePath, data);
}

export async function getGameDetails(id) {
    return api.get(paths.detailsGamePath(id));
}

export async function editGame(id, data) {
    return api.put(paths.edintGamePath(id), data);
}

export async function deleteGame(id) {
    return api.del(paths.deleteGamePath(id));
}

export async function getAllComments(id) {
    return api.get(paths.allComentsPath(id));
}

export async function createComment(data) {
    return api.post(paths.createNewComentPath, data);
}