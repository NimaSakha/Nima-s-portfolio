import React from "react"

function Contact() {
  return (
    <div className='pt-topSm  h-topSm h-almostsm '>
      <div className=''>
        <h1 className=' lg:text-center font-bold text-4xl text-indigo-600'>
          Contact:
        </h1>
      </div>
      <form
        className=' mt-10 flex flex-col justify-center justify-items-center align-middle items-center gap-3 '
        action='https://getform.io/f/c73c5492-eaec-424b-a282-1fe65b450168'
        method='POST'
      >
        <input
          className='h-9 p-3 border-2 border-solid border-zinc-500 rounded-lg    w-form max-w-lg'
          type='text'
          placeholder='Name'
          name='name'
        />
        <input
          className='h-9 p-3 border-2 border-solid border-zinc-500 rounded-lg   w-form max-w-lg'
          type='email'
          placeholder='Email'
          name='email'
        />
        <textarea
          className='h-32 p-3  border-2 border-solid border-zinc-500 rounded-lg w-form max-w-lg'
          type='text'
          name='message'
          placeholder='Message'
        />

        <button
          className=' p-2  text-white  font-bold bg-indigo-600 hover:bg-indigo-700  rounded-lg w-form max-w-lg'
          type='submit'
        >
          Send
        </button>
      </form>
      <div className=' mt-5 flex flex-col items-center justify-center'>
        <div>
          Phone:
          <a className=' ml-2 text-indigo-600' href='tel:0477353123'>
            +61 0477353123
          </a>
        </div>
        <div>
          Email:
          <a className='ml-2 text-indigo-600' href='mailto:0477353123'>
            nimasakha25@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
