import React from 'react';
import './Header.css'//css connect krce.
const Header = () => {
    return (
        <div>
            <h1>this is a header</h1>
            <nav>
                <a href="/home">home</a>
                <a href="/shope">shope</a>
                <a href="/about us">about us</a>
            </nav>
        </div>
    );
};

export default Header;