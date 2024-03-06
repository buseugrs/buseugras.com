import React from 'react';
import multiStepForm from '../../assets/images/multi-step-form.png';
import ipAddressTracker from '../../assets/images/ip-address-tracker-desktop.png';

const Projects = () => {
  return (
    <article className='project-cards'>
      <div className='card multi-step-form-card'>
        <img src={multiStepForm} alt='projects multi-step-form' />
        <p className='project-header'>MULTI-STEP FORM</p>
        <p className='project-info'>
          The Multi-Step Form project is designed to streamline the process of gathering personal information selecting
          monthly or yearly plans and choosing additional add-ons. The Multi-Step Form project is designed to
        </p>
        <div className='btn btn-project'>
          <a className='demo' href='https://multi-step-form-psi-three.vercel.app/personel-info' target='_blank' >LIVE DEMO</a>
        </div>
      </div>
      <div className='card ip-address-tracker-card'>
        <img src={ipAddressTracker} alt='' />
        <p className='project-header'>IP ADDRESS TRACKER</p>
        <p className='project-info'>
          In this project, users can see the ISP, location and time zone information of their own IP address or another
          IP address and location information on the map.
        </p>
        <div className='btn btn-project'>
          <a  className='demo' href='https://ip-address-tracker-psi-beige.vercel.app/' target='_blank'>LIVE DEMO</a>
        </div>
      </div>
    </article>
  );
};

export default Projects;