import React from 'react';

function Header() {
  return (
    <header className="head-section">
      <div className="intro-head">
        <h1>robby kim</h1>
        <h2>software engineer</h2>
        <h3>austin, tx</h3>
        <h4>hirerobby@gmail.com</h4>
        <div className="intro-social">
          <a href="mailto:hirerobby@gmail.com">
            <i className="fa fa-envelope fa-3x" aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/robbykim" target="_blank">
            <i className="fa fa-linkedin-square fa-3x" aria-hidden="true" />
          </a>
          <a href="https://github.com/robbykim" target="_blank">
            <i className="fa fa-github fa-3x" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="intro-content">
        <p>
          {'Hi! I\'m Robby, a software engineer, cycling enthusiast, and proud '}
          <a href="http://www.espn.com/college-football/team/_/id/130">Wolverine</a>
          {`. I bring two years of experience developing iOS, Android, and web apps from conception to production to the table.
            I love bringing products to life to solve real problems for my clients and help them gain competitive edge.
          `}
        </p>
        <div className="skills-section">
          <div className="skills-lang">
            <h3>languages:</h3>
            <img src="img/js.svg" alt="javascript" />
            <img src="img/python.png" alt="python" />
            <img src="img/android.png" alt="android" />
            <img src="img/swift.png" alt="swift" />
          </div>
          <div className="skills-framework">
            <h3>frameworks:</h3>
            <img src="img/react.svg" alt="react" />
            <img src="img/django.png" alt="django" />
            <img src="img/meteor.png" alt="meteor" />
            <img src="img/node.svg" alt="node" />
            <img src="img/jquery.svg" alt="jquery" />
          </div>
        </div>
      </div>
    </header>
  );
}

module.exports = Header;
