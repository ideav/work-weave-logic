import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Фиксированный",
    price: "1 950 ₽",
    period: "в месяц",
    description: "Подходит для небольшой компании или ИП с 2-3 тысячами активностей в день",
    features: [
      "До 3000 активностей в день",
      "Неограниченные таблицы",
      "Базовые интеграции",
      "Email поддержка",
    ],
    popular: false,
  },
  {
    name: "Масштабируемый",
    price: "от 4 900 ₽",
    period: "в месяц",
    description: "Платите по фактическому пользованию, стоимость снижается с ростом объёма",
    features: [
      "Безлимитные активности",
      "Продвинутые интеграции",
      "API доступ",
      "Приоритетная поддержка",
      "Персональный менеджер",
    ],
    popular: true,
  },
  {
    name: "Локальная установка",
    price: "от 290 000 ₽",
    period: "в год",
    description: "Размещение в инфраструктуре заказчика в рамках 1 проекта или сервера",
    features: [
      "Установка на ваши сервера",
      "Полный контроль данных",
      "Индивидуальная настройка",
      "SLA и техподдержка",
      "Обучение команды",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Тарифы
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящий план для вашего бизнеса
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:shadow-lg ${
                plan.popular
                  ? "bg-primary text-primary-foreground border-primary scale-105"
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-primary px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                    Популярный
                  </span>
                </div>
              )}

              {/* Plan name */}
              <h3 className={`text-xl font-semibold mb-2 ${plan.popular ? "text-primary-foreground" : "text-foreground"}`}>
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className={`text-4xl font-bold ${plan.popular ? "text-primary-foreground" : "text-foreground"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ml-2 ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.period}
                </span>
              </div>

              {/* Description */}
              <p className={`text-sm mb-6 ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
                    <span className={`text-sm ${plan.popular ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-white text-primary hover:bg-white/90"
                    : "btn-primary"
                }`}
              >
                {plan.name === "Локальная установка" ? "Связаться" : "Выбрать план"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
