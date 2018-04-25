import React from 'react';

function Work() {
  return (
    <section className="work-section">
      <div className="work-container">
        <h1>work -</h1>
        <div className="proj-container" id="mbsc">
          <a href="https://itunes.apple.com/us/app/mbsc-weigh-the-odds/id1261031243" className="proj-screenshot left" target="_blank">
            <img src="img/bariatrics.jpg" alt="mbsc" />
          </a>
          <div className="proj-detail right">
            <div className="proj-title">
              <h2>weigh the odds</h2>
            </div>
            <div className="proj-lang">
              <span>react native</span>
            </div>
            <p>
              {'A calculator to help patients understand their level of risk for various bariatric procedures. The app was shipped to both the App Store and Play Store. '}
              <b>{'Responsibilities: '}</b>{'Entirety of application in React Native. Jenkins CI deployment with Fastlane'}
            </p>
          </div>
        </div>
        <div className="proj-container" id="book-kit">
          <div className="proj-detail left">
            <div className="proj-title">
              <h2>book kit</h2>
              <a href="https://github.com/turbo-octo-happiness/book-kit/" target="_blank">
                <i className="fa fa-github fa-2x" aria-hidden="true" />
              </a>
            </div>
            <div className="proj-lang">
              <span>react</span>
              <span>-</span>
              <span>less</span>
              <span>-</span>
              <span>node.js</span>
              <span>-</span>
              <span>postgresql</span>
            </div>
            <p>
              {'A bookmark manager for bootcamp students that allows users to store and share references to online resources. It is currently being implemented and used by Thinkful\'s fulltime bootcamp. '}
              <b>{'Responsibilities:'}</b>{' Frontend with React/Redux, UI/UX, some backend in earlier iterations.'}
            </p>
          </div>
          <a href="http://book-kit.herokuapp.com/" className="proj-screenshot right" target="_blank">
            <img src="img/bookkit.png" alt="book-kit" />
          </a>
        </div>
        <div className="proj-container" id="connect-four">
          <a href="https://cryptic-beach-71692.herokuapp.com/" className="proj-screenshot left" target="_blank">
            <img src="img/connect4.png" alt="connect-four" />
          </a>
          <div className="proj-detail right">
            <div className="proj-title">
              <h2>connect 4</h2>
              <a href="https://github.com/robbykim/connect-four" target="_blank">
                <i className="fa fa-github fa-2x" aria-hidden="true" />
              </a>
            </div>
            <div className="proj-lang">
              <span>react</span>
              <span>-</span>
              <span>socket.io</span>
              <span>-</span>
              <span>node.js</span>
              <span>-</span>
              <span>mongo.db</span>
            </div>
            <p>
              {'An online game that allows you to play the classic connect four game with friends from different places. '}
              <b>{'Responsibilities:'}</b>{' frontend with React/Redux, UI/UX, backend with Node.js and MongoDB.'}
            </p>
          </div>
        </div>
        <div className="proj-container" id="korean-x">
          <div className="proj-detail left">
            <div className="proj-title">
              <h2>korean-x</h2>
              <a href="https://github.com/robbykim/korean-x" target="_blank">
                <i className="fa fa-github fa-2x" aria-hidden="true" />
              </a>
            </div>
            <div className="proj-lang">
              <span>react</span>
              <span>-</span>
              <span>redux</span>
              <span>-</span>
              <span>node.js</span>
              <span>-</span>
              <span>mongo.db</span>
            </div>
            <p>
              {'A small application designed to teach users Korean using a spaced-repetition algorithm. '}
              <b>{'Responsibilities:'}</b>{' Backend with Node.js and MongoDB, Authentication via Passport Google OAuth2'}
            </p>
          </div>
          <a href="https://young-anchorage-88242.herokuapp.com/" className="proj-screenshot right" target="_blank">
            <img src="img/korean-x.png" alt="korean-x" />
          </a>
        </div>
      </div>
    </section>
  );
}

module.exports = Work;
