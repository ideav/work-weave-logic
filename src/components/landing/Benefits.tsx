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
    title: "Быстрый старт",
    description: "Начните работу за 1 день, а не за месяцы внедрения",
  },
  {
    icon: MousePointer,
    title: "Интуитивный интерфейс",
    description: "Не нужно обучать сотрудников неделями — интерфейс понятен с первых минут",
  },
  {
    icon: Settings,
    title: "Гибкость настройки",
    description: "Адаптируется под структуру вашей компании и проектов",
  },
  {
    icon: Shield,
    title: "Российское решение",
    description: "Данные хранятся на территории РФ, полное соответствие требованиям 152-ФЗ",
  },
  {
    icon: TrendingUp,
    title: "Масштабируемость",
    description: "Растёт вместе с вашей компанией: от 70 до 700+ сотрудников",
  },
  {
    icon: Headphones,
    title: "Поддержка 24/7",
    description: "Техподдержка на русском языке в любое время",
  },
  {
    icon: Puzzle,
    title: "Интеграции",
    description: "API для интеграции с вашими CRM, ERP, бухгалтерскими системами",
  },
  {
    icon: RefreshCw,
    title: "Регулярные обновления",
    description: "Новые функции на основе запросов клиентов каждый месяц",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="section-padding section-alt">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Почему выбирают нашу систему
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы создали продукт, который решает реальные проблемы российских компаний
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-accent" />
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
              <p className="text-sm text-muted-foreground">Сравните сами:</p>
              <p className="font-semibold text-foreground">Excel vs ResourcePlan</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm">
                Часы → Минуты
              </span>
              <span className="px-3 py-1 rounded-full bg-success/10 text-success text-sm">
                Хаос → Порядок
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
