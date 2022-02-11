import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDataFromApi } from '../redux/home/home';
import rightArrow from '../images/circle-arrow-right-solid.svg';

// const selectedData = (state) => state.homeReducer;
const Home = () => {
  const dispatch = useDispatch();
  const countryData = useSelector((state) => state.countries);
  const [searchValue, setSearchValue] = useState([]);

  const getData = () => {
    if (countryData.length === 0) {
      dispatch(getDataFromApi());
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const handleSearch = (e) => {
    if (e.target.value === '') {
      setSearchValue([]);
    } else {
      const word = e.target.value;
      const filteredArr = countryData.filter((val) => val.country_name.toLowerCase()
        .includes(word.toLowerCase()));
      setSearchValue(filteredArr);
    }
  };
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
          <input
            type="text"
            placeholder="Search country"
            onChange={handleSearch}
          />
          {
            searchValue.length !== 0 && (
              <div>
                {searchValue.map((value) => (
                  <div className="country" key={value.country_id}>
                    <Link
                      to="/details"
                      state={value}
                    >
                      {value.country_name}
                    </Link>

                  </div>
                ))}
              </div>
            )

          }

        </div>

      </header>
      <div>
        {
        countryData.sort((a, b) => (b.today_confirmed - a.today_confirmed))
          .slice(0, 20).map((c) => (
            <div key={c.country_id}>
              <Link to="/details" state={c}>
                <h2>{c.country_name}</h2>
                <p>{(c.today_confirmed).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                <img src={rightArrow} alt="arrow to details" />
              </Link>

            </div>
          ))
      }
      </div>
    </>
  );
};

export default Home;
