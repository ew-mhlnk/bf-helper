import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MapPin, ArrowRight, AlertTriangle, Snowflake } from 'lucide-react';
import Layout from './components/Layout';

const DirectionChoicePage: React.FC = () => {
  const { truckType } = useParams<{ truckType: string }>();
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    if (navigator.vibrate) navigator.vibrate(15);
    navigate(path);
  };

  const title = truckType === 'belarus' ? 'Белорусский тягач' : 'Казахский тягач';

  const allRoutes = [
    { id: 'asian-trip', name: 'Азиатский рейс', desc: 'Через РФ в Азию' },
    { id: 'european-trip', name: 'Европейский рейс', desc: 'Гросберен и Европа' },
    { id: 'manchzhuriya', name: 'Маньчжурия', desc: 'Китайское направление' },
    { id: 'krasnodar', name: 'Краснодар', desc: 'Южное направление' },
  ];

  const visibleRoutes = allRoutes.filter(route => {
    if (truckType === 'belarus') return true;
    if (truckType === 'kazakh') return route.id !== 'krasnodar' && route.id !== 'european-trip';
    return false;
  });

  return (
    <Layout title={title}>
      <div className="space-y-4 mt-2">
        {/* Список маршрутов */}
        <div className="space-y-3">
          {visibleRoutes.map((route) => (
            <div
              key={route.id}
              onClick={() => handleNavigate(`/${truckType}/${route.id}`)}
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

        {/* --- НОВЫЙ БЛОК: Форс-мажор (Сильные морозы) --- */}
        <div className="p-4 rounded-xl border border-cyan-200 bg-cyan-50 dark:bg-cyan-900/20 dark:border-cyan-800 shadow-sm">
          <div className="flex items-start gap-3 mb-2">
            <div className="shrink-0 text-cyan-600 dark:text-cyan-400 mt-1">
              <Snowflake size={24} />
            </div>
            <div>
              <h3 className="font-bold text-cyan-800 dark:text-cyan-300 text-base leading-tight">
                Дозаправка в форс-мажорные ситуации
              </h3>
              <p className="text-sm text-cyan-700/90 dark:text-cyan-200/90 mt-1 leading-relaxed">
                В случае форс-мажора (сильные морозы) заправить/дозаправить прицеп можно на АЗС <span className="font-bold">Роснефть</span> или <span className="font-bold">Башнефть</span>.
              </p>
              
              <div className="mt-3 pt-2 border-t border-cyan-200 dark:border-cyan-800/50 flex items-center gap-2 text-xs sm:text-sm text-cyan-800 dark:text-cyan-100">
                <span className="text-xl">💳</span>
                <span>
                  Использовать карты: <span className="font-bold">{truckType === 'belarus' ? 'e1card или Роснефть' : 'e1card'}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Блок: Новые правила */}
        <div className="p-4 rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-800 shadow-sm">
          <div className="flex items-start gap-3 mb-3">
            <div className="shrink-0 text-amber-600 dark:text-amber-400 mt-1">
              <AlertTriangle size={24} />
            </div>
            <div>
              <h3 className="font-bold text-amber-800 dark:text-amber-300 text-base leading-tight">
                ‼️ Новые правила заправки с 01.12.2025
              </h3>
              <p className="text-xs text-amber-700/80 dark:text-amber-400/80 mt-1">
                Для рейсов в Казахстан и Китай
              </p>
            </div>
          </div>
          
          <div className="text-sm text-gray-800 dark:text-gray-200 space-y-3">
            <div className="pl-2 border-l-2 border-amber-300 dark:border-amber-700">
              <p className="font-bold text-amber-700 dark:text-amber-400 text-xs uppercase mb-1">
                🆕 Основные изменения:
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                <li>Заправка осуществляется в Беларуси и России</li>
                <li>В Казахстане — только дозаправка при необходимости</li>
              </ul>
            </div>

            <div className="bg-white/60 dark:bg-black/20 p-3 rounded-lg border border-amber-100 dark:border-amber-800/50">
              <p className="font-bold text-amber-700 dark:text-amber-400 text-xs uppercase mb-2">
                Обновлённые нормы топлива:
              </p>
              
              {truckType === 'belarus' && (
                <div>
                  <p className="font-bold text-sm mb-1">🇧🇾 Для BY тягачей:</p>
                  <ul className="space-y-1 text-xs sm:text-sm">
                    <li className="flex justify-between">
                      <span>Выход из РБ:</span>
                      <span className="font-bold">полные баки</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Вход в КЗ:</span>
                      <span className="font-bold">полные баки</span>
                    </li>
                    <li className="flex justify-between border-t border-gray-200 dark:border-gray-700 pt-1 mt-1">
                      <span>Вход в РБ:</span>
                      <span className="font-bold text-red-600 dark:text-red-400">100 литров</span>
                    </li>
                  </ul>
                </div>
              )}

              {truckType === 'kazakh' && (
                <div>
                  <p className="font-bold text-sm mb-1">🇰🇿 Для KZ тягачей:</p>
                  <ul className="space-y-1 text-xs sm:text-sm">
                    <li className="flex justify-between">
                      <span>Вход в КЗ:</span>
                      <span className="font-bold">полные баки</span>
                    </li>
                    <li className="flex justify-between border-t border-gray-200 dark:border-gray-700 pt-1 mt-1">
                      <span>Вход в РБ:</span>
                      <span className="font-bold">полные баки</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DirectionChoicePage;