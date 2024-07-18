// src/components/Card.jsx
import React from 'react';
import btc from '../assets/btc.png'

const Card = ({ title, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden bg-slate-800/70 shadow-lg m-4">
      <div className="px-6 py-4">
        <img src={btc} alt='btc' />
        <div className="mt-4 font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-400 text-base mb-2">
          {description}
        </p>
        <p className='mt-4 font-light text-xs tracking-tight'>*information displayed from live feed</p>
      </div>
    </div>
  );
};

export default Card;
