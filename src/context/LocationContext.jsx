import { createContext, useState } from 'react';

const LocationContext = createContext();

const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(null);

  const setGlobalLocation = (newLocation) => {
    setLocation(newLocation);
  };

  return (
    <LocationContext.Provider value={{ location, setGlobalLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export { LocationProvider, LocationContext };
