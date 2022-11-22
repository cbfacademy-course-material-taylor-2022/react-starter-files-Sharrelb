import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom/client';

test('renders h1', () => {
  render(<App />);
  const h1 = screen.getByText(/My React Page/i);
  expect(h1).toBeInTheDocument();
});

test('renders without crashing', () => {
  act(() => {
    const root = ReactDOM.createRoot(document.createElement('div'));
    root.render(<App />);
  });
});

test('render h2', () => {
  render(<App />);
    const h2 = screen.getByText(/This is my first React page./i);
    expect(h2).toBeInTheDocument();;
  });
