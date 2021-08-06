import { useSelector } from 'react-redux';
import Keep from '../Keep';

import './Keeps.css';

const Keeps = () => {
  const keeps = useSelector((state) => state.keeps);

  return (
    <div className="keepsList">
      {Object.keys(keeps).map((keepId) => (
        <Keep key={`keep-${keepId}`} id={keepId} />
      ))}
    </div>
  );
};

export default Keeps;
