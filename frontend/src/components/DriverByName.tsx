import { useEffect, useState } from 'react';
import { Driver } from './DriversList';
import axios from 'axios';

const DriverByName = () => {
  const [searchInput, setSearchInput] = useState<string>('');

  useEffect(() => {
    const getDriverFromService = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5155/api/driver/$${'verstappen'}`
        );

        return response.data;
      } catch (error) {
        console.log(error);
      }
    };

    const result = getDriverFromService();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchInput(event.target.value);

  return (
    <>
      <h3>Search by Name</h3>
      <label htmlFor="search-name">Search</label>
      <input type="text" id="search-name" onChange={handleChange} />
      <div>{result}</div>
    </>
  );
};

export default DriverByName;
