import React from 'react';
import { useFetchCars } from '../hooks/useFetchCars'

const CarsListPresentation = ({ cars }) => {
  return (
    <div>
      {cars.map((car, index) => <li key={index}>[{++index}]{car.name} - {car.price}$</li>)}
    </div>
  )
}

const CarsListContainer = () => {
  const cars = useFetchCars();
  return (
   <CarsListPresentation cars={cars} />
  )
}

export default CarsListContainer;
