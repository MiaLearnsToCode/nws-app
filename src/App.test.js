import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe("Toggle Component", () => {
  // check that the toggle container shows up in the page
  it("Toggle compiles", () => {
    const { getByTestId } = render(<App />)
    const welcomeTitle = getByTestId("welcomeTitle")
    expect(welcomeTitle).toBeInTheDocument()
  })
})