import { render } from '@testing-library/react';
import ScaleToggle from './ScaleToggle';

describe('ScaleToggle Component', () => {
  it('should render the °C and °F correctly', () => {
    const { getByText } = render(<ScaleToggle />);
    
    const celsiusElement = getByText('°C');
    const fahrenheitElement = getByText('°F');

    expect(celsiusElement).toBeInTheDocument();
    expect(fahrenheitElement).toBeInTheDocument();
  });
});