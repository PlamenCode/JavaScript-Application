import { post, get } from "./requests.js"; 

const endPoints = {
    'login': '/users/login',
    'logout': '/users/logout',
    'register': '/users/register'
}

export async function login(email, password){
    const user = await post(endPoints.login,{email, password});
    localStorage.setItem('user', JSON.stringify(user));
};

export async function register(email, password){
    const user = await post(endPoints.register ,{email, password});
    localStorage.setItem('user', JSON.stringify(user));
};

export async function logout(){
    get(endPoints.logout);
    localStorage.removeItem('user');
};