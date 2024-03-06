import './App.css';

//Components
import ContactLinks from './components/contact-links/ContactLinks';
import Projects from './components/projects/Projects';
import Header from './components/header/Header';
import Skills from './components/skills/Skills';
import ContactLinkTouchable from './components/contact-links/ContactLinkTouchable';

function App() {
  return (
    <div className='App background-image'>
      <div className='overlay'></div>
      <ContactLinks />
      <Header />
      <Skills />
      <Projects />
      <ContactLinkTouchable />
    </div>
  );
}

export default App;
