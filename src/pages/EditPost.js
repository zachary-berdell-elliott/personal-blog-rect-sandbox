import React from 'react';
import EditPostTextArea from '../components/EditPostTextArea';
import EditPostBar from '../components/EditPostBar'

function EditPost() {
    const isModerator = true;
    return isModerator ?
    (
        <main>
            <EditPostBar />
            <EditPostTextArea />
        </main>
    ) : (
        <main></main>
    );
}

export default EditPost;