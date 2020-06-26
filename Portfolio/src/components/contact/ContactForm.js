import React from 'react';

const ContactForm = () =>
  <section>
    <form method="post" action="https://formspree.io/StephenInDev@outlook.com">
      <div className="fields">
        <div className="field half">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="email" name="_replyto" id="email" />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="5" />
        </div>
      </div>
      <ul className="actions">
        <li>
          <button type="submit" className="button submit">
            Send Message
          </button>
        </li>
        <li>
          <button type="reset" value="Clear" className="button submit">
            Clear
          </button>
        </li>
      </ul>
    </form>
  </section>

export default ContactForm;


