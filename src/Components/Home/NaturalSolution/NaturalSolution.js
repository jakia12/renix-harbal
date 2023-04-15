import React from 'react'
import img1 from '../../../Assets/images/tree.svg'
import img2 from '../../../Assets/images/medicine.svg'
const NaturalSolution = () => {
  return (
    <div className='flex'>
        <div className='w-1/3'>
            <img src={img1} alt='tree image'/>
        </div>
        <div className='w-2/3 text-center'>
            <h1 className='font-bold uppercase text-3xl '><span className='text-primary'>Renix </span> unani laboratories limited</h1>
            <p>Healthy Living Natural Solution</p>
        </div>
        <div className='w-1/3'> <img src={img2} alt='medicine image'/></div>
    </div>
  )
}

export default NaturalSolution