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
              <span className="text-xl font-bold text-gray-900">ollachess</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#benefits" className="text-gray-600 hover:text-gray-900 transition-colors">О пользе шахмат</a>
              <a href="#test" className="text-gray-600 hover:text-gray-900 transition-colors">Проверь свой уровень</a>
              <a href="#format" className="text-gray-600 hover:text-gray-900 transition-colors">Формат занятий</a>
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
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg" asChild>
                <a href="#pricing">
                  <Icon name="Play" className="mr-2" size={20} />
                  Начать обучение
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 px-8 py-4 text-lg" asChild>
                <a href="#contact">
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Связаться с нами
                </a>
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

      {/* Test Section */}
      <section id="test" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Проверь свой уровень шахмат</h2>
            <p className="text-xl text-gray-600">Бесплатные тесты для проверки ваших знаний</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <Icon name="Zap" className="text-red-600" size={32} />
                </div>
                <CardTitle className="text-xl mb-2">Тактика</CardTitle>
                <p className="text-gray-600">Проверьте свои навыки решения тактических задач</p>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white" 
                  asChild
                >
                  <a href="/test-taktika.pdf" download="Тест_Тактика.pdf">
                    <Icon name="Download" className="mr-2" size={16} />
                    Скачать тест
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon name="Brain" className="text-blue-600" size={32} />
                </div>
                <CardTitle className="text-xl mb-2">Стратегия</CardTitle>
                <p className="text-gray-600">Оцените понимание стратегических принципов</p>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white" 
                  asChild
                >
                  <a href="/strategiya.pdf" download="Стратегия.pdf">
                    <Icon name="Download" className="mr-2" size={16} />
                    Скачать тест
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="Flag" className="text-green-600" size={32} />
                </div>
                <CardTitle className="text-xl mb-2">Эндшпиль</CardTitle>
                <p className="text-gray-600">Проверьте знания техники окончаний</p>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white" 
                  asChild
                >
                  <a href="/endshpil.pdf" download="Эндшпиль.pdf">
                    <Icon name="Download" className="mr-2" size={16} />
                    Скачать тест
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">После прохождения тестов свяжитесь с нами для получения персональных рекомендаций</p>
            <Button size="lg" variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-50" asChild>
              <a href="#contact">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Получить консультацию
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Format Section */}
      <section id="format" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Онлайн занятия</h2>
            <p className="text-xl text-gray-600">Повышаем ваш рейтинг на Lichess и Chess.com</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Цель занятий</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Icon name="Target" className="text-amber-500 mr-3 mt-1" size={20} />
                  <span className="text-gray-700">Повышение рейтинга на Lichess и Chess.com</span>
                </li>
                <li className="flex items-start">
                  <Icon name="TrendingUp" className="text-amber-500 mr-3 mt-1" size={20} />
                  <span className="text-gray-700">Повышение уровня игры и понимания шахмат</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Users" className="text-amber-500 mr-3 mt-1" size={20} />
                  <span className="text-gray-700">Занятия для детей и взрослых</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Award" className="text-amber-500 mr-3 mt-1" size={20} />
                  <span className="text-gray-700">Подготовка к турнирам и соревнованиям</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Формат обучения</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Icon name="Video" className="text-amber-500 mr-3 mt-1" size={20} />
                  <span className="text-gray-700">Онлайн занятия через видеосвязь</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Clock" className="text-amber-500 mr-3 mt-1" size={20} />
                  <span className="text-gray-700">Гибкое расписание - в удобное для вас время</span>
                </li>
                <li className="flex items-start">
                  <Icon name="BookOpen" className="text-amber-500 mr-3 mt-1" size={20} />
                  <span className="text-gray-700">Персональные домашние задания</span>
                </li>
                <li className="flex items-start">
                  <Icon name="BarChart" className="text-amber-500 mr-3 mt-1" size={20} />
                  <span className="text-gray-700">Анализ ваших партий на платформах</span>
                </li>
              </ul>
            </div>
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
                  <Badge className="bg-blue-600 text-white font-semibold">Lichess 2900+</Badge>
                </div>
                <CardTitle className="text-2xl">Мастер FIDE</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600">Официальный мастер FIDE с максимальным рейтингом 2900+ на Lichess. Подготовка к турнирам и работа с продвинутыми игроками.</p>
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
                <CardTitle className="text-xl mb-2">Мастер FIDE (рейтинг 2900+ на Lichess)</CardTitle>
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
                <div className="text-3xl font-bold text-gray-900 mb-2">4 000 ₽</div>
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
              <span className="text-xl font-bold">ollachess</span>
            </div>
            <div className="text-gray-400">
              © 2024 ollachess. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;