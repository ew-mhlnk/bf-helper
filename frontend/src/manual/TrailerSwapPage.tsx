import React from 'react';
import Layout from '../components/Layout';
import { RefreshCw, AlertTriangle, Ban, Info } from 'lucide-react';

const TrailerSwapPage: React.FC = () => {
  return (
    <Layout title="Правила перецепки">
      <div className="space-y-6 pb-8">

        {/* БЛОК 1: ОБЩЕЕ ПРАВИЛО 240/240 */}
        <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl border border-blue-200 dark:border-blue-900 shadow-sm overflow-hidden">
          <div className="bg-blue-600 p-4 text-white flex items-center gap-3">
            <RefreshCw size={24} className="text-blue-100" />
            <h2 className="text-lg font-bold">Общее правило</h2>
          </div>
          
          <div className="p-5 space-y-4">
            <div className="flex items-start gap-3">
              <Info size={20} className="text-blue-500 mt-1 shrink-0" />
              <p className="text-gray-900 dark:text-white font-medium text-lg">
                Действует принцип <span className="text-blue-600 dark:text-blue-400 font-bold">240/240</span>
              </p>
            </div>

            <div className="space-y-3 pl-1">
              
              {/* СДАЧА (с обновленным текстом) */}
              <div className="flex gap-3">
                <span className="text-blue-500 shrink-0">🔹</span>
                <div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-bold text-gray-900 dark:text-white">Сдача:</span> Вы передаете полуприцеп с остатком 240 литров.
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-1">
                    Заправка: Газпром, карта Газпром
                  </p>
                </div>
              </div>
              
              {/* ПРИЕМКА */}
              <div className="flex gap-3">
                <span className="text-blue-500 shrink-0">🔹</span>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-bold text-gray-900 dark:text-white">Приемка:</span> Вы принимаете полуприцеп с остатком 240 литров.
                </p>
              </div>
            </div>

            {/* ЗАПРЕТ */}
            <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/50 rounded-xl flex gap-3">
              <Ban size={24} className="text-red-600 dark:text-red-400 shrink-0" />
              <div>
                <h3 className="font-bold text-red-700 dark:text-red-400 text-sm uppercase mb-1">Не принимайте полуприцеп</h3>
                <p className="text-sm text-red-600/90 dark:text-red-300/90 leading-relaxed">
                  Если в нем <strong>менее 240 литров</strong>. Требуйте от сдающего водителя дозаправки до нормы.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* БЛОК 2: ИСКЛЮЧЕНИЕ ESSERS */}
        <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl border border-amber-200 dark:border-amber-900 shadow-sm overflow-hidden">
          <div className="bg-amber-500 p-4 text-white flex items-center gap-3">
            <AlertTriangle size={24} className="text-amber-100" />
            <h2 className="text-lg font-bold">Исключение: ESSERS</h2>
          </div>

          <div className="p-5 space-y-4">
            <p className="text-gray-900 dark:text-white font-medium">
              На прицепы Essers правило 240 литров <span className="text-amber-600 dark:text-amber-400 font-bold uppercase">не распространяется</span>.
            </p>

            <div className="space-y-3 pl-1">
              <div className="flex gap-3">
                <span className="text-amber-500 shrink-0">🔹</span>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-bold text-gray-900 dark:text-white">Принимаем фактический остаток</span> (то, что есть в баке).
                </p>
              </div>
              
              <div className="flex gap-3">
                <span className="text-amber-500 shrink-0">🔹</span>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-bold text-gray-900 dark:text-white">Оцениваете маршрут:</span> если текущего топлива не хватит — заправляете нужное количество по карте Газпром.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default TrailerSwapPage;