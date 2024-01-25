import axios from 'axios';

const DriversService = (() => {
  const driversController = 'http://localhost:5155/api/drivers';

  async function getAll() {
    const result = await axios.get(driversController);

    return result.data;
  }

  async function getById(id: number) {
    try {
      const result = await axios.get(`${driversController}/${id}`);

      console.log(result);
      return result.data;
    } catch (error: any) {
      if (error.response) {
        // Not in 200 response range
        console.log(error.response.data);
        console.log(error.response.status);
      } else {
        console.log(`Error: ${error.message}`);
      }
    }
  }

  return {
    getAll,
    getById,
  };
})();

export default DriversService;
