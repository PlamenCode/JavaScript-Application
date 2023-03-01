function attachEvents() {
    let btnLoadPosts = document.getElementById('btnLoadPosts');
    let btnViewPost = document.getElementById('btnViewPost');

    btnLoadPosts.addEventListener('click', getPost);
    btnViewPost.addEventListener('click', getComment);

    async function getPost(){
        let url = `http://localhost:3030/jsonstore/blog/posts`;
        let responce = await fetch(url);
        let data = await responce.json();

        let posts = document.getElementById('posts');
        posts.innerHTML = '';

        Object.values(data).forEach(post => {
            let option = document.createElement('option');
            option.value = post.id;
            option.textContent = post.title;
            posts.appendChild(option);
        });
    }

    async function getComment(){
        let postUrl = 'http://localhost:3030/jsonstore/blog/posts';
        let commentUrl = 'http://localhost:3030/jsonstore/blog/comments';

        let selectedOp = document.getElementById('posts').selectedOptions[0].value;
        let titleEl = document.getElementById('post-title');
        let postBody = document.getElementById('post-body');
        let comentsContainer = document.getElementById('post-comments');
            comentsContainer.innerHTML = '';

        let postResponce = await fetch(postUrl);
        let postData = await postResponce.json();

        let commentsResponce = await fetch(commentUrl);
        let commentData = await commentsResponce.json();

        let selectedPost = Object.values(postData).find(post => post.id == selectedOp);

        titleEl.textContent = selectedPost.title;
        postBody.textContent = selectedPost.body;

        let coments = Object.values(commentData).filter(com => com.postId == selectedOp);
            coments.forEach(com => {
            let li = document.createElement('li');
                li.textContent = com.text;
            comentsContainer.appendChild(li)
        })
    }
}                                                                               

attachEvents();