import React from 'react';

import pic1 from '../../images/azureswap.jpg';
import pic2 from '../../images/python-transparent-logo.jpg';
import pic3 from '../../images/pic03.jpg';

import Feature from './Feature';

const Features = () => {
  const FEATURES = [
    {
      image: pic1,
      heading: 'Portfolio Site (this page)',
      description: 'Built with a Gatsby starter and hosted using Azure Static Web App Preview.',
      buttonhref: 'https://github.com/WinSpartan/Portfolio/tree/master/Portfolio', 
      buttondescription:  "See on GitHub"
    
    },
    {
      image: pic2,
      heading: 'Kitchen Companion',
      description: 'Flask web app, python recipe web scraping libraries, and ListenAPI podcast integration for time well spent in the kitchen.',
      buttonhref: '', 
      buttondescription:  "Coming Soon"
    },
    {
      image: pic3,
      heading: 'TBD',
      description: 'If you like Nebraska Football, this will be the data science project for you.  Python, Pandas, Numpy, matplotlib..',
      buttonhref: '', 
      buttondescription:  "Coming Soon"
    },
  ];

  const [features] = React.useState(FEATURES);

  return (
    <section id="one" className="wrapper style2 spotlights">
       {features.map(feature => <Feature key={feature.heading} {...feature} />)}
    </section>
  );
}

export default Features;
