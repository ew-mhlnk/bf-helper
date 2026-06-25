import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MapPin, ArrowRight, AlertTriangle } from 'lucide-react';
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

        {/* Предупреждение и новые правила */}
        <div className="p-4 rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-800 shadow-sm">
          <div className="flex items-start gap-3 mb-3">
            <div className="shrink-0 text-amber-600 dark:text-amber-400 mt-1">
              <AlertTriangle size={24} />
            </div>
            <div>
              <h3 className="font-bold text-amber-800 dark:text-amber-300 text-base leading-tight">
                ‼️ Новые правила заправки с 25.06.2026
              </h3>
              <p className="text-xs text-amber-700/80 dark:text-amber-400/80 mt-1">
                Для рейсов в Казахстан и Китай
              </p>
            </div>
          </div>

          <div className="text-sm text-gray-800 dark:text-gray-200 space-y-3">
            <div className="bg-white/60 dark:bg-black/20 p-3 rounded-lg border border-amber-100 dark:border-amber-800/50">
              <p className="font-bold text-amber-700 dark:text-amber-400 text-xs uppercase mb-3">
                Обновлённые нормы топлива по входу/выходу:
              </p>

              {/* Правила для белорусских тягачей */}
              {truckType === 'belarus' && (
                <div>
                  <p className="font-bold text-sm mb-2 text-blue-700 dark:text-blue-400">🇧🇾 Для BY тягачей:</p>
                  <ul className="space-y-3 text-xs sm:text-sm">
                    <li className="flex justify-between border-b border-amber-200 dark:border-amber-800/50 pb-2">
                      <span>Выход из РБ:</span>
                      <span className="font-bold text-right">полные баки</span>
                    </li>
                    <li className="flex justify-between gap-3 border-b border-amber-200 dark:border-amber-800/50 pb-2">
                      <span className="shrink-0">Выход из КЗ:</span>
                      <span className="font-bold text-right leading-tight">
                        остаток от полных баков с последней АЗС «Газпром»<br/>
                        <span className="text-[10px] uppercase text-amber-700 dark:text-amber-400 mt-1 inline-block">
                          (только ГАЗПРОМ по карте ГАЗПРОМ)
                        </span>
                      </span>
                    </li>
                    <li className="flex justify-between border-b border-amber-200 dark:border-amber-800/50 pb-2">
                      <span>Россия:</span>
                      <span className="font-bold text-red-600 dark:text-red-400 text-right leading-tight">
                        только ДОзаправка<br/>
                        <span className="text-[10px] text-red-500 uppercase mt-0.5 inline-block">(с согласования)</span>
                      </span>
                    </li>
                    <li className="flex justify-between gap-2 pt-1">
                      <span className="text-gray-600 dark:text-gray-400 leading-tight">Если была ДОзаправка в РФ<br/>Вход в РБ:</span>
                      <span className="font-bold text-red-600 dark:text-red-400 text-right self-end mt-1">не более 100 л.</span>
                    </li>
                  </ul>
                </div>
              )}

              {/* Правила для казахских тягачей */}
              {truckType === 'kazakh' && (
                <div>
                  <p className="font-bold text-sm mb-2 text-blue-700 dark:text-blue-400">🇰🇿 Для KZ тягачей:</p>
                  <ul className="space-y-2.5 text-xs sm:text-sm">
                    <li className="border-b border-amber-200 dark:border-amber-800/50 pb-2">
                      <span className="font-semibold text-gray-700 dark:text-gray-300 block mb-1">Где заправляться:</span>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 pl-1 text-[11px] sm:text-xs">
                        <li>В РФ — <span className="font-bold text-red-600 dark:text-red-400">НЕ ЗАПРАВЛЯЕМСЯ</span> (только дозаправка).</li>
                        <li>В РБ — на <span className="font-bold text-green-600 dark:text-green-400">Газпроме</span> по карте Газпром.</li>
                      </ul>
                    </li>
                    <li className="flex justify-between border-b border-amber-200 dark:border-amber-800/50 pb-1.5">
                      <span>Выход из КЗ:</span>
                      <span className="font-bold text-gray-900 dark:text-white">полные баки</span>
                    </li>
                    <li className="flex justify-between border-b border-amber-200 dark:border-amber-800/50 pb-1.5">
                      <span>Вход в КЗ:</span>
                      <span className="font-bold text-red-600 dark:text-red-400">не более 100 л.</span>
                    </li>
                    <li className="flex justify-between border-b border-amber-200 dark:border-amber-800/50 pb-1.5">
                      <span>Выход из РБ:</span>
                      <span className="font-bold text-right text-gray-900 dark:text-white leading-tight">
                        до КЗ с остатком 100 л.
                      </span>
                    </li>
                    <li className="flex justify-between pt-1">
                      <span className="leading-tight">Вход в РБ (если была дозаправка в РФ):</span>
                      <span className="font-bold text-red-600 dark:text-red-400 text-right">не более 100 л.</span>
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