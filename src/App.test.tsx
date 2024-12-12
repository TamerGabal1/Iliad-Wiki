import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

const mockCharacters = [
  {
    name: 'Achilles',
    relatedCharacters: ['Patroclus', 'Hector'],
    events: ['Duel with Hector'],
    funFacts: ['Weak spot is his heel.']
  },
  {
    name: 'Hector',
    relatedCharacters: ['Achilles', 'Paris'],
    events: ['Defends Troy'],
    funFacts: ['Known as Troy\'s greatest warrior.']
  }
];

test('renders Iliad Wiki title', () => {
  render(<App characters={mockCharacters} />);
  const titleElement = screen.getByText(/Iliad Wiki/i);
  expect(titleElement).toBeInTheDocument();
});