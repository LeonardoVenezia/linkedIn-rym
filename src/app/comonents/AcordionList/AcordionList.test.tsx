import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import AcordionList from './';

const testData = [
    { __typename: 'Episode', name: 'Episode 1' },
    { __typename: 'Episode', name: 'Episode 2' },
    { __typename: 'Episode', name: 'Episode 3' },
  ];

describe('AcordionList', () => {
  it('debería renderizar correctamente los elementos de la lista', () => {
    const { getByText } = render(<AcordionList data={testData} />);

    testData.forEach((item) => {
      const listItem = getByText(item.name);
      expect(listItem).toBeInTheDocument();
    });
  });
});
