import React from 'react';

function Header() {
  return (
    <header className="head-section">
      <div className="intro-head">
        <h1>robby kim</h1>
        <h2>web developer</h2>
        <h3>ann arbor, mi</h3>
        <h4>robert.st.kim@gmail.com</h4>
        <div className="intro-social">
          <a href="mailto:robert.st.kim@gmail.com">
            <i className="fa fa-envelope fa-3x" aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/robby-kim-29670867" target="_blank">
            <i className="fa fa-linkedin-square fa-3x" aria-hidden="true" />
          </a>
          <a href="https://github.com/robbykim" target="_blank">
            <i className="fa fa-github fa-3x" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="intro-content">
        <p>
          {'Hi! I\'m Robby. I\'m a web developer with an architectural design background from the '}
          <a href="http://www.espn.com/college-football/team/_/id/130" target="_blank">{'University of Michigan'}</a>
          {'. I build full stack applications but specialize on the front end with React, Redux, and Design. I also love cycling, playing my guitar and rapping Hamilton.'}
        </p>
        <div className="skills-section">
          <div className="skills-lang">
            <h3>languages:</h3>
            <img src="img/js.svg" alt="javascript" />
            <img src="img/css.svg" alt="css3" />
            <img src="img/html.svg" alt="html5" />
          </div>
          <div className="skills-framework">
            <h3>frameworks:</h3>
            <img src="img/react.svg" alt="react" />
            <img src="img/node.svg" alt="node" />
            <img src="img/rn.svg" alt="react native" />
            <img src="img/jquery.svg" alt="jquery" />
          </div>
        </div>
      </div>
    </header>
  );
}

module.exports = Header;
