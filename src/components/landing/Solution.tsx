import { Database, Lock, Calendar, Users, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Все данные в одном месте",
    description:
      "Единая база данных о сотрудниках, проектах и планах. Никаких Excel-файлов в почте. Актуальная информация доступна в любой момент.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Lock,
    title: "Гибкая система прав доступа",
    description:
      "Настраиваемые роли и права. Зарплаты видит только HR и руководство. Менеджеры проектов работают только со своими проектами.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Calendar,
    title: "Планируйте найм и контролируйте ФОТ",
    description:
      "Сравнивайте план найма с фактом. Прогнозируйте ФОТ на месяцы вперёд. Видьте полную картину загрузки команды.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Users,
    title: "Назначайте ресурсы на проекты",
    description:
      "Drag-and-drop интерфейс для назначения сотрудников. Видьте загрузку каждого специалиста. Балансируйте нагрузку между проектами.",
    color: "bg-orange-500/10 text-orange-600",
  },
];

const Solution = () => {
  return (
    <section id="solution" className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            Решение
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Единая система ресурсного планирования
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Управляйте ресурсами компании в одной защищённой системе. 
            От назначения сотрудников на проекты до прогнозирования ФОТ на год вперёд.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-secondary/30 rounded-2xl p-8 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
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

        {/* Demo CTA */}
        <div className="text-center">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-colors group"
          >
            Посмотреть демонстрацию работы системы
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solution;
