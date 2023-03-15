import { Link } from "react-router-dom"

function Header() {
  return (
    <div className='flex justify-between px-3 py-4 bg-indigo-800 text-white w-screen fixed z-10'>
      <Link to='/' className='ml-0 font-bold text-2xl'>
        Nima Sakha
      </Link>
      <div className='flex justify-around w-2/5 max-w-lg px-4 sm:w-60 '>
        <Link to='/' className=' p-2 focus:opacity-80 focus:font-bold'>
          Home
        </Link>
        <Link to='/projects' className=' focus:opacity-80 focus:font-bold p-2'>
          Projects
        </Link>
      </div>
    </div>
  )
}

export default Header
