/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { Driver } from '../components/DriversList';

const DriversService = (() => {
  const driversController: string = 'http://localhost:5155/api/drivers';

  async function getAll() {
    const result = await axios.get(driversController);

    return result.data;
  }

  async function getById(id: number) {
    try {
      const result = await axios.get(`${driversController}/${id}`);

      return result.data;
    } catch (error: any) {
      if (error.response) {
        // Not in 200 response range
        console.log(error.response.data);
      } else {
        console.log(`Error: ${error.message}`);
      }
    }
  }

  async function getByName(name: string) {
    try {
      const result = await axios.get(`${driversController}/getByName/${name}`);

      console.log(result.data);
      return result.data;
    } catch (error: any) {
      if (error.response) {
        // Not in 200 response range
        console.log(error.response.data);
      } else {
        console.log(`Error: ${error.message}`);
      }
    }
  }

  async function addDriver(newDriver: Driver) {
    try {
      await axios.post(driversController, newDriver);

      return {
        success: true,
        message: 'Driver added successfully',
      };
    } catch (error: any) {
      if (error.response) {
        // Not in 200 range
        console.log(error.response.data);
        return {
          success: false,
          message: 'Error adding driver',
        };
      } else {
        console.log(`Error: ${error.message}`);
        return {
          success: false,
          message: 'Unknown error adding driver',
        };
      }
    }
  }

  async function updateDriver(updatedDriver: Driver) {
    try {
      await axios.put(driversController, updatedDriver);

      return {
        success: true,
        message: 'Driver updated successfully',
      };
    } catch (error: any) {
      if (error.response) {
        console.log(error.response.data);
        return {
          success: false,
          message: 'Error updating driver',
        };
      } else {
        console.log(`Error: ${error.message}`);
      }
    }
  }

  async function deleteDriver(id: number) {
    try {
      await axios.delete(`${driversController}/${id}`);

      return {
        success: true,
        message: 'Driver deleted successfully',
      };
    } catch (error: any) {
      if (error.response) {
        return {
          success: false,
          message: 'Error deleting driver',
        };
      } else {
        console.log(`Error: ${error.message}`);
      }
    }
  }

  return {
    getAll,
    getById,
    getByName,
    addDriver,
    updateDriver,
    deleteDriver,
  };
})();

export default DriversService;
