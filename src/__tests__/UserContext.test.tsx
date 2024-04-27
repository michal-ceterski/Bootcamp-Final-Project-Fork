import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserContextProvider, UserContext } from './UserContext';

describe('UserContextProvider', () => {
  it('provides ID and setID values to children', () => {
    render(
      <UserContextProvider>
        <UserContext.Consumer>
          {({ ID, setID }) => (
            <>
              <span data-testid="id">{ID}</span>
              <button onClick={() => setID('test-id')} data-testid="set-id-btn">
                Set ID
              </button>
            </>
          )}
        </UserContext.Consumer>
      </UserContextProvider>
    );

    const idSpan = screen.getByTestId('id');
    expect(idSpan.textContent).toBe('');

    const setIdBtn = screen.getByTestId('set-id-btn');
    expect(setIdBtn).toBeInTheDocument();

    // Click the button to set the ID
    fireEvent.click(setIdBtn);

    // Check if ID is updated
    expect(idSpan.textContent).toBe('test-id');
  });
});