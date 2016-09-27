import React from 'react';

function Work() {
  return (
    <section className="work-section">
      <div className="work-container">
        <h1>work -</h1>
        <div className="proj-container">
          <div className="proj-screenshot left" />
          <div className="proj-detail right">
            <h2>book kit</h2>
            <div className="proj-lang">
              <span>react</span>
              <span>-</span>
              <span>bootstrap</span>
              <span>-</span>
              <span>node.js</span>
              <span>-</span>
              <span>postgresql</span>
            </div>
            <p>
              {'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, ut modi, quas dicta culpa, perferendis explicabo eos obcaecati, asperiores ab natus accusantium expedita voluptatem. Reprehenderit eaque, unde fugiat nemo dolores.'}
            </p>
          </div>
        </div>
        <div className="proj-container">
          <div className="proj-detail left">
            <h2>connect 4 with friends</h2>
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
              {'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, ut modi, quas dicta culpa, perferendis explicabo eos obcaecati, asperiores ab natus accusantium expedita voluptatem. Reprehenderit eaque, unde fugiat nemo dolores.'}
            </p>
          </div>
          <div className="proj-screenshot right" />
        </div>
        <div className="proj-container">
          <div className="proj-screenshot left" />
          <div className="proj-detail right">
            <h2>onpoint scores</h2>
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
              {'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, ut modi, quas dicta culpa, perferendis explicabo eos obcaecati, asperiores ab natus accusantium expedita voluptatem. Reprehenderit eaque, unde fugiat nemo dolores.'}
            </p>
          </div>
        </div>
        <div className="proj-container">
          <div className="proj-detail left">
            <h2>korean-x</h2>
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
              {'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, ut modi, quas dicta culpa, perferendis explicabo eos obcaecati, asperiores ab natus accusantium expedita voluptatem. Reprehenderit eaque, unde fugiat nemo dolores.'}
            </p>
          </div>
          <div className="proj-screenshot right" />
        </div>
      </div>
    </section>
  );
}

module.exports = Work;
