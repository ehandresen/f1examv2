import { useEffect, useState } from 'react';
import DriversService from '../services/DriversService';
import DriverItem from './DriverItem';

export interface Driver {
  id: number;
  name: string;
  age: number;
  nationality: string;
  image: string;
}

const DriversList = () => {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getDriversFromService();
  }, []);

  async function getDriversFromService() {
    const driversFromService = await DriversService.getAll();

    setDrivers(driversFromService);
  }

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  const newDriverList = () => {
    return drivers.filter((driver) =>
      driver.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  const handleRemove = (item: Driver) => {
    const newDriverList = drivers.filter((driver) => item.id !== driver.id);

    setDrivers(newDriverList);
  };

  return (
    <>
      <label htmlFor="search" className="label">
        Search:
      </label>
      <input
        type="text"
        id="search"
        autoFocus
        className="input"
        onChange={handleSearch}
      />
      <p>{search}</p>
      <ul>
        <li className="item">
          <span style={{ width: '40%', fontWeight: 'bold' }}>Name</span>
          <span style={{ width: '30%', fontWeight: 'bold' }}>Nationality</span>
          <span style={{ width: '10%', fontWeight: 'bold' }}>Age</span>
          <span style={{ width: '10%', fontWeight: 'bold' }}>Image url</span>
          <span style={{ width: '10%', fontWeight: 'bold' }}></span>
        </li>
        <hr />
        {newDriverList().map((driver) => (
          <DriverItem key={driver.id} driver={driver} onRemove={handleRemove} />
        ))}
      </ul>
    </>
  );
};

export default DriversList;
