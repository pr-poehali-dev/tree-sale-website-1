import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Icon name="Trees" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-primary">ЛесТорг</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors font-medium">
              Главная
            </button>
            <button onClick={() => scrollToSection('catalog')} className="text-foreground hover:text-primary transition-colors font-medium">
              Каталог
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors font-medium">
              О компании
            </button>
            <button onClick={() => scrollToSection('delivery')} className="text-foreground hover:text-primary transition-colors font-medium">
              Доставка
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors font-medium">
              Контакты
            </button>
            <Button onClick={() => scrollToSection('contacts')}>
              Заказать звонок
            </Button>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors font-medium text-left">
                Главная
              </button>
              <button onClick={() => scrollToSection('catalog')} className="text-foreground hover:text-primary transition-colors font-medium text-left">
                Каталог
              </button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors font-medium text-left">
                О компании
              </button>
              <button onClick={() => scrollToSection('delivery')} className="text-foreground hover:text-primary transition-colors font-medium text-left">
                Доставка
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors font-medium text-left">
                Контакты
              </button>
              <Button onClick={() => scrollToSection('contacts')} className="w-full">
                Заказать звонок
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
