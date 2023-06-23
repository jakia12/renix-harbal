import React from 'react'
import img1 from "../../../Assets/images/sliderImages/p1.png";
import img2 from "../../../Assets/images/sliderImages/p2.png";
import img3 from "../../../Assets/images/sliderImages/p3.png";
import img4 from "../../../Assets/images/sliderImages/p4.png";
import img5 from "../../../Assets/images/sliderImages/p5.png";
import img6 from "../../../Assets/images/sliderImages/p6.png";
import Slider from 'react-slick'

const NewArrivals = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,

        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        // fade: true,
    };


    const newProducts = [
        {
            _id: 1,
            productName: "Nature Hazmina Plus",
            genericName: " MIRTAZAPINE",
            strength: "15 MG",
            stock: "14",
            price: "800",
            image: `${img1}`,
        },
        {
            _id: 2,
            productName: "Nature Hazmina Plus",
            genericName: " MIRTAZAPINE",
            strength: "15 MG",
            stock: "13",
            price: "600",
            image: `${img2}`,
        },
        {
            _id: 3,
            productName: "Karkuma Superfood",
            genericName: " MIRTAZAPINE",
            strength: "15 MG",
            stock: "12",
            price: "500",
            image: `${img3}`,
        },
        {
            _id: 4,
            productName: "Nature Hazmina Plus",
            genericName: " MIRTAZAPINE",
            strength: "15 MG",
            stock: "12",
            price: "700",
            image: `${img4}`,
        },
        {
            _id: 5,
            productName: "Nature Hazmina Plus",
            genericName: " MIRTAZAPINE",
            strength: "15 MG",
            stock: "15",

            price: "600",
            image: `${img5}`,
        },
        {
            _id: 6,
            productName: "Nature Hazmina Plus",
            genericName: " MIRTAZAPINE",
            strength: "15 MG",
            stock: "11",
            price: "600",
            image: `${img6}`,
        },
    ];
    return (
        <div className='  py-14 bg-[#f7fbf3]'>
            <div className="lg:w-[90%] w-full  mx-auto my-10 text-center">
                <h3 className='bg-thirdLightPrimary w-36 mx-auto font '>F e a t u r e</h3>
                <h1 className='text-secondary font-semibold text-3xl mt-3 mb-6'>New Arrivals</h1>
                <Slider {...settings}>
                    {
                        newProducts?.slice(0, 4)?.map((product) => (
                            <>


                                <div
                                    className=" overflow-hidden product_card m-3 border border-[#ddd] rounded-lg shadow-lg shadow-[#8888884a] "
                                    key={product._id}
                                >
                                    <div className="p-4 relative overflow-hidden ">
                                        <div className="flex justify-between items-center ">
                                            <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                                                Sold out
                                            </span>
                                            <span class="bg-green-100 self-end  text-green-800 text-xs font-medium  px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                                                sale !
                                            </span>
                                        </div>
                                        <img
                                            src={product.image}
                                            alt=""
                                            className="w-[161px] h-[203px] mx-auto "
                                        />
                                        {/* add to cart button */}
                                        <span className="btn_overlay opacity-0 invisible transition_move absolute bottom-[-100%] left-0 bg-primary  hover:bg-textColor p-4 text-center right-0 w-full">
                                            <button className="text-white text-base">Add To Cart</button>
                                        </span>
                                    </div>
                                    <div className="bg-[#f7f7f7] p-4 text-center overflow-hidden">
                                        <h1 className="text-secondary text-sm mt-2">
                                            {product.productName}
                                        </h1>
                                        <h1 className="text-secondary text-sm mt-2">
                                            Generic Name: {product.genericName}
                                        </h1>
                                        <h1 className="text-secondary text-sm mt-2">
                                            Strength: {product.strength}
                                        </h1>

                                        {/* rating icon */}

                                        <div class="flex items-center justify-center my-3">
                                            <svg aria-hidden="true" class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <svg aria-hidden="true" class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <svg aria-hidden="true" class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <svg aria-hidden="true" class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <svg aria-hidden="true" class="w-5 h-5 text-[#cdc9c9] dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        </div>

                                        <p className="text-textColor text-sm mt-2">
                                            Price: BDT {product.price}
                                        </p>
                                    </div>
                                </div>
                            </>

                        ))
                    }
                </Slider>
            </div>





        </div>
    )
}

export default NewArrivals