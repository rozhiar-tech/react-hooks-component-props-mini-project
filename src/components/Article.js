import React from "react";

function Article(props){
    console.log(props);
    const posts=props.posts;
    const postItems=posts.map(post=>(
        <article>
            <h3>{post.title}</h3>
            <small>{post.date}</small>
            <p>{post.preview}</p>

        </article>
     
    ));
    return(
        <>
        {postItems}
        </>
    )
}

export default Article;