import AddDriver from './components/AddDriver';
import DriverById from './components/DriverById';
import DriverByName from './components/DriverByName';
import DriversList from './components/DriversList';

function App() {
  return (
    <div className="container">
      <h1 className="headline-primary">F1 Drivers</h1>
      <DriversList />
      <hr />
      <DriverById />
      <hr />
      <DriverByName />
      <hr />
      <AddDriver />
    </div>
  );
}

export default App;
