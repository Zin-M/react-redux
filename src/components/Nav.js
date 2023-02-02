import React from 'react'
import logoImage from '../images/logo.png';
export default function () {
    return (
        <div>
            <div>
                <img src={logoImage} width="50px" height="50px" />
                <strong>CESID</strong>
            </div>
            <div>
                <ul>
                    <li><a href='#'>Download</a></li>
                    <li><a href='#'>Log Out</a></li>
                </ul>
            </div>
        </div>
    )
}
