import DriverById from './components/DriverById';
import DriversList from './components/DriversList';

function App() {
  return (
    <div className="container">
      <h1 className="headline-primary">F1 Drivers</h1>
      <DriversList />
      <hr />
      <DriverById />
    </div>
  );
}

export default App;
