// import React, { useState } from "react";

// import img1 from "../../Assets/images/sliderImages/p1.png";
// import img2 from "../../Assets/images/sliderImages/p2.png";
// import img3 from "../../Assets/images/sliderImages/p3.png";
// import img4 from "../../Assets/images/sliderImages/p4.png";
// import img5 from "../../Assets/images/sliderImages/p5.png";
// import img6 from "../../Assets/images/sliderImages/p6.png";
// import { Tab } from "@headlessui/react";
// import ProductTable from "./ProductTable";
// import ProductInfo from "./ProductInfo";

// const ProductDetails = () => {
//   const products = [
//     {
//       _id: 1,
//       productName: "Nature Hazmina Plus",
//       genericName: " MIRTAZAPINE",
//       strength: "15 MG",
//       stock: "14",
//       price: "800",
//       image: img1,
//     },
//     {
//       _id: 2,
//       productName: "Nature Hazmina Plus",
//       genericName: " MIRTAZAPINE",
//       strength: "15 MG",
//       stock: "13",
//       price: "600",
//       image: `${img2}`,
//     },
//     {
//       _id: 3,
//       productName: "Karkuma Superfood",
//       genericName: " MIRTAZAPINE",
//       strength: "15 MG",
//       stock: "12",
//       price: "500",
//       image: `${img3}`,
//     },
//     {
//       _id: 4,
//       productName: "Nature Hazmina Plus",
//       genericName: " MIRTAZAPINE",
//       strength: "15 MG",
//       stock: "12",
//       price: "700",
//       image: `${img4}`,
//     },
//     {
//       _id: 5,
//       productName: "Nature Hazmina Plus",
//       genericName: " MIRTAZAPINE",
//       strength: "15 MG",
//       stock: "15",

//       price: "600",
//       image: `${img5}`,
//     },
//     {
//       _id: 6,
//       productName: "Nature Hazmina Plus",
//       genericName: " MIRTAZAPINE",
//       strength: "15 MG",
//       stock: "11",
//       price: "600",
//       image: `${img6}`,
//     },
//   ];

//   return (
//     <>
//       {/* product thumbnail slider section */}
//       <section className="pt-12 pb-6">
//         <div className="w-[93%] lg:w-[93%] mx-auto ">
//           {/* product info */}
//           <div className="flex justify-center flex-wrap md:flex-nowrap">
//             <div className="w-full lg:w-6/12 ">
//               <div className="flex gap-3 m-4">
//                 <div className="hidden lg:block w-2/12">
//                   <ul className=''>
//                     {
//                       products.map((thumb, idx) => (
//                         <li key={idx}
//                           className='point_r mb-2  '
//                           // onClick={() => setCurrent(idx)}
//                           onClick={() => handleThumbClick(idx)}

//                         >


//                           <img src={thumb.galleryImg} className='w-[80px] h-[80px] border border-gray-400 rounded' />



//                         </li>
//                       ))
//                     }

//                   </ul>
//                 </div>
//                 <div className="w-full lg:w-10/12">
//                   <div className="mx-auto  overflow-hidden bg-white relative z-[999999]">
//                     <div className="whitespace-nowrap transition-all w-full  ease duration-[800ms] z-10 "
//                       style={{
//                         transform: `translate3d(${-current * 100}%, 0, 0)`

//                       }}
//                     >

//                       {
//                         productGallary.map((sl) => {
//                           return (
//                             <div className=" inline-block rounded-md  z-10 border border-gray-300 p-6" key={sl.id}>
//                               <Magnifier src={sl.galleryImg} className='w-full lg:w-[450px] lg:h-[400px]' mgShape='square' mgWidth={180} mgHeight={180} />;

//                               {/* <img src={sl.galleryImg} className='w-full lg:w-[450px] lg:h-[400px]' /> */}

//                             </div>
//                           )
//                         })
//                       }
//                     </div>
//                     {/* prev and next arrow */}
//                     <div className="">
//                       <button
//                         onClick={handleClickPrev}
//                         className="text-textColor text-3xl absolute top-[45%] left-1">
//                         <IoIosArrowDropleftCircle />
//                       </button>
//                       <button
//                         onClick={handleClickNext}
//                         className="text-textColor text-3xl absolute top-[45%] right-1">
//                         <IoIosArrowDroprightCircle />
//                       </button>
//                     </div>

//                   </div>

//                 </div>
//               </div>
//             </div>
//             <div className="w-full lg:w-6/12">
//               <div className=" m-3 -z-10">

//                 <h2 className="text-textPrimary font-semibold text-xl md:text-3xl mb-2">Gaming Headphone</h2>

//                 <div className="flex items-center gap-2 text-textPrimary py-1    text-base  bg-white " >
//                   <span className='line-through text-gray-500'>$89</span>
//                   <span className=''>$49</span>
//                 </div>

//                 <p className="my-4 text-gray-500 text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
//                   molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
//                   numquam blanditiis </p>
//                 {/* dot and size slider */}
//                 <div className=" my-4">
//                   {/* price tag */}

//                   {/* color dot  slide */}
//                   <div>
//                     <span className='block text-sm font-normal text-textColor'>Color : {selectedColor ? selectedColor : "No Color Selected"} </span>
//                     <div className="flex items-center gap-3 mt-2">
//                       {/* color item */}
//                       <ul className='flex  items-center gap-2 '>
//                         {
//                           productGallary.map((col, indx) => (
//                             <li
//                               onClick={() => handleColorClick(col, indx)}
//                               className={`transition-all duration-300 ease-in-out  cursor-pointer ${indx === color ? "p-[3px] rounded-full border border-gray-600" : "p-[3px] border border-transparent"}`}
//                             >
//                               <div
//                                 className={`w-6 h-6 leading-5 text-center rounded-full`}
//                                 style={{ backgroundColor: `${col.color}` }}
//                               >

//                               </div>
//                             </li>
//                           ))
//                         }

//                       </ul>
//                       {/* clear button */}
//                       <button
//                         onClick={handleColorClear}
//                         className='text-textColor flex items-center text-[14px]'>
//                         <MdClose />
//                         <span>Clear</span>
//                       </button>
//                     </div>
//                   </div>

//                   {/* choose a  size  */}
//                   <div className='mt-4'>
//                     <span className='block text-sm font-normal text-textColor'>Size : {selectedSize ? selectedSize : "No Size Selected"} </span>
//                     <div className="flex items-center gap-3 mt-2">
//                       {/* size item */}
//                       <ul className='flex  items-center gap-2 '>
//                         {
//                           productGallary.map((sizeSlide, indx) => (
//                             <>
//                               <li
//                                 onClick={() => handleSizeClick(sizeSlide, indx)}
//                                 className={`transition-all duration-300 ease-in-out cursor-pointer ${indx === size ? "opacity-100" : "opacity-50"}`}
//                               >
//                                 <button
//                                   className={`w-9 text-base h-9 leading-5 text-center rounded-md border border-gray-400 p-2 outline-none `}

//                                 >
//                                   {sizeSlide.size}
//                                 </button>
//                               </li>

//                             </>
//                           ))
//                         }

//                       </ul>
//                       {/* clear button */}
//                       <button
//                         onClick={handleSizeClear}
//                         className='text-textColor flex items-center text-[14px]'>
//                         <MdClose />
//                         <span>Clear</span>
//                       </button>
//                     </div>

//                   </div>


//                 </div>
//                 {/* cart button and increment */}
//                 <div className="flex items-center my-4 gap-5">
//                   {/* increment and decrement btn */}
//                   <div className="flex gap-1">
//                     <button className="w-9 h-9 rounded  bg-gray-100 border border-gray-300">+</button>
//                     <span className='w-9 h-9 rounded border border-gray-300 bg-bgOne flex items-center justify-center'>5</span>
//                     <button className="w-9 h-9 rounded  bg-gray-100 border border-gray-300">-</button>
//                   </div>

//                   {/* add to cart button */}
//                   <button
//                     onClick={() => handleAddToCart(product)}
//                     className=" text-white py-2 px-7  hover: rounded text-sm  bg-primary   border-2 border-transparent hover:border-textColor  hover:bg-transparent hover:text-textColor capilatize" >
//                     Add to Cart
//                   </button>
//                   {/* add to wishlist */}

//                 </div>
//                 <hr className='my-3 border-0.5 border-gray-200' />
//                 {/* product others info */}
//                 <div className="flex items-center gap-3 mb-2">
//                   <span className='block text-[16px] font-medium text-textColor'>Category : </span>
//                   <span className='block text-sm font-normal text-textColor'>Headphone</span>
//                 </div>
//                 <div className="flex items-center gap-3 mb-2">
//                   <span className='block text-[16px] font-medium text-textColor'>Brand  : </span>
//                   <span className='block text-sm font-normal text-textColor'>Apple</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>

//       </section >
//       {/* product tabs section*/}
//       <hr className="my-9 border-0.5 border-gray-200" />
//       <section>
//         <div className="w-[94%] lg:w-[90%] mx-auto ">

//           <ProductInfoTabs />
//         </div>
//       </section>

//       <hr className="my-9 border-0.5 border-gray-200" />

//       {/* related production section */}
//       <section className="py-6 ">
//         <div className="w-[94%] lg:w-[93%] mx-auto ">
//           <h2 className="text-2xl text-textColor font-semibold text-left capitalize mb-3 ml-3">
//             Related Products
//           </h2>
//           {/* section title */}
//           <div className="flex items-center justify-between">

//             <div className="flex items-center  flex-wrap">
//               {
//                 products.slice(0, 8).map((product) => (

//                   <div className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 xxl:w-1/5" key={product._id}>
//                     <SingleProduct product={product} />
//                   </div>

//                 ))
//               }

//             </div>
//           </div>
//         </div>
//       </section>

//     </>
//   )
// };

// export default ProductDetails;
