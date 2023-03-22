import * as api from './api.js';

export const login = api.login;
export const logout = api.logout;
export const register = api.register;

const endpoints = {
    all: '/data/shoes?sortBy=_createdOn%20desc',
    byId: '/data/shoes/',
    editAlbum: '/data/shoes/',
    deleteEnd: '/data/shoes/',
    createAlbum: '/data/shoes'
}

export async function getAll(){
    return api.get(endpoints.all)
};

export async function createShoeRequest(data){
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
