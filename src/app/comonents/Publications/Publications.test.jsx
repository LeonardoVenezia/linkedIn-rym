import '@testing-library/jest-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import Publications from './';
import { GET_CHARACTERS } from '../../services/feedServices';

const mocks = [
  {
    request: {
      query: GET_CHARACTERS,
      variables: { page: 1 },
    },
    result: {
      data: {
        characters: {
          results: [
            {
              id: '1',
              name: 'Rick Sanchez',
              image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
              origin: { name: 'test', type: 'test' },
              location: { name: 'test', type: 'test' }
            },
            {
              id: '2',
              name: 'Morty Smith',
              image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
              origin: { name: 'test', type: 'test' },
              location: { name: 'test', type: 'test' }
            },
          ],
        },
      },
    },
  },
];

describe('Publications', () => {
  it('renders without error', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Publications />
      </MockedProvider>,
    );
  });

  it('renders the characters', async () => {
    const component = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Publications />
      </MockedProvider>,
    );

    await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)));

    expect(component.getByText('Rick Sanchez')).toBeInTheDocument();
    expect(component.getByText('Morty Smith')).toBeInTheDocument();
  });
});
