import React, { useState, useEffect } from 'react';

const CarsList = () => {
  const [cars, setCars] = useState([]); 
  useEffect(() => {
    const fetchCars = async () => {
      const response = await fetch('http://localhost:4000/cars');
      setCars(await response.json())
    }
    fetchCars();
  }, [])
  return (
    <div>
      {cars.map((car, index) => <li key={index}>[{++index}]{car.name} - {car.price}$</li>)}
    </div>
  )
}

export default CarsList;
