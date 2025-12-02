import {
  Rocket,
  MousePointer,
  Settings,
  Shield,
  TrendingUp,
  Headphones,
  Puzzle,
  RefreshCw,
} from "lucide-react";

const benefits = [
  {
    icon: Rocket,
    title: "Прототип за 1 день",
    description: "Начните работу буквально через 15 минут после регистрации",
  },
  {
    icon: MousePointer,
    title: "Без программирования",
    description: "No-code интерфейс понятен с первых минут, не нужен опыт разработки",
  },
  {
    icon: Settings,
    title: "Гибкая настройка",
    description: "Адаптируйте систему под свои процессы, а не наоборот",
  },
  {
    icon: Shield,
    title: "Российский продукт",
    description: "Данные хранятся на территории РФ, соответствие 152-ФЗ",
  },
  {
    icon: TrendingUp,
    title: "Масштабируемость",
    description: "От простой таблицы до базы на 500 млн записей",
  },
  {
    icon: Headphones,
    title: "Обучение за 7 дней",
    description: "Интерактивные уроки и поддержка на русском языке",
  },
  {
    icon: Puzzle,
    title: "API и Webhook",
    description: "Интеграции с любыми внешними системами и сервисами",
  },
  {
    icon: RefreshCw,
    title: "Постоянное развитие",
    description: "Новые функции и улучшения на основе запросов клиентов",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="section-padding section-alt">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Почему выбирают Интеграм
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Гибкий функционал, понятный интерфейс и неограниченные возможности
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison hint */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-card rounded-2xl px-8 py-4 border border-border shadow-sm">
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Говорят, что Интеграм —</p>
              <p className="font-semibold text-foreground">российский аналог Airtable</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                Но мощнее
              </span>
              <span className="px-3 py-1 rounded-full bg-success/10 text-success text-sm">
                И в России
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
