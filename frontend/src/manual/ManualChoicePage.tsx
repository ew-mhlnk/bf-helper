import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Key, FilePlus, CheckCircle, FileText, Receipt } from 'lucide-react';
import Layout from '../components/Layout';

const ManualChoicePage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    if (navigator.vibrate) navigator.vibrate(15);
    navigate(path);
  };

  const manuals = [
    { 
      path: '/manual/start-work', 
      title: 'Начало работы', 
      desc: 'Проверка аккаунта перед выездом',
      icon: <Play size={24} />,
      color: 'text-green-500 bg-green-100 dark:bg-green-900/30'
    },
    { 
      path: '/manual/login-password', 
      title: 'Логин и пароль', 
      desc: 'Как войти, если QR не работает',
      icon: <Key size={24} />,
      color: 'text-orange-500 bg-orange-100 dark:bg-orange-900/30'
    },
    { 
      path: '/manual/open-trip', 
      title: 'Как открыть рейс', 
      desc: 'Пошаговая инструкция',
      icon: <FilePlus size={24} />,
      color: 'text-blue-500 bg-blue-100 dark:bg-blue-900/30'
    },
    { 
      path: '/manual/close-trip', 
      title: 'Как закрыть рейс', 
      desc: 'Правильное завершение',
      icon: <CheckCircle size={24} />,
      color: 'text-red-500 bg-red-100 dark:bg-red-900/30'
    },
    { 
      path: '/manual/add-cmr', 
      title: 'Как добавить CMR', 
      desc: 'Загрузка документов',
      icon: <FileText size={24} />,
      color: 'text-purple-500 bg-purple-100 dark:bg-purple-900/30'
    },
    { 
      path: '/manual/add-receipt', 
      title: 'Как добавить чек', 
      desc: 'Расходы и топливо',
      icon: <Receipt size={24} />,
      color: 'text-teal-500 bg-teal-100 dark:bg-teal-900/30'
    },
  ];

  return (
    <Layout title="Инструкции">
      <div className="grid gap-3 mt-2">
        {manuals.map((item, index) => (
          <div
            key={index}
            onClick={() => handleNavigate(item.path)}
            className="flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all 
                       bg-white dark:bg-[#1e1e1e] 
                       border border-gray-200 dark:border-gray-800 
                       shadow-sm hover:shadow-md hover:scale-[1.01] active:scale-[0.98]"
          >
            <div className={`p-3 rounded-full ${item.color}`}>
              {item.icon}
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ManualChoicePage;