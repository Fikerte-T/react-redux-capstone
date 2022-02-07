import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getDataFromApi } from '../redux/home/home';

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

  return (
    <div>
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
    </div>
  );
};

export default Home;
