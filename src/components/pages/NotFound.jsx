import React from "react"
import { Link } from "react-router-dom"

function Noftfound() {
  return (
    <div className='flex gap-8 flex-col h-screen justify-center items-center'>
      <h1 className=' text-center font-bold text-3xl text-slate-800'>
        404 Error: Page Not Found!
      </h1>
      <Link
        to='/'
        className=' text-center font-bold rounded-3xl w-60 py-4 text-white bg-red-600'
      >
        Return Home
      </Link>
    </div>
  )
}

export default Noftfound
