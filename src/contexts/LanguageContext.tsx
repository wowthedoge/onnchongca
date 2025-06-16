
import { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  isChinese: boolean;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [isChinese, setIsChinese] = useState(false);

  const toggleLanguage = () => {
    setIsChinese(!isChinese);
  };

  return (
    <LanguageContext.Provider value={{ isChinese, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
