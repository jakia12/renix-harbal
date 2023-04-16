import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../Assets/images/logo.svg";


const WebNav = () => {
    return (
        <div className='sticky top-0 bg-white text-sm backdrop-blur-3xl'>
            <div className='w-11/12 mx-auto' >
                <ul className='flex justify-between py-8'>
                    <div>
                        <li>
                            <Link to={"/"}><img className='w-[120px] h-[25px] ' src={logo}></img></Link>
                        </li>
                    </div>
                    <div className='flex gap-5'>
                        <li className='pt-2'>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li className='pt-2'>
                            <Link to={"/about"}>About us</Link>
                        </li>
                        <li className='pt-2'>
                            <Link to={"/services"}>Services</Link>
                        </li>
                        <li className='pt-2'>
                            <Link to={"/products"}>Our Products</Link>
                        </li>
                        <li className='pt-2'>
                            <Link to={"/news-media"}>News And Media</Link>
                        </li>
                        <li className='pt-2'>
                            <Link to={"/blogs"}>Blogs</Link>
                        </li>
                        <li className='pt-2'>
                            <Link to={"/contact"}>Contact Us</Link>
                        </li></div>

                    <div className='flex gap-5'>
                        <Link to={"/"}><button className='flex px-2 font-medium py-2 rounded text-white border bg-primary border-primary'>Appoinments +</button></Link>
                    </div>
                </ul>
            </div>
        </div>


    );
};

export default WebNav;