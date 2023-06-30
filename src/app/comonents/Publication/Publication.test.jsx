import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Publication from '.';

const mockData = {
    image: '/image.jpg',
    name: 'Publication Name',
    origin: {
      name: 'Origin Name',
      type: 'Origin Type',
    },
    location: {
      name: 'Location Name',
      type: 'Location Type',
    },
    episode: [
      { __typename: 'Episode', name: 'Episode 1' },
      { __typename: 'Episode', name: 'Episode 2' },
    ],
  };

describe('Publication', () => {
  it('renders the publication information correctly', () => {
    render(<Publication data={mockData} />);

    const imageElement = screen.getByAltText(mockData.origin.name);
    const nameElement = screen.getByText(mockData.name);

    expect(imageElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
  });
});
