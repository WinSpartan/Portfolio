import React from 'react';

import pic1 from '../../images/azureswap.jpg';
import pic2 from '../../images/python-transparent-logo.jpg';
import pic3 from '../../images/pic03.jpg';

import Feature from './Feature';

const Features = () => {
  const FEATURES = [
    {
      href: '/#',
      image: pic1,
      heading: 'Portfolio Site (this page)',
      description: 'Built with Gatsby and hosted using Azure Static Web App Preview.',
      to: {
        href: '/#',
        label: 'Coming Soon',
      },
    },
    {
      href: '/#',
      image: pic2,
      heading: 'Kitchen Companion',
      description: 'Flask web app, python recipe web scraping libraries, and ListenAPI podcast integration for time well spent in the kitchen.',
      to: {
        href: '/#',
        label: 'Coming Soon',
      },
    },
    {
      href: '/#',
      image: pic3,
      heading: 'TBD',
      description: 'If you like Nebraska Football, this will be the data science project for you.  Python, Pandas, Numpy, matplotlib..',
      to: {
        href: '/#',
        label: 'Coming Soon',
      },
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
