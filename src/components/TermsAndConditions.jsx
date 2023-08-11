import React from "react"

const TermsAndConditions = ({ darkTheme }) => {
  return (
    <div
      id='terms-policy'
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
              Terms &amp; Policy
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
              Acceptance of Terms: By accessing or using this website, you
              acknowledge and agree to abide by these terms and policies. If you
              do not agree with any part of these terms, please refrain from
              using the website. Use of Content: The content provided on this
              website is intended for general informational purposes. While we
              strive to provide accurate and up-to-date information, we make no
              warranties or representations of any kind, express or implied,
              about the completeness, accuracy, reliability, suitability, or
              availability of the content. Any reliance you place on such
              content is strictly at your own risk. Intellectual Property: All
              materials, code, and content on this site are protected by
              intellectual property laws. Unauthorized use, reproduction, or
              distribution of any materials is prohibited without prior written
              consent from us. Third-Party Links: This website may contain links
              to third-party websites. These links are provided for your
              convenience and do not signify endorsement or control over the
              content on those sites. We are not responsible for the content or
              practices of linked sites. Privacy Policy: Your privacy is
              important to us. Our Privacy Policy outlines how we collect, use,
              and protect your personal information. By using this website, you
              consent to the practices described in the Privacy Policy. Cookies:
              This website may use cookies to enhance your browsing experience.
              By using this website and agreeing to these terms, you consent to
              our use of cookies in accordance with our Privacy Policy.
              Limitation of Liability: We shall not be liable for any direct,
              indirect, incidental, consequential, or punitive damages arising
              out of your access or use of this website. This includes any
              errors or omissions in the content, or any actions taken based on
              the information provided. Changes to Terms & Policy: We reserve
              the right to modify or replace these terms and policies at any
              time. It is your responsibility to review these terms periodically
              for changes. Continued use of the website after changes implies
              acceptance of the modified terms. Contact Us: If you have any
              questions or concerns regarding these terms and policies or the
              content on this website, please contact us at [your contact
              details].
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsAndConditions
