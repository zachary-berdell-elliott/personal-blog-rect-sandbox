import React, { useState } from 'react';
import DisplayedPost from './DisplayedPost';

function PostContainer() {
    const postArray = [
        {
            images: [{
                url: "https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png",
                altText: "An image of the JavaScript logo."
            }],
            title: "Coding in JS",
            likeCount: 200,
            dislikeCount: 50,
            text: "Coding in JS is a good skill to know. This blog will teach you some of those basics. It is important to understand..."
        },
        {
            title: "React",
            likeCount: 500,
            dislikeCount: 10,
            text: "This is a test. Testing how this renders."
        },
        {
            title: "React test",
            likeCount: 500,
            dislikeCount: 10,
            text: "This is a test. Testing how this renders."
        }
    ]
    return(
        <section>
            {postArray.map(postData => (
                <DisplayedPost data={postData} key={postData.title} />
            ))}
        </section>
    );
}

export default PostContainer;