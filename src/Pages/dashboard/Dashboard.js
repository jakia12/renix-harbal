import React from "react";

const Dashboard = () => {
    return (
        <section className="py-14 ">
            <div className="container w-full lg:max-w-6xl px-6">
                <div className="flex items-center justify-around">
                    <div className=" w-full sm:w-6/12 md:w-3/12" key={siteData.id}>
                        <div className="shadow-lg shadow-gray-300 m-3 p-7 bg-white rounded-lg">
                            <h3 className="text-lg text-gray-500 font-medium">{siteData.title}</h3>
                            <h1 className="text-3xl font-bold text-dark my-2">{siteData.amount}</h1>
                            <p className="text-gray-500 text-sm sm:text-xs font-normal">21% more than last month</p>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Dashboard;
