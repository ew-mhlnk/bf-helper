import React, { useState, useEffect } from 'react';
import { Sun, Moon, ChevronLeft } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  showBack?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, title, showBack = true }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Состояние темы (по умолчанию берем из localStorage или темную)
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  // При изменении isDark меняем класс на <html> и сохраняем
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-[#0e0505] text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Шапка */}
      <header className={`sticky top-0 z-50 px-4 py-3 flex items-center justify-between shadow-md transition-colors duration-300 ${isDark ? 'bg-[#1a1a1a]/80 backdrop-blur-md border-b border-gray-800' : 'bg-white/80 backdrop-blur-md border-b border-gray-200'}`}>
        
        <div className="flex items-center gap-3">
          {/* Кнопка назад (показываем везде, кроме главной) */}
          {showBack && location.pathname !== '/' && (
            <button 
              onClick={() => navigate(-1)}
              className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-200 text-gray-600'}`}
            >
              <ChevronLeft size={24} />
            </button>
          )}
          
          {/* Заголовок страницы */}
          <h1 className="text-lg font-bold truncate max-w-[200px] sm:max-w-none">
            {title || 'BelFrost Помощник'}
          </h1>
        </div>

        {/* Переключатель темы */}
        <button
          onClick={() => setIsDark(!isDark)}
          className={`p-2 rounded-full transition-all duration-300 ${isDark ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-200 text-blue-600 hover:bg-gray-300'}`}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      {/* Основной контент */}
      <main className="p-4 max-w-2xl mx-auto pb-safe-area">
        {children}
      </main>
    </div>
  );
};

export default Layout;