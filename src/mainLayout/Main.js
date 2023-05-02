import React from 'react'
import WebNav from '../Layouts/WebNav'
import Footer from '../Layouts/Footer'
import { Outlet } from 'react-router-dom'

const Main = () => {
    return (
        <>
            <WebNav />
            <Outlet />
            <Footer />

        </>
    )
}

export default Main