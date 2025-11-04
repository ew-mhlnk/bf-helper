import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CloseTripPage: React.FC = () => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  const openImage = (src: string) => setEnlargedImage(src);
  const closeImage = () => setEnlargedImage(null);

  return (
    <div className="bg-[#141414] min-h-screen text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Как закрыть рейс?</h1>

      <ol className="space-y-6">

        {/* Шаг 1 */}
        <li className="space-y-2">
          <p>Перейдите в раздел <strong>«Рейсы»</strong> в главном меню приложения.</p>
          <p>Нажмите кнопку <strong>«Завершить»</strong> и последовательно заполните все пункты формы.</p>
          <img
            src="/photo/10.png"
            alt="Кнопка 'Завершить' в разделе Рейсы"
            className="w-64 h-auto border border-gray-500 rounded cursor-pointer mt-3"
            onClick={() => openImage('/photo/10.png')}
          />
          <p className="text-sm text-gray-400">Форма завершения рейса</p>
        </li>

        {/* Шаг 2 */}
        <li className="space-y-2">
          <p>Внесите <strong>показания приборов</strong> и прикрепите фотографии.</p>
          <p className="text-yellow-400 font-semibold flex items-center gap-2">
            Закрыть рейс без фото одометра и рефрижератора невозможно.
          </p>
          <p>Заполняйте поля <strong>сверху вниз</strong>, не пропуская ни одного.</p>
          <p>Поля <strong>«Остаток топлива»</strong> обязательны для заполнения.</p>
          <p>Если есть замечания по техническому состоянию — внесите их в соответствующее поле.</p>
        </li>

        {/* Шаг 3 */}
        <li className="space-y-2">
          <p>Когда все данные внесены и фото добавлены, нажмите <strong>«Завершить рейс»</strong>.</p>
          <p className="text-yellow-400 font-semibold">
            После нажатия у вас будет <strong>6 секунд</strong>, чтобы отменить действие.
          </p>
          <img
            src="/photo/11.png"
            alt="Подтверждение завершения рейса"
            className="w-64 h-auto border border-gray-500 rounded cursor-pointer mt-3"
            onClick={() => openImage('/photo/11.png')}
          />
          <p className="text-sm text-gray-400">Окно подтверждения</p>
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

export default CloseTripPage;