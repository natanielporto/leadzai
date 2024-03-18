import React from 'react';
import { render } from '@testing-library/react';
import Body from './Body';

describe('Body Component', () => {
  it('should render the body component', () => {
    const { getByTestId } = render(<Body />);

    const infoContainer = getByTestId('bodyContainer');
    
    expect(infoContainer).toBeInTheDocument();
  });
})