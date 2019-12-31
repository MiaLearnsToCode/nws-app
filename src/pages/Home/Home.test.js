import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

describe("Homepage tests", () => {
  // check that the toggle container shows up in the page
  it("Homepage container compiles", () => {
    const { getByTestId } = render(<Home />)
    const homeContainer = getByTestId("homeContainer")
    expect(homeContainer).toBeInTheDocument()
  })
})