import React, { useState, useEffect } from 'react';
import { Sun, Moon, ChevronLeft } from 'lucide-react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  showBack?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, title, showBack = true }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const [isDark, setIsDark] = useState(() => {
    const themeParam = searchParams.get('theme');
    if (themeParam === 'dark') return true;
    if (themeParam === 'light') return false;
    
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    const themeParam = searchParams.get('theme');
    if (themeParam === 'dark' && !isDark) {
      setIsDark(true);
    } else if (themeParam === 'light' && isDark) {
      setIsDark(false);
    }
  }, [searchParams, isDark]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    const newParams = new URLSearchParams(searchParams);
    newParams.set('theme', newTheme ? 'dark' : 'light');
    setSearchParams(newParams, { replace: true });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-[#0e0505] text-white' : 'bg-gray-100 text-gray-900'}`}>
      <header className={`sticky top-0 z-50 px-4 py-3 flex items-center justify-between shadow-md transition-colors duration-300 ${isDark ? 'bg-[#1a1a1a]/80 backdrop-blur-md border-b border-gray-800' : 'bg-white/80 backdrop-blur-md border-b border-gray-200'}`}>
        
        <div className="flex items-center gap-3">
          {showBack && location.pathname !== '/' && (
            <button 
              onClick={() => navigate(-1)}
              className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-200 text-gray-600'}`}
            >
              <ChevronLeft size={24} />
            </button>
          )}
          
          <h1 className="text-lg font-bold truncate max-w-[200px] sm:max-w-none">
            {title || 'BelFrost Помощник'}
          </h1>
        </div>

        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-all duration-300 ${isDark ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-200 text-blue-600 hover:bg-gray-300'}`}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      <main className="p-4 max-w-2xl mx-auto pb-safe-area">
        {children}
      </main>
    </div>
  );
};

export default Layout;