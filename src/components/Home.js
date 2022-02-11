import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { v4 as uuidv4 } from 'uuidv4';
import { getDataFromApi } from '../redux/home/home';

import arrow from '../images/circle-arrow-right-solid.svg';

// const selectedData = (state) => state.homeReducer;
const Home = () => {
  const dispatch = useDispatch();
  const countryData = useSelector((state) => state.countries);

  const getData = () => {
    if (countryData.length === 0) {
      dispatch(getDataFromApi());
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // const handleSelect=(e)=>{
  //   console.log(e);
  // }
  const date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  return (
    <>
      <header>
        <div>
          <h1>{date}</h1>
        </div>
        <div>
          <h3>Top confirmed cases</h3>
        </div>
        <div>
          {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button"
          onClick={(e) => handleSelect(e.target.value)}>
          <Dropdown.Item href="/details">Action</Dropdown.Item>
          {countryData.map((m) => (
            <Dropdown.Item  >
                {m.country_name}
            </Dropdown.Item>

          ))}
        </DropdownButton> */}
          {/* <select onChange={e=> handleSelect(e.target.value)}>
            {countryData.map((m) => (
              <option>{m.country_name}</option>
            ))}
        </select>
        <Link to='/details'>Today's data</Link> */}
        </div>
        {/* {countryData.map((m) => (
        <div>
          <p>{m.country_name}</p>
          <p>{m.today_confirmed}</p>
        </div>
      ))} */}
      </header>
      <div>
        {
        countryData.sort((a, b) => (b.today_confirmed - a.today_confirmed))
          .slice(0, 20).map((c) => (
            <div key={uuidv4()}>
              <h2>{c.country_name}</h2>
              <p>{(c.today_confirmed).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
              <img src={arrow} alt="arrow to details" />
            </div>
          ))
      }
      </div>
    </>
  );
};

export default Home;
