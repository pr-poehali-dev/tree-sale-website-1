import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const advantages = [
  {
    icon: 'BadgeCheck',
    title: 'Прямые поставки',
    description: 'Работаем напрямую с лесозаготовителями без посредников'
  },
  {
    icon: 'FileCheck',
    title: 'Сертификаты качества',
    description: 'Вся продукция имеет необходимые сертификаты и документы'
  },
  {
    icon: 'Truck',
    title: 'Логистика',
    description: 'Собственный автопарк для доставки по всей России'
  },
  {
    icon: 'Warehouse',
    title: 'Складские запасы',
    description: 'Постоянное наличие основных пород на складе 5000+ м³'
  },
  {
    icon: 'Users',
    title: 'Персональный менеджер',
    description: 'Индивидуальный подход к каждому B2B клиенту'
  },
  {
    icon: 'TrendingDown',
    title: 'Оптовые цены',
    description: 'Гибкая система скидок для постоянных партнеров'
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              О компании ЛесТорг
            </h2>
            <div className="space-y-4 text-lg text-foreground">
              <p>
                Мы специализируемся на поставках качественной древесины для мебельных производств с 2009 года. За это время стали надежным партнером для более чем 500 компаний по всей России.
              </p>
              <p>
                Наша миссия — обеспечить мебельные фабрики качественным сырьем по справедливым ценам с гарантией своевременной доставки.
              </p>
              <p>
                Работаем по принципам честного бизнеса: прозрачное ценообразование, строгий контроль качества на всех этапах, выполнение обязательств в срок.
              </p>
            </div>
          </div>
          <div>
            <img 
              src="https://cdn.poehali.dev/projects/e478e0db-24c6-478e-9613-b5a19c209770/files/224d7427-74a4-4bac-a0e5-f7f339d93e95.jpg" 
              alt="Текстура древесины"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">
            Наши преимущества
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name={advantage.icon} size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{advantage.title}</h4>
                    <p className="text-muted-foreground">{advantage.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
