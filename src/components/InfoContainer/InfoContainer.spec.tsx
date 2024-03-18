import InfoContainer from './InfoContainer';
import { render } from '@testing-library/react';
import { GlobalContext } from '../../context/GlobalContext';
import { mockGlobalContextCelsius } from '../../testHelper/mockGlobalContext';

describe('InfoContainer Component', () => {
  it('should render correctly all the subcomponents', () => {
    const globalContext = mockGlobalContextCelsius;
   
    const { queryByTestId } = render(
      //@ts-ignore
      <GlobalContext.Provider value={globalContext}>
        <InfoContainer />
      </GlobalContext.Provider>
    );

    const selectComponent = queryByTestId('selectComponent');
    const scaleToggleComponent = queryByTestId('scaleToggleComponent');
    const temperatureComponent = queryByTestId('temperatureComponent');
    const mainIconComponent = queryByTestId('mainIconComponent');
    const sunTimerComponent = queryByTestId('sunTimerComponent');

    expect(selectComponent).toBeDefined();
    expect(scaleToggleComponent).toBeDefined();
    expect(temperatureComponent).toBeDefined();
    expect(mainIconComponent).toBeDefined();
    expect(sunTimerComponent).toBeDefined();
  });
});
