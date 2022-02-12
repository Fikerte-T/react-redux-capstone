import { v4 as uuid4 } from 'uuid';

const GET_DATA_FROM_API = 'react-redux-capstone/home/GET_DATA_FROM_API';
const initialState = [];
const today = new Date();

const formatDate = (today) => {
  const date = (today.getDate() < 10 ? '0' : '') + today.getDate();
  const month = (today.getMonth() < 10 ? '0' : '') + (today.getMonth() + 1);
  return `${today.getFullYear()}-${month}-${date}`;
};

const date = formatDate(today);
const baseUrl = `https://api.covid19tracking.narrativa.com/api/${date}`;

export const getDataFromApi = () => (async (dispatch) => {
  const response = await fetch(baseUrl);
  const responseData = await response.json();
  const extractData = responseData.dates[date].countries;

  const countryDataArr = Object.entries(extractData).map(([, countryData]) => ({
    country_id: uuid4(),
    country_name: countryData.name,
    today_confirmed: countryData.today_confirmed,
    today_deaths: countryData.today_deaths,
    new_confirmed: countryData.today_new_confirmed,
    new_deaths: countryData.today_new_deaths,
  }));

  dispatch({
    type: GET_DATA_FROM_API,
    payload: countryDataArr,
  });
});

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_FROM_API:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default homeReducer;
