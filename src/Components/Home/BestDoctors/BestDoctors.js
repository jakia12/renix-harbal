import React from 'react'
import img1 from '../../../Assets/images/Dorctors/team-member-1.jpg'
import img2 from '../../../Assets/images/Dorctors/team-member-2.jpg'
import img3 from '../../../Assets/images/Dorctors/team-member-3.jpg'
import img4 from '../../../Assets/images/Dorctors/team-member-4.jpg'
import img5 from '../../../Assets/images/Dorctors/team-custom-icon-2.png'
import img6 from '../../../Assets/images/Dorctors/team-custom-icon-1.png'
import img7 from '../../../Assets/images/Dorctors/team-custom-icon-3.png'
import img8 from '../../../Assets/images/Dorctors/team-custom-icon-4.png'

import { Icon } from '@iconify/react';
const BestDoctors = () => {

    const doctorsData = [
        {
            _id: 1,
            doctorsName: "Angela Adams",
            category: "Cardiac Surgery",
            description:"Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis",
            image: `${img1}`,
            icon: `${img7}`,
        },
        {
            _id: 2,
            doctorsName: "Jhon Adams",
            category: "Cardiac Surgery",
            description:"Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis",
            image: `${img2}`,
            icon: `${img5}`,
        },
        {
            _id: 3,
            doctorsName: "Angela Miskat",
            category: "Cardiac Surgery",
            description:"Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis",
            price: "500",
            image: `${img3}`,
            icon: `${img6}`,
        },
        {
            _id: 4,
            doctorsName: "Angela Adams",
            category: "Cardiac Surgery",
            description:"Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis",
            image: `${img4}`,
            icon: `${img8}`,
        }
      
    ]
    return (
        <div className='lg:w-[90%] w-full mx-auto my-10 text-center '>
            <h1 className='text-secondary font-semibold text-3xl mt-3'>Our Best Doctors</h1>
            <p className='mt-3 text-textColor'>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo non <br></br>

                habent claritatem insitamconsequat duis</p>
            <div className=' flex gap-6  flex-wrap mx-auto justify-center  mt-14'>
                {
                    doctorsData.map((Data) => (

                        <div className='w-56 mb-3' key={Data._id} relative>
                            <div className=''>
                                <img src={Data.icon} className='bg-primary w-12  h-12  rounded-full text-xs  ml-[150px] mt-4 text-white absolute'/>
                                <img src={Data.image} alt='' className='w-36 h-36 rounded-full border-2 border-primary mx-auto mt-7' />
                            </div>
                            <div className='w-56'>
                                <h1 className='text-secondary text-sm font-semibold mt-5'>{Data.doctorsName}</h1>
                                <p className='text-lightPrimary text-xs mt-1'> {Data.category}</p>
                                <p className='text-xs text-textColor mt-3 leading-relaxed'>{Data.description}</p>
                            </div>

                            <div className='flex mt-3 justify-center gap-2 h-4'>
                            <Icon icon="uil:facebook-f" />
                            <Icon icon="mdi:twitter" />
                            <Icon icon="ri:linkedin-fill" />
                            <Icon icon="mdi:youtube" />
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default BestDoctors