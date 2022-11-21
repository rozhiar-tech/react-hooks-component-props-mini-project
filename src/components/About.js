import React from "react";


function About(props) {
    if(props.image === "missing"){
        return (
            <aside id="about">
            <img src="https://i.ibb.co/7r7R6y/missing.png" alt="missing" />
            <p>{props.about}</p>
            <p>{props.bio}</p>
        </aside>
          
        )
    } else {
                
    return (
        <aside id="about">
            <img src={props.image} alt="blog logo" />
            <p>{props.about}</p>
            <p>{props.bio}</p>
        </aside>
    );
    }
}

export default About;