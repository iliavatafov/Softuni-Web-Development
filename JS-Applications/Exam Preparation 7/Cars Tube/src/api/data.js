import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const paths = {
    allListOfAdds: '/data/cars?sortBy=_createdOn%20desc',
    create: '/data/cars',
    edit: (id) => '/data/cars/' + id,
    details: (id) => '/data/cars/' + id,
    delete: (id) => '/data/cars/' + id,
    myListing: (userId) => `/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    filter: (query) => `/data/cars?where=year%3D${query}`
}

export async function getAllList() {
    return api.get(paths.allListOfAdds);
}

export async function getMyList(userId) {
    return api.get(paths.myListing(userId));
}

export async function create(data) {
    return api.post(paths.create, data);
}

export async function edit(id, data) {
    return api.put(paths.edit(id), data);
}

export async function getDetails(id) {
    return api.get(paths.details(id));
}

export async function deleteCar(id) {
    return api.del(paths.delete(id));
}

export async function filter(query) {
    return api.get(paths.filter(query));
}