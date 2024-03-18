import { render } from '@testing-library/react';
import MainIcon from './MainIcon';
import { GlobalContext } from '../../context/GlobalContext';

describe('Main icon Component', () => {
  it('should render the climate icon correctly', () => {
    const mockWeatherData = {
      weather: [{ icon: '01d' }]
    };
  
    const { getByAltText } = render(
      //@ts-ignore
      <GlobalContext.Provider value={{ data: mockWeatherData }}>
        <MainIcon />
      </GlobalContext.Provider>
    );
    
    const weatherIcon = getByAltText('Weather Icon');
    expect(weatherIcon).toBeInTheDocument();
    expect(weatherIcon).toHaveAttribute('src', 'http://openweathermap.org/img/wn/01d.png');
  });

  it('should not render the climate icon correctly if data is invalid', () => {
    const mockWeatherData = {};
    
    const { container } = render(
      //@ts-ignore
      <GlobalContext.Provider value={{ data: mockWeatherData }}>
        <MainIcon />
      </GlobalContext.Provider>
    );
    
    expect(container.querySelector('img')).not.toBeInTheDocument();
  });
})