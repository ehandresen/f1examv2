import axios from 'axios';

const DriversService = (() => {
  const driversController: string = 'http://localhost:5155/api/drivers';

  async function getAll() {
    const result = await axios.get(driversController);

    return result.data;
  }

  async function getById(id: number) {
    try {
      const result = await axios.get(`${driversController}/${id}`);

      console.log(result);
      return result.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response) {
        // Not in 200 response range
        console.log(error.response.data);
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
