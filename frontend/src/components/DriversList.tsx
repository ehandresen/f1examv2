import { useEffect, useState } from 'react';
import DriversService from '../services/DriversService';

const DriversList = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    getDriversFromService();
  }, []);

  async function getDriversFromService() {
    const driversFromService = await DriversService.getAll();

    setDrivers(driversFromService);
  }

  return (
    <>
      <h1>Drivers</h1>
      <ul>
        {drivers.map((driver) => (
          <li key={driver.id}>{driver.name}</li>
        ))}
      </ul>
    </>
  );
};

export default DriversList;
