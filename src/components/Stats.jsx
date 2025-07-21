import React from 'react';
import './style/Stats.css';

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="overlay"></div>
      <div className="stats-container">
        <div className="stat-box">
          <i className="fas fa-utensils"></i>
          <p className="stat-text">Mexican Dishes</p>
          <p className="stat-value">+20</p>
        </div>
        <div className="stat-box">
          <i className="fas fa-hamburger"></i>
          <p className="stat-text">Satisfied customers<br />every week</p>
          <p className="stat-value">+100</p>
        </div>
        <div className="stat-box">
          <i className="fas fa-concierge-bell"></i>
          <p className="stat-text">Mexican flavor<br />guaranteed</p>
          <p className="stat-value">100%</p>
        </div>
        <div className="stat-box">
          <i className="fas fa-pizza-slice"></i>
          <p className="stat-text">Made with ingredients<br />fresh</p>
          <p className="stat-value">220</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
