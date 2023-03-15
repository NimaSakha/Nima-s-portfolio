import dash from "../../img/project-dash.png"
import rate from "../../img/ratingApp.png"
import ApiApp from "../../img/API.png"

function Projects() {
  return (
    <div className=' pt-top'>
      <h1 className=' lg:text-center font-bold text-4xl text-indigo-600'>
        Projects:
      </h1>
      <div className='flex justify-center items-center justify-items-stretch  p-5 pt-12 gap-10 flex-wrap '>
        <div className=' border p-2 rounded-lg w-project max-w-md '>
          <a
            target='blank'
            className=''
            href='https://strong-sopapillas-15536b.netlify.app/'
          >
            <h1 className=' mb-4 font-bold text-2xl'>Mock Dashboard</h1>
            <img className=' mb-4 rounded-lg' src={dash} />
            <p>
              This project demonstrates my HTML Css and Js skills. I developed
              this project to have a real world example of my skills inside my
              portfolio.Languages: <span className=' font-bold'>HTML</span>,
              <span className=' font-bold'>CSS</span>,{" "}
              <span className=' font-bold'>JS</span>
            </p>
          </a>
          <a
            className=' text-indigo-500 font-bold underline'
            target='blank'
            href='https://github.com/NimaSakha/unit-7-porject-2'
          >
            Github
          </a>
        </div>
        <div className=' p-2 border rounded-lg w-project max-w-md'>
          <a
            target='blank'
            className=''
            href='https://earnest-belekoy-23427c.netlify.app/'
          >
            <h1 className=' mb-4 font-bold text-2xl'>Rating App</h1>
            <img className=' mb-4 rounded-lg' src={rate} />
            <p>
              This project is a real world mock project used to rate a servcie.
              Languages: <span className=' font-bold'>React</span>,
              <span className=' font-bold'>Tailwind</span>
            </p>
          </a>
          <a
            className=' text-indigo-500 font-bold underline'
            target='blank'
            href='https://github.com/NimaSakha/RatingApp'
          >
            Github
          </a>
        </div>
        <div className=' border p-2 rounded-lg w-project max-w-md'>
          <a
            target='blank'
            className=''
            href='https://nimasakha.github.io/teamTreeHouse-unit8-project/'
          >
            <h1 className='mb-4 font-bold text-2xl'>API App</h1>
            <img className='mb-4 rounded-lg' src={ApiApp} />
            <p>
              This project demonstrates my Ability to work with the fetch API to
              retrieve Data. Languages: <span className=' font-bold'>HTML</span>
              ,<span className=' font-bold'>CSS</span>,
              <span className=' font-bold'>JS</span>
            </p>
          </a>
          <a
            className=' text-indigo-500 font-bold underline'
            target='blank'
            href='https://github.com/NimaSakha/teamTreeHouse-unit8-project'
          >
            Github
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
