import React from 'react';
import { render } from '@testing-library/react';
import ErrorHandler from './ErrorHandler';

describe('Homepage tests', () => {
  // check that the toggle container shows up in the page
  it('Homepage container compiles', () => {
    const { getByTestId } = render(<ErrorHandler />)
    const homeContainer = getByTestId('homeContainer')
    expect(homeContainer).toBeInTheDocument()
  });
  it('Header renders', () => {
    const { getByTestId } = render(<ErrorHandler />)
    const headerContainer = getByTestId('headerContainer')
    expect(headerContainer).toBeInTheDocument()
  });
  it('Redirect button renders', () => {
    const { getByTestId } = render(<ErrorHandler />)
    const redirectButton = getByTestId('redirectButton')
    expect(redirectButton).toBeInTheDocument()
  })
})