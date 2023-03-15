import { Link } from "react-router-dom"
import mobile from "../../img/mobileWatermark.png"
import desktop from "../../img/watermark.png"
import Contact from "../Contact"
import Skills from "../Skills"
const Home = () => {
  return (
    <div className=' h-screen overflow-y-scroll snap-mandatory snap-y'>
      <div className='  snap-start'>
        <div className=' py-10 px-4 sm:px-6 lg:px-8 pt-top h-screen flex flex-col'>
          <div className=' bg-whitemax-w-7xl mx-auto sm:px-6 lg:px-8'>
            <div className='md:text-center'>
              <h2 className='text-base text-indigo-600 font-semibold tracking-wide uppercase'>
                About
              </h2>
              <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                I'm Nima Sakha
              </p>
              <p className=' mt-4 max-w-2xl text-xl text-gray-500 md:mx-auto'>
                I'm Nima Sakha, a Sydney-based full-stack developer with 2+
                years of experience. I've built 20+ projects, always seeking new
                challenges to learn and innovate. My strong work ethic and
                attention to detail ensure that I deliver high-quality software
                solutions that exceed client expectations.
              </p>
              <div className=' mt-10 sm:flex sm:justify-center lg:justify-center'>
                <div className='rounded-md shadow'>
                  <Link
                    to='/projects'
                    className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'
                  >
                    View My Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=' h-fill flex flex-col justify-center items-center'>
            <Skills />
          </div>
        </div>
        <img
          className=' w-screen absolute -z-10 bottom-0 lg:hidden'
          src={mobile}
          alt=''
        />
        <img
          className='  hidden  h-almost fixed -z-10 bottom-0 lg:visible lg:inline'
          src={desktop}
          alt=''
        />
      </div>
      <div className=' pt-topSm  snap-start'>
        <Contact />
      </div>
    </div>
  )
}

export default Home
