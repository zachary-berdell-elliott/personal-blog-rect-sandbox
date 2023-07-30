import React from 'react';

function EditPostTextArea() {
    const categories = [
        {
            name: "JavaScript"
        },
        {
            name: "Spring Boot"
        },
        {
            name: "SQL"
        },
        {
            name: "React"
        }
    ]
    return(
        <form id="edit-post-form">
            <label htmlFor="post-title-field">Title</label>
            <input type="text" id="post-title-field" aria-labelledby="Post Title Field" 
                placeholder="Enter A Title" name="post-title-field" />
            <label htmlFor="post-category-field">Category</label>
            <select id="post-category-field" aria-labelledby="Select the category of the post"
                placeholder="Select a Category">
                {categories.map(category => (
                    <option>{category.name}</option>
                ))}
            </select>
            <label htmlFor="post-body">Post Body</label>
            <textarea id="post-body" aria-labelledby="post-body"></textarea>
        </form>
    )
}

export default EditPostTextArea;