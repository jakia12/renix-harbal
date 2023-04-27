import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaPinterest } from 'react-icons/fa';

import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const SocialIcon = () => {
    return (
        <div className='flex items-center gap-3 mt-4 md:mt-0'>
            <div className="w-7 h-7 rounded-full bg-primary hover:bg-lightOrange text-[#191919]  hover:bg-lightPrimary flex items-center justify-center">

                <Link href={''} className='text-sm '><FaFacebookF /></Link>
            </div>
            <div className="w-7 h-7 rounded-full bg-primary hover:bg-lightOrange text-[#191919]  hover:bg-lightPrimary flex items-center justify-center">

                <Link href={''} className='text-sm '><FaLinkedinIn /></Link>
            </div>
            <div className="w-7 h-7 rounded-full bg-primary hover:bg-lightOrange text-[#191919]  hover:bg-lightPrimary flex items-center justify-center">

                <Link href={''} className='text-sm '><FaTwitter /></Link>
            </div>

            <div className="w-7 h-7 rounded-full bg-primary hover:bg-lightOrange text-[#191919]  hover:bg-lightPrimary flex items-center justify-center">

                <Link href={''} className='text-sm '><AiFillInstagram /></Link>
            </div>




        </div>
    )
}

export default SocialIcon