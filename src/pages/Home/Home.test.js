import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

describe('Homepage tests', () => {
  // check that the toggle container shows up in the page
  it('Homepage container compiles', () => {
    const { getByTestId } = render(<Home />)
    const homeContainer = getByTestId('homeContainer')
    expect(homeContainer).toBeInTheDocument()
  });
  it('Header renders', () => {
    const { getByTestId } = render(<Home />)
    const headerContainer = getByTestId('headerContainer')
    expect(headerContainer).toBeInTheDocument()
  });
  it('Form button renders', () => {
    const { getByTestId } = render(<Home />)
    const formButton = getByTestId('formButton')
    expect(formButton).toBeInTheDocument()
  })
})