import SunTimer from './SunTimer';
import { render, screen } from '@testing-library/react';
import { GlobalContext } from '../../context/GlobalContext';

describe('SunTimer Component', () => {
  it('should render the sunrise and sunset times correctly', () => {
    const mockData = {
      sys: {
        sunrise: 1646450400, 
        sunset: 1646493600, 
      },
    };

    const mockContextValue = {
      city: 'Lisbon', 
      data: mockData,
    };

    render(
      //@ts-ignore
      <GlobalContext.Provider value={mockContextValue}>
        <SunTimer />
      </GlobalContext.Provider>
    );

    const sunriseElement = screen.getByText('03:20');
    const sunsetElement = screen.getByText('15:20');
    expect(sunriseElement).toBeInTheDocument();
    expect(sunsetElement).toBeInTheDocument();
  });
})