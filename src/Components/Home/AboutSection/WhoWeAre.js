import React, { useEffect, useState } from 'react'
import './WhoWeAre.css'
const WhoWeAre = () => {

const allData=[
    {
        id:1,
        title:"Who we are",
        description:"Lorem ipsum dolor sit amet ipsum dolor sit amet sit ameteuismod tincidunt ut laoreet tatum zzril delame tLorem ipsum dolor sit amet"
    },
    {
        id:2,
        title:"What we do",
        description:"Lorem ipsum dolor sit amet ipsum dolor sit ametLorem ipsum dolor sit amet  euismod tincidunt ut laoreet tatum zzril delenit augue duis dolore  magna aliquam erat volutpat. Ut wisi  enim ad minim veniam, quis nostrud"
    }
]

    return (
        
    <div className='md:flex  mx-auto    py-36 bg-gradient-to-r from-thirdLightPrimary via-whiteSmoke to-thirdLightPrimary'>
      <div className='w-[80%] lg:flex mx-auto'>
        
       {

allData.map((data, index)=>(
    <div className='border-2 border-primary justify-center p-8 sm:w-[320px] md:w-[470px] lg:w-[500px] mb-8 rounded-3xl mx-auto' key={index}>
    <h3 className='text-secondary font-bold text-xl'>{data.title}</h3>
    <p className='w-[50px] border-2 border-primary'></p>
    <p className='mt-5 text-textColor'>{data.description}</p>
</div>

))
}
  
        </div>    
          

    </div>
    )
}

export default WhoWeAre