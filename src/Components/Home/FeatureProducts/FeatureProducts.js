import React from 'react'
import img1 from '../../../Assets/images/Products/p1.png'
import img2 from '../../../Assets/images/Products/p2.webp'
import img3 from '../../../Assets/images/Products/p3.webp'
import img4 from '../../../Assets/images/Products/p4.webp'

const FeatureProducts = () => {

   
  return (
    <div className='lg:w-[90%] w-full mx-auto my-10 text-center '>
        <h3 className='bg-whiteSmoke w-24 mx-auto '>Feature</h3>
        <h1 className='text-secondary font-bold text-3xl mt-3'>Feature Products</h1>
        <div className=' flex gap-6 flex-wrap mx-auto justify-center  mt-24'>
      {
        products.map((product,index)=>(
          
                <div className='w-72' key={index}>
            <div className='w-72 h-80 p-4 px-8 rounded-xl border-2 border-whiteSmoke '>
             <h2 className='bg-primary w-10 text-xs rounded-sm ml-44 text-white mt-3'>Sale!</h2>
                 <img src={product.image} alt='' className='w-44 mx-auto  h-52 mt-7'/>
             </div>
             <div>
                 <h1 className='text-secondary text-sm mt-2'>{product.productName}</h1>
                 <p className='text-lightPrimary text-sm mt-2'>Tk {product.price}</p>
             </div>
             </div>
           
        ))
      }
      </div>
    </div>
  )
}

export default FeatureProducts