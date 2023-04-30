import React, { useEffect, useRef, useState } from 'react'
import './AdminDashboard.css';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import logo from '../Assets/images/logo.svg';
import { TbMedicineSyrup } from 'react-icons/tb';
import { FiUsers } from 'react-icons/fi';
import { BiBorderAll, BiNews } from 'react-icons/bi';
import { GrArticle } from 'react-icons/gr';
import { MdNotifications, MdOutlineDashboardCustomize, MdOutlineMailOutline, MdOutlineArticle } from 'react-icons/md';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { RxCaretUp, RxCaretDown } from 'react-icons/rx';
import { FiSettings } from 'react-icons/fi';
import { TbEqual } from 'react-icons/tb';
import profilePic from '../Assets/images/users/us1.jpg';


const AdminDashboard = () => {
    //hide sidenav by default
    const [isOpen, setIsOpen] = useState(false);


    //show  medicine
    const [openMedicine, setOpenMedicine] = useState(false);
    //show  orders
    const [openOrder, setOpenOrder] = useState(false);

    //show doctor
    const [openDoctor, setOpenDoctor] = useState(false);

    //show news
    const [openNews, setOpenNews] = useState(false);

    //show blog
    const [openBlog, setOpenBlog] = useState(false);

    const navigate = useNavigate();

    //show sidenav on toggle
    const handleToggle = () => {
        isOpen === true ? setIsOpen(false) : setIsOpen(true);
    }

    // //show user dropdown on toggle
    // const handleShow = () => {
    //     showDropdown === true ? setShowDropdown(false) : setShowDropdown(true);
    // }

    //open drop down
    const handleMedicineDropdown = (e) => {

        openMedicine === true ? setOpenMedicine(false) : setOpenMedicine(true);
        //console.log('clicked')
    }

    //open order drop down
    const handleOrderDropdown = (e) => {

        openOrder === true ? setOpenOrder(false) : setOpenOrder(true);
        //console.log('clicked')
    }
    //open docor drop down
    const handleDoctorDropdown = (e) => {

        openDoctor === true ? setOpenDoctor(false) : setOpenDoctor(true);
        //console.log('clicked')
    }
    //open news drop down
    const handleNewsDropdown = (e) => {

        openNews === true ? setOpenNews(false) : setOpenNews(true);
        //console.log('clicked')
    }

    //open blog drop down
    const handleBlogDropdown = (e) => {

        openBlog === true ? setOpenBlog(false) : setOpenBlog(true);
        //console.log('clicked')
    }



    // useEffect(() => {

    // }, []);

    return (
        <section className=''>
            <div className="w-full">
                <div className="md:flex">
                    <div className="w-1/5 lg:block hidden">
                        <div id="drawer-navigation" className="drawer_height w-1/5  z-40 fixed left-0 top-0 p-4 overflow-y-auto h-full bg-secondary dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label">
                            <div className="py-4 ">
                                {/* <div className="flex items-center justify-center">
                                <div className="py-3 text-center">
                                    <img src={user?.photoURL ? user.photoURL : "NO photo available"} className="rounded-full max-w-30 max-h-30 user_image" alt="User Photo" />
                                    <h4 className="text-lg mt-5 mb-2 text-medium text-white">{user?.displayName}</h4>
                                </div>
                            </div> */}
                                <Link to={'/'} className="flex items-center justify-center">

                                    <img src={logo} className="h-8 mr-3" alt="Renix Logo" />
                                </Link>


                                <ul className="space-y-2 py-6">
                                    <li>
                                        <Link to={'overview'}

                                            className="flex items-center gap-5 p-2 text-[14px] font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-white"

                                        >
                                            <span className='text-lg'>
                                                <MdOutlineDashboardCustomize />
                                            </span>


                                            <span className="">Dashboard</span>

                                        </Link>
                                    </li>
                                    <li


                                        onClick={handleMedicineDropdown}
                                    >
                                        <Link to={''}

                                            className="flex items-center gap-5 p-2 text-[14px] font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-white"

                                        >
                                            <span className='text-lg'>
                                                <TbMedicineSyrup />
                                            </span>


                                            <span className="">Medicine</span>
                                            {
                                                openMedicine === true ?
                                                    (
                                                        <span className='text-2xl'>
                                                            <RxCaretUp />
                                                        </span>
                                                    )
                                                    :
                                                    (<span className='text-2xl'>
                                                        <RxCaretDown />
                                                    </span>)
                                            }

                                        </Link>

                                        <ul
                                            className={`pl-3  ${openMedicine === true ? "block" : "hidden"}`}

                                        >
                                            <li>
                                                <Link to={'medicine/addMedicineCategory'}

                                                    className="flex items-center  p-2 text-[14px] font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-white"

                                                >
                                                    {/* <span className='text-lg'>
                                                        <TbMedicineSyrup />
                                                    </span> */}


                                                    <span className="ml-2">Add Category</span>

                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'medicine/allMedicineCategory'}

                                                    className="flex items-center p-2 text-[14px] font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-white"

                                                >
                                                    {/* <span className='text-lg'>
                                                        <TbMedicineSyrup />
                                                    </span> */}


                                                    <span className="ml-3">All Categories</span>

                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'medicine/addMedicine'}

                                                    className="flex items-center p-2 text-[14px] font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-white"

                                                >
                                                    {/* <span className='text-lg'>
                                                        <TbMedicineSyrup />
                                                    </span> */}


                                                    <span className="ml-3">Add Medicine</span>

                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'medicine/allMedicines'}

                                                    className="flex items-center p-2 text-[14px] font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-white"

                                                >
                                                    {/* <span className='text-lg'>
                                                        <TbMedicineSyrup />
                                                    </span> */}


                                                    <span className="ml-3">All Medicines</span>

                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li

                                        onClick={handleOrderDropdown}
                                    >
                                        <Link to={''}

                                            className="flex items-center gap-5 p-2 text-[14px] font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-white"

                                        >
                                            <span className='text-lg'>
                                                <BiBorderAll />
                                            </span>

                                            <span className="">Orders</span>
                                            {
                                                openOrder === true ?
                                                    (
                                                        <span className='text-2xl'>
                                                            <RxCaretUp />
                                                        </span>
                                                    )
                                                    :
                                                    (<span className='text-2xl'>
                                                        <RxCaretDown />
                                                    </span>)
                                            }

                                        </Link>
                                        <ul
                                            className={`pl-3  ${openOrder === true ? "block" : "hidden"}`}
                                        >
                                            <li>
                                                <Link to={'orders/pendingOrders'}

                                                    className="flex items-center p-2 text-[14px] font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-white"

                                                >
                                                    {/* <span className='text-lg'>
                                                        <TbMedicineSyrup />
                                                    </span> */}


                                                    <span className="ml-3">Pending Orders</span>

                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'orders/confirmedOrders'}

                                                    className="flex items-center p-2 text-[14px] font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-white"

                                                >
                                                    {/* <span className='text-lg'>
                                                        <TbMedicineSyrup />
                                                    </span> */}


                                                    <span className="ml-3">Confirmed Orders</span>

                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'orders/rejectedOrders'}

                                                    className="flex items-center p-2 text-[14px] font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-white"

                                                >
                                                    {/* <span className='text-lg'>
                                                        <TbMedicineSyrup />
                                                    </span> */}


                                                    <span className="ml-3">Rejected Orders</span>

                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li
                                        onClick={handleDoctorDropdown}
                                    >

                                        <Link to={''}

                                            className="flex items-center gap-5 p-2 text-[14px] font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-white"

                                        >
                                            <span className='text-lg'>
                                                <FiUsers />
                                            </span>


                                            <span className="">Doctors</span>
                                            {
                                                openDoctor === true ?
                                                    (
                                                        <span className='text-2xl'>
                                                            <RxCaretUp />
                                                        </span>
                                                    )
                                                    :
                                                    (<span className='text-2xl'>
                                                        <RxCaretDown />
                                                    </span>)
                                            }

                                        </Link>
                                        <ul
                                            className={`pl-3  ${openDoctor === true ? "block" : "hidden"}`}
                                        >
                                            <li>
                                                <Link to={'doctor/addDoctor'}

                                                    className="flex items-center p-2 text-[14px] font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-white"

                                                >
                                                    {/* <span className='text-lg'>
                                                        <TbMedicineSyrup />
                                                    </span> */}


                                                    <span className="ml-3">Add doctor</span>

                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'doctor/allDoctors'}

                                                    className="flex items-center p-2 text-[14px] font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-white"

                                                >
                                                    {/* <span className='text-lg'>
                                                        <TbMedicineSyrup />
                                                    </span> */}


                                                    <span className="ml-3">All Doctors</span>

                                                </Link>
                                            </li>

                                        </ul>
                                    </li>
                                    <li
                                        onClick={handleNewsDropdown}
                                    >
                                        <Link to={''}

                                            className="flex items-center gap-5 p-2 text-[14px] font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-white"

                                        >
                                            <span className='text-lg'>
                                                <BiNews />
                                            </span>


                                            <span className="">News and Media</span>
                                            {
                                                openNews === true ?
                                                    (
                                                        <span className='text-2xl'>
                                                            <RxCaretUp />
                                                        </span>
                                                    )
                                                    :
                                                    (<span className='text-2xl'>
                                                        <RxCaretDown />
                                                    </span>)
                                            }

                                        </Link>
                                        <ul
                                            className={`pl-3  ${openNews === true ? "block" : "hidden"}`}
                                        >
                                            <li>
                                                <Link to={'news-media/addNewsCategory'}

                                                    className="flex items-center p-2 text-[14px] font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-white"

                                                >
                                                    {/* <span className='text-lg'>
                                                        <TbMedicineSyrup />
                                                    </span> */}


                                                    <span className="ml-3">Add Category</span>

                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'news-media/addNewsandMedia'}

                                                    className="flex items-center p-2 text-[14px] font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-white"

                                                >
                                                    {/* <span className='text-lg'>
                                                        <TbMedicineSyrup />
                                                    </span> */}


                                                    <span className="ml-3">Add News</span>

                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'news-media/allNewsandMedia'}

                                                    className="flex items-center p-2 text-[14px] font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-white"

                                                >
                                                    {/* <span className='text-lg'>
                                                        <TbMedicineSyrup />
                                                    </span> */}


                                                    <span className="ml-3">All News</span>

                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li

                                        onClick={handleBlogDropdown}
                                    >
                                        <Link to={''}

                                            className="flex items-center gap-5 p-2 text-[14px] font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-white"

                                        >
                                            <span className='text-lg text-white'>
                                                <MdOutlineArticle />
                                            </span>


                                            <span className="">Blog</span>
                                            {
                                                openBlog === true ?
                                                    (
                                                        <span className='text-2xl'>
                                                            <RxCaretUp />
                                                        </span>
                                                    )
                                                    :
                                                    (<span className='text-2xl'>
                                                        <RxCaretDown />
                                                    </span>)
                                            }

                                        </Link>
                                        <ul
                                            className={`pl-3  ${openBlog === true ? "block" : "hidden"}`}
                                        >
                                            <li>
                                                <Link to={'blog/addBlogCategory'}

                                                    className="flex items-center p-2 text-[14px] font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-white"

                                                >
                                                    {/* <span className='text-lg'>
                                                        <TbMedicineSyrup />
                                                    </span> */}


                                                    <span className="ml-3">Add Category</span>

                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'blog/addBlog'}

                                                    className="flex items-center p-2 text-[14px] font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-white"

                                                >
                                                    {/* <span className='text-lg'>
                                                        <TbMedicineSyrup />
                                                    </span> */}


                                                    <span className="ml-3">Add Blog</span>

                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'blog/allBlogs'}

                                                    className="flex items-center p-2 text-[14px] font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-white"

                                                >
                                                    {/* <span className='text-lg'>
                                                        <TbMedicineSyrup />
                                                    </span> */}


                                                    <span className="ml-3">All Blogs</span>

                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to={'email/allEmails'}

                                            className="flex items-center p-2 text-[14px] font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-white"

                                        >
                                            <span className='text-lg'>
                                                <MdOutlineMailOutline />
                                            </span>


                                            <span className="ml-3">Subcribed Emails</span>

                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* dashboard main part */}
                    <div className="w-full lg:w-4/5">
                        <div>

                            <div className="bg-[#E7F7F4]  py-4 px-3">

                                <div className="flex items-center justify-around ">
                                    <span className='hidden md:inline-block text-firstCol   mr-3'>
                                        <TbEqual />
                                    </span>
                                    {/* search bar */}
                                    <div className=" hidden md:block">
                                        <form onSubmit='' className='relative'>
                                            <span className="absolute top-3 left-5">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                                </svg>
                                            </span>

                                            <input
                                                type="text"
                                                name="searchBar"
                                                id="searchBar"
                                                className="pl-14 py-2.5 pr-2 block  rounded-lg border border-[#E8E8ED] bg-[#F9FAFB] text-sm w-[306px]"
                                                placeholder="Search Files..."
                                            />
                                        </form>

                                    </div>

                                    <div className="flex items-center justify-center gap-4">


                                        {/* notification icon */}
                                        <div className="pl-7 pr-3 relative inline-flex items-center cursor-pointer">
                                            <span className="text-2xl text-[#191919] inline-block">
                                                <IoMdNotificationsOutline />
                                            </span>
                                            <div class="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-[#111111c1] bg-firstCol border-2 border-gray-800 rounded-full -top-2 right-1 dark:border-gray-900">5</div>

                                        </div>
                                        {/* settings icon */}
                                        <span className="text-xl text-[#191919] inline-block">
                                            <FiSettings />
                                        </span>
                                        {/* user dropdown */}
                                        <div className="ml-5 mr-6 flex items-center cursor-pointer relative"
                                        //  onClick={handleShow}
                                        >
                                            <img src={profilePic} alt="" className='rounded-full w-10 h-10 md:w-10 md:h-10 ' />
                                            {/* <button className="text-2xl text-white">
                                                    <IoMdArrowDropdown />
                                                </button>
                                                <div
                                                    className="absolute top-16 z-10 left-0 w-44 p-5 rounded shadow-lg shadow-gray-300 bg-gray-100 "
                                                    style={{ display: showDropdown === true ? "block" : "none" }}
                                                >
                                                    <ul>
                                                        <li className='mb-3'>
                                                            <a href="">{user?.email}</a>
                                                        </li>
                                                        <li>

                                                            <button
                                                                className='flex items-center justify-center text-base'
                                                                onClick={handleLogOut}
                                                            >
                                                                <span className="text-xl text-dark mr-3"> <AiOutlineLogout /></span>
                                                                Sign Out
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div> */}

                                        </div>
                                        <span className=' text-white  mx-3 md:hidden cursor-pointer' title='Open sidenav'
                                            onClick={handleToggle}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                                            </svg>

                                        </span>

                                    </div>


                                </div>
                                <hr className='my-3 md:hidden' />                                    {/* mobile search form */}
                                <div className="py-4  md:hidden px-40 text-center flex justify-center items-center">
                                    <form onSubmit='' className='relative text-center'>
                                        <span className="absolute top-3 left-5">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                            </svg>
                                        </span>

                                        <input
                                            type="text"
                                            name="searchBar"
                                            id="searchBar"
                                            className="pl-14 py-2.5 pr-2 block  rounded-lg border-gray-300 bg-card text-sm "
                                            placeholder="Search here..."
                                        />
                                    </form>
                                </div>
                            </div>
                            <Outlet />
                            {/* sidenav for mobile screen */}
                            <div className="">

                                <div id="drawer-navigation" className={`side_nav block lg:hidden z-40 h-screen p-4  bg-white w-80 dark:bg-gray-800 ${isOpen === true ? 'activ' : ''}`} tabindex="-1" aria-labelledby="drawer-navigation-label">
                                    {/* <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5> */}


                                    <button type="button" data-drawer-dismiss="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                        onClick={handleToggle}
                                    >
                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        <span className="sr-only">Close menu</span>
                                    </button>
                                    <div className="py-4 overflow-y-auto px-7">
                                        <Link to="/" className="flex items-center justify-center">

                                            <span className="text-center text-2xl font-medium whitespace-nowrap text-white py-4">Thrift Store</span>
                                        </Link>

                                        <hr className="divider_line my-3" />
                                        <ul className="space-y-2">
                                            <li>
                                                <a href={'overview'} className="flex items-center p-2 text-base font-normal text-gray-100 rounded-lg dark:text-white dark:hover:bg-gray-700">
                                                    <svg class="w-6 h-6 xl:w-5 xl:h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 19C10.067 19 8.31704 18.2165 7.05029 16.9498L12 12V5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"></path></svg>

                                                    <span className="ml-3">Dashboard</span>

                                                </a>
                                            </li>


                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </section>
    )
}

export default AdminDashboard