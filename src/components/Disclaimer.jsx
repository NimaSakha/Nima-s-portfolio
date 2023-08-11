import React from "react"

const Disclaimer = ({ darkTheme }) => {
  return (
    <div
      id='disclaimer'
      className='modal fade'
      role='dialog'
      aria-hidden='true'
    >
      <div
        className='modal-dialog modal-lg modal-dialog-centered'
        role='document'
      >
        <div
          className={
            "modal-content " + (darkTheme ? "bg-dark-2 text-light" : "")
          }
        >
          <div className='modal-header'>
            <h5 className={"modal-title " + (darkTheme ? "text-white" : "")}>
              Copyright &amp; Disclaimer
            </h5>
            <button
              type='button'
              className={"btn-close " + (darkTheme ? "btn-close-white" : "")}
              data-bs-dismiss='modal'
              aria-label='Close'
            />
          </div>
          <div className='modal-body p-4'>
            <p>
              Copyright: The content and design of this website are reminiscent
              of the timeless printing and typesetting industry. Just as Lorem
              Ipsum has served as the industry's standard dummy text since the
              1500s, our creative work reflects a dedication to craftsmanship.
              Disclaimer: The information presented on this site is a creative
              exploration and not intended as factual content. While we draw
              inspiration from classic texts, our content is fictional and
              imaginative. Any semblance to real events or individuals is purely
              coincidental. Contact: Should you have inquiries about our
              creative approach or wish to discuss the content presented on this
              website, please reach out to us at nimasakha25@gmail.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Disclaimer
