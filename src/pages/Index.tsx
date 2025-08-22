import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-25" style={{backgroundColor: '#fefcf8'}}>
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">♔</span>
              </div>
              <span className="text-xl font-bold text-gray-900">ChessMaster</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#benefits" className="text-gray-600 hover:text-gray-900 transition-colors">О пользе шахмат</a>
              <a href="#trainers" className="text-gray-600 hover:text-gray-900 transition-colors">Тренеры</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Стоимость</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Освойте искусство <span className="text-amber-500">шахмат</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Профессиональные уроки шахмат с опытными тренерами. Развивайте стратегическое мышление, логику и концентрацию с лучшими мастерами игры.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg">
                <Icon name="Play" className="mr-2" size={20} />
                Начать обучение
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 px-8 py-4 text-lg">
                <Icon name="Phone" className="mr-2" size={20} />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-amber-25" style={{backgroundColor: '#fdf9f3'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Для чего нужны шахматы?</h2>
            <p className="text-xl text-gray-600">Шахматы развивают множество важных навыков</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Brain" className="text-amber-600" size={32} />
                </div>
                <CardTitle className="text-xl">Логическое мышление</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">Шахматы развивают способность анализировать, просчитывать варианты и принимать обоснованные решения.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" className="text-amber-600" size={32} />
                </div>
                <CardTitle className="text-xl">Концентрация</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">Игра требует полной сосредоточенности, что улучшает способность к длительной концентрации внимания.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Trophy" className="text-amber-600" size={32} />
                </div>
                <CardTitle className="text-xl">Стратегическое планирование</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">Шахматы учат планировать на несколько ходов вперёд и адаптироваться к изменяющимся условиям.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши тренеры</h2>
            <p className="text-xl text-gray-600">Профессиональные шахматисты с высокой квалификацией</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader className="text-center">
                <img
                  src="https://cdn.poehali.dev/files/7b7de451-d790-434c-9cc0-7a9c885e776a.jpg"
                  alt="ollachess тренер"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle className="text-2xl">ollachess</CardTitle>
                <Badge variant="secondary" className="bg-amber-100 text-amber-800 font-semibold">Тренер</Badge>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600">Опытный тренер с многолетней практикой обучения шахматам. Специализируется на работе с начинающими и игроками среднего уровня.</p>
                <div className="flex justify-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center"><Icon name="Users" size={16} className="mr-1" /> 200+ учеников</span>
                  <span className="flex items-center"><Icon name="Award" size={16} className="mr-1" /> 5+ лет опыта</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader className="text-center">
                <div className="flex justify-center gap-2 mb-4">
                  <Badge className="bg-amber-500 text-white font-semibold">FM</Badge>
                  <Badge className="bg-purple-600 text-white font-semibold">IM</Badge>
                </div>
                <CardTitle className="text-2xl">Мастер FIDE и Международный мастер</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600">Официальный мастер FIDE с международным признанием. Подготовка к турнирам и работа с продвинутыми игроками.</p>
                <div className="flex justify-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center"><Icon name="Star" size={16} className="mr-1" /> Рейтинг 2300+</span>
                  <span className="flex items-center"><Icon name="Trophy" size={16} className="mr-1" /> Турниры FIDE</span>
                </div>
              </CardContent>
            </Card>
          </div>
          

        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-amber-25" style={{backgroundColor: '#fdf9f3'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Стоимость занятий</h2>
            <p className="text-xl text-gray-600">Профессиональное обучение по доступным ценам</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white relative">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl mb-2">ollachess</CardTitle>
                <div className="text-3xl font-bold text-gray-900 mb-2">3 000 ₽</div>
                <p className="text-gray-500">за занятие</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Icon name="Check" className="text-green-500 mr-2" size={16} />
                  <span>Индивидуальные занятия</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Icon name="Check" className="text-green-500 mr-2" size={16} />
                  <span>60 минут урока</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Icon name="Check" className="text-green-500 mr-2" size={16} />
                  <span>Домашние задания</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Icon name="Check" className="text-green-500 mr-2" size={16} />
                  <span>Анализ партий</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-2 border-amber-200 bg-white relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-amber-500 text-white">Популярный</Badge>
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl mb-2">Мастер FIDE и IM</CardTitle>
                <div className="text-3xl font-bold text-gray-900 mb-2">3 000 ₽</div>
                <p className="text-gray-500">за занятие</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Icon name="Check" className="text-green-500 mr-2" size={16} />
                  <span>Индивидуальные занятия</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Icon name="Check" className="text-green-500 mr-2" size={16} />
                  <span>60 минут урока</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Icon name="Check" className="text-green-500 mr-2" size={16} />
                  <span>Подготовка к турнирам</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Icon name="Check" className="text-green-500 mr-2" size={16} />
                  <span>Дебютная подготовка</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white relative">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl mb-2">Мастер FIDE и IM</CardTitle>
                <div className="text-3xl font-bold text-gray-900 mb-2">3 000 ₽</div>
                <p className="text-gray-500">за занятие</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Icon name="Check" className="text-green-500 mr-2" size={16} />
                  <span>Индивидуальные занятия</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Icon name="Check" className="text-green-500 mr-2" size={16} />
                  <span>90 минут урока</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Icon name="Check" className="text-green-500 mr-2" size={16} />
                  <span>Профессиональная подготовка</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Icon name="Check" className="text-green-500 mr-2" size={16} />
                  <span>Эндшпиль и стратегия</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Связаться с нами</h2>
          <p className="text-xl text-gray-600 mb-8">Готовы начать обучение? Свяжитесь с нами для записи на первое занятие</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8">
              <Icon name="Phone" className="mr-2" size={20} />
              Позвонить
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-purple-300 text-purple-700 hover:bg-purple-50 px-8"
              asChild
            >
              <a href="https://lichess.org/@/Olga31" target="_blank" rel="noopener noreferrer">
                <svg className="mr-2" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Lichess
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-300 text-blue-700 hover:bg-blue-50 px-8"
              asChild
            >
              <a href="https://t.me/olarudometova" target="_blank" rel="noopener noreferrer">
                <svg className="mr-2" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.8 17.3l.4-1.9L17.4 9c.3-.3 0-.4-.4-.1l-9.4 5.9-2.6-.8c-.6-.2-.6-.6.1-.9L19.3 7.1c.5-.2 1 .3.7 1.1l-2.2 10.1c-.1.5-.5.7-.9.4l-2.5-1.9-1.2 1.2c-.1.1-.3.2-.4.2z"/>
                </svg>
                Telegram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">♔</span>
              </div>
              <span className="text-xl font-bold">ChessMaster</span>
            </div>
            <div className="text-gray-400">
              © 2024 ChessMaster. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;