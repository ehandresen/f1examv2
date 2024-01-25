import { Driver } from './DriversList';
import { FC } from 'react';

interface ItemProps {
  driver: Driver;
  onRemove?: (driver: Driver) => void;
}

const DriverItem: FC<ItemProps> = ({ driver, onRemove }) => {
  if (!driver) {
    // If driver is not found
    return <div>Driver not found</div>;
  }

  const handleRemove = () => {
    // Check if onRemove is defined before invoking it
    if (onRemove) {
      onRemove(driver);
    }
  };

  return (
    <li className="item">
      <span style={{ width: '40%' }}>{driver.name}</span>
      <span style={{ width: '30%' }}>{driver.nationality}</span>
      <span style={{ width: '10%' }}>{driver.age}</span>
      <span style={{ width: '10%' }}>{driver.image}</span>
      <span style={{ width: '10%' }}>
        <button className="button" onClick={handleRemove}>
          Remove
        </button>
      </span>
    </li>
  );
};

export default DriverItem;
