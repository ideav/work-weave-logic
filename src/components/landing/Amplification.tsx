import { TrendingDown, Clock, Scale, Target } from "lucide-react";

const consequences = [
  {
    icon: TrendingDown,
    stat: "20%",
    label: "бюджета проекта",
    description: "теряется из-за неэффективного распределения ресурсов",
  },
  {
    icon: Clock,
    stat: "10+",
    label: "часов в неделю",
    description: "руководители тратят на сбор и сверку данных",
  },
  {
    icon: Scale,
    stat: "0%",
    label: "прогнозируемости",
    description: "непонятно, сколько людей нужно нанять и на какие роли",
  },
  {
    icon: Target,
    stat: "↓",
    label: "контроль",
    description: "решения принимаются интуитивно, без опоры на данные",
  },
];

const Amplification = () => {
  return (
    <section className="section-padding section-alt">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Чем это оборачивается для бизнеса?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Каждый день без системы ресурсного планирования стоит вам денег и возможностей
          </p>
        </div>

        {/* Consequences Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {consequences.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 text-center border border-border hover:border-destructive/30 transition-all hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-destructive" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-1">
                {item.stat}
              </div>
              <div className="text-sm font-medium text-muted-foreground mb-2">
                {item.label}
              </div>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Scenario */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">💭</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  Представьте ситуацию:
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Вы планируете новый крупный проект. Но не знаете, кто из сотрудников свободен, 
                  какова их текущая загрузка, впишется ли проект в бюджет ФОТ. HR говорит одно, 
                  финансы — другое, менеджеры проектов — третье. На согласование уходит неделя, 
                  а клиент уже ждёт ответ...
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
