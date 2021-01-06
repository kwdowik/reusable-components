import React from 'react';
import { useFetchCars } from '../hooks/useFetchCars'

const CarsList = () => {
  const cars = useFetchCars();
  return (
    <div>
      {cars.map((car, index) => <li key={index}>[{++index}]{car.name} - {car.price}$</li>)}
    </div>
  )
}

export default CarsList;
