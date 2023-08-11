import React from "react"

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: "Web development",
      desc: "I build professional commercial websites that meet industry standard and also modern magical landing pages.",
      icon: "fa-solid fa-computer",
    },
    {
      name: "Web Design",
      desc: "I design modernly aesthetic and stunning web pages to attract potential customers.",
      icon: "fas fa-desktop",
    },

    {
      name: "AI automation",
      desc: "I use AI to help automate your business and to create AI chat bots to convert potential clients to real clients with no work.",
      icon: "fa-solid fa-robot",
    },
    {
      name: "App Design & Develop",
      desc: "I design & develop accessible beautiful easy to use powerful mobile application so we can take your idea to reality.",
      icon: "fa-solid fa-mobile",
    },
  ]

  return (
    <section
      id='services'
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className='position-relative d-flex text-center mb-5'>
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Services
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            What I Do?
            <span className='heading-separator-line border-bottom border-3 border-primary d-block mx-auto' />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className='row'>
          <div className='col-lg-11 mx-auto'>
            <div className='row'>
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className='col-md-6' key={index}>
                    <div className='featured-box style-3 mb-5'>
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  )
}

export default Services
