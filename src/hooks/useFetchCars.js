import { useState, useEffect } from 'react';

export const useFetchCars = () => {
  const [cars, setCars] = useState([]); 
  useEffect(() => {
    const fetchCars = async () => {
      const response = await fetch('http://localhost:4000/cars');
      setCars(await response.json())
    }
    fetchCars();
  }, []);
  return cars;
}
