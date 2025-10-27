import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const woodTypes = [
  {
    name: 'Дуб',
    description: 'Твердая, прочная древесина премиум-класса. Идеальна для элитной мебели.',
    properties: ['Высокая прочность', 'Красивая текстура', 'Долговечность'],
    price: 'от 45 000 ₽/м³'
  },
  {
    name: 'Ясень',
    description: 'Эластичная и прочная порода с выразительной текстурой.',
    properties: ['Гибкость', 'Стойкость к нагрузкам', 'Светлый оттенок'],
    price: 'от 38 000 ₽/м³'
  },
  {
    name: 'Бук',
    description: 'Плотная древесина с равномерной структурой для качественной мебели.',
    properties: ['Однородная текстура', 'Хорошая обработка', 'Прочность'],
    price: 'от 32 000 ₽/м³'
  },
  {
    name: 'Орех',
    description: 'Благородная порода с уникальным рисунком и темным оттенком.',
    properties: ['Элитный вид', 'Легкая обработка', 'Стабильность'],
    price: 'от 55 000 ₽/м³'
  },
  {
    name: 'Клен',
    description: 'Светлая твердая древесина с мелкой текстурой.',
    properties: ['Плотная структура', 'Износостойкость', 'Светлый цвет'],
    price: 'от 35 000 ₽/м³'
  },
  {
    name: 'Вишня',
    description: 'Ценная порода с теплым красноватым оттенком.',
    properties: ['Благородный цвет', 'Мягкая обработка', 'Декоративность'],
    price: 'от 42 000 ₽/м³'
  }
];

const Catalog = () => {
  return (
    <section id="catalog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Каталог пород древесины
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Широкий ассортимент высококачественной древесины для производства мебели любого класса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {woodTypes.map((wood, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{wood.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{wood.description}</p>
                <div className="space-y-2">
                  {wood.properties.map((prop, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span className="text-sm">{prop}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t">
                  <div className="text-2xl font-bold text-primary mb-3">{wood.price}</div>
                  <Button className="w-full">Запросить образец</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Не нашли нужную породу?</p>
          <Button variant="outline" size="lg">
            Запросить полный каталог
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
