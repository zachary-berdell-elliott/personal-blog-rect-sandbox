import {React, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowUp, faMagnifyingGlass, faImage, faTableList,
         faUndo, faRedo, faEye } from '@fortawesome/free-solid-svg-icons';

function EditPostBar() {

    return(
        <section id="post-edit-bar">
            <button className="post-edit-btn" id="upload-image-btn" aria-labelledby="Upload An Image Button"
            title="Upload An Image">
                <FontAwesomeIcon icon={faFileArrowUp} />
            </button>
            <button className="post-edit-btn" id="search-image-btn" aria-labelledby="Find an Image Button"
            title="Find An Image">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <FontAwesomeIcon icon={faImage} />
            </button>
            <button className="post-edit-btn" id="list-inserts-btn" aria-labelledby="List of Inserts Button"
            title="List of Inserts">
                <FontAwesomeIcon icon={faTableList} />
            </button>
            <button className="post-edit-btn" id="undo-btn" aria-labelledby="Undo Button"
            title="Undo">
                <FontAwesomeIcon icon={faUndo} />
            </button>
            <button className="post-edit-btn" id="redo-btn" aria-labelledby="Redo Button"
            title="Redo">
                <FontAwesomeIcon icon={faRedo} />
            </button>
            <button className="post-edit-btn" id="preview-btn" aria-labelledby="Preview the Post Button"
            title="Preview the Post">
                <FontAwesomeIcon icon={faEye} />
            </button>  
        </section>
    )
}

export default EditPostBar;