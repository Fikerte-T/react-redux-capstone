import React, { useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useDispatch, useSelector } from 'react-redux';
import { getDataFromApi } from '../redux/home/home';

const selectedData = (state) => state.homeReducer;
const Home = () => {
  const dispatch = useDispatch();
  const countryData = useSelector(selectedData);
  console.log(countryData);
  const getData = () => {
    if (countryData.length === 0) {
      dispatch(getDataFromApi());
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div>
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item href="/details">Action</Dropdown.Item>
        </DropdownButton>
      </div>
      {countryData.map((m) => (
        <div>
          <p>{m.country_name}</p>
          <p>{m.today_confirmed}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
