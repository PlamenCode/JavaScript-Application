import * as api from './api.js';

export const login = api.login;
export const logout = api.logout;
export const register = api.register;

const endpoints = {
    all: '/data/offers?sortBy=_createdOn%20desc',
    byId: '/data/offers/',
    edit: '/data/offers/',
    delete: '/data/offers/',
    create: '/data/offers'
}

export async function getAll(){
    return api.get(endpoints.all)
};

export async function createOffer(data){
    return api.post(endpoints.create, data)
}

export async function getById(id){
    return api.get(endpoints.byId + id)
};

export async function editItem(id, data){
    return api.put(endpoints.edit + id, data)
};

export async function deleteItem(id){
    return api.del(endpoints.delete + id)
};
