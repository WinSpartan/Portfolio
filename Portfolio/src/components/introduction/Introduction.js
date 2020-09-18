import React from 'react';
import Scroll from '../common/Scroll';

const Introduction = () =>
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <h1>Stephen Rex Hunter</h1>
      <p>
        Welcome to my Portfolio! 
        <br />
        Scroll down or hit the jump to learn more about my projects, experience, and skills.
      </p>
      <ul className="actions">
        <li>
          <Scroll type="id" element="one">
            <a href="#one" className="button">
              Learn more
            </a>
            
          </Scroll>
        </li>
      </ul>
      
    </div>
  </section>


export default Introduction;
