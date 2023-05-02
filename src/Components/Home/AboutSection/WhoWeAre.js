import React, { useEffect, useState } from 'react'
import './WhoWeAre.css'
const WhoWeAre = () => {

const allData=[
    {
        _id:1,
        title:"Who we are",
        description:"Renix Laboratories (Unani) Ltd. is a company that specializes in producing high-quality, natural medicine to improve healthcare. The company recognizes the benefits of Unani treatment, a system of medicine that has been in practice for over 5000 years and has proven to be effective without harmful side effects. The Honorable Prime Minister of Bangladesh has also taken an interest in herbal medicine and appointed Unani and Ayurvedic doctors in hospitals and health complexes. Renix Laboratories has appointed doctors who provide Unani health services in remote areas of Bangladesh. The company is dedicated to producing effective natural medicine and promoting the benefits of Unani treatment to contribute to the healthcare industry."
    },
    {
        _id:2,
        title:"What we do",
        description:"Renix Laboratories (Unani) Ltd. produces high-quality, natural medicine without harmful side effects, utilizing knowledge of the 5000-year-old Unani treatment system. With the global rise of antibiotic resistance and harmful side effects of modern medicine, the company recognizes the importance of promoting herbal medicines. Renix Laboratories has also appointed doctors to provide Unani health services in remote areas of the country. The company's expertise in natural herbs and commitment to Unani treatment make it a leader in the healthcare industry."
    }
]

    return (
        
    <div className='md:flex  mx-auto    py-36 bg-gradient-to-r from-thirdLightPrimary via-whiteSmoke to-thirdLightPrimary'>
      <div className='w-[80%] lg:flex mx-auto'>
        
       {

allData.map((data)=>(
    <div className='border-2 border-primary justify-center p-8 sm:w-[320px] md:w-[470px] lg:w-[500px] mb-8 rounded-3xl mx-auto' key={data._id}>
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