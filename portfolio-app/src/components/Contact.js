import React from 'react'
import './Contact.css'
 const Contact = () => {
  return (
    <div id="contact">
    <form class="portfolio-form"/>
        <h2>Send me a message.</h2>
        <div class="form-row">
            <label class="form-label">Subject:</label>
            <div class="form-input">
                <input id="mailSubject" class="form-input-text" type="text"/>
            </div>
        </div>
        <div class="form-row">
            <label class="form-label">Message:</label>
            <div class="form-input">
                <textarea id="mailMessage" class="form-input-textarea"></textarea>
            </div>
        </div>
        <div  class="form-submit">
            <a onmouseover="appendMailTo()" id="sendMail" href="mailto:mateonaz11@gmail.com" class="btn-submit">Submit</a>
        </div>
        </div>
  )
}
export default Contact