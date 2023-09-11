import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faPlus,
    faEye, faFlag } from '@fortawesome/free-solid-svg-icons';

function PostComment() {
    const comment = {
        user: {
            username: "MeBadUser",
            _id: "467928473569823"
        },
        text: "This is a very informative post. Please visit this link to learn how ->YOU<- can make $1,000,000 in ONLY 5 MONTHS: [redacted]",
        likeCount: 34,
        dislikeCount: 102,
        comments: [
            "73892057923",
            "83257692830",
            "87419053675387"
        ],
        createdAt: "2023-09-04 16:44:34.098"
    }

    var userLiked = true;
    var userDisliked = false

    const handleLikeClick = () => {

    }

    const handleDislikeClick = () => {

    }

    const loggedIn = true;

    return(
        <article className="d-flex-column mg-left-1  mg-bottom-1 post-comment">
            <div className="d-flex-row">
                <p className="mg-left-1">Posted By: {comment.user.username}</p>
                <p className="mg-left-auto mg-right-1">Date Posted: {comment.createdAt}</p>
            </div>
            <p>{comment.text}</p>
            <div className="d-flex-row">
                {loggedIn ? 
                    (   
                        <>
                            <span>
                                <button className="voting-button"> 
                                <FontAwesomeIcon icon={faFlag} className="red-text" /> Report Comment
                                </button>
                            </span>
                            <span className="mg-left-auto">
                                <button className="voting-button" onClick={handleLikeClick}
                                    aria-labelledby={userLiked ? `remove your like on this comment with ${comment.likeCount} likes` :
                                    `Like this comment with ${comment.likeCount} likes`}>{userLiked ? 'remove ' : ''}
                                    like {comment.likeCount} <FontAwesomeIcon icon={faThumbsUp} className="green-text" /></button>
                                <button className="voting-button" onClick={handleDislikeClick}
                                    aria-labelledby={userDisliked ? `remove your dislike on this comment with ${comment.dislikeCount} dislikes` :
                                    `Dislike this comment with ${comment.dislikeCount} dislikes`}>{userDisliked ? 'remove ' : ''}
                                    dislike {comment.dislikeCount} <FontAwesomeIcon icon={faThumbsDown} className="red-text" /></button>
                            </span>
                            <span>
                                <button className="voting-button"><FontAwesomeIcon icon={faPlus} className="orange-text" /> Reply to Comment</button>
                            </span>
                        </>
                    ) : (
                        <>
                        </>
                    )}
                {comment.comments && comment.comments.length > 0 ?
                    (<span><button className="voting-button">
                        <FontAwesomeIcon icon={faEye} />{` View ${comment.comments.length} replies`}
                    </button></span>) :
                    (<p>No replies</p>)}
            </div>
        </article>
    )
}

export default PostComment;