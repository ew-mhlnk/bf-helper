import React from 'react';
import { Link, useParams } from 'react-router-dom';
import directionsData from './data/directionsData.json';

interface Direction {
  name: string;
  text: string;
}

const DirectionPage: React.FC = () => {
  const { truckType, direction } = useParams<{ truckType: string; direction: string }>();

  const data = directionsData[truckType as 'belarus' | 'kazakhstan'];

  const directionData = data.find((dir: Direction) => dir.name.toLowerCase().replace(/ /g, '-') === direction);

  if (!directionData) {
    return <p>Направление не найдено.</p>;
  }

  return (
    <div className="bg-[#141414] min-h-screen text-white p-4">
      <h1 className="text-2xl font-bold mb-4">{directionData.name}</h1>
      <p className="mb-4">{directionData.text}</p>
      <Link
        to={`/${truckType}-directions`}
        className="bg-blue-700 w-full max-w-[24rem] h-10 text-white py-2 mb-2 rounded-lg block text-center hover:bg-blue-800 active:bg-blue-900 transition duration-200"
      >
        Вернуться к выбору направления
      </Link>
    </div>
  );
};

export default DirectionPage;