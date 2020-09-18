import React from 'react';

import Capability from './Capability';

const CapabilityList = () => {
  const CAPABILITIES = [
    {
      heading: 'Enterprise Ready',
      description: 'Five + years experience in planning, designing, and deploying enterprise infrastructure solutions @ Pfizer.',
      iconClass: 'fa-server',
    },
    {
      heading: 'Certified',
      description: 'Demonstrated skills through leading companies:  AWS, Scrum Alliance, Microsoft, CompTIA.',
      iconClass: 'fa-check-circle',
    },
    {
      heading: 'Code',
      description: 'Powershell, Bash, Git, Python, HTML5, CSS, Javascript',
      iconClass: 'fa-code',
    },
    {
      heading: 'Cloud',
      description: 'AWS & Azure experience ',
      iconClass: 'fa-cloud',
    },
    {
      heading: 'Business First',
      description: 'MBA backed skills in building lean, cost effective solutions that drive value',
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
