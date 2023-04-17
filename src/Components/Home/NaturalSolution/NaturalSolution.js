import React from 'react'
import img1 from '../../../Assets/images/tree.svg'
import img2 from '../../../Assets/images/medicine.svg'
const NaturalSolution = () => {
    return (
        <div className='lg:flex md:flex py-14'>
            <div className='md:w-1/3 '>
                <img src={img1} alt='tree image' />
            </div>
            <div className='md:w-2/3 text-center sm:px-3 md:px-0'>
                <h1 className='font-bold uppercase text-3xl text-secondary'><span className='text-primary'>Renix </span> unani laboratories limited</h1>
                <p className='textColor mt-2'>Healthy Living Natural Solution</p>
                <p className='sm:mt-4 lg:mt-20  text-textColor'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                    enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
                    hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat

                    nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit prae-
                    sent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
            </div>
            <div className='md:w-1/3 '> <img src={img2} alt='medicine image' /></div>
        </div>
    )
}

export default NaturalSolution