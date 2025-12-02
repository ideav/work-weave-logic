import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "До внедрения системы я тратил по 8 часов в неделю на сбор информации о загрузке команды. Теперь вся информация у меня перед глазами в режиме реального времени. Время на планирование сократилось в 4 раза.",
    author: "Алексей Иванов",
    role: "Директор по развитию",
    company: "IT-компания «ТехноСофт»",
    employees: "150 сотрудников",
  },
  {
    quote:
      "Наконец-то мы видим реальную картину загрузки команды. Больше нет ситуаций, когда одни перегружены, а другие сидят без дела. Эффективность выросла минимум на 25%.",
    author: "Мария Петрова",
    role: "Руководитель проектного офиса",
    company: "Инженерная компания «СтройПроект»",
    employees: "280 сотрудников",
  },
  {
    quote:
      "Главное для нас — безопасность данных о зарплатах. Теперь я спокоен: только нужные люди видят конфиденциальную информацию. А ещё экономим 2-3 дня в месяц на отчётности.",
    author: "Дмитрий Козлов",
    role: "Финансовый директор",
    company: "Производственная компания «МегаТех»",
    employees: "420 сотрудников",
  },
];

const stats = [
  { value: "150+", label: "компаний доверяют нам" },
  { value: "35 000+", label: "сотрудников в системе" },
  { value: "4.8/5", label: "средняя оценка" },
];

const clientLogos = [
  "TechCorp", "SoftDev", "BuildPro", "DataSys", "CloudNet", "SmartIT"
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Нам доверяют
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Компании разного размера уже оптимизировали планирование ресурсов
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-16 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 opacity-60">
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-secondary/50 rounded-lg text-muted-foreground font-semibold"
            >
              {logo}
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-secondary/30 rounded-2xl p-8 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-accent/30 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.company}, {testimonial.employees}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
