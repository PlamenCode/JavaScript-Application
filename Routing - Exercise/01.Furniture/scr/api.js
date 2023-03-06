import { getUserData, setUserData, clearUserData } from "./utils.js";

const host = 'http://localhost:3030';

async function request(url, options){
    try{
        const responce = await fetch(host + url, options);

        if(responce.ok != true){
            if(responce.status == 403){
                clearUserData();
            }
            const error = await responce.json();
            throw new Error(error.message);
        }

        if(responce.status == 204){
            return responce;
        } else{
            return responce.json();
        }

    } catch(err) {
        alert(err.message);
        throw err;
    }
};

function createOptions(method = 'get', data){
    const options = {
        method,
        headers: {}
    };

    if(data != undefined){
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    };

    const userData = getUserData();
}