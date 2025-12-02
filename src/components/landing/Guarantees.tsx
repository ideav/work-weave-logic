import {
  ShieldCheck,
  Server,
  CreditCard,
  Upload,
  GraduationCap,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const guarantees = [
  {
    icon: ShieldCheck,
    title: "Безопасность данных",
    items: [
      "Шифрование данных на уровне банков",
      "Резервное копирование каждые 4 часа",
      "Сертификат соответствия 152-ФЗ",
    ],
  },
  {
    icon: Server,
    title: "Доступность сервиса",
    items: [
      "SLA 99.9% — гарантия работоспособности",
      "Компенсация при недоступности сервиса",
    ],
  },
  {
    icon: CreditCard,
    title: "Прозрачное ценообразование",
    items: [
      "Никаких скрытых платежей",
      "Фиксированная цена на весь период подписки",
    ],
  },
  {
    icon: Upload,
    title: "Миграция данных",
    items: [
      "Бесплатная помощь в переносе данных из Excel",
      "Персональный менеджер на период внедрения",
    ],
  },
  {
    icon: GraduationCap,
    title: "Обучение",
    items: [
      "Бесплатные вебинары для ваших сотрудников",
      "База знаний и видео-уроки",
    ],
  },
  {
    icon: Sparkles,
    title: "Непрерывное развитие",
    items: [
      "Все обновления включены в стоимость",
      "Новые функции без доплат",
    ],
  },
];

const steps = [
  { number: "01", title: "Зарегистрируйтесь за 30 секунд" },
  { number: "02", title: "Получите демо-данные или загрузите свои" },
  { number: "03", title: "Пригласите команду" },
  { number: "04", title: "Начните планировать" },
];

const Guarantees = () => {
  return (
    <section className="section-padding section-alt">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Попробуйте без рисков
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            14 дней полнофункционального доступа без кредитной карты
          </p>
        </div>

        {/* Main Guarantee Badge */}
        <div className="max-w-xl mx-auto mb-16">
          <div className="bg-card rounded-2xl p-8 border-2 border-accent shadow-lg text-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Гарантия возврата 30 дней
            </h3>
            <p className="text-muted-foreground">
              Если не подойдёт в течение 30 дней — вернём деньги без вопросов
            </p>
          </div>
        </div>

        {/* Guarantees Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <guarantee.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {guarantee.title}
              </h3>
              <ul className="space-y-2">
                {guarantee.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <svg className="w-4 h-4 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Как начать работу
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-xl p-6 border border-border text-center h-full">
                  <span className="text-4xl font-bold text-accent/30">{step.number}</span>
                  <p className="text-foreground font-medium mt-2">{step.title}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-border">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantees;
