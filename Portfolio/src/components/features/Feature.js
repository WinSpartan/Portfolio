import React from 'react';
import { Link } from 'gatsby';

const Feature = ({image, heading, description, buttonhref, buttondescription}) =>
  <section>
    <div className="image" alt="image">
      <img src={image} alt="" data-position="center center" />
    </div>
    <div className="content">
      <div className="inner">
        <h2>{heading}</h2>
        <p>{description}</p>
        <ul className="actions">
        <li>
          <a href={buttonhref} className="button">
              {buttondescription}
          </a>
          </li>
        </ul>
      </div>
    </div>
  </section>

export default Feature;
