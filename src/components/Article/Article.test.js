import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Article from './Article';
import { mockData } from './ArticleMockData'

describe('Article Component', () => {
  // check that the article container shows up in the page
  it('Article compiles', () => {
    const { getByTestId } = render(<Article category={mockData.category} article={mockData.article}/>)
    const articleContainer = getByTestId('articleContainer')
    expect(articleContainer).toBeInTheDocument()
  })
  // check that the + button shows up in the page
  it('Button compiles', () => {
    const { getByTestId } = render(<Article category={mockData.category} article={mockData.article}/>)
    const toggleButton = getByTestId('toggleButton')
    expect(toggleButton).toBeInTheDocument()
  })
  // check that the description DOES NOT show up in the page
  it('Description compiles', () => {
    const { queryByTestId } = render(<Article category={mockData.category} article={mockData.article}/>)
    const toggleDescription = queryByTestId('toggleDescription')
    expect(toggleDescription).not.toBeInTheDocument()
  })
  // check that when you click the button the description toggles
  it('Description toggles', () => {
    const { getByTestId, queryByTestId } = render(<Article category={mockData.category} article={mockData.article}/>)
    const toggleButton = getByTestId('toggleButton')

    // check that when you click the button the description shows up
    fireEvent.click(toggleButton)
    const visibleToggleDescription = queryByTestId('toggleDescription')
    expect(visibleToggleDescription).toBeInTheDocument()

    // check that when you click the button again the description shows up
    fireEvent.click(toggleButton)
    const invisibleToggleDescription = queryByTestId('toggleDescription')
    expect(invisibleToggleDescription).not.toBeInTheDocument()
  })
  // check that when you click the button 5 times the description shows
  it('Description toggles', () => {
    const { getByTestId, queryByTestId } = render(<Article category={mockData.category} article={mockData.article}/>)
    const toggleButton = getByTestId('toggleButton')

    // click the button 5 times
    for (let i = 0; i < 5; i++) { fireEvent.click(toggleButton) }

    const visibleToggleDescription = queryByTestId('toggleDescription')
    expect(visibleToggleDescription).toBeInTheDocument()
  })
})