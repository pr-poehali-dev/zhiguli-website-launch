import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const carModels = [
  {
    name: 'ВАЗ-2101 "Копейка"',
    year: '1970-1988',
    description: 'Первая модель легендарного завода. Надёжный классический седан, покоривший миллионы сердец.',
    image: 'https://cdn.poehali.dev/projects/0c615ecf-f7c1-4d83-8ef6-d75fc8ea1781/files/c2c4da9b-3f65-47f2-a47f-3405ca962844.jpg',
    price: 'от 1 500 000 ₽',
  },
  {
    name: 'ВАЗ-2106',
    year: '1976-2006',
    description: 'Улучшенная "шестёрка" с более мощным двигателем. Символ советского автопрома.',
    image: 'https://cdn.poehali.dev/projects/0c615ecf-f7c1-4d83-8ef6-d75fc8ea1781/files/e26d70bf-513c-4f81-9cea-512f35048453.jpg',
    price: 'от 2 000 000 ₽',
  },
  {
    name: 'Молния Маккуин',
    year: '2006',
    description: 'Легендарный гоночный автомобиль. Скорость, стиль и харизма в одном корпусе!',
    image: 'https://cdn.poehali.dev/projects/0c615ecf-f7c1-4d83-8ef6-d75fc8ea1781/files/61937579-f75e-47fd-a69c-fda80ec64e36.jpg',
    price: 'от 5 000 000 ₽',
  },
];

const galleryImages = [
  'https://cdn.poehali.dev/projects/0c615ecf-f7c1-4d83-8ef6-d75fc8ea1781/files/c2c4da9b-3f65-47f2-a47f-3405ca962844.jpg',
  'https://cdn.poehali.dev/projects/0c615ecf-f7c1-4d83-8ef6-d75fc8ea1781/files/e26d70bf-513c-4f81-9cea-512f35048453.jpg',
  'https://cdn.poehali.dev/projects/0c615ecf-f7c1-4d83-8ef6-d75fc8ea1781/files/61937579-f75e-47fd-a69c-fda80ec64e36.jpg',
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b-4 border-primary shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-bold text-primary text-vintage">
              ЖИГУЛИ
            </h1>
            <div className="flex gap-2 md:gap-6">
              <Button
                variant={activeSection === 'home' ? 'default' : 'ghost'}
                onClick={() => scrollToSection('home')}
                className="font-semibold"
              >
                Главная
              </Button>
              <Button
                variant={activeSection === 'gallery' ? 'default' : 'ghost'}
                onClick={() => scrollToSection('gallery')}
                className="font-semibold"
              >
                Галерея
              </Button>
              <Button
                variant={activeSection === 'contacts' ? 'default' : 'ghost'}
                onClick={() => scrollToSection('contacts')}
                className="font-semibold"
              >
                Контакты
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-vintage">
              Легендарные Жигули
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Советская классика. Надёжность проверенная временем. 
              Найди свою мечту на четырёх колёсах!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {carModels.map((car, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:scale-105 transition-transform duration-300 vintage-shadow border-4 border-muted"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 bg-card">
                  <div className="flex items-center gap-2 mb-2 text-secondary">
                    <Icon name="Calendar" size={20} />
                    <span className="text-sm font-semibold">{car.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {car.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {car.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {car.price}
                    </span>
                    <Button className="bg-primary hover:bg-primary/90">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 bg-card border-4 border-primary p-8 md:p-12 rounded-lg vintage-shadow">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Icon name="Car" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="text-3xl font-bold text-foreground mb-2">50+</h3>
                <p className="text-muted-foreground">Автомобилей в наличии</p>
              </div>
              <div>
                <Icon name="Award" size={48} className="mx-auto mb-4 text-secondary" />
                <h3 className="text-3xl font-bold text-foreground mb-2">2 года</h3>
                <p className="text-muted-foreground">На рынке</p>
              </div>
              <div>
                <Icon name="Users" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="text-3xl font-bold text-foreground mb-2">1000+</h3>
                <p className="text-muted-foreground">Довольных клиентов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-vintage text-foreground">
            Галерея
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="aspect-video overflow-hidden rounded-lg vintage-shadow border-4 border-card hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={image}
                  alt={`Жигули ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-12 text-vintage text-foreground">
            Контакты
          </h2>
          <Card className="border-4 border-primary vintage-shadow">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="Phone" size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Телефон</p>
                      <p className="text-xl font-bold">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <Icon name="Mail" size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-xl font-bold">info@zhiguli.ru</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="MapPin" size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Адрес</p>
                      <p className="text-xl font-bold">г. Тольятти, ул. Автозаводская, д. 1</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Часы работы</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Пн-Пт:</span>
                      <span className="font-semibold">9:00 - 19:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Суббота:</span>
                      <span className="font-semibold">10:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Воскресенье:</span>
                      <span className="font-semibold">Выходной</span>
                    </div>
                  </div>
                  <Button className="w-full mt-8 h-12 text-lg bg-primary hover:bg-primary/90">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Написать нам
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-card border-t-4 border-primary py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 ЖИГУЛИ. Легендарные автомобили советского автопрома
          </p>
        </div>
      </footer>
    </div>
  );
}