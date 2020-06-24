import React from "react";

const ContactInformation = () =>
  <section>
    <ul className="contact">
      <li>
        <h3>Current Location</h3>
        <span>
          Providence, RI
        </span>
      </li>
      <li>
        <h3>Email</h3>
        <a href="/#">StephenInDev@outlook.com</a>
      </li>
      <li>
        <h3>Social</h3>
        <ul className="icons">
          <li>
            <a href="/#" className="fa-github">
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a href="/#" className="fa-linkedin">
              <span className="label">LinkedIn</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </section>

export default ContactInformation;
