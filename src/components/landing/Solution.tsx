import { Database, Layout, BarChart3, Workflow, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Базы данных на 500 млн записей",
    description:
      "Храните любые объёмы данных в структурированных таблицах со связями. Импортируйте из Excel в один клик. Мощнее Google-таблиц, проще чем SQL.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Layout,
    title: "Конструктор форм и отчётов",
    description:
      "Создавайте формы ввода данных, красивые отчёты и дашборды без программирования. Drag-and-drop интерфейс понятен с первых минут.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: BarChart3,
    title: "BI-аналитика и графики",
    description:
      "Делайте аналитические срезы, стройте графики и диаграммы. Принимайте решения на основе данных, а не интуиции.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Workflow,
    title: "Автоматизация и интеграции",
    description:
      "Настраивайте бизнес-логику, автоматические действия и интеграции с внешними системами через API и Webhook.",
    color: "bg-orange-500/10 text-orange-600",
  },
];

const Solution = () => {
  return (
    <section id="solution" className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Что предлагаем
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Что вы сможете делать «из коробки»?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Интеграм — самодостаточная no-code платформа для создания простых, 
            гибких и надёжных IT-решений «под себя»
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-secondary/30 rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional capabilities */}
        <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                А также:
              </h3>
              <ul className="space-y-3">
                {[
                  "Сводить таблицы из множества файлов в удобные представления",
                  "Собирать данные, делать аналитические срезы и выводы",
                  "Делать красивые дашборды с графиками и диаграммами",
                  "Планомерно наводить порядок в данных подразделения",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors group"
              >
                Посмотреть демонстрацию платформы
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
