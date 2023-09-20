import React from "react";

const Skills = () => {
  return (
    <article className="skills">
      <div className="skill-section">
        <div className="html">
          <i className="fa-brands fa-html5 "></i>
          <h3>HTML5</h3>
        </div>

        <div className="css">
          <i className="fa-brands fa-css3-alt "></i>
          <h3>CSS3</h3>
        </div>

        <div className="javascript">
          <i className="fa-brands fa-square-js "></i>
          <h3>JavaScript</h3>
        </div>

        <div className="react">
          <i className="fa-brands fa-react "></i>
          <h3>React.js</h3>
        </div>

        <div className="angular">
          <i className="fa-brands fa-angular "></i>
          <h3>Angular</h3>
        </div>
      </div>
    </article>
  );
};

export default Skills;
