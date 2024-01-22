import axios from 'axios';

const DriversService = (() => {
  const driversController = 'http://localhost:5155/api/drivers';

  async function getAll() {
    const result = await axios.get(driversController);

    console.log(result.data);
    return result.data;
  }

  return {
    getAll,
  };
})();

export default DriversService;
