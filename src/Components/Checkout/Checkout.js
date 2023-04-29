import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="container mx-auto w-[1235px]  mt-4">
      <div>
        <div className=" border py-2 px-4 bg-thirdLightPrimary bg-opacity-50 border-primary text-blue-gray-400">
          Regular customer ?{" "}
          <Link className="font-light text-black hover:text-primary">
            {" "}
            Click here to login
          </Link>
        </div>
        <div className="font-light  mb-1 ">
          <label className="leading-8">
            Phone <span className="text-primary ">*</span>
          </label>
          <input
            className="w-full border border-blue-gray-100 box-border outline-1 outline-primary px-3 py-1"
            type="text"
            placeholder="Phone"
          />
        </div>
        <button className="uppercase text-white bg-primary mt-8 py-2 px-5 rounded-lg text-sm">
          log in with otp
        </button>
      </div>
      <div className="flex font-light  text-sm flex-col justify-center items-center">
        <p className=" leading-10">OR</p>
        <Link to={"/login"} className="underline">
          Login With Email & Password
        </Link>
      </div>
      <div className="mt-10">
        <h1 className="uppercase font-semibold text-xl my-4">
          Billing & shipping
        </h1>
        <div className=" grid grid-cols-3 gap-4 font-light">
          <div>
            <label>
              Name<span className="text-primary">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-blue-gray-100 box-border outline-1 outline-primary px-3 py-1"
            />
          </div>
          <div>
            <label>
              Phone<span className="text-primary">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-blue-gray-100 box-border outline-1 outline-primary px-3 py-1"
            />
          </div>
          <div>
            <label>Email address (option)</label>
            <input
              type="text"
              className="w-full border border-blue-gray-100 box-border outline-1 outline-primary px-3 py-1"
            />
          </div>
          <div>
            <label>
              District<span className="text-primary">*</span>
            </label>
            <select className="text-sm font-light select select-bordered w-full border border-blue-gray-100 box-border outline-1 outline-primary px-3 py-1">
              <option disabled selected>
                Choose District
              </option>
              <option>Dhaka</option>
              <option>Dinajpur</option>
            </select>
          </div>
          <div>
            <label>Area (optional)</label>
            <select className="text-sm font-light select select-bordered w-full border border-blue-gray-100 box-border outline-1 outline-primary px-3 py-1">
              <option disabled selected>
                Choose Area
              </option>
              <option>Dhaka</option>
              <option>Dinajpur</option>
            </select>
          </div>
          <div>
            <label>
              Address<span className="text-primary">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-blue-gray-100 box-border outline-1 outline-primary px-3 py-1"
            />
          </div>
        </div>
        <div className="flex justify-start mt-1 items-center">
          <input type="checkbox" name="" id="" />
          <label className="text-sm font-light px-1">Create an account?</label>
        </div>
      </div>
      <div className="my-8 text-sm font-light ">
        <label> Order Notes (optional)</label>
        <textarea
          className="w-full my-2 border border-blue-gray-100 box-border outline-1 outline-primary p-4"
          name=""
          id=""
          cols="30"
          rows="2"
          placeholder="Notes about your order, e.g. special notes for delivery."
        ></textarea>
      </div>
      <div>
        <h1 className="uppercase font-semibold text-xl my-4">Your order</h1>
        <p className="font-sm text-base text-primary my-6">Have Coupon?</p>
        <p className="text-base font-medium my-6">Choose Shipping Method</p>
        <div className="my-8 text-sm font-light">
          <div className="mb-10">
            <div className="flex justify-between items-center mb-3">
              <div className="flex justify-center items-center gap-2">
                <input type="radio" name="" id="" />
                <label>Delivery Outside Dhaka</label>
              </div>
              <div>
                <span>৳</span> 49.00
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-2">
                <input type="radio" name="" id="" />
                <label>Delivery Inside Dhaka</label>
              </div>
              <div>
                <span>৳</span> 49.00
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center my-4">
            <div className="text-base font-medium">Cart total</div>
            <div>
              <span>৳</span> 49.00
            </div>
          </div>
          <hr />
          <div className="flex justify-between items-center my-4">
            <div className="text-lg text-primary font-medium">Grand total</div>
            <div>
              <span>৳</span> 49.00
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
