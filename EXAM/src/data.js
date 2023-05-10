import * as api from './api.js';

export const login = api.login;
export const logout = api.logout;
export const register = api.register;

const endpoints = {
    all: '/data/fruits?sortBy=_createdOn%20desc',
    create: '/data/fruits',
    byId: '/data/fruits/',
    editAlbum: '/data/fruits/',
    deleteEnd: '/data/fruits/',
    search: (query) => `/data/fruits?where=name%20LIKE%20%22${query}%22`,
}

export async function search(query){
    return api.get(endpoints.search(query))
}

export async function getAll(){
    return api.get(endpoints.all)
};

export async function createRequest(data){
    return api.post(endpoints.create, data)
}

export async function getById(id){
    return api.get(endpoints.byId + id)
};

export async function editItem(id, data){
    return api.put(endpoints.editAlbum + id, data)
};

export async function deleteItem(id){
    return api.del(endpoints.deleteEnd + id)
};


