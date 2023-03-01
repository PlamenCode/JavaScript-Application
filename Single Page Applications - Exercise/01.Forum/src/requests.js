async function createTopic (data, date) {
    const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';
    const responce = await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, creationDate: date })
    })
    return await responce.json()
}

async function getPosts () {
    const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';
    const responce = await fetch(url);
    const responceData = await responce.json();
    
    return Object.values(responceData);
}

async function getComments (topicName) {
    const url = 'http://localhost:3030/jsonstore/collections/myboard/comments';
    const responce = await fetch(url);
    const data = await responce.json();
    const comments = Object.values(data).filter(x => x.topicName == topicName);

    return comments;

}

async function postComment (data, topicName) {
    const url = 'http://localhost:3030/jsonstore/collections/myboard/comments';
    const responce = await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({...data, topicName})
    })
}

export { createTopic, getPosts, getComments, postComment }
