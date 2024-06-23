import { render, screen } from '@testing-library/react';
import Test from '../Test';

describe('App test suite', () => {
  let headingElement: HTMLElement;

  beforeEach(() => {
    render(<Test />);
    headingElement = screen.getByRole('heading', { level: 1 });
  });

  test('renders the h1 element and it is in the document', () => {
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the h1 element with text "Weather App"', () => {
    expect(headingElement).toHaveTextContent('Weather App');
  });
});
