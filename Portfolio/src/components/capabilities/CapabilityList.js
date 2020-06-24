import React from 'react';

import Capability from './Capability';

const CapabilityList = () => {
  const CAPABILITIES = [
    {
      heading: 'Enterprise Ready',
      description: 'Five years + experience in deploying Enterprise infrastructure solutions @ Pfizer.',
      iconClass: 'fa-server',
    },
    {
      heading: 'Certified',
      description: 'Demonstrated skills through leading companies:  AWS, Scrum Alliance, Microsoft, CompTIA .',
      iconClass: 'fa-check-circle',
    },
    {
      heading: 'Code',
      description: 'Powershell, Bash, Python, HTML5, CSS, Javascript',
      iconClass: 'fa-code',
    },
    {
      heading: 'Cloud',
      description: 'AWS & Azure familiarity.',
      iconClass: 'fa-cloud',
    },
    {
      heading: 'Business Acclimated',
      description: 'MBA backed business case development skills',
      iconClass: 'fa-balance-scale',
    },
    {
      heading: 'Project Management',
      description: 'End-to-end project management experience in managing resources, budgets, and reporting responsibilities.',
      iconClass: 'fa-sitemap',
    },
  ]

  const [capabilities] = React.useState(CAPABILITIES);

  return (
    <>
      {capabilities.map((capability) => <Capability key={capability.heading} {...capability} />)}
    </>
  )
}

export default CapabilityList;
