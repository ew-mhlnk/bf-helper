import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddCMRPage: React.FC = () => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  const openImage = (src: string) => setEnlargedImage(src);
  const closeImage = () => setEnlargedImage(null);

  const images = [
    { src: '/photo/12.png', caption: 'Выбор нужного рейса' },
    { src: '/photo/13.png', caption: 'Нажмите на три точки у заказа' },
    { src: '/photo/14.png', caption: 'Выберите «Отправить файл из…»' },
    { src: '/photo/15.png', caption: 'Выберите тип документа (для BY/KZ — «Документы»)' },
    { src: '/photo/16.png', caption: 'Фотографируйте ровно, установите «маячки»' },
    { src: '/photo/17.png', caption: 'Готово! Цифра — количество документов' },
    { src: '/photo/18.png', caption: 'Проверка: «Файлы» → список документов' },
  ];

  return (
    <div className="bg-[#141414] min-h-screen text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Как добавить CMR?</h1>

      <p className="mb-4 text-red-400 font-semibold">
        Отправка ЛЮБЫХ документов начинается с выбора РЕЙСА.
      </p>

      <ol className="space-y-6">

        {/* Шаг 1 */}
        <li className="space-y-2">
          <p>Перейдите в раздел <strong>«Рейсы»</strong> в приложении.</p>
          <p>Найдите нужный рейс (текущий обычно отображается вверху списка).</p>
          <p className="text-yellow-400 font-semibold">
            Важно: убедитесь, что вы выбираете правильный заказ, чтобы документы были прикреплены именно к нему.
          </p>
          <img
            src={images[0].src}
            alt={images[0].caption}
            className="w-64 h-auto border border-gray-500 rounded cursor-pointer mt-2"
            onClick={() => openImage(images[0].src)}
          />
          <p className="text-sm text-gray-400">{images[0].caption}</p>
        </li>

        {/* Шаг 2 */}
        <li className="space-y-2">
          <p>Нажмите на <strong>три точки</strong> возле НУЖНОГО ЗАКАЗА.</p>
          <p className="text-yellow-400 font-semibold">
            Это важно: убедитесь, что вы выбираете правильный ЗАКАЗ, чтобы CMR (карта простоя, чек) был привязан к соответствующему ЗАКАЗУ и не потерялся.
          </p>
          <img
            src={images[1].src}
            alt={images[1].caption}
            className="w-64 h-auto border border-gray-500 rounded cursor-pointer mt-2"
            onClick={() => openImage(images[1].src)}
          />
          <p className="text-sm text-gray-400">{images[1].caption}</p>
        </li>

        {/* Шаг 3 */}
        <li className="space-y-2">
          <p>Выберите пункт <strong>«Отправить файл из…»</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
            <li><strong>Сканер</strong> — сфотографировать документ прямо сейчас.</li>
            <li><strong>Галерея</strong> — если вы уже сфотографировали документ с помощью камеры и изображение сохранено.</li>
          </ul>
          <p className="text-yellow-400 font-semibold mt-2">
            Внимание: Убедитесь, что вы загружаете правильный документ, чтобы он был привязан к нужному рейсу и не потерялся.
          </p>
          <p className="mt-2">
            Выбор способа загрузки документа: <strong>“Сканер”</strong> или <strong>“Галерея”</strong> неважен — главное, чтобы документ был привязан к нужному РЕЙСУ и ЗАКАЗУ.
          </p>
          <img
            src={images[2].src}
            alt={images[2].caption}
            className="w-64 h-auto border border-gray-500 rounded cursor-pointer mt-2"
            onClick={() => openImage(images[2].src)}
          />
          <p className="text-sm text-gray-400">{images[2].caption}</p>
        </li>

        {/* Шаг 4 */}
        <li className="space-y-2">
          <p className="font-semibold text-green-400">
            БЕЛОРУССКИЕ И КАЗАХСТАНСКИЕ ВОДИТЕЛИ ВЫБИРАЮТ ПУНКТ “ДОКУМЕНТЫ”.
          </p>
          <p>Выбираем нужный вид CMR. Убедитесь, что вы добавляете правильную CMR — после загрузки или разгрузки, чтобы избежать ошибок.</p>
          <img
            src={images[3].src}
            alt={images[3].caption}
            className="w-64 h-auto border border-gray-500 rounded cursor-pointer mt-2"
            onClick={() => openImage(images[3].src)}
          />
          <p className="text-sm text-gray-400">{images[3].caption}</p>
        </li>

        {/* Шаг 5 */}
        <li className="space-y-2">
          <p><strong>Старайтесь фотографировать ЛЮБЫЕ документы ровно:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Положите документ на ровную поверхность</li>
            <li>Протрите камеру для лучшей чёткости</li>
            <li>Сделайте фото документа</li>
            <li>Установите <strong>«маячки»</strong> по углам листа, чтобы сканер распознал его границы.</li>
          </ul>
          <p className="mt-2"><strong>Проверьте результат:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Если снимок устраивает, нажмите <strong>«галочку»</strong>.</li>
            <li>Если нет, нажмите <strong>«крестик»</strong> и повторите с шага 1.</li>
          </ul>
          <img
            src={images[4].src}
            alt={images[4].caption}
            className="w-64 h-auto border border-gray-500 rounded cursor-pointer mt-2"
            onClick={() => openImage(images[4].src)}
          />
          <p className="text-sm text-gray-400">{images[4].caption}</p>
        </li>

        {/* Финал */}
        <li className="space-y-2">
          <p className="font-semibold text-green-400">Готово! Вы добавили CMR.</p>
          <p>Цифра показывает, количество документов, которые вы прикрепили к заказу.</p>
          <img
            src={images[5].src}
            alt={images[5].caption}
            className="w-64 h-auto border border-gray-500 rounded cursor-pointer mt-2"
            onClick={() => openImage(images[5].src)}
          />
          <p className="text-sm text-gray-400">{images[5].caption}</p>
        </li>

        {/* Проверка */}
        <li className="space-y-2">
          <p><strong>Проверка загруженных документов:</strong></p>
          <p>Откройте рейс → выберите пункт <strong>«Файлы»</strong>. Появится список загруженных документов.</p>
          <img
            src={images[6].src}
            alt={images[6].caption}
            className="w-64 h-auto border border-gray-500 rounded cursor-pointer mt-2"
            onClick={() => openImage(images[6].src)}
          />
          <p className="text-sm text-gray-400">{images[6].caption}</p>
        </li>

      </ol>

      <div className="mt-6 p-4 bg-gray-800 rounded-lg">
        <p className="font-semibold text-yellow-300">В каждом завершённом заказе должны быть прикреплены:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>CMR</li>
          <li>Карта простоя</li>
          <li>Чеки понесённых расходов</li>
        </ul>
      </div>

      {/* Кнопка назад */}
      <Link
        to="/manual"
        className="bg-blue-700 w-full max-w-[24rem] h-10 text-white py-2 mt-8 rounded-lg block text-center hover:bg-blue-800 active:bg-blue-900 transition duration-200"
      >
        Вернуться к инструкциям
      </Link>

      {/* Модальное окно */}
      {enlargedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeImage}
        >
          <img
            src={enlargedImage}
            alt="Увеличенное изображение"
            className="max-w-full max-h-full rounded"
          />
        </div>
      )}
    </div>
  );
};

export default AddCMRPage;