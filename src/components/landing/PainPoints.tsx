import { FileSpreadsheet, Clock, DollarSign } from "lucide-react";

const painPoints = [
  {
    icon: FileSpreadsheet,
    title: "Excel и Google-таблицы не справляются",
    description:
      "Данные разбросаны по десяткам файлов. Связи между таблицами теряются. Формулы ломаются при добавлении новых строк. Совместная работа превращается в хаос.",
    quote: "«Каждый раз боюсь, что кто-то удалит формулу в общем файле»",
  },
  {
    icon: Clock,
    title: "Заказная разработка — это долго и дорого",
    description:
      "Месяцы ожидания, сотни тысяч рублей за простое приложение. Любое изменение требует новой итерации с разработчиками. Бизнес не может ждать так долго.",
    quote: "«Нам насчитали 3 месяца и миллион рублей за базу клиентов»",
  },
  {
    icon: DollarSign,
    title: "Готовые решения не подходят под процессы",
    description:
      "CRM и ERP системы навязывают свою логику работы. Приходится подстраивать бизнес под софт, а не наоборот. Платите за функции, которые не используете.",
    quote: "«В CRM 200 полей, а нам нужно всего 15, но других»",
  },
];

const PainPoints = () => {
  return (
    <section id="problems" className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Знакомые проблемы?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Вместо «тяжёлого» и дорогостоящего ПО — простая система с неограниченными возможностями
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="group relative bg-secondary/30 rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
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
