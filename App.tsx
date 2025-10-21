import React from 'react';
import Header from './components/Header';

const Footer: React.FC = () => (
    <footer className="bg-slate-800 text-white">
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
            <img src="https://i.postimg.cc/hPhcKptG/Chat-GPT-Image-22-2025-02-04-30.png" alt="Логотип Polina Design" className="h-12 w-auto mx-auto mb-4 invert brightness-0"/>
            <p className="text-slate-400">© {new Date().getFullYear()} Polina Design. Все права защищены.</p>
            <p className="text-sm text-slate-500 mt-2">Екатеринбург, ул. Ленина, 50</p>
        </div>
    </footer>
);


const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
        <div className="text-[#774e9e] mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-purple-100">
            {icon}
        </div>
        <h3 className="text-xl font-bold font-display text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
    </div>
);


export default function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section 
            className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-center text-white"
            style={{ backgroundImage: `url('https://i.postimg.cc/4NfwccRq/Chat-GPT-Image-22-2025-01-39-51.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold font-display mb-4 drop-shadow-lg">Polina Design</h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
                    Создаем уникальные коллекции современной женской и мужской одежды в Екатеринбурге.
                </p>
                 <a href="#about" className="mt-8 inline-block bg-white text-[#774e9e] font-bold py-3 px-8 rounded-full hover:bg-slate-100 transition-all duration-300 text-lg transform hover:scale-105">
                    Узнать больше
                </a>
            </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                <div>
                     <h2 className="text-4xl font-bold font-display text-slate-800 mb-4">Молодая креативная студия</h2>
                     <p className="text-slate-600 mb-4 leading-relaxed">
                        <b>Polina Design</b> — это авторский подход, высочайшее качество материалов и внимание к деталям. Мы сочетаем городскую эстетику с авторским почерком, быстро реагируем на модные тенденции и предлагаем индивидуальную работу с каждым клиентом.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        Наша миссия — создавать вдохновляющую городскую одежду для современных людей, ценящих экологичность, индивидуальность и инновации в дизайне.
                    </p>
                </div>
                <div className="flex justify-center">
                    <img src="https://i.postimg.cc/hPhcKptG/Chat-GPT-Image-22-2025-02-04-30.png" alt="Логотип Polina Design" className="max-w-xs mx-auto rounded-lg" />
                </div>
            </div>
        </section>

         {/* Features Section */}
        <section id="features" className="py-20 bg-stone-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                     <h2 className="text-4xl font-bold font-display text-slate-800">Наши преимущества</h2>
                     <p className="text-slate-600 mt-2 max-w-2xl mx-auto">Мы гордимся нашим подходом к созданию одежды, который отличает нас от других.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <FeatureCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" /></svg>}
                        title="Авторский подход"
                        description="Каждая вещь создается с уникальным видением нашего дизайнера, отражая последние тренды и вечную классику."
                    />
                     <FeatureCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>}
                        title="Высочайшее качество"
                        description="Мы используем только лучшие материалы и фурнитуру, гарантируя долговечность и комфорт нашей одежды."
                    />
                     <FeatureCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                        title="Лимитированные коллекции"
                        description="Мы выпускаем модные коллекции ограниченным тиражом, чтобы вы могли подчеркнуть свою индивидуальность."
                    />
                </div>
            </div>
        </section>

        {/* Org Structure Section */}
        <section id="org-structure" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold font-display text-slate-800">Организационная структура</h2>
                    <p className="text-slate-600 mt-2 max-w-2xl mx-auto">Наша команда профессионалов, которые создают для вас.</p>
                </div>
                <div className="max-w-6xl mx-auto">
                    {/* CEO */}
                    <div className="flex justify-center mb-10 relative">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200"></div>
                        <div className="relative z-10 p-4 bg-white rounded-lg shadow-md text-center border-2 border-[#774e9e]">
                            <p className="font-bold text-lg text-[#774e9e]">Генеральный директор</p>
                            <p className="text-slate-800">Попкова Полина Олеговна</p>
                        </div>
                    </div>
                    
                    {/* Departments */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
                        <div className="space-y-3">
                           <div className="p-4 bg-purple-100 rounded-lg shadow-sm border-t-4 border-purple-300">
                             <p className="font-semibold text-purple-800">Креативный отдел</p>
                           </div>
                           <ul className="text-sm text-slate-600 space-y-1">
                             <li>Алексей Смирнов <span className="text-slate-400">(Дизайнер)</span></li>
                             <li>Мария Петрова <span className="text-slate-400">(Дизайнер)</span></li>
                             <li>Игорь Васильев <span className="text-slate-400">(Технолог)</span></li>
                           </ul>
                        </div>
                        <div className="space-y-3">
                           <div className="p-4 bg-purple-100 rounded-lg shadow-sm border-t-4 border-purple-300">
                             <p className="font-semibold text-purple-800">Производство</p>
                           </div>
                           <ul className="text-sm text-slate-600 space-y-1">
                              <li>Ольга Кузнецова</li>
                              <li>Дарья Новикова</li>
                              <li>Ирина Морозова</li>
                              <li>Светлана Лебедева</li>
                              <li>Евгения Козлова</li>
                           </ul>
                        </div>
                        <div className="space-y-3">
                           <div className="p-4 bg-purple-100 rounded-lg shadow-sm border-t-4 border-purple-300">
                             <p className="font-semibold text-purple-800">Отдел маркетинга</p>
                           </div>
                           <ul className="text-sm text-slate-600 space-y-1">
                             <li>Екатерина Фёдорова</li>
                             <li>Павел Андреев</li>
                           </ul>
                        </div>
                        <div className="space-y-3">
                           <div className="p-4 bg-purple-100 rounded-lg shadow-sm border-t-4 border-purple-300">
                             <p className="font-semibold text-purple-800">Продажи и обслуживание</p>
                           </div>
                           <ul className="text-sm text-slate-600 space-y-1">
                             <li>Анастасия Волкова</li>
                             <li>Сергей Белов</li>
                             <li>Виктория Егорова</li>
                           </ul>
                        </div>
                        <div className="space-y-3">
                           <div className="p-4 bg-purple-100 rounded-lg shadow-sm border-t-4 border-purple-300">
                             <p className="font-semibold text-purple-800">Финансы и склад</p>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="py-20 bg-stone-50">
             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                     <h2 className="text-4xl font-bold font-display text-slate-800">Свяжитесь с нами</h2>
                     <p className="text-slate-600 mt-2 max-w-2xl mx-auto">Мы находимся в сердце Екатеринбурга и всегда рады гостям.</p>
                </div>
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src="https://i.postimg.cc/DfMRPF7n/capture-251022-020639.png" alt="Карта проезда Polina Design" className="w-full h-80 object-cover object-center"/>
                    <div className="p-8 text-center">
                        <h3 className="text-2xl font-semibold text-slate-800">Наш адрес</h3>
                        <p className="text-lg text-slate-600 mt-2">Екатеринбург, ул. Ленина, 50</p>
                    </div>
                </div>
             </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}