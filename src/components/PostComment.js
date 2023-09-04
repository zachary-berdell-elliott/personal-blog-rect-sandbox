import React from 'react';

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

    const loggedIn = true;

    return(
        <article className="d-flex-column mg-left-1  mg-bottom-1 post-comment">
            <div className="d-flex-row">
                <p className="mg-left-1">Posted By: {comment.user.username}</p>
                <p className="mg-left-auto mg-right-1">Date Posted: {comment.createdAt}</p>
            </div>
            <p>{comment.text}</p>
        </article>
    )
}

export default PostComment;