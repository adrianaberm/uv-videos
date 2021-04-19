import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';


describe('Header Logo', () => {
    test('Logo must have alt = "Uv Logo"', () => {
      render(<Header/>);
      const logo = screen.getByRole('img');
      expect(logo).toHaveAttribute('alt', 'Uv Logo');
    });
  });