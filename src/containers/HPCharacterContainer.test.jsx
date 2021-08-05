import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import HPCharactersContainer from './HPCharactersContainer';

describe('HP Character Container', () => {
  it('displays HP Characters', async () => {
    render(<HPCharactersContainer />);

    const ul = await screen.findByRole('list', { name: 'characters' });
    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
