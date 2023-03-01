
const host = 'http://localhost:3030';

export async function request(method, url, data,){
    const options = {
        method,
        headers: {}
    }

    if(data != undefined){
        options.headers['content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const user = JSON.parse(localStorage.getItem('user'));

    if(user){
        const token = user.accessToken;
        options.headers['X-Authorization'] = token;
    }

    try{
        const responce = await fetch(host + url, options);

        if(responce.ok !== true){
            if(responce.status == 403){
                localStorage.removeItem('user');
            }
            const error = await responce.json();
            throw new Error(error.messege);
        }
        if(responce.status == 204){
            return responce;
        } else{
            return responce.json();
        }

    } catch(err){
        alert(err.messege);
        throw err;
    }
};

const get = request.bind(null, 'get');
const post = request.bind(null, 'post');
const del = request.bind(null, 'delete');
const put = request.bind(null, 'put');

export { get, post, del, put}
