import React from 'react';
import multiStepForm from '../../assets/images/multi-step-form.png';
import ipAddressTracker from '../../assets/images/ip-address-tracker-desktop.png';
import multiSelect from '../../assets/images/multi-select-autocomplete.png';
import quotesCyclopedia from '../../assets/images/quotes-cyclopedia.png';

const Projects = () => {
  return (
    <article className='project-cards'>
      <div className='card quotes-cyclopedia-card'>
        <img src={quotesCyclopedia} alt='' />
        <div className='project-card'>
          <p className='project-header'>QUOTES CYCLOPEDIA</p>
          <p className='project-info'>
            This project is a React-based website showcasing quotes and life stories of famous individuals
            with its user-friendly interface and dynamic content.
          </p>
          <a className='project-btn' href='https://quotescyclopedia.com/' target='_blank'>
            LIVE DEMO
          </a>
        </div>
      </div>
      <div className='card multi-step-form-card'>
        <img src={multiStepForm} alt='projects multi-step-form' />
        <div className='project-card'>
          <p className='project-header'>MULTI-STEP FORM</p>
          <p className='project-info'>
            The Multi-Step Form project is designed to streamline the process of gathering personal information
            selecting monthly or yearly plans and choosing additional add-ons.
          </p>
          <a className='project-btn' href='https://multi-step-form-96ce9.web.app/personel-info' target='_blank'>
            LIVE DEMO
          </a>
        </div>
      </div>
      <div className='card ip-address-tracker-card'>
        <img src={ipAddressTracker} alt='' />
        <div className='project-card'>
          <p className='project-header'>IP ADDRESS TRACKER</p>
          <p className='project-info'>
            In this project, users can see the ISP, location and time zone information of their own IP address or
            another IP address and location information on the map.
          </p>
          <a className='project-btn' href='https://ip-address-tracker-73398.web.app/' target='_blank'>
            LIVE DEMO
          </a>
        </div>
      </div>
      <div className='card multiselect-autocomplete-card'>
        <img src={multiSelect} alt='' />
        <div className='project-card'>
          <p className='project-header'>MULTISELECT AUTOCOMPLETE COMPONENT</p>
          <p className='project-info'>
            A multi-select autocomplete component that is developed using Typescript and GraphQL is designed to search
            select and delete characters using the Rick and Morty API.
          </p>
          <a className='project-btn' href='https://multi-select-autocomplet-8a30a.web.app/' target='_blank'>
            LIVE DEMO
          </a>
        </div>
      </div>
    </article>
  );
};

export default Projects;
