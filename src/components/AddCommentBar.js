import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faPlus } from '@fortawesome/free-solid-svg-icons';

function AddCommentBar() {
    const loggedIn = true;
    var likeCount = 2;
    var dislikeCount = 0;
    var userLiked = false;
    var userDisliked = false;

    const handleLikeClick = (e) => {

    };

    const handleDislikeClick = (e) => {

    };

    return loggedIn ? (
        <section id="comment-add-section">
            <section id="liking-section" className="vote-section">
                <button className="voting-button" onClick={handleLikeClick}
                    aria-labelledby={userLiked ? "remove your like on this post" :
                    "Like this post"}>like <FontAwesomeIcon icon={faThumbsUp} className="green-text" /></button>
                <div id="like-count" aria-labelledby={`This post has ${likeCount} likes`} 
                    className="vote-count-num">{likeCount} likes</div>
            </section>
            
            <button className="voting-button">dislike <FontAwesomeIcon icon={faThumbsDown} className="red-text" /></button>
            <form id="add-comment-form" className="d-flex-column flex-center-w">
                <textarea name="comment" className="comment-entry-area flex-center-w" />
                <button className="voting-button flex-center-w"><FontAwesomeIcon icon={faPlus} className="orange-text" /> Add Comment</button>
                <p className="text-danger">Testing</p>
            </form>
        </section>
    ) : (
        <section id="comment-add-section"></section>
    );
}

export default AddCommentBar;