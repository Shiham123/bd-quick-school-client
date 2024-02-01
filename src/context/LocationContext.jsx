import { createContext, useState } from 'react';

const LocationContext = createContext();

const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(null),
    [isModalOpen, setIsModalOpen] = useState(true),
    [servicesLocation, setServicesLocation] = useState('');

  const openModal = () => setIsModalOpen(true),
    closeModal = () => setIsModalOpen(false);

  const setGlobalLocation = (newLocation) => setLocation(newLocation);
  const databaseServicesLocation = (databaseLocation) => setServicesLocation(databaseLocation);

  return (
    <LocationContext.Provider
      value={{
        location,
        isModalOpen,
        servicesLocation,
        setGlobalLocation,
        openModal,
        closeModal,
        databaseServicesLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export { LocationProvider, LocationContext };
