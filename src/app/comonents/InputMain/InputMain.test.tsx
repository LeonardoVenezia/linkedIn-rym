import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import InputMain from './';

describe('InputMain', () => {
  it('renders the input correctly', () => {
    render(<InputMain />);

    const inputElement = screen.getByPlaceholderText('Crear publicación');
    expect(inputElement).toBeInTheDocument();
  });
});
