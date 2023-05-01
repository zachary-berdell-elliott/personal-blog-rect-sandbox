import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faBook } from '@fortawesome/free-solid-svg-icons';

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
            <div className="like-and-dislike mg-bottom-2">
                <span aria-labelledby="like count" className="mg-right-1">
                    <FontAwesomeIcon icon={faThumbsUp} className="green-text" aria-hidden="true" /> {postData.likeCount} 
                </span>
                <span aria-labelledby="dislike count">
                    <FontAwesomeIcon icon={faThumbsDown} className="red-text" aria-hidden="true" /> {postData.dislikeCount} 
                </span>
            </div>
            <div className="important-link">
                <a href={'/posts/' + postData.postUrl}>Read Here  <FontAwesomeIcon icon={faBook} aria-hidden="true"/></a>
            </div>
        </article>
    );
}

export default DisplayedPost;