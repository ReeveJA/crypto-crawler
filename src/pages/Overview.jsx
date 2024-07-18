// import {useState, useEffect} from 'react'
// import Navbar from '../components/Navbar'

// const Overview = () => {

//   const [cryptoData, setCryptoData] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(false)

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true)
//       try {
//         const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
//         if (!response.ok) {
//           throw new Error('Network response failed, please try again later')
//         }
//         const result = await response.json()
//         setCryptoData(result)
//       } catch (error) {
//           setError(error)
//       }
//         setLoading(false)
//     }

//     fetchData()
//   }, [])

//   {loading ? <div>Loading...</div> : <div>Error: {error.message}</div>}

//   return <>
//     <Navbar />
//     <div className="container mx-auto p-4">
//         <h1 className="text-3xl font-semibold bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent mb-4">Crypto Data</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {cryptoData.map(coin => (
//             <div key={coin.id} className="max-w-sm rounded-md overflow-hidden bg-slate-800/70 shadow-lg m-4 p-6 hover:cursor-pointer">
//               <img src={coin.image} alt={coin.name} className="w-16 h-16 mx-auto mb-4 rounded-full" />
//               <h2 className="text-xl font-bold mb-2">{coin.name} ({coin.symbol.toUpperCase()})</h2>
//               <p className="text-gray-600">Price: ${coin.current_price.toLocaleString()}</p>
//             </div>
//           ))}
//         </div>
//     </div>
//   </>
// }

// export default Overview

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const Overview = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
        if (!response.ok) {
          throw new Error('Network response failed, please try again later');
        }
        const result = await response.json();
        setCryptoData(result);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10">Error: {error.message}</div>;

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen bg-gray-900 overflow-y-auto">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="spark" style={{ top: '10%', left: '20%' }}></div>
          <div className="spark" style={{ top: '30%', left: '50%' }}></div>
          <div className="spark" style={{ top: '70%', left: '80%' }}></div>
          <div className="spark" style={{ top: '90%', left: '10%' }}></div>
        </div>
        <div className="container mx-auto p-4 relative z-10">
          <h1 className="text-3xl font-bold mb-4 text-white">Crypto Data</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cryptoData.map(coin => (
              <div key={coin.id} className="bg-slate-800/70 shadow-lg rounded-lg p-6">
                <img src={coin.image} alt={coin.name} className="w-16 h-16 mx-auto mb-4 rounded-full" />
                <h2 className="text-xl font-bold mb-2 text-white">{coin.name} ({coin.symbol.toUpperCase()})</h2>
                <p className="text-white">Price: ${coin.current_price.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
