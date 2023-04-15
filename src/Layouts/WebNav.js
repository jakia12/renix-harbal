import React from 'react';
import { Link } from 'react-router-dom';

const WebNav = () => {
    return (
        <div>
            <ul className='flex justify-around my-20'>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/products"}>Products</Link>
                </li>
                <li>
                    <Link to={"/services"}>Services</Link>
                </li>
                <li>
                    <Link to={"/blogs"}>Blogs</Link>
                </li>
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
            </ul>
        </div>
    );
};

export default WebNav;