import * as api from './api.js';

export const login = api.login;
export const logout = api.logout;
export const register = api.register;

const endpoints = {
    all: '/data/albums?sortBy=_createdOn%20desc',
    byId: '/data/albums/',
    editAlbum: '/data/albums/',
    deleteEnd: '/data/albums/',
    createAlbum: '/data/albums'
}

export async function getAll(){
    return api.get(endpoints.all)
};

export async function createAlbumRequest(data){
    return api.post(endpoints.createAlbum, data)
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
