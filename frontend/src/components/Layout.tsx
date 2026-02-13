import React, { useEffect } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Menu } from 'lucide-react';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
  showBack?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ title, children, showBack = true }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // 1. Проверяем header
  const isHeaderVisible = searchParams.get('header') !== 'off';

  // при смене title
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#121212] text-gray-900 dark:text-gray-100 transition-colors duration-200">
      
      {/* Рендерим шапку ТОЛЬКО если isHeaderVisible === true */}
      {isHeaderVisible && (
        <header className="fixed top-0 left-0 right-0 bg-white dark:bg-[#1e1e1e] shadow-md z-50 h-16 px-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3 overflow-hidden">
            {showBack && location.pathname !== '/' && (
              <button 
                onClick={() => navigate(-1)}
                className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors active:scale-95 text-gray-600 dark:text-gray-300"
              >
                <ArrowLeft size={24} />
              </button>
            )}
            
            {!showBack && location.pathname === '/' && (
              <div className="p-2 -ml-2 text-gray-400">
                 <Menu size={24} />
              </div>
            )}

            <h1 className="text-lg font-bold truncate leading-tight">
              {title}
            </h1>
          </div>
          
          {/* смена темы или логотипа, если нужно */}
          <div className="w-8"></div> 
        </header>
      )}

      {/* 
         Основной контент.
         
      */}
      <main className={`container mx-auto px-4 ${isHeaderVisible ? 'pt-20' : 'pt-4'} pb-6 max-w-lg`}>
        {children}
      </main>

    </div>
  );
};

export default Layout;