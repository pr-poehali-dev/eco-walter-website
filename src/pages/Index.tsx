import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Leaf" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-primary">ЭКО-ВОЛТЕР</h1>
            </div>
            <div className="hidden md:flex gap-8">
              {['Главная', 'О партии', 'Новости', 'Вступить', 'Контакты'].map((item, index) => {
                const sectionId = ['home', 'about', 'news', 'join', 'contacts'][index];
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sectionId)}
                    className={`text-sm font-medium transition-colors hover:text-secondary ${
                      activeSection === sectionId ? 'text-secondary' : 'text-foreground'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
              Будущее начинается с природы
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Мы создаём политическую силу, которая защищает окружающую среду и строит устойчивое будущее для следующих поколений
            </p>
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-white px-8"
              onClick={() => scrollToSection('join')}
            >
              Присоединиться
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              { icon: 'Leaf', title: 'Защита природы', desc: 'Сохранение биоразнообразия и экосистем' },
              { icon: 'Recycle', title: 'Чистая энергия', desc: 'Переход на возобновляемые источники' },
              { icon: 'TreePine', title: 'Устойчивое развитие', desc: 'Баланс экологии и экономики' },
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-all hover-scale">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Icon name={item.icon} className="text-secondary" size={32} />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">О партии</h2>
          <div className="space-y-6 text-lg text-foreground/90">
            <p>
              <strong>Эко-Волтер</strong> — это экологическая партия нового поколения, объединяющая людей, которые верят в возможность гармоничного сосуществования человека и природы.
            </p>
            <p>
              Мы выступаем за радикальные изменения в экологической политике: переход на возобновляемую энергетику, защиту лесов и водных ресурсов, развитие экологического транспорта и создание зелёных городов.
            </p>
            <div className="bg-secondary/5 p-8 rounded-lg mt-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Наши принципы</h3>
              <ul className="space-y-3">
                {[
                  'Приоритет экологической безопасности над экономической выгодой',
                  'Прозрачность и участие граждан в принятии решений',
                  'Научный подход к решению экологических проблем',
                  'Международное сотрудничество в защите климата',
                ].map((principle, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={20} />
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Новости</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                date: '14.10.2025',
                title: 'Успешный запуск программы "Зелёные города"',
                desc: 'В пяти регионах страны стартовала наша инициатива по озеленению городских пространств',
              },
              {
                date: '08.10.2025',
                title: 'Партия выступила против вырубки лесов',
                desc: 'Мы подали законодательную инициативу об ужесточении контроля за промышленной вырубкой',
              },
              {
                date: '02.10.2025',
                title: 'Открытие экологического центра',
                desc: 'В Москве открылся первый образовательный центр по экологическому просвещению',
              },
            ].map((news, i) => (
              <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <CardDescription className="text-secondary font-medium">{news.date}</CardDescription>
                  <CardTitle className="text-lg">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{news.desc}</p>
                  <Button variant="link" className="mt-4 px-0 text-secondary">
                    Читать далее →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="py-20 px-4 bg-gradient-to-b from-secondary/5 to-white">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">Вступить в партию</h2>
            <p className="text-lg text-muted-foreground">
              Станьте частью движения за чистое будущее
            </p>
          </div>
          <Card className="border-none shadow-xl">
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Фамилия</label>
                    <Input placeholder="Ваша фамилия" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Телефон</label>
                  <Input type="tel" placeholder="+7 (999) 123-45-67" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Почему вы хотите вступить?</label>
                  <Textarea placeholder="Расскажите о своей мотивации..." rows={4} />
                </div>
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Icon name="Mail" className="mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-white/80">info@eco-walter.ru</p>
            </div>
            <div>
              <Icon name="Phone" className="mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Телефон</h3>
              <p className="text-white/80">+7 (495) 123-45-67</p>
            </div>
            <div>
              <Icon name="MapPin" className="mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Адрес</h3>
              <p className="text-white/80">Москва, ул. Экологическая, 1</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/70">
            <p>© 2025 Эко-Волтер. Все права защищены.</p>
            <p className="mt-2">
              <a href="https://www.eco-walter.ru/" className="hover:text-white transition-colors">
                www.eco-walter.ru
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
