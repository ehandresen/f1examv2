import AddDriver from './components/AddDriver';
import DeleteDriver from './components/DeleteDriver';
import DriverById from './components/DriverById';
import DriverByName from './components/DriverByName';
import DriversList from './components/DriversList';
import UpdateDriver from './components/UpdateDriver';

function App() {
  return (
    <div className="container">
      <h1 className="headline-primary">F1 Drivers</h1>
      <UpdateDriver />
      <br />
      <hr />
      <DriversList />
      <hr />
      <DriverById />
      <hr />
      <DriverByName />
      <hr />
      <AddDriver />
      <hr />

      <DeleteDriver />
    </div>
  );
}

export default App;
