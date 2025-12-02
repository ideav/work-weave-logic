import { Users, FileText, BarChart, Cog } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Регистрация и обучение",
    description: "Создаём корпоративный аккаунт и проводим интерактивные уроки, чтобы сотрудники быстро освоили систему",
    icon: Users,
  },
  {
    number: "02",
    title: "Создание структуры данных",
    description: "Собираем, трансформируем и переносим информацию из ваших баз данных, Google-таблиц или Excel",
    icon: FileText,
  },
  {
    number: "03",
    title: "Настройка представлений",
    description: "Задаём параметры отчётов, форм, добавляем разделы меню, распределяем права пользователей",
    icon: BarChart,
  },
  {
    number: "04",
    title: "Интеграция и сопровождение",
    description: "Организуем передачу данных между системами и гарантируем всестороннюю поддержку",
    icon: Cog,
  },
];

const Amplification = () => {
  return (
    <section className="section-padding section-alt">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Простая схема работы
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            С обучением и поддержкой на каждом этапе
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-2xl p-6 border border-border h-full hover:border-primary/30 transition-all hover:shadow-lg">
                {/* Step number */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary/30 text-2xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Result */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-8 border border-primary/20 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Что вы получите в итоге?
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Полноценное веб-приложение под ключ: все данные в удобных таблицах с поиском и сортировкой, 
                  простые рабочие места с нужной информацией, гибкие права доступа. 
                  Как при обычной заказной разработке, но в разы быстрее и дешевле.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amplification;
