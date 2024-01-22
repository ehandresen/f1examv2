import { Driver } from './DriversList';
import { FC } from 'react';

interface ItemProps {
  driver: Driver;
}

const DriverItem: FC<ItemProps> = ({ driver }) => {
  return (
    <li className="item">
      <span style={{ width: '40%' }}>{driver.name}</span>
      <span style={{ width: '30%' }}>{driver.nationality}</span>
      <span style={{ width: '10%' }}>{driver.age}</span>
      <span style={{ width: '10%' }}>{driver.image}</span>
      <span style={{ width: '10%' }}>
        <button className="button">Remove</button>
      </span>
    </li>
  );
};

export default DriverItem;
