import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

function DisplayedPost(props) {

    const postData = {...props.data};
    //Converts the text to be only the first two sentences
    const arrayParsed = props.data.text.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
    const parsedText = arrayParsed[0] + " " + arrayParsed[1];

    return(
        <article className="blog-card">
            <h3>{postData.title}</h3>
            {postData.images && postData.images[0] ? (
                <img src={postData.images[0].url} className="display-post-image" 
                    alt={postData.images[0].altText} />
            ) : (
                <img src="/logo192.png" className="display-post-image" 
                    aria-hidden="true" alt=""/>
            )}
            <p>{parsedText}</p>
            <div className="like-and-dislike">
                <span aria-aria-labelledby="like count" className="mg-right-1">
                    <FontAwesomeIcon icon={faThumbsUp} className="green-text" /> {postData.likeCount} 
                </span>
                <span aria-aria-labelledby="dislike count">
                    <FontAwesomeIcon icon={faThumbsDown} className="red-text" /> {postData.dislikeCount} 
                </span>
            </div>
        </article>
    );
}

export default DisplayedPost;