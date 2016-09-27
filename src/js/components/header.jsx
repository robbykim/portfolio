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
          <i className="fa fa-envelope fa-3x" aria-hidden="true" />
          <i className="fa fa-linkedin-square fa-3x" aria-hidden="true" />
          <i className="fa fa-github fa-3x" aria-hidden="true" />
        </div>
      </div>
      <div className="intro-content">
        <p>
          {"Hi! I'm Robby. I'm a bootcamp grad from Thinkful coming from an architectural design background from the University of Michigan. I build full stack applications but specialize on the Frontend with React, Redux, and Design."}
        </p>
        <div className="skills-section">
          <div className="skills-lang">
            <h3>languages:</h3>
            <div className="skills-skill">
              <span>javascript</span>
              <div className="skills-bar">
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle-thin" aria-hidden="true" />
                <i className="fa fa-circle-thin" aria-hidden="true" />
              </div>
            </div>
            <div className="skills-skill">
              <span>html5</span>
              <div className="skills-bar">
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle-thin" aria-hidden="true" />
                <i className="fa fa-circle-thin" aria-hidden="true" />
                <i className="fa fa-circle-thin" aria-hidden="true" />
                <i className="fa fa-circle-thin" aria-hidden="true" />
              </div>
            </div>
            <div className="skills-skill">
              <span>css3</span>
              <div className="skills-bar">
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle-thin" aria-hidden="true" />
                <i className="fa fa-circle-thin" aria-hidden="true" />
                <i className="fa fa-circle-thin" aria-hidden="true" />
                <i className="fa fa-circle-thin" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="skills-framework">
            <h3>frameworks:</h3>
            <div className="skills-skill">
              <span>react/redux</span>
              <div className="skills-bar">
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle-thin" aria-hidden="true" />
              </div>
            </div>
            <div className="skills-skill">
              <span>node.js</span>
              <div className="skills-bar">
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle-thin" aria-hidden="true" />
                <i className="fa fa-circle-thin" aria-hidden="true" />
                <i className="fa fa-circle-thin" aria-hidden="true" />
              </div>
            </div>
            <div className="skills-skill">
              <span>react native</span>
              <div className="skills-bar">
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true" />
                <i className="fa fa-circle-thin" aria-hidden="true" />
                <i className="fa fa-circle-thin" aria-hidden="true" />
                <i className="fa fa-circle-thin" aria-hidden="true" />
                <i className="fa fa-circle-thin" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

module.exports = Header;
