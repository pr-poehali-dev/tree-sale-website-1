import Icon from '@/components/ui/icon';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Trees" size={28} />
              <span className="text-xl font-bold">ЛесТорг</span>
            </div>
            <p className="text-sm opacity-80">
              Надежный поставщик качественной древесины для мебельного производства с 2009 года
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:opacity-100 transition-opacity">
                  Главная
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('catalog')} className="hover:opacity-100 transition-opacity">
                  Каталог
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:opacity-100 transition-opacity">
                  О компании
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('delivery')} className="hover:opacity-100 transition-opacity">
                  Доставка
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contacts')} className="hover:opacity-100 transition-opacity">
                  Контакты
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@lestorg.ru</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={16} className="mt-1" />
                <span>г. Подольск, ул. Складская, д. 15</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Режим работы</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Понедельник - Пятница</li>
              <li>8:00 - 18:00</li>
              <li className="pt-2">Суббота, Воскресенье</li>
              <li>Выходной</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2024 ООО "ЛесТорг". Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
