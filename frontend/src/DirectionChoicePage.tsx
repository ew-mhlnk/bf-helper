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

  const isBelarus = truckType === 'belarus';
  const title = isBelarus ? 'Белорусский тягач' : 'Казахский тягач';

  // Европейский рейс исключен из списка
  const allRoutes = [
    { id: 'asian-trip', name: 'Китай (через Казахстан)', desc: 'Через РФ в Азию и Китай' },
    { id: 'manchzhuriya', name: 'Маньчжурия', desc: 'Китайское направление' },
    { id: 'krasnodar', name: 'Краснодар', desc: 'Южное направление' },
  ];

  const visibleRoutes = allRoutes.filter(route => {
    if (isBelarus) return true;
    if (truckType === 'kazakh') return route.id !== 'krasnodar';
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

        {/* Предупреждение и новые правила заправки */}
        <div className="p-4 rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-800 shadow-sm">
          <div className="flex items-start gap-3 mb-3">
            <div className="shrink-0 text-amber-600 dark:text-amber-400 mt-1">
              <AlertTriangle size={24} />
            </div>
            <div>
              <h3 className="font-bold text-amber-800 dark:text-amber-300 text-base leading-tight">
                ‼️ Новые правила заправки с 19.10.2026
              </h3>
              <p className="text-xs text-amber-700/80 dark:text-amber-400/80 mt-1">
                {isBelarus
                  ? 'Для рейсов в Казахстан, Китай и Россию'
                  : 'Для рейсов в Казахстан и Китай'}
              </p>
            </div>
          </div>

          <div className="text-sm text-gray-800 dark:text-gray-200 space-y-3">
            <div className="bg-white/70 dark:bg-black/30 p-3 sm:p-4 rounded-xl border border-amber-200/70 dark:border-amber-800/50 shadow-xs">
              <p className="font-bold text-amber-800 dark:text-amber-400 text-xs uppercase tracking-wide mb-3">
                Обновлённые нормы топлива по входу/выходу:
              </p>

              {/* 🇧🇾 Блок для белорусских тягачей */}
              {isBelarus && (
                <div className="space-y-3">
                  <p className="font-bold text-sm text-blue-700 dark:text-blue-400 flex items-center gap-1.5">
                    <span>🇧🇾</span> Для BY тягачей:
                  </p>

                  <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-gray-100/80 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold border-b border-gray-200 dark:border-gray-700 uppercase text-[10px] sm:text-xs">
                        <tr>
                          <th className="py-2.5 px-3">Контрольная точка</th>
                          <th className="py-2.5 px-3 text-right">Норма остатка</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 dark:divide-gray-800 font-medium">
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                          <td className="py-2.5 px-3">
                            <div className="font-bold text-gray-900 dark:text-white">Выход из РБ</div>
                            <div className="text-[11px] text-gray-500">выезд в рейс</div>
                          </td>
                          <td className="py-2.5 px-3 text-right">
                            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">
                              полные баки
                            </span>
                          </td>
                        </tr>

                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                          <td className="py-2.5 px-3">
                            <div className="font-bold text-gray-900 dark:text-white">Вход в КЗ</div>
                            <div className="text-[11px] text-gray-500">граница Казахстана</div>
                          </td>
                          <td className="py-2.5 px-3 text-right">
                            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">
                              полные баки
                            </span>
                          </td>
                        </tr>

                        <tr className="hover:bg-amber-50/50 dark:hover:bg-amber-900/10 bg-amber-50/30 dark:bg-amber-950/20">
                          <td className="py-2.5 px-3">
                            <div className="font-bold text-amber-900 dark:text-amber-300">Заправка в КЗ</div>
                            <div className="text-[11px] text-amber-700/80 dark:text-amber-400/80">по E1 Card (SinoOil, Газпром, КМГ, Helios)</div>
                          </td>
                          <td className="py-2.5 px-3 text-right">
                            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-200 text-amber-900 dark:bg-amber-900/60 dark:text-amber-200">
                              только ДОзаправка
                            </span>
                          </td>
                        </tr>

                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                          <td className="py-2.5 px-3">
                            <div className="font-bold text-gray-900 dark:text-white">Выход из КЗ</div>
                            <div className="text-[11px] text-gray-500">граница КЗ/РФ</div>
                          </td>
                          <td className="py-2.5 px-3 text-right">
                            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
                              150 – 200 л. (суммарно тягач + п/п)
                            </span>
                          </td>
                        </tr>

                        <tr className="hover:bg-red-50/50 dark:hover:bg-red-900/10">
                          <td className="py-2.5 px-3">
                            <div className="font-bold text-gray-900 dark:text-white">Вход в РБ</div>
                            <div className="text-[11px] text-gray-500">въезд в Беларусь</div>
                          </td>
                          <td className="py-2.5 px-3 text-right">
                            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300">
                              200 л (суммарно тягач + п/п)
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="p-2.5 rounded-lg bg-amber-100/60 dark:bg-amber-900/30 text-amber-900 dark:text-amber-200 text-xs flex items-start gap-2">
                    <AlertTriangle size={15} className="shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
                    <span>
                      <strong>Внимание:</strong> В Казахстане полные баки не заправлять — разрешена только дозаправка по E1 Card на проверенных АЗС (SinoOil, Газпром, КазМунайГаз, Helios). На выезде из КЗ в баках должно оставаться 150–200 л, а на въезде в Беларусь — 200 л (суммарно баки тягача + п/п).
                    </span>
                  </div>
                </div>
              )}

              {/* 🇰🇿 Блок для казахских тягачей */}
              {!isBelarus && (
                <div className="space-y-3">
                  <p className="font-bold text-sm text-blue-700 dark:text-blue-400 flex items-center gap-1.5">
                    <span>🇰🇿</span> Для KZ тягачей:
                  </p>

                  <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-gray-100/80 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold border-b border-gray-200 dark:border-gray-700 uppercase text-[10px] sm:text-xs">
                        <tr>
                          <th className="py-2.5 px-3">Контрольная точка</th>
                          <th className="py-2.5 px-3 text-right">Норма остатка</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 dark:divide-gray-800 font-medium">
                        <tr className="hover:bg-amber-50/50 dark:hover:bg-amber-900/10 bg-amber-50/30 dark:bg-amber-950/20">
                          <td className="py-2.5 px-3">
                            <div className="font-bold text-amber-900 dark:text-amber-300">Заправка в КЗ</div>
                            <div className="text-[11px] text-amber-700/80 dark:text-amber-400/80">на территории Казахстана</div>
                          </td>
                          <td className="py-2.5 px-3 text-right">
                            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-200 text-amber-900 dark:bg-amber-900/60 dark:text-amber-200">
                              только ДОзаправка
                            </span>
                          </td>
                        </tr>

                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                          <td className="py-2.5 px-3">
                            <div className="font-bold text-gray-900 dark:text-white">Выход из КЗ</div>
                            <div className="text-[11px] text-gray-500">выезд в рейс / сторону РФ</div>
                          </td>
                          <td className="py-2.5 px-3 text-right">
                            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
                              150 – 200 л. (суммарно тягач + п/п)
                            </span>
                          </td>
                        </tr>

                        <tr className="hover:bg-red-50/50 dark:hover:bg-red-900/10">
                          <td className="py-2.5 px-3">
                            <div className="font-bold text-gray-900 dark:text-white">Вход в РБ</div>
                            <div className="text-[11px] text-gray-500">въезд в Беларусь</div>
                          </td>
                          <td className="py-2.5 px-3 text-right">
                            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300">
                              200 л (суммарно тягач + п/п)
                            </span>
                          </td>
                        </tr>

                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                          <td className="py-2.5 px-3">
                            <div className="font-bold text-gray-900 dark:text-white">Выход из РБ</div>
                            <div className="text-[11px] text-gray-500">выезд обратно в КЗ</div>
                          </td>
                          <td className="py-2.5 px-3 text-right">
                            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">
                              полные баки
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="p-2.5 rounded-lg bg-amber-100/60 dark:bg-amber-900/30 text-amber-900 dark:text-amber-200 text-xs flex items-start gap-2">
                    <AlertTriangle size={15} className="shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
                    <span>
                      <strong>Внимание:</strong> В Казахстане полные баки не заправлять — разрешена только дозаправка по E1 Card на проверенных АЗС (SinoOil, Газпром, КазМунайГаз, Helios). На выезде из КЗ в баках должно оставаться 150–200 л, на въезде в Беларусь — 200 л (суммарно тягач + п/п), а на выезде из Беларуси — полные баки (Газпром).
                    </span>
                  </div>
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