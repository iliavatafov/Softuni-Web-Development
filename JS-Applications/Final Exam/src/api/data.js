import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const paths = {
    listOfAllOffers: '/data/offers?sortBy=_createdOn%20desc',
    createNewOffer: '/data/offers',
    details: (id) => '/data/offers/' + id,
    edit: (id) => '/data/offers/' + id,
    delete: (id) => '/data/offers/' + id,
    addApplication: '/data/applications',
    totalApplicationCount: (offerId) => `/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`,
    isUserApplied: (offerId, userId) => `/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

export async function getListOfAllOffers() {
    return api.get(paths.listOfAllOffers);
}

export async function cerate(data) {
    return api.post(paths.createNewOffer, data);
}

export async function getDetails(id) {
    return api.get(paths.details(id));
}

export async function edit(id, data) {
    return api.put(paths.edit(id), data);
}

export async function deleteOffer(id) {
    return api.get(paths.delete(id));
}

export async function addApplication(offerId) {
    return api.post(paths.addApplication, { offerId });
}

export async function applicationsCount(offerId) {
    return api.get(paths.totalApplicationCount(offerId));
}

export async function isUserApplied(offerId, userId) {
    return api.get(paths.isUserApplied(offerId, userId));
}