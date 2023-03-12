import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

function DisplayedPost() {
    const postData = {
        images: [{
            url: "https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png",
            altText: "An image of the JavaScript logo."
        }],
        title: "Coding in JS",
        likeCount: 200,
        dislikeCount: 50,
        text: "Coding in JS is a good skill to know. This blog will teach you some of those basics. It is important to understand..."
    };
    const arrayParsed = postData.text.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
    const parsedText = arrayParsed[0] + " " + arrayParsed[1];

    return(
        <article>
            <h3>{postData.title}</h3>
            {postData.images[0] ? (
                <img src={postData.images[0].url} className="displayPostImage" 
                    alt={postData.images[0].altText} />
            ) : (
                <img src="/logo192.png" className="displayPostImage" 
                    aria-hidden="true" alt=""/>
            )}
            <p>{parsedText}</p>
        </article>
    );
}

export default DisplayedPost;