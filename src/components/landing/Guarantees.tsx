import {
  ShieldCheck,
  Server,
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
      "Шифрование при передаче и хранении",
      "Соответствие требованиям 152-ФЗ",
      "Регулярное резервное копирование",
    ],
  },
  {
    icon: Server,
    title: "Российская инфраструктура",
    items: [
      "Данные хранятся в РФ",
      "Возможность локальной установки",
      "Независимость от зарубежных сервисов",
    ],
  },
  {
    icon: Upload,
    title: "Быстрая миграция",
    items: [
      "Импорт из Excel в один клик",
      "Перенос из Google-таблиц",
      "Помощь с миграцией данных",
    ],
  },
  {
    icon: GraduationCap,
    title: "Обучение и поддержка",
    items: [
      "5 интерактивных уроков",
      "Видеоматериалы и документация",
      "Консультации по настройке",
    ],
  },
];

const Guarantees = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Гарантии и поддержка
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Всё, что нужно для уверенного старта
          </p>
        </div>

        {/* Main Badge */}
        <div className="max-w-xl mx-auto mb-16">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Начните бесплатно
            </h3>
            <p className="text-muted-foreground">
              Зарегистрируйтесь и получите доступ к интерактивным урокам и демо-данным
            </p>
          </div>
        </div>

        {/* Guarantees Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="bg-secondary/30 rounded-2xl p-6 border border-border"
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
      </div>
    </section>
  );
};

export default Guarantees;
