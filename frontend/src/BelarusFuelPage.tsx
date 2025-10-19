import React from 'react';
import { Link } from 'react-router-dom';
import fuelData from './data/fuelData.json';

interface Station {
  refueling: string;
  paymentCard: string;
  coordinates: string;
  volume: string;
}

const BelarusFuelPage: React.FC = () => {
  const stations: Station[] = fuelData.belarus;

  return (
    <div className="bg-[#141414] min-h-screen text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Схемы заправок для белорусского тягача</h1>
      <ul>
        {stations.map((station, index) => (
          <li key={index} className="mb-4">
            <p className="font-semibold">{station.refueling}</p>
            <p>Карта оплаты: {station.paymentCard}</p>
            <p>Объём: {station.volume}</p>
            <a
              href={`https://maps.google.com/?q=${station.coordinates}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Координаты: {station.coordinates}
            </a>
          </li>
        ))}
      </ul>
      <Link
        to="/belarus-directions"
        className="bg-blue-700 w-full max-w-[24rem] h-10 text-white py-2 mb-2 rounded-lg block text-center hover:bg-blue-800 active:bg-blue-900 transition duration-200"
      >
        Выбрать направление
      </Link>
    </div>
  );
};

export default BelarusFuelPage;