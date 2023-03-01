
export async function getPosts(){
    let url = 'http://localhost:3030/jsonstore/collections/myboard/posts';
    const responce = await fetch(url);
    const data = await responce.json();

    return Object.values(data);
};

export async function createTopic(info, date){
    const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';
    const responce = await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({...info, creatinDate: date})
    });
    return await responce.json()
};

export async function postComment(data, commentName){
    const url = 'http://localhost:3030/jsonstore/collections/myboard/comments';
    const responce = await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({...data, commentName})
    })
};

export async function getComments (topicName) {
    const url = 'http://localhost:3030/jsonstore/collections/myboard/comments';
    const responce = await fetch(url);
    const data = await responce.json();

    const comments = Object.values(data).filter(x => x.topicName == topicName);
    return comments;
}