import React from 'react';
import { useFetchCars } from '../hooks/useFetchCars'

export const CarsTable = () => {
  const cars = useFetchCars();
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
