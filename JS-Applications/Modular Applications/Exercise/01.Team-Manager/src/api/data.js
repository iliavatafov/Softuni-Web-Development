import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
    teams: '/data/teams',
    members: '/data/members?where=status%3D%22member%22',
    teamDetails: '/data/teams/',
    membership: (id) => `/data/members?where=teamId%3D%22${id}%22&load=user%3D_ownerId%3Ausers`,
    memberRequest: '/data/members/',
    approve: '/data/members/',
    delete: '/data/members/'
}

export async function getAllTeams() {
    return api.get(endpoints.teams);
}

export async function getAllMembers() {
    return api.get(endpoints.members);
}

export async function getTeamDetails(id) {
    return api.get(endpoints.teamDetails + id);
}

export async function getMembershipData(id) {
    return api.get(endpoints.membership(id));
}

export async function joinTeam(teamId) {
    return api.post(endpoints.memberRequest, { teamId: teamId });
}

export async function approveRequest(id, data) {
    return api.put(endpoints.approve + id, data)
}

export async function onDelete(id) {
    return api.del(endpoints.delete + id)
}