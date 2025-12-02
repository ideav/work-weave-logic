import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Перенесли базу клиентов из Google-таблиц за 2 дня. Теперь работаем в 3 раза быстрее — все данные связаны, отчёты формируются автоматически.",
    author: "Анна Смирнова",
    role: "Руководитель отдела продаж",
    company: "Торговая компания",
  },
  {
    quote:
      "Заменили дорогую CRM на Интеграм. Сэкономили 200 000 рублей в год и получили систему, которая работает под наши процессы, а не наоборот.",
    author: "Михаил Козлов",
    role: "Директор по развитию",
    company: "Производственная компания",
  },
  {
    quote:
      "Создали внутренний портал для 50 сотрудников без единой строчки кода. Интерактивное обучение — просто супер, разобрались за неделю.",
    author: "Елена Петрова",
    role: "HR-директор",
    company: "IT-компания",
  },
];

const stats = [
  { value: "500M+", label: "записей в базах клиентов" },
  { value: "7 дней", label: "среднее время обучения" },
  { value: "3x", label: "быстрее, чем Excel" },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Что говорят клиенты
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Компании разного размера уже автоматизировали свои процессы
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-16 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-secondary/30 rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/30 mb-4" />

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
                  {testimonial.company}
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
