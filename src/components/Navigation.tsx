
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isChinese, toggleLanguage } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = {
    en: {
      home: "Home",
      services: "Services", 
      about: "About",
      team: "Team",
      clients: "Clients",
      links: "Links",
      contact: "Contact",
      toggleText: "中文"
    },
    zh: {
      home: "首页",
      services: "服务",
      about: "关于我们", 
      team: "团队",
      clients: "客户",
      links: "有用链接",
      contact: "联系我们",
      toggleText: "EN"
    }
  };

  const currentLang = isChinese ? navItems.zh : navItems.en;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">O</span>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-800">Onn Chong Inc</div>
              <div className="text-sm text-teal-600">
                {isChinese ? "注册专业会计师" : "Chartered Professional Accountant"}
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              {currentLang.home}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              {currentLang.services}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              {currentLang.about}
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              {currentLang.team}
            </button>
            <button 
              onClick={() => scrollToSection('clients')}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              {currentLang.clients}
            </button>
            <button 
              onClick={() => scrollToSection('links')}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              {currentLang.links}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              {currentLang.contact}
            </button>
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-700 hover:text-teal-600 transition-colors border border-gray-300 rounded-md px-3 py-1"
            >
              <Globe size={16} />
              <span>{currentLang.toggleText}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-teal-600 transition-colors text-left"
              >
                {currentLang.home}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-teal-600 transition-colors text-left"
              >
                {currentLang.services}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-teal-600 transition-colors text-left"
              >
                {currentLang.about}
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-gray-700 hover:text-teal-600 transition-colors text-left"
              >
                {currentLang.team}
              </button>
              <button 
                onClick={() => scrollToSection('clients')}
                className="text-gray-700 hover:text-teal-600 transition-colors text-left"
              >
                {currentLang.clients}
              </button>
              <button 
                onClick={() => scrollToSection('links')}
                className="text-gray-700 hover:text-teal-600 transition-colors text-left"
              >
                {currentLang.links}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-teal-600 transition-colors text-left"
              >
                {currentLang.contact}
              </button>
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-gray-700 hover:text-teal-600 transition-colors border border-gray-300 rounded-md px-3 py-1 w-fit"
              >
                <Globe size={16} />
                <span>{currentLang.toggleText}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
