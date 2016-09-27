import React from 'react';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <h2>connect with me</h2>
        <div>
          <i className="fa fa-envelope fa-3x" aria-hidden="true" />
          <i className="fa fa-linkedin-square fa-3x" aria-hidden="true" />
          <i className="fa fa-github fa-3x" aria-hidden="true" />
        </div>
        <span>&copy; robby kim 2016</span>
      </div>
    </footer>
  );
}

module.exports = Footer;
