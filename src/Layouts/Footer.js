import React from 'react';
import logo from '../Assets/images/logo.svg';
import { Link } from 'react-router-dom';
import SocialIcon from '../shared/socialIcon/SocialIcon';

const Footer = () => {
    return (
        <div>

            <footer className="bg-secondary dark:bg-gray-900">
                <div className="container mx-auto w-full md:max-w-6xl px-8 md:px-4 py-6">
                    <div className="md:flex gap-6 justify-center md:justify-around items-center ">
                        <div className="w-full md:w-2/5 sm:mx-auto mx-0 ">
                            <div className="mt-8">
                                <Link to={'/'} className="flex items-center">
                                    <img src={logo} className="h-8 mr-3" alt="Remix Logo" />

                                </Link>
                                <p className="py-3 text-lightTextColor text-sm leading-7 ">
                                Renix Laboratories (Unani) Ltd. is a healthcare company that produces high-quality complete medicines using natural herbs, contributing to the shift towards alternative medicine. The Hon'ble Prime Minister of Bangladesh has recognized the importance of herbal medicines.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/5 sm:mx-auto mx-0">
                            <h2 className="mb-4 text-sm font-semibold text-[#f7f7f7] capitalize dark:text-white">Quick Links</h2>
                            <ul className="text-lightTextColor flex flex-col gap-y-2 text-sm font-normal capitalize mb-6">
                                <li className="">
                                    <Link to={'/about'} className="hover:underline">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="hover:underline">Contact Us</Link>
                                </li>
                                <li>
                                    <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="/refound-return" className="hover:underline">Refound & Return</Link>
                                </li>
                                <li>
                                    <Link to="/terms-conditions" className="hover:underline">Terms & Conditions</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/5 sm:mx-auto mx-0">
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
                        <div className="w-full w-3.5 md:w-1/5 sm:mx-auto mx-0">
                            <h2 className="mb-4 text-sm font-semibold text-[#f7f7f7] capitalize dark:text-white">Contact Info</h2>
                            <ul className="text-lightTextColor flex flex-col gap-y-2 text-sm font-normal capitalize mb-8">
                                <li>
                                +8801724-024373
                                </li>
                                <li>
                                info@renixlaboratories.com
                                </li>
                                <li>
                                RENIX UNANI LABORATORIES LIMITED,
                                </li>
                                <li>
                                Fatullah 1421 Dhaka, Dhaka Division, Bangladesh
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="my-6 border-lightTextColor border-1.5 sm:mx-auto  lg:my-6" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-lightTextColor sm:text-center dark:text-gray-400">© 2023 <Link to={'/'} className="hover:underline">Renix</Link>. All Rights Reserved. Develope by <a href="http://thinkystorm.com/">Thinky Strom.</a>
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