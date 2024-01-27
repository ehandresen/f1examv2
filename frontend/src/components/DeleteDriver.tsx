import { ChangeEvent, useState } from 'react';
import DriversService from '../services/DriversService';

const DeleteDriver = () => {
  const [idInput, setIdInput] = useState<number>(0);
  const [message, setMessage] = useState<string>('');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const number = parseInt(event.target.value);

    if (!isNaN(number)) {
      setIdInput(number);
    }
  }

  async function handleClick() {
    try {
      const result = await DriversService.deleteDriver(idInput);

      if (result) {
        console.log(result);

        setMessage(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Delete Driver</h1>
      <label htmlFor="id">Id: </label>
      <input type="text" id="id" onChange={handleChange} />
      <button onClick={handleClick}>Delete</button>
      <p>{message}</p>
    </>
  );
};

export default DeleteDriver;
