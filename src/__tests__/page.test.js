import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../redux/configureStore';
import Home from '../components/home/Home';

describe('Components test', () => {
  it('Renders Home Page', () => {
    const app = renderer.create(
      <Provider store={store}>
        <Home />
      </Provider>,
    ).toJSON();
    expect(app).toMatchSnapshot();
  });

  it('has a text in the DOM', () => {
    const { container } = render(<Provider store={store}><Home /></Provider>);
    expect(container.getElementsByClassName('date').length).toBe(1);
  });
  it('has a text in the DOM', () => {
    render(<Provider store={store}><Home /></Provider>);
    expect(screen.getByTestId('my-test-id')).toHaveTextContent('top confirmed cases');
  });
  it('has a text in the DOM', () => {
    render(<Provider store={store}><Home /></Provider>);
    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('placeholder', 'Search country');
  });
});
