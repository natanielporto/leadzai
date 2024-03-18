import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from '../../App';
import { GlobalContext } from '../../context/GlobalContext';

describe('Select Component', () => {
  it('should render the city selector and pick a city', async () => {
    const mockGlobalContext = {
      city: 'Lisbon',
      setCity: jest.fn(),
    };

    const { getByText, getByTestId } = render(
      //@ts-ignore
      <GlobalContext.Provider value={mockGlobalContext}>
        <App />
      </GlobalContext.Provider>
    );

    const dropDownHeader = getByTestId('dropDownHeader');
    expect(dropDownHeader).toBeInTheDocument();

    fireEvent.click(dropDownHeader);

    await waitFor(() => getByText('London'));

    const londonOption = getByText('London');
    fireEvent.click(londonOption);

    expect(mockGlobalContext.setCity).toHaveBeenCalledWith('London');
  });
});
