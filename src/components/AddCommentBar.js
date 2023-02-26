import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faPlus } from '@fortawesome/free-solid-svg-icons';

function AddCommentBar() {
    const loggedIn = false;
    var likeCount = 2550;
    var dislikeCount = 1000;
    var userLiked = false;
    var userDisliked = false;

    const handleLikeClick = (e) => {

    };

    const handleDislikeClick = (e) => {

    };

    return loggedIn ? (
        <section id="comment-add-section">
            <div className="d-flex-row j-content mg-top-1">
                <section id="liking-section" className="vote-section">
                    <button className="voting-button" onClick={handleLikeClick}
                        aria-labelledby={userLiked ? "remove your like on this post" :
                        "Like this post"}>like <FontAwesomeIcon icon={faThumbsUp} className="green-text" /></button>
                    <div id="like-count" aria-labelledby={`This post has ${likeCount} likes`} 
                        className="vote-count-num">{likeCount} Likes</div>
                </section>
                <section id="disliking-section" className="vote-section">
                    <button className="voting-button" onClick={handleDislikeClick}
                    aria-labelledby={userDisliked ? "remove your dislike on this post" :
                    "Dislike this post"}>dislike <FontAwesomeIcon icon={faThumbsDown} className="red-text" /></button>
                    <div id="dislike-count" aria-labelledby={`This post has ${dislikeCount} dislikes`} 
                        className="vote-count-num">{dislikeCount} Dislikes</div>
                </section>
            </div>
            <form id="add-comment-form" className="d-flex-column flex-center-w">
                <textarea name="comment" className="comment-entry-area flex-center-w" />
                <button className="voting-button flex-center-w"><FontAwesomeIcon icon={faPlus} className="orange-text" /> Add Comment</button>
                <p className="red-text mg-bottom-1">Testing</p>
            </form>
        </section>
    ) : (
        <section id="comment-add-section" className="pb-2">
                        <div className="d-flex-row j-content mg-top-1">
                <section id="liking-section" className="vote-section mg-bottom-1">
                        <FontAwesomeIcon icon={faThumbsUp} className="green-text not-logged-in-like" aria-hidden="true"/>
                    <div id="like-count" aria-labelledby={`This post has ${likeCount} likes`} 
                        className="vote-count-num">{likeCount} Likes</div>
                </section>
                <section id="disliking-section" className="vote-section mg-bottom-1">
                    <FontAwesomeIcon icon={faThumbsDown} className="red-text not-logged-in-like" aria-hidden="true" />
                    <div id="dislike-count" aria-labelledby={`This post has ${dislikeCount} dislikes`} 
                        className="vote-count-num">{dislikeCount} Dislikes</div>
                </section>
            </div>
            <div className="important-link mg-top-1">
                <a href="/login">Click here to log in if you want to add a comment or add a like or dislike.</a>
            </div>  
        </section>
    );
}

export default AddCommentBar;