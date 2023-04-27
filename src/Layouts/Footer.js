import React from 'react';
import logo from '../Assets/images/logo.svg';
import { Link } from 'react-router-dom';
import SocialIcon from '../shared/socialIcon/SocialIcon';

const Footer = () => {
    return (
        <div>


            <footer className="bg-secondary dark:bg-gray-900">
                <div className="px-8 sm:px-10 lg:px-[103px] pt-6 pb-10">
                    <div className="flex gap-6 justify-center lg:justify-around items-center flex-wrap   md1:flex-wrap lg:flex-nowrap">
                        <div className="w-full  lg:w-2/5  ">
                            <div className="mt-8">
                                <Link to={'/'} className="flex items-center">
                                    <img src={logo} className="h-8 mr-3" alt="Remix Logo" />

                                </Link>
                                <p className="py-3 text-lightTextColor text-sm leading-7 ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                    optio, eaque rerum! Provident similique accusantium nemo autem.
                                </p>
                            </div>
                        </div>
                        <div className="w-full  lg:w-1/5 ">
                            <h2 className="mb-4 text-sm font-semibold text-[#f7f7f7] capitalize dark:text-white">Quick Links</h2>
                            <ul className="text-lightTextColor flex flex-col gap-y-2 text-sm font-normal capitalize mb-6">
                                <li className="">
                                    <Link to={'/about'} className="hover:underline">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="hover:underline">Contact Us</Link>
                                </li>
                                <li>
                                    <a to="" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a to="" className="hover:underline">terms Of use</a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full  lg:w-1/5 ">
                            <h2 className="mb-4 text-sm font-semibold text-[#f7f7f7] capitalize dark:text-white">Services</h2>
                            <ul className="text-lightTextColor flex flex-col gap-y-2 text-sm font-normal capitalize mb-6">
                                <li>
                                    <a to="" className="hover:underline">Services</a>
                                </li>
                                <li>
                                    <a to="" className="hover:underline">Services</a>
                                </li>
                                <li>
                                    <a to="" className="hover:underline">Services</a>
                                </li>
                                <li>
                                    <a to="" className="hover:underline">Services</a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full  lg:w-1/5 ">
                            <h2 className="mb-4 text-sm font-semibold text-[#f7f7f7] capitalize dark:text-white">Contact Info</h2>
                            <ul className="text-lightTextColor flex flex-col gap-y-2 text-sm font-normal capitalize mb-6">
                                <li>
                                    +882156545565
                                </li>
                                <li>
                                    @kdf3565454
                                </li>
                                <li>
                                    Renix Laboratories
                                </li>
                                <li>
                                    Dhalphar Narayangong
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="my-6 border-lightTextColor border-1.5 sm:mx-auto  lg:my-6" />
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <span className="text-sm text-lightTextColor sm:text-center dark:text-gray-400">© 2023 <Link to={'/'} className="hover:underline">Renix</Link>. All Rights Reserved.
                        </span>
                        {/* footer icon */}
                        <SocialIcon />
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;