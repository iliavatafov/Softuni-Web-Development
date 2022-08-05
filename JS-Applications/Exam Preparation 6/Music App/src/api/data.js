import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const paths = {
    allAlbumst: '/data/albums?sortBy=_createdOn%20desc&distinct=name',
    create: '/data/albums',
    singleAlbum: (id) => '/data/albums/' + id,
    edit: (id) => '/data/albums/' + id,
    search: (query) => `/data/albums?where=name%20LIKE%20%22${query}%22`,
    delete: (id) => `/data/albums/${id}`
}

export async function getAllAlbums() {
    return api.get(paths.allAlbumst);
}

export async function getSingleAlbum(id) {
    return api.get(paths.singleAlbum(id));
}

export async function create(data) {
    return api.post(paths.create, data);
}

export async function edit(id, data) {
    return api.put(paths.edit(id), data);
}

export async function deleteArticle(id) {
    return api.del(paths.delete(id));
}

export async function search(query) {
    return api.get(paths.search(query));
}