import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Text from './Text';


describe(`<Text/>`, () => {
    test('It should render the text', () => {
        const { getByText } = render(<Text as="h1">Hello there</Text>);
        expect(getByText('Hello there')).toBeInTheDocument();
    });
});