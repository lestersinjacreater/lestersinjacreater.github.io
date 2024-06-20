import React from 'react';
import './topbody.scss';

const Topbody: React.FC = () => {
  return (
    <section className="home">
      <div className="top__content">
        <h1 className="top__title">A modern publishing platform</h1>
        <p className="top__description">Grow your audience and build your online brand</p>
        <div className="top__buttons">
          <button className="top__button home__button--primary">Start for Free</button>
          <button className="top__button home__button--secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Topbody;
