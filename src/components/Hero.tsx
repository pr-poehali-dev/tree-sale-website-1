import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-accent to-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
              Качественная древесина для производства мебели
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Поставки премиальных пород дерева для B2B клиентов. Прямые контракты с производителями. Полный цикл обработки и доставки.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => scrollToSection('catalog')}>
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')}>
                Получить прайс
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">лет на рынке</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">клиентов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">пород дерева</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://cdn.poehali.dev/projects/e478e0db-24c6-478e-9613-b5a19c209770/files/2f7347a1-7ed7-4acf-84b0-7d04f7919ded.jpg" 
              alt="Склад древесины"
              className="rounded-lg shadow-2xl w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
