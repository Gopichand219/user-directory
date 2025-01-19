import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <ClipLoader color="#007bff" size={50} />
    </div>
  );
};

export default Loader;
