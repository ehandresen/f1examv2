import { useEffect, useState } from 'react';
import { Driver } from './DriversList';
import DriversService from '../services/DriversService';

const UpdateDriver = () => {
  const [driver, setDriver] = useState<Driver | null>(null);
  const [driverId, setDriverId] = useState<number>(0);

  console.log(driver);

  useEffect(() => {
    getDriverFromService(driverId);
  }, []);

  async function getDriverFromService(id: number) {
    try {
      const result = await DriversService.getById(id);

      setDriver(result);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const number = parseInt(event.target.value);

    if (!isNaN(number)) {
      setDriverId(number);
    }
  }

  function handleClick() {
    getDriverFromService(driverId);
  }

  return (
    <>
      <h1>Update Driver</h1>
      <label htmlFor="search-id">Search by ID: </label>
      <input type="text" id="search-id" onChange={handleChange} />
      <button onClick={handleClick}>Get Driver</button>
    </>
  );
};

export default UpdateDriver;
