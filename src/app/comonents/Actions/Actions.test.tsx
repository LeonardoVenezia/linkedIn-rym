import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Actions from './';
import actions from "./mock.json";

describe('Actions', () => {
  it('renders the actions correctly', () => {
    const { container, getAllByRole, getAllByText } = render(<Actions />);
    const actionButtons = getAllByRole('button');
    const actionTexts = getAllByText(/^(Foto|Video|Evento|Escribir artículo)$/);

    expect(actionButtons).toHaveLength(4);
    expect(actionTexts).toHaveLength(4);

    actionButtons.forEach((button, index) => {
      const buttonText = actionTexts[index];

      expect(button).toHaveStyle({ color: actions[index].color });
      expect(buttonText).toHaveTextContent(actions[index].text);
    });

    expect(container.firstChild).toHaveClass('Actions');
  });
});
