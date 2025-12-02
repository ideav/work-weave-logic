import { FileSpreadsheet, ShieldAlert, TrendingDown } from "lucide-react";

const painPoints = [
  {
    icon: FileSpreadsheet,
    title: "Excel-файлы гуляют по почте и мессенджерам",
    description:
      "Менеджеры проектов присылают обновления в разных форматах. Актуальную информацию приходится собирать по крупицам. На подготовку отчёта для руководства уходит несколько дней.",
    quote: "«Каждый понедельник я трачу полдня, чтобы понять, кто чем занимается»",
  },
  {
    icon: ShieldAlert,
    title: "Конфиденциальные данные под угрозой",
    description:
      "Зарплатные ставки, квалификация сотрудников, бюджеты проектов хранятся в общедоступных таблицах. Контролировать доступ к чувствительной информации практически невозможно.",
    quote: "«Файл с зарплатами случайно попал в общий чат...»",
  },
  {
    icon: TrendingDown,
    title: "План найма не соответствует реальности",
    description:
      "ФОТ растёт быстрее выручки. Владелец не видит полной картины: сколько сотрудников на каких проектах, когда нужен новый найм, где перерасход бюджета.",
    quote: "«Наняли 5 разработчиков, а проектов для них нет»",
  },
];

const PainPoints = () => {
  return (
    <section id="problems" className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Узнаёте себя?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Эти проблемы знакомы большинству растущих компаний
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="group relative bg-secondary/30 rounded-2xl p-8 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <point.icon className="w-7 h-7 text-destructive" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {point.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {point.description}
              </p>

              {/* Quote */}
              <div className="pt-4 border-t border-border">
                <p className="text-sm italic text-muted-foreground">
                  {point.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
