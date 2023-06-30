import React from 'react';
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react';
import Accordion from './';

jest.mock('../AcordionList', () => () => <div data-testid="acordion-list" />);

describe('Accordion', () => {
    const text = "Test"
    it('debería renderizar el texto del botón', () => {
        const { getByRole } = render(<Accordion text={text} data={[]} />);
        const button = getByRole('button');
        expect(button).toBeInTheDocument();
    });

    it('debería mostrar AcordionList cuando se hace clic en el botón', () => {
        const { getByRole, queryByTestId } = render(
            <Accordion text={text} data={[]} />
        );
        const button = getByRole('button');
        fireEvent.click(button);
        const acordionList = queryByTestId('acordion-list');
        expect(acordionList).toBeInTheDocument();
    });

    it('debería ocultar AcordionList cuando se hace clic nuevamente en el botón', () => {
        const { getByRole, queryByTestId } = render(
            <Accordion text={text} data={[]} />
        );
        const button = getByRole('button');
        fireEvent.click(button);
        fireEvent.click(button);
        const acordionList = queryByTestId('acordion-list');
        expect(acordionList).not.toBeInTheDocument();
    });
});
