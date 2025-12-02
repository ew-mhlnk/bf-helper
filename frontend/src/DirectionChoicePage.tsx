import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import Layout from './components/Layout';

const DirectionChoicePage: React.FC = () => {
  const { truckType } = useParams<{ truckType: string }>();
  const navigate = useNavigate();

  const title = truckType === 'belarus' ? 'Белорусский тягач' : 'Казахский тягач';

  // Список направлений (данные)
  const routes = [
    { id: 'asian-trip', name: 'Азиатский рейс', desc: 'Через РФ в Азию' },
    { id: 'european-trip', name: 'Европейский рейс', desc: 'Гросберен и Европа' },
    { id: 'manchzhuriya', name: 'Маньчжурия', desc: 'Китайское направление' },
    { id: 'krasnodar', name: 'Краснодар', desc: 'Южное направление' },
  ];

  return (
    <Layout title={title}>
      <div className="space-y-3 mt-2">
        {routes.map((route) => (
          <div
            key={route.id}
            onClick={() => navigate(`/${truckType}/${route.id}`)}
            className="group flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-blue-500 dark:hover:border-blue-500"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-300">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">{route.name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{route.desc}</p>
              </div>
            </div>
            <ArrowRight size={20} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default DirectionChoicePage;