import "./App.css";

function App() {
  return (
    <div className="App background-image">
      <div className="overlay"></div>
      <nav className="navbar">
        <div className="navbar-lnk">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <article className="header">
        <div className="content">
          <h1 className="left-txt">Buse Uğraş</h1>
          <span>|</span>
          <h1 className="right-txt">Front-End Developer</h1>
        </div>
      </article>

      <article className="contact-lnk">
        <ul>
          <li>
            <a
              href="https://tr.linkedin.com/in/buse-u%C4%9Fra%C5%9F-380a6014a"
              target="blank"
            >
              <span class="lnk-txt">Linkedin</span>
              <i class="fa-brands fa-linkedin-in fa-s"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/buseseker" target="blank">
              <span class="lnk-txt">Github</span>
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.hackerrank.com/buseugras" target="blank">
              <span class="lnk-txt"> HackerRank</span>
              <i class="fa-brands fa-hackerrank"></i>
            </a>
          </li>
          <li>
            <a href="mailto:busesekerr96@gmail.com">
              <span class="lnk-txt">E-mail</span>
              <i class="fa-solid fa-envelope"></i>
            </a>
          </li>
        </ul>
      </article>

      <article className="skills">
        <div className="skill-section">
          <div className="html">
            <i class="fa-brands fa-html5 "></i>
            <h3>HTML5</h3>
          </div>

          <div className="css">
            <i class="fa-brands fa-css3-alt "></i>
            <h3>CSS3</h3>
          </div>

          <div className="javascript">
            <i class="fa-brands fa-square-js "></i>
            <h3>JavaScript</h3>
          </div>

          <div className="react">
            <i class="fa-brands fa-react "></i>
            <h3>React.js</h3>
          </div>

          <div className="angular">
            <i class="fa-brands fa-angular "></i>
            <h3>Angular</h3>
          </div>
        </div>
      </article>
    </div>
  );
}

export default App;
