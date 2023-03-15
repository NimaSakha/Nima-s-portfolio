import skills from "../img/skills.png"

function Skills() {
  return (
    <div className='flex justify-center  bg-white w-screen lg:w-auto '>
      <img
        className='  lg:w-skills opacity-90 lg:max-w-3xl p-5 lg:p-0   '
        src={skills}
        alt=''
      />
    </div>
  )
}

export default Skills
