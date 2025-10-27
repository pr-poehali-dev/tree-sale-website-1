import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const deliveryOptions = [
  {
    icon: 'Truck',
    title: 'Доставка по России',
    description: 'Собственный автопарк для оперативной доставки',
    features: ['Москва и МО — 1-2 дня', 'Регионы России — 3-7 дней', 'Отслеживание груза онлайн']
  },
  {
    icon: 'Package',
    title: 'Самовывоз со склада',
    description: 'Забирайте товар с нашего склада в удобное время',
    features: ['Московская область, г. Подольск', 'Пн-Пт: 8:00 - 18:00', 'Загрузка в течение часа']
  },
  {
    icon: 'Ship',
    title: 'ЖД и морские перевозки',
    description: 'Организуем доставку крупных партий',
    features: ['Контейнерные перевозки', 'Вагонные отправки', 'Международная логистика']
  }
];

const Delivery = () => {
  return (
    <section id="delivery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Доставка и оплата
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Гибкие условия доставки и оплаты для корпоративных клиентов
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {deliveryOptions.map((option, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={option.icon} size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl">{option.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{option.description}</p>
                <ul className="space-y-2">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="CreditCard" size={24} className="text-primary" />
                Условия оплаты
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-primary mt-1" />
                <span>Безналичный расчет для юридических лиц</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-primary mt-1" />
                <span>Отсрочка платежа до 30 дней для постоянных клиентов</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-primary mt-1" />
                <span>Работаем по 44-ФЗ и 223-ФЗ</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-primary mt-1" />
                <span>НДС включен в стоимость</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="FileText" size={24} className="text-primary" />
                Документы
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-primary mt-1" />
                <span>Договор поставки</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-primary mt-1" />
                <span>Счет на оплату</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-primary mt-1" />
                <span>Товарная накладная ТОРГ-12</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-primary mt-1" />
                <span>Сертификаты качества</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
