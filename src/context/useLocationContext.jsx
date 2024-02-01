import { useContext } from 'react';
import { LocationContext } from './LocationContext';

const useLocationContext = () => {
  return useContext(LocationContext);
};

export default useLocationContext;
