import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
  showBack?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ title, children, showBack = true }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const[searchParams] = useSearchParams();
  const [showHeader, setShowHeader] = useState(true);

  // Обновление title страницы браузера (вкладки/окна)
  useEffect(() => {
    document.title = title ? `${title} — Справка` : 'Справка';
  }, [title]);

  // Обработка параметра скрытия хедера (?header=off&theme=light)
  useEffect(() => {
    const headerParam = searchParams.get('header');
    
    if (headerParam === 'off') {
      sessionStorage.setItem('hideHeader', 'true');
      setShowHeader(false);
    } else if (headerParam === 'on') {
      sessionStorage.setItem('hideHeader', 'false');
      setShowHeader(true);
    } else {
      // Если параметра в текущем URL нет, смотрим, не был ли он скрыт ранее
      const isHidden = sessionStorage.getItem('hideHeader') === 'true';
      setShowHeader(!isHidden);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#121212] flex flex-col">
      {showHeader && (
        <header className="bg-white dark:bg-[#1e1e1e] border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
          <div className="flex items-center px-4 h-14 max-w-3xl mx-auto w-full">
            {showBack && location.pathname !== '/' && (
              <button 
                onClick={() => navigate(-1)}
                className="mr-3 p-2 -ml-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors active:scale-95"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
              {title}
            </h1>
          </div>
        </header>
      )}

      <main className="flex-1 p-4 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;