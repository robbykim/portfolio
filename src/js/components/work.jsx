import React from 'react';

function Work() {
  return (
    <section className="work-section">
      <div className="work-container">
        <h1>work -</h1>
        <div className="proj-container" id="book-kit">
          <div className="proj-screenshot left" style={{ backgroundImage: 'url(img/bookkit.png)'}} />
          <div className="proj-detail right">
            <h2>book kit</h2>
            <span>
              <a href="https://github.com/turbo-octo-happiness/book-kit/">github</a> | <a href="http://book-kit.herokuapp.com/">demo</a>
            </span>
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
        </div>
        <div className="proj-container" id="connect-four">
          <div className="proj-detail left">
            <h2>connect 4 with friends</h2>
            <span>
              <a href="https://github.com/robbykim/connect-four">github</a> | <a href="https://cryptic-beach-71692.herokuapp.com/">demo</a>
            </span>
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
          <a href=""></a>
          <div className="proj-screenshot right" style={{ backgroundImage: 'url(img/connect4.png)' }} />
        </div>
        <div className="proj-container" id="onpoint">
          <div className="proj-screenshot left" style={{ backgroundImage: 'url(img/onpoint.png)' }} />
          <div className="proj-detail right">
            <h2>onpoint scores</h2>
            <span>
              <a href="https://github.com/robbykim/onpoint-react-native">github</a> | <a href="#">demo</a>
            </span>
            <div className="proj-lang">
              <span>react native</span>
              <span>-</span>
              <span>javascript</span>
              <span>-</span>
              <span>fetch api</span>
              <span>-</span>
              <span>ios</span>
            </div>
            <p>
              {'A simple iOS application built in React Native that gives you the scores for games in the current week of the NFL. Has the ability to refresh on pull-down. '}
              <b>{'Responsibilities:'}</b>{' Entirety of the application.'}
            </p>
          </div>
        </div>
        <div className="proj-container" id="korean-x">
          <div className="proj-detail left">
            <h2>korean-x</h2>
            <span>
              <a href="https://github.com/robbykim/korean-x">github</a> | <a href="https://young-anchorage-88242.herokuapp.com/">demo</a>
            </span>
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
          <div className="proj-screenshot right" style={{ backgroundImage: 'url(img/korean-x.png)'}}  />
        </div>
      </div>
    </section>
  );
}

module.exports = Work;
