import React from 'react';
import { useFetchCars } from '../hooks/useFetchCars'

export const CarsList = () => {
  const cars = useFetchCars();
  return (
    <div>
      {cars.map((car, index) => <li>[{++index}]{car.name} - {car.price}$</li>)}
    </div>
  )
}
