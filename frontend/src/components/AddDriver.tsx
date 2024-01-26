import { useEffect, useState } from 'react';
import DriversService from '../services/DriversService';
import { Driver } from './DriversList';

const AddDriver = () => {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [nationality, setNationality] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [newDriver, setNewDriver] = useState<Driver | null>(null);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'age': {
        // convert to number
        const number = parseInt(event.target.value);

        if (!isNaN(number)) {
          setAge(number);
        }
        break;
      }
      case 'nationality':
        setNationality(event.target.value);
        break;
      case 'image':
        setImage(event.target.value);
        break;
    }
  }

  function handleClick() {
    // Create a new driver object with the current input values
    const driver: Driver = {
      name: name,
      age: age,
      nationality: nationality,
      image: image,
    };

    // Set the new driver in the state
    setNewDriver(driver);
  }

  useEffect(() => {
    // Check if newDriver is not null (meaning a new driver has been set)
    if (newDriver !== null) {
      // Call the asynchronous function to add the new driver
      addDriverToService(newDriver);
    }
  }, [newDriver]);

  async function addDriverToService(driver: Driver) {
    try {
      const result = await DriversService.addDriver(driver);

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Add Driver</h1>
      <div>
        <label htmlFor="name">Name: </label>
        <input name="name" id="name" onChange={handleChange} />

        <label htmlFor="age">Age: </label>
        <input name="age" id="age" onChange={handleChange} />

        <label htmlFor="nationality">Nationality: </label>
        <input name="nationality" id="nationality" onChange={handleChange} />

        <label htmlFor="image">Image: </label>
        <input name="image" id="image" onChange={handleChange} />

        <button onClick={handleClick}>Add Driver</button>
      </div>
    </>
  );
};

export default AddDriver;
