import React from 'react';
import { render } from '@testing-library/react';
import News from './News';

describe('News Page tests', () => {
  // check that the toggle container shows up in the page
  it('News container compiles', () => {
    const { getByTestId } = render(<News />)
    const newsContainer = getByTestId('newsContainer')
    expect(newsContainer).toBeInTheDocument()
  });
  it('Header renders', () => {
    const { getByTestId } = render(<News />)
    const headerContainer = getByTestId('headerContainer')
    expect(headerContainer).toBeInTheDocument()
  });
})