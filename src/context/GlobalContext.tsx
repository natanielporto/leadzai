import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";

interface DataProps { 
  main:  { 
    temp: number
  }
  name: string;
  sys: {
    sunrise: number,
    sunset: number,
  }
  weather: {icon: string}[]
}


interface GlobalContextData {
  city: "Lisbon" | "New York" | "London";
  setCity: Dispatch<SetStateAction<"Lisbon" | "New York" | "London">>;
  scale: "Celsius" | "Fahrenheit";
  setScale: Dispatch<SetStateAction<"Celsius" | "Fahrenheit">>;
  data: DataProps
}

export const GlobalContext = createContext<GlobalContextData>(
  {} as GlobalContextData
);

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [city, setCity] = useState<"Lisbon" | "New York" | "London">("Lisbon");
  const [scale, setScale] = useState<"Celsius" | "Fahrenheit">("Celsius");
  const [data, setData] = useState<DataProps>({} as DataProps)

  const fetchWeatherInfo = useCallback(async () => {
    const API_KEY = "";

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${city}`
      );

      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }

      const data = await response.json();
      setData(data); 
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  },[city]);

  useEffect(() => {
   fetchWeatherInfo();
  }, [city, fetchWeatherInfo]);


  return (
    <GlobalContext.Provider value={{ city, setCity, scale, setScale, data }}>
      {children}
    </GlobalContext.Provider>
  );
};
