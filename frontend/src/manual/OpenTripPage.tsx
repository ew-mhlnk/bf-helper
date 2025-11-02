import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OpenTripPage: React.FC = () => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  const openImage = (src: string) => setEnlargedImage(src);
  const closeImage = () => setEnlargedImage(null);

  const images = [
    { src: '/photo/3.png', caption: 'Нажмите «Плюс» для создания рейса' },
    { src: '/photo/4.png', caption: 'Шаг 1: Выбор автомобиля и полуприцепа' },
    { src: '/photo/5.png', caption: 'Шаг 2: Показания приборов' },
    { src: '/photo/6.png', caption: 'Остатки топлива (вручную + фото)' },
    { src: '/photo/7.png', caption: 'Фотография приборов' },
    { src: '/photo/8.png', caption: 'Шаг 3: Замечания по техсостоянию' },
    { src: '/photo/9.png', caption: 'Подтверждение создания рейса' },
  ];

  return (
    <div className="bg-[#141414] min-h-screen text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Как открыть рейс?</h1>
      <p className="mb-4">
        Рейс открывается <strong>на базе или при перецепке</strong>. Следуйте инструкции шаг за шагом.
      </p>

      <ol className="space-y-6">
        {/* Шаг 1 */}
        <li className="space-y-2">
          <p>Перейдите в раздел <strong>«Рейсы»</strong> в главном меню приложения.</p>
          <p>Нажмите на большой значок <strong>«Плюс»</strong> внизу экрана.</p>
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
          <p><strong>Шаг 1: Выбор автомобиля и полуприцепа</strong></p>
          <p><strong>Автомобиль:</strong> в списке будут показаны только машины в радиусе 1,5 км — это снижает вероятность ошибки.</p>
          <p><strong>Полуприцеп:</strong> в списке будут отображены только прицепы в радиусе 1,5 км.</p>
          <p>После выбора тягача и прицепа нажмите <strong>«Далее»</strong>.</p>
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
          <p><strong>Шаг 2: Ввод показаний приборов</strong></p>
          <p>Заполните все поля, отмеченные <span className="text-red-400">*</span> (обязательные). Без них переход к следующему шагу невозможен.</p>
          <img
            src={images[2].src}
            alt={images[2].caption}
            className="w-64 h-auto border border-gray-500 rounded cursor-pointer mt-2"
            onClick={() => openImage(images[2].src)}
          />
          <p className="text-sm text-gray-400">{images[2].caption}</p>

          <p className="mt-3">Укажите вручную остатки топлива в тягаче и полуприцепе. Добавьте фото.</p>
          <p>Нажмите <strong>«Далее»</strong>, чтобы перейти к следующему шагу.</p>
          <img
            src={images[3].src}
            alt={images[3].caption}
            className="w-64 h-auto border border-gray-500 rounded cursor-pointer mt-2"
            onClick={() => openImage(images[3].src)}
          />
          <p className="text-sm text-gray-400">{images[3].caption}</p>

          <p className="mt-3"><strong>Фотография приборов</strong></p>
          <img
            src={images[4].src}
            alt={images[4].caption}
            className="w-64 h-auto border border-gray-500 rounded cursor-pointer mt-2"
            onClick={() => openImage(images[4].src)}
          />
          <p className="text-sm text-gray-400">{images[4].caption}</p>
        </li>

        {/* Шаг 4 */}
        <li className="space-y-2">
          <p><strong>ШАГ 3. Замечания по техсостоянию ТС</strong></p>
          <p>Укажите замечания по техническому состоянию автомобиля или прицепа (если есть).</p>
          <p>Проставьте галочки о наличии и исправности элементов из списка.</p>
          <p><strong>Сверяйтесь с фактическим состоянием.</strong></p>
          <img
            src={images[5].src}
            alt={images[5].caption}
            className="w-64 h-auto border border-gray-500 rounded cursor-pointer mt-2"
            onClick={() => openImage(images[5].src)}
          />
          <p className="text-sm text-gray-400">{images[5].caption}</p>
        </li>

        {/* Финал */}
        <li className="space-y-2">
          <p>Нажмите <strong>“Начать новый рейс”</strong></p>
          <p>Появится окно с подтверждением, что все введённые данные верны.</p>
          <p className="text-yellow-400 font-semibold">
            После нажатия кнопки у вас будет 6 секунд, чтобы отменить создание рейса.
          </p>
          <img
            src={images[6].src}
            alt={images[6].caption}
            className="w-64 h-auto border border-gray-500 rounded cursor-pointer mt-2"
            onClick={() => openImage(images[6].src)}
          />
          <p className="text-sm text-gray-400">{images[6].caption}</p>
        </li>
      </ol>

      {/* Кнопка назад */}
      <Link
        to="/manual"
        className="bg-blue-700 w-full max-w-[24rem] h-10 text-white py-2 mt-8 rounded-lg block text-center hover:bg-blue-800 active:bg-blue-900 transition duration-200"
      >
        Вернуться к инструкциям
      </Link>

      {/* Модальное окно для увеличенного изображения */}
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

export default OpenTripPage;