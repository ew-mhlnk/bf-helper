import React from 'react';
import { Link, useParams } from 'react-router-dom';

const DirectionChoicePage: React.FC = () => {
  const { truckType } = useParams<{ truckType: string }>();

  return (
    <div className="bg-[#141414] min-h-screen text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Выберите направление</h1>
      <Link
        to={`/${truckType}/asian-trip`}
        className="bg-blue-700 w-full max-w-[24rem] h-10 text-white py-2 mb-2 rounded-lg block text-center hover:bg-blue-800 active:bg-blue-900 transition duration-200"
      >
        Азиатский рейс
      </Link>
      <Link
        to={`/${truckType}/european-trip`}
        className="bg-blue-700 w-full max-w-[24rem] h-10 text-white py-2 mb-2 rounded-lg block text-center hover:bg-blue-800 active:bg-blue-900 transition duration-200"
      >
        Европейский рейс
      </Link>
      <Link
        to={`/${truckType}/manchzhuriya`}
        className="bg-blue-700 w-full max-w-[24rem] h-10 text-white py-2 mb-2 rounded-lg block text-center hover:bg-blue-800 active:bg-blue-900 transition duration-200"
      >
        Маньчжурия
      </Link>
      <Link
        to={`/${truckType}/krasnodar`}
        className="bg-blue-700 w-full max-w-[24rem] h-10 text-white py-2 mb-2 rounded-lg block text-center hover:bg-blue-800 active:bg-blue-900 transition duration-200"
      >
        Краснодар
      </Link>
    </div>
  );
};

export default DirectionChoicePage;