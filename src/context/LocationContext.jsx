import { createContext, useState } from 'react';

const LocationContext = createContext();

const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(null),
    [isModalOpen, setIsModalOpen] = useState(true);

  const openModal = () => setIsModalOpen(true),
    closeModal = () => setIsModalOpen(false);

  const setGlobalLocation = (newLocation) => setLocation(newLocation);

  return (
    <LocationContext.Provider
      value={{ location, isModalOpen, setGlobalLocation, openModal, closeModal }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export { LocationProvider, LocationContext };
