import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllPets() {
    return api.get('/data/pets?sortBy=_createdOn%20desc&distinct=name');
}

export async function getPet(id) {
    return api.get('/data/pets/' + id);
}

export async function createPet(data) {
    return api.post('/data/pets', data);
}

export async function editPet(id, data) {
    return api.put('/data/pets/' + id, data);
}

export async function deletePet(id) {
    return api.del('/data/pets/' + id);
}

export async function donate(data) {
    return api.post('/data/donation', data);
}

export async function getDonations(petId, userId) {
    return api.get(`/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

export async function getTotalDonations(petId) {
    return api.get(`/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`);
}