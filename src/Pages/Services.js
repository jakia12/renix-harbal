import React from 'react';

const Services = () => {
    return (
        <section className='lg:w-[90%] mx-auto'>
            <div className='w-full md:p-14 p-5 grid grid-cols-1 lg:grid-cols-2 gap-5'>
            
            <div className=''>
               <h3 className='uppercase py-8 font-semibold underline underline-offset-8 decoration-2'>Verify Medicine Security Code</h3>
               <form action="">
                <div>
                    <h5 className='py-2 font-semibold'>Security Code <span className='text-red-500'>*</span></h5>
                    <input
                  type="text"
                  name=""
                  className="mt-2 px-3 py-3 border-2 bg-whiteSmoke shadow-sm focus:outline border-whiteSmoke bg-transparent placeholder-slate-400  block w-auto  sm:text-sm rounded-md"
                  required
                  placeholder="Security code"
                ></input>
                </div>
                <div className='py-8'>
                <button type="submit" className="bg-textColor p-2 rounded-md text-white lg:w-[120px]  uppercase block">
                  Verify
                </button>
              </div>
               </form>
            </div>
            <div>
               <h3 className='uppercase py-8 font-semibold underline underline-offset-8 decoration-2'>Security check Information</h3>
               <p className='py-2'>Please Enter Your Security Code.!</p>
            </div>
        </div>
        </section>
    );
};

export default Services;