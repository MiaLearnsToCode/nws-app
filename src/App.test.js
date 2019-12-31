import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe("App compiles", () => {
  // check that the toggle container shows up in the page
  it("App container compiles", () => {
    const { getByTestId } = render(<App />)
    const appContainer = getByTestId("appContainer")
    expect(appContainer).toBeInTheDocument()
  })
})