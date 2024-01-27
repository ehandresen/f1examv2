import { useEffect, useState } from 'react';
import { Driver } from './DriversList';
import DriversService from '../services/DriversService';
import DriverItem from './DriverItem';

const UpdateDriver = () => {
  const [driver, setDriver] = useState<Driver | null>(null);
  const [driverId, setDriverId] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [nationality, setNationality] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [image, setImage] = useState<string>('');

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

  async function handleUpdate() {
    try {
      if (driver !== null) {
        const driverToUpdate: Driver = {
          id: driver.id,
          name: name,
          nationality: nationality,
          age: age,
          image: image,
        };

        const result = await DriversService.updateDriver(driverToUpdate);

        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'nationality':
        setNationality(event.target.value);
        break;
      case 'age': {
        const number = parseInt(event.target.value);

        if (!isNaN(number)) {
          setAge(number);
        }
        break;
      }
      case 'image':
        setImage(event.target.value);
    }
  }

  return (
    <>
      <h1>Update Driver</h1>
      <label htmlFor="search-id">Search by ID: </label>
      <input type="text" id="search-id" onChange={handleChange} />
      <button onClick={handleClick}>Get Driver</button>
      <DriverItem driver={driver} />

      <input
        name="name"
        type="text"
        placeholder={driver?.name}
        onChange={handleInputChange}
      />
      <input
        name="nationality"
        type="text"
        placeholder={driver?.nationality}
        onChange={handleInputChange}
      />
      <input
        name="age"
        type="text"
        placeholder={driver?.age.toString()} // typescript expects 'placeholder' property to be of type 'string'
        onChange={handleInputChange}
      />
      <input
        name="image"
        type="text"
        placeholder={driver?.image}
        onChange={handleInputChange}
      />
      <button onClick={handleUpdate}>Update</button>
    </>
  );
};

export default UpdateDriver;
