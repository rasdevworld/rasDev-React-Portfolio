import { useState } from 'react'
// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers'

function ContactSection() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e
    const inputType = target.name
    const inputValue = target.value

    // Based on the input type, we set the state of either email, subject, and message
    if (inputType === 'email') {
      setEmail(inputValue)
    } else if (inputType === 'subject') {
      setSubject(inputValue)
    } else {
      setMessage(inputValue)
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault()

    // First we check to see if the email is not valid or empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid or empty!')
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the message is not empty. 
    }
    if (!subject) {
      setErrorMessage(
        `Subject is empty!`
      );
      return;
    }
    if (!message) {
      setErrorMessage(
        `Message is empty!`
      );
      return;
    }
    alert(`Your message has been sent!`)

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setEmail('')
    setSubject('')
    setMessage('')
  };



    return <>
        <div class="card">
          <div class="card-block">
            <h2>Contact</h2>
            <form action="" class="reveal-content" onSubmit={handleFormSubmit}>
              <div class="form-group">
                <input type="email" class="form-control" id="email" value={email} name="email" onChange={handleInputChange}placeholder="Email"/>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="subject" value={subject} name="subject" onChange={handleInputChange}placeholder="Subject"/>
              </div>
              <div class="form-group">
                <textarea class="form-control" rows="5" value={message} name="message" onChange={handleInputChange} placeholder="Enter your message"></textarea>
              </div>
              <div class="form-group">
                <button type="submit" class=" btn btn-primary">Send message</button>
              </div> 
            </form>
            {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
      )}
          </div>
        </div>
    </>
}

export default ContactSection