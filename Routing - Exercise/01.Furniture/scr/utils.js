export function getUserData(){
    return JSON.parse(sessionStorage.getItem('user'));
};

export function setUserData(data){
    sessionStorage.setItem('userData', JSON.stringify(data));
};

export function clearUserData(){
    sessionStorage.removeItem('userData')
};