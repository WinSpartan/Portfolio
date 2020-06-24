import React from 'react';
import Scroll from '../common/Scroll';

const Introduction = () =>
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <h1>Stephen Rex Hunter</h1>
      <p>
        Welcome to my Portfolio! 
        <br />
        While the site is a work in progress, hit the jump to learn more about my upcoming projects, experience, and skills.
      </p>
      <ul className="actions">
        <li>
          <Scroll type="id" element="one">
            <a href="#one" className="button">
              Learn more
            </a>
            
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="one">
            <a href="#one" className="button">
              Download Resume
            </a>
            
          </Scroll>
        </li>
      </ul>
      
    </div>
  </section>


export default Introduction;
