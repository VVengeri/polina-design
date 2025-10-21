import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center">
             <img src="https://i.postimg.cc/hPhcKptG/Chat-GPT-Image-22-2025-02-04-30.png" alt="Логотип Polina Design" className="h-12 w-auto"/>
          </a>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-[#774e9e] transition-colors duration-300 font-semibold">О нас</a>
            <a href="#features" className="text-gray-600 hover:text-[#774e9e] transition-colors duration-300 font-semibold">Преимущества</a>
            <a href="#org-structure" className="text-gray-600 hover:text-[#774e9e] transition-colors duration-300 font-semibold">Оргструктура</a>
            <a href="#contact" className="text-gray-600 hover:text-[#774e9e] transition-colors duration-300 font-semibold">Контакты</a>
          </nav>
           <div className="hidden md:flex items-center space-x-4">
               <a href="#contact" className="bg-[#774e9e] text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all duration-300">
                  Связаться
                </a>
           </div>
        </div>
      </div>
    </header>
  );
};

export default Header;