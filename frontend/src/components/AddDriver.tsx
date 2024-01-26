import { useEffect, useState } from 'react';
import DriversService from '../services/DriversService';
import { Driver } from './DriversList';

const AddDriver = () => {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [nationality, setNationality] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [newDriver, setNewDriver] = useState<Driver>({
    name: 'test',
    age: 0,
    nationality: 'test',
    image: 'test',
  });

  useEffect(() => {
    // This useEffect will run whenever newDriver changes
    async function addDriverToService() {
      try {
        const result = await DriversService.addDriver(newDriver);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }

    // Check if any of the properties in newDriver have changed
    const hasDriverChanged =
      newDriver.name !== 'test' ||
      newDriver.age !== 0 ||
      newDriver.nationality !== 'test' ||
      newDriver.image !== 'test';

    if (hasDriverChanged) {
      addDriverToService();
    }
  }, [newDriver]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'age': {
        // convert to number
        const inputValue = event.target.value;
        const number = parseInt(inputValue);

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

  async function handleClick() {
    setNewDriver((prevDriver) => ({
      ...prevDriver,
      name: name,
      age: age,
      nationality: nationality,
      image: image,
    }));
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
