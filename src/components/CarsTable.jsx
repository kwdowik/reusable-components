import React from 'react';
import { useFetchCars } from '../hooks/useFetchCars'

const CarsTablePresentation = ({ cars }) => {
  return (
    <div>
      <table>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {cars.map((car, index) => (
        <tr>
          <td>{++index}</td>
          <td>{car.name}</td>
          <td>{car.price}$</td>
        </tr>
        ))}
      </table>
    </div>
  )
}

const CarsTableContainer = () => {
  const cars = useFetchCars();
  return (
   <CarsTablePresentation cars={cars} />
  )
}

export default CarsTableContainer;
