import DriversService from '../services/DriversService';
import DriverItem from './DriverItem';
import { useState, useEffect } from 'react';
import { Driver } from './DriversList';

const DriverById = () => {
  const [id, setId] = useState<number>(1);
  const [driver, setDriver] = useState<Driver>({
    id: 0,
    name: 'test',
    age: 0,
    nationality: 'test',
    image: 'test',
  });

  useEffect(() => {
    getDriverFromService();
  }, [id]);

  async function getDriverFromService() {
    const driverFromService = await DriversService.getById(id);

    setDriver(driverFromService);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    const number = parseInt(inputValue, 10);

    if (!isNaN(number)) {
      setId(number);
    }
  }

  return (
    <>
      <label htmlFor="search-id">Search Id:</label>
      <input type="text" id="search-id" onChange={handleChange} />
      <DriverItem driver={driver} />
    </>
  );
};

export default DriverById;
