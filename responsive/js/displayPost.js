const posts = js.getEl('posts');


function createPost(postData, userInfo, postId, postDate, postAuhtor){
    

    const post = js.createEl('div', 'post');

    
    posts.insertBefore(post, posts.firstElementChild);
    
    const text = js.createEl('div', 'post-text', postData.text);
    post.appendChild(text);
    
    const postInfo = js.createEl('div' , 'post-info');
    post.appendChild(postInfo);
    
    const author = js.createEl('div', 'post-author' , userInfo.displayName);
    postInfo.appendChild(author);
    
    const date = js.createEl('div', 'post-date', js.formatDate(postData.date));
    
    postInfo.appendChild(date);
   
    console.log(date);

    const userImage - js.createEl( 'img', 'post-profile-image');
    if (userInfo.ImageURL) {
        uderImage.src = userInfo.imageURL;
    } else{
        userImage.src ='img/ball.jpg';

    }
    post.appendChild(userImage);
}
