import React from "react";
import Article from "./Article"

function ArticleList(props) {
    return (
        <main>
       <Article posts={props}/>
        </main>
    );
    }

export default ArticleList;