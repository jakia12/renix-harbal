import React from 'react'

const NewsLetter = () => {
    const handleSubscriber = event => {
        event.preventDefault()
        const email = event.target.email.value;
        console.log('email',email)
      }
  return (
    <div className='bg-secondary mx-auto w-full text-center pb-24 mb-24 '>

        <div className='pt-24'>
            <h1 className='text-white text-3xl'>Subscribe To our NewsLetter</h1>

           <div className='w-full mx-auto  '>
           <form onSubmit={handleSubscriber} className="flex items-center b justify-center">
            <div className="flex items-center justify-center gap-2 flex-wrap  text-center  my-5">
              <div>
                <input
                  type="email"
                  name="email"
                  className=" text-white rounded-md bg-textColor
                  block h-12 md:w-96  outline-none p-1 pl-4 text-xs mr-4"
                  required
                  placeholder="Enter your email"
                ></input>
              </div>

              <div>
                <button type="submit" className="bg-primary p-3 rounded-md text-white lg:w-[120px]  uppercase block">
                  Submit
                </button>
              </div>
            </div>
          </form>

          <p className='text-primary'>To Get 20% Discount</p>
           </div>
        </div>
    </div>
  )
}

export default NewsLetter