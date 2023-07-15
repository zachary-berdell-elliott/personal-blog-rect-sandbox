import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Nav() {
    const categories = [
        {
            name: "React"
        },
        {
            name: "Deployments"
        },
        {
            name: "Java"
        },
        {
            name: "JavaScript"
        }
    ];
    return(
        <nav>
            <ul>
                <li>
                    <button>Categories <FontAwesomeIcon icon={faAngleDown} /></button>
                    <ul>
                        {categories.map(category => (
                            <li key={category.name}>
                                <a href={`/categories/${category.name}`}>{category.name}</a>
                            </li>
                        ))}
                    </ul>
                </li>
               <li><a href="/login">Login</a></li>
               <li><a href="/signup">Sign Up</a></li>
               <li><a href="/about">About</a></li>
               <li><a href="/moddashboard">Moderator Dashboard</a></li>
               <li><a href="makepost">Create Post</a></li>
            </ul>
        </nav>
    )
}

export default Nav;