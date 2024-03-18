import { render } from '@testing-library/react';
import Temperature from '../Temperature/Temperature';
import { GlobalContext } from '../../context/GlobalContext';
import { mockGlobalContextCelsius, mockGlobalContextFahrenheit } from '../../testHelper/mockGlobalContext';

describe('Toggler Component', () => {
  it('should display the temperature in Celsius correctly', () => {
    const globalContext = mockGlobalContextCelsius

    const { getByText } = render(
      //@ts-ignore
      <GlobalContext.Provider value={globalContext}>
        <Temperature />
      </GlobalContext.Provider>
    );

    const temperatureElement = getByText('27 °C');
    expect(temperatureElement).toBeInTheDocument();
  });

  it('should display the temperature in Fahrenheit correctly', () => {
    const globalContext = mockGlobalContextFahrenheit

    const { getByText } = render(
      //@ts-ignore
      <GlobalContext.Provider value={globalContext}>
        <Temperature />
      </GlobalContext.Provider>
    );

    const temperatureElement = getByText('81 °F');
    expect(temperatureElement).toBeInTheDocument();
  });
})