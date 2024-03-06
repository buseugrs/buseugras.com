import React from "react";


const ContactLinks = () => {
  return (
    <article className="contact-lnk">
      <ul>
        <li>
          <a
            href="https://tr.linkedin.com/in/buse-u%C4%9Fra%C5%9F-380a6014a"
            target="blank"
          >
            <span className="lnk-txt">Linkedin</span>
            <i className="fa-brands fa-linkedin-in fa-s"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/buseseker" target="blank">
            <span className="lnk-txt">Github</span>
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.hackerrank.com/buseugras" target="blank">
            <span className="lnk-txt"> HackerRank</span>
            <i className="fa-brands fa-hackerrank"></i>
          </a>
        </li>
        <li>
          <a href="mailto:busesekerr96@gmail.com">
            <span className="lnk-txt">E-mail</span>
            <i className="fa-solid fa-envelope"></i>
          </a>
        </li>
      </ul>
    </article>
  );
};

export default ContactLinks;
