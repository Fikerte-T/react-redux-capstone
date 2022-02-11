import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import leftArrow from '../images/circle-arrow-left-solid.svg';

const Details = () => {
  const location = useLocation();
  const value = location.state;
  const date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const numberWithCommas = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <>
      <header>
        <Link to="/">
          <img src={leftArrow} alt="arrow to home" />
        </Link>
        <h3>Country detail</h3>
      </header>
      <div>
        <h2>{value.country_name}</h2>
      </div>
      <div>
        <p>
          country status -
          {date}
        </p>
      </div>
      <div>
        <div>
          <p>Today confirmed</p>
          <p>{numberWithCommas(value.today_confirmed)}</p>
        </div>
        <div>
          <p>Today deaths</p>
          <p>{numberWithCommas(value.today_deaths)}</p>
        </div>
        <div>
          <p>Today new confirmed</p>
          <p>{numberWithCommas(value.new_confirmed)}</p>
        </div>
        <div>
          <p>Today new deaths</p>
          <p>{numberWithCommas(value.new_deaths)}</p>
        </div>
      </div>
    </>
  );
};

export default Details;
