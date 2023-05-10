import * as api from './api.js';

export const login = api.login;
export const logout = api.logout;
export const register = api.register;

const endpoints = {
    all: '/data/posts?sortBy=_createdOn%20desc',
    byId: '/data/posts/',
    editAlbum: '/data/posts/',
    deleteEnd: '/data/posts/',
    createAlbum: '/data/posts',
    getAllUserPosts: (userId) => `/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    donate: '/data/donations',
    getDonations: (postId) => `/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`,
    donateBtnShow: (postId, userId) => `/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

export async function showDonateBtn(postId, userId){
    return api.get(endpoints.donateBtnShow(postId, userId))
}

export async function getDonations(postId){
    return api.get(endpoints.getDonations(postId))
}

export async function donate(data){
    return api.post(endpoints.donate, data)
}

export async function getAllUserPosts(userId){
    return api.get(endpoints.getAllUserPosts(userId))
}

export async function getAll(){
    return api.get(endpoints.all)
};

export async function createPostRequest(data){
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


