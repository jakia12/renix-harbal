import React from "react";
import "./Dashboard.css";
import img1 from "../../Assets/dasboard-icon/total-order.png";
import img2 from "../../Assets/dasboard-icon/pending-order.png";
import img3 from "../../Assets/dasboard-icon/complete-order.png";
import img4 from "../../Assets/dasboard-icon/total-selling.png";
import img5 from "../../Assets/dasboard-icon/total-appointment.png";
import img6 from "../../Assets/dasboard-icon/pending-appointment.png";
import img7 from "../../Assets/dasboard-icon/completed-appointment.png"

const Dashboard = () => {
    
    return (
        <section className="lg:w-[90%] mx-auto ">
            <div className="container w-full lg:max-w-6xl px-6">
                <div className="flex items-center justify-around md:p-14 p-5 grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div className=" w-full shadow-lg shadow-gray-300 m-3 p-7 bg-white rounded-lg flex justify-start items-center lg:pt-8" >
                        <div className=" mr-4">
                            <img className=" w-[38px] h-[38px] " src={img1} alt="" />
                            
                        </div>
                        <div>
                            <h1 className=" ">Total Order</h1>
                            <div className="water-slider w-full flex flex-col">
                            <div className="range-slider w-full flex flex-col">
                            <span className="range-slider__value">2000</span>
                            <input id="range-slider-val" class="range-slider__range browser-default" type="range" value="2000" min="0" max="5000"></input>
                            </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className=" w-full shadow-lg shadow-gray-300 m-3 p-7 bg-white rounded-lg flex justify-start items-center lg:pt-8" >
                        <div className="mr-4">
                            <img className=" w-[38px] h-[38px] " src={img2} alt="" />
                        </div>
                        <div>
                            <h1>Pending Order</h1>
                            <div class="water-slider w-full flex flex-col">
                            <div class="range-slider w-full flex flex-col">
                            <span class="range-slider__value">2000</span>
                            <input id="range-slider-val" class="range-slider__range browser-default" type="range" value="2000" min="0" max="5000"></input>
                            </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className=" w-full shadow-lg shadow-gray-300 m-3 p-7 bg-white rounded-lg flex justify-start items-center lg:pt-8 " >
                        <div className="mr-4">
                          <img className=" w-[38px] h-[38px] " src={img3} alt="" />
                        </div>
                        <div>
                            <h1>Complete Order</h1>
                            <div class="water-slider w-full flex flex-col">
                            <div class="range-slider w-full flex flex-col">
                            <span class="range-slider__value">2000</span>
                            <input id="range-slider-val" class="range-slider__range browser-default" type="range" value="2000" min="0" max="5000"></input>
                            </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className=" w-full shadow-lg shadow-gray-300 m-3 p-7 bg-white rounded-lg flex justify-start items-center lg:pt-8 " >
                        <div className="mr-4 ">
                        <img className=" w-[38px] h-[38px] " src={img4} alt="" />
                        </div>
                        <div>
                            <h1>Total Selling</h1>
                            <div class="water-slider w-full flex flex-col">
                            <div class="range-slider w-full flex flex-col">
                            <span class="range-slider__value">2000</span>
                            <input id="range-slider-val" class="range-slider__range browser-default" type="range" value="2000" min="0" max="5000"></input>
                            </div>
                            </div>
                        </div>  
                        
                    </div>
                    <div className="w-full shadow-lg shadow-gray-300 m-3 p-7 bg-white rounded-lg flex justify-start items-center lg:pt-8 " >
                        <div className="mr-4">
                        <img className=" w-[38px] h-[38px] " src={img5} alt="" />
                        </div>
                        <div>
                            <h1>Total Appointment</h1>
                            <div class="water-slider w-full flex flex-col">
                            <div class="range-slider w-full flex flex-col">
                            <span class="range-slider__value">2000</span>
                            <input id="range-slider-val" class="range-slider__range browser-default" type="range" value="2000" min="0" max="5000"></input>
                            </div>
                            </div>
                        </div> 
                    </div>
                    <div className=" w-full shadow-lg shadow-gray-300 m-3 p-7 bg-white rounded-lg flex justify-start items-center lg:pt-8 " >
                        <div className="mr-4">
                        <img className=" w-[38px] h-[38px] " src={img6} alt="" />
                        </div>
                        <div>
                            <h1>Pending Appointment</h1>
                            <div class="water-slider w-full flex flex-col">
                            <div class="range-slider w-full flex flex-col">
                            <span class="range-slider__value">2000</span>
                            <input id="range-slider-val" class="range-slider__range browser-default" type="range" value="2000" min="0" max="5000"></input>
                            </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className=" w-full shadow-lg shadow-gray-300 m-3 p-7 bg-white rounded-lg flex justify-start items-center lg:pt-8 " >
                        <div className="mr-4">
                        <img className=" w-[38px] h-[38px] " src={img7} alt="" />
                        </div>
                        <div>
                            <h1>Complete Appointment</h1>
                            <div class="water-slider w-full flex flex-col">
                            <div class="range-slider w-full flex flex-col">
                            <span class="range-slider__value">2000</span>
                            <input id="range-slider-val" class="range-slider__range browser-default" type="range" value="2000" min="0" max="5000"></input>
                            </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    
                </div>

            </div>

        </section>
    )
}

export default Dashboard;
