import React from 'react'
import { useForm } from 'react-hook-form';

const AddBlog = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleAddBlog = () => {

    }
    return (
        <section className="py-10 md:py-14">
            <div className=' form_wrapper bg-white px-10  w-full mx-auto md:max-w-4xl lg:max-w-4xl rounded'>

                <h2 className="text-3xl font-semibold text-dark  mb-10 text-center">Add Blog</h2>

                <form onSubmit={handleSubmit(handleAddBlog)} className="shadow-lg shadow-gray-300 px-8 py-10 rounded flex flex-col gap-4 text-left">
                    {/* News title */}

                    <div className="mb-1 ">
                        <label for="repeat-password" className="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white">Blog Title</label>
                        <input
                            type="text"

                            className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500"
                            placeholder="Blog Title"
                            {...register("blogTitle", {
                                required: "Blog Title is required",


                            })}
                        />
                        {errors.blogTitle && <p className='text-red-500 mt-1'>{errors.blogTitle.message}</p>}
                    </div>
                    {/* blog Category */}
                    <div className="mb-1  w-full ">
                        <label for="repeat-password" className="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white">Blog category</label>
                        <select id="condition"
                            className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500"
                            {...register("blogCategory", {
                                required: "Blog category is required",


                            })}
                        >
                            <option value="" disabled selected>Choose a Category</option>
                            <option value="Excellent">National</option>
                            <option value="Good">International</option>
                            <option value="Fair">Entertainment</option>

                        </select>
                        {errors.blogCategory && <p className='text-red-500 mt-1'>{errors.blogCategory.message}</p>}
                    </div>
                    {/* blog Image image */}

                    <div className="mb-1">
                        <label for="repeat-password" className="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white"> Doctor Photo</label>
                        <input className="block w-full text-sm text-gray-900  rounded-lg cursor-pointer bg-[#F0FDF4] dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-2" id="file_input" type="file"
                            {...register("blogImage", {
                                required: "Blog image is required",


                            })}
                        />
                        {errors.blogImage && <p className='text-red-500 mt-1'>{errors.blogImage.message}</p>}
                    </div>


                    {/*news description */}
                    <div className="mb-1">
                        <label for="repeat-password" className="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white">Description</label>
                        <textarea
                            rows="5"
                            className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500"

                            placeholder="News Description here..."
                            {...register("newsDescription", {
                                required: "Description is required",


                            })}
                        ></textarea>
                        {errors.newsDescription && <p className='text-red-500 mt-1'>{errors.newsDescription.message}</p>}
                    </div>


                    <div className="text-center pt-3">
                        <button className='bg-primary hover:bg-lightPrimary text-white  py-2 rounded-lg text-lg w-fit px-8' type="submit" >
                            Add Blog
                        </button>
                    </div>
                </form>

            </div>
        </section>
    )
}

export default AddBlog