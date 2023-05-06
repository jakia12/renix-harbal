import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="container mx-auto   mt-4">
      {/* <div>
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
      </div> */}
      <div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h1 className="text-xl font-medium">Billing Details</h1>
            <div className="flex justify-between items-center my-4">
              <div>
                <label className="text-sm  font-medium">
                  First name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                />
              </div>
              <div>
                <label className="text-sm  font-medium">
                  Last name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border border-gray box-border px-4 py-2 outline-0 w-full"
                />
              </div>
            </div>
            <div>
              <div className="my-4">
                <label className="text-sm font-medium">
                  Company name<span>(optional)</span>
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                />
              </div>
              <div className="my-4">
                <label className="text-sm  font-medium">
                  Country / Region<span className="text-primary"> *</span>
                </label>
                <select className="border text-xs border-gray box-border px-4 leading-6 py-2 outline-0 w-full">
                  <option disabled selected>
                    Choose District
                  </option>
                  <option>Dhaka</option>
                  <option>Dinajpur</option>
                </select>
              </div>
              <div className="my-4">
                <label className="text-sm font-medium">
                  Street address<span className="text-primary"> *</span>
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="House number and street name"
                  className="border text-xs border-gray box-border mb-4 px-4 leading-6 py-2 outline-0 w-full"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Apartment, suite, unit, etc. (optional)"
                  className="border text-gray text-xs border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                />
              </div>
              <div className="my-4">
                <label className="text-sm font-medium">
                  Town / City <span className="text-primary"> *</span>
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                />
              </div>
              <div className="my-4">
                <label className="text-sm font-medium">
                  State<span> *</span>
                </label>
                <select className="border text-xs border-gray box-border px-4 leading-6 py-2 outline-0 w-full">
                  <option disabled selected>
                    Choose District
                  </option>
                  <option>Dhaka</option>
                  <option>Dinajpur</option>
                </select>
              </div>
              <div className="my-4">
                <label className="text-sm font-medium">
                  State<span> *</span>
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                />
              </div>
              <div className="my-4">
                <label className="text-sm font-medium">
                  ZIP Code<span className="text-primary"> *</span>
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                />
              </div>
              <div className="my-4">
                <label className="text-sm font-medium">
                  Phone <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                />
              </div>
              <div className="my-4">
                <label className="text-sm font-medium">
                  Email address <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                />
              </div>
              <h1 className="text-2xl font-semibold">Additional information</h1>
              <div className="my-4">
                <label className="text-sm font-medium text-blue-gray-500">
                  Order notes (optional)
                </label>
                <textarea
                  type="text"
                  name=""
                  id=""
                  placeholder="Notes about order, e.g special notes for delivery."
                  className="border text-xs border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                />
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-xl font-medium">Your Order</h1>
            <div>
              <table class="w-full mt-2  my-4 uppercase border-collapse border border-slate-500  text-sm text-left text-gray-500 dark:text-gray-400">
                <tbody className="text-center">
                  <tr class="bg-white border-b text-sm font-medium dark:bg-gray-800 dark:border-gray-700">
                    <td class="px-6 py-4 border border-gray">Product</td>
                    <td class="px-6 py-4 border border-gray">subtotal</td>
                  </tr>
                  <tr class="bg-white border-b text-sm font-medium dark:bg-gray-800 dark:border-gray-700">
                    <td class="px-6 py-4 border border-gray">Medicine</td>
                    <td class="px-6 py-4 border border-gray"> BDT-200</td>
                  </tr>
                  <tr class="bg-white border-b text-sm font-medium dark:bg-gray-800 dark:border-gray-700">
                    <td class="px-6 py-4 border border-gray">Subtotal</td>
                    <td class="px-6 py-4 border border-gray">BDT-23</td>
                  </tr>
                  <tr class="bg-white border-b text-sm font-medium dark:bg-gray-800 dark:border-gray-700">
                    <td class="px-6 py-4 border border-gray">Total</td>
                    <td class="px-6 py-4 border border-gray">BDT-2000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="rounded-md text-xs bg-thirdLightPrimary p-4 h-1/5">
              <p>Cash on delivery</p>
              <p className="my-6 bg-secondLightPrimary py-3 px-3">
                Pay with cash upon delivery
              </p>
              <hr className="text-secondLightPrimary" />
              <button className="bg-primary text-xs py-4 px-6 my-4 text-white font-medium">
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Checkout;
