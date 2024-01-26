import { useEffect, useState } from 'react';
import { Driver } from './DriversList';
import DriversService from '../services/DriversService';
import DriverItem from './DriverItem';

const DriverByName = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [driver, setDriver] = useState<Driver>({
    id: 0,
    name: 'test',
    age: 0,
    nationality: 'test',
    image: 'test',
  });

  useEffect(() => {}, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchInput(event.target.value);

  async function handleClick() {
    const driverFromService = await DriversService.getByName(searchInput);

    setDriver(driverFromService);
  }

  return (
    <>
      <h3>Search by Name</h3>
      <label htmlFor="search-name">Name: </label>
      <input type="text" id="search-name" onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
      <DriverItem driver={driver} />
    </>
  );
};

export default DriverByName;
