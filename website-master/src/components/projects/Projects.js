import React from 'react';
import multiStepForm from '../../assets/images/multi-step-form.png';
import ipAddressTracker from '../../assets/images/ip-address-tracker-desktop.png';

const Projects = () => {
  return (
    <article className='project-cards'>
      <div className='card'>
        <img src={multiStepForm} alt='projects multi-step-form' />
        <p>MULTI-STEP FORM</p>
        <p>
          The Multi-Step Form project is designed to streamline the process of gathering personal information selecting
          monthly or yearly plans and choosing additional add-ons. At its essence the project is focused on facilitating
          user decision-making by providing a smooth and informative experience regarding the services available for
          purchase.
        </p>
        <div className='btn btn-project'>
          <button className='btn-project github'>Github</button>
          <button className='btn-project demo'>Live Demo</button>
        </div>
      </div>
      <div className='card'>
        <img src={ipAddressTracker} alt='' />
        <p>IP ADDRESS TRACKER</p>
        <p>
        In this project, users can see the ISP, location and time zone information of their own IP address or another IP address and location information on the map.
        </p>
        <div className='btn btn-project'>
          <button className='btn-project github'>Github</button>
          <button className='btn-project demo'>Live Demo</button>
        </div>
      </div>
    </article>
  );
};

export default Projects;
