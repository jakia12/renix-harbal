import React from 'react';
import { BsTelephoneFill, BsClockFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaPinterest } from 'react-icons/fa';

import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const TopBar = () => {
    return (
        <div className='hidden lg:flex items-center justify-between border-b border-[#999] py-4 md:px-[103px]'>
            {/* topbar info */}
            <div className="flex gap-8  items-center justify-center">
                {/* info item */}
                <div className="flex  gap-3 justify-center">
                    <span className="text-lg text-primary"><BsTelephoneFill /></span>
                    <div className="">
                        <span className="text-[12px] text-textColor mb-2 block">+(123)65685457</span>
                        <span className="text-[12px] text-textColor block">+(123)65685457</span>
                    </div>
                </div>
                <div className="flex gap-3 justify-center">
                    <span className="text-lg text-primary">< BsClockFill /></span>
                    <div className="">
                        <span className="text-[12px] text-textColor mb-2 block">Mon-Fri 10.00am-3.00pm</span>
                        <span className="text-[12px] text-textColor block">Fri-sun Closed</span>
                    </div>
                </div>
                <div className="flex gap-3 justify-center">
                    <span className="text-lg text-primary"><IoMdMail /></span>
                    <div className="">
                        <span className="text-[12px] text-textColor mb-2 block">Yourgmail.com</span>
                        <span className="text-[12px] text-textColor block">www.youtube.com</span>
                    </div>
                </div>
            </div>

            {/* top social icon */}
            <div className='flex items-center gap-2 '>
                <div className="w-7 h-7 rounded-full bg-primary hover:bg-lightOrange text-white  hover:bg-lightPrimary flex items-center justify-center">

                    <Link href={''} className='text-[12px] '><FaFacebookF /></Link>
                </div>
                <div className="w-7 h-7 rounded-full bg-primary hover:bg-lightOrange text-white  hover:bg-lightPrimary flex items-center justify-center">

                    <Link href={''} className='text-[12px] '><FaLinkedinIn /></Link>
                </div>
                <div className="w-7 h-7 rounded-full bg-primary hover:bg-lightOrange text-white  hover:bg-lightPrimary flex items-center justify-center">

                    <Link href={''} className='text-[12px] '><FaTwitter /></Link>
                </div>

                <div className="w-7 h-7 rounded-full bg-primary hover:bg-lightOrange text-white  hover:bg-lightPrimary flex items-center justify-center">

                    <Link href={''} className='text-[12px] '><AiFillInstagram /></Link>
                </div>




            </div>

        </div>
    );
};

export default TopBar;