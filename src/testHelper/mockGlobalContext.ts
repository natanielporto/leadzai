export const mockGlobalContextCelsius = {
  city: 'Lisbon',
  setCity: jest.fn(),
  scale: 'Celsius',
  setScale: jest.fn(),
  data: { 
    main: {
      temp: 300 
    },
    sys: {
      sunrise: 1613775600, 
      sunset: 1613818800 
    },
    weather: [
      { icon: '01d' } 
    ]
  }
};

export const mockGlobalContextFahrenheit = {
  city: 'Lisbon',
  setCity: jest.fn(),
  scale: 'Fahrenheit',
  setScale: jest.fn(),
  data: { 
    main: {
      temp: 300 
    },
    sys: {
      sunrise: 1613775600, 
      sunset: 1613818800 
    },
    weather: [
      { icon: '01d' } 
    ]
  }
};