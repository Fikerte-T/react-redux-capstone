import './App.css';
import { Provider } from 'react-redux';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/home/Home';
import Details from './components/details/Details';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
