import React from 'react';

function EditPostTextArea() {
    return(
        <form id="edit-post-form">
            <input type="text" id="post-title-field" aria-labelledby="Post Title Field" 
                placeholder="Enter A Title" />
            <textarea id="post-body" aria-labelledby="post-body"></textarea>
        </form>
    )
}

export default EditPostTextArea;