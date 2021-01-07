import React from 'react';
import { useFetchCars } from '../hooks/useFetchCars'

const CarsTablePresentation = ({ cars }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, index) => (
            <tr key={index}>
              <td>{++index}</td>
              <td>{car.name}</td>
              <td>{car.price}$</td>
            </tr>
          ))}
        </tbody>
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
