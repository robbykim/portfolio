import React from 'react';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <h2>get in touch</h2>
        <div>
          <a href="mailto:robert.st.kim@gmail.com">
            <i className="fa fa-envelope fa-3x" aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/robbykim">
            <i className="fa fa-linkedin-square fa-3x" aria-hidden="true" />
          </a>
          <a href="https://github.com/robbykim">
            <i className="fa fa-github fa-3x" aria-hidden="true" />
          </a>
        </div>
        <span>&copy; robby kim 2016</span>
      </div>
    </footer>
  );
}

module.exports = Footer;
