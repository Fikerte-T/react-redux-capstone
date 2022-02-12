import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import leftArrow from '../../images/arrow_circle_left_white_24dp.svg';

const Details = () => {
  const location = useLocation();
  const value = location.state;
  const date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const numberWithCommas = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <div className="details-wrapper">
      <header className="details-header">
        <Link to="/">
          <img src={leftArrow} alt="arrow to home" />
        </Link>
        <h5>Country detail</h5>
      </header>
      <div className="light-color summary">
        <h2 className="country-name">{value.country_name}</h2>
        <p className="today-confirmed">{numberWithCommas(value.today_confirmed)}</p>
      </div>
      <div className="status">
        <p>
          country status -
          {date}
        </p>
      </div>
      <div>
        <div className="totals light-color">
          <p>Today confirmed</p>
          <p>{numberWithCommas(value.today_confirmed)}</p>
        </div>
        <div className="totals">
          <p>Today deaths</p>
          <p>{numberWithCommas(value.today_deaths)}</p>
        </div>
        <div className="totals light-color">
          <p>Today new confirmed</p>
          <p>{numberWithCommas(value.new_confirmed)}</p>
        </div>
        <div className="totals">
          <p>Today new deaths</p>
          <p>{numberWithCommas(value.new_deaths)}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
