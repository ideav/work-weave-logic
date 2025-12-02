import { ArrowRight, Play, Flag, Gift, Calendar, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen hero-gradient pt-24 pb-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        {/* Geometric shapes like on integram.io */}
        <svg className="absolute top-20 left-10 w-16 h-16 text-primary/10" viewBox="0 0 100 100">
          <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="currentColor" />
        </svg>
        <svg className="absolute bottom-32 right-20 w-24 h-24 text-primary/5" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="currentColor" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Column - Text Content */}
          <div className="flex flex-col gap-8">
            {/* Heading */}
            <h1 className="animate-fade-up text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Российская платформа для создания{" "}
              <span className="text-gradient-accent">баз данных и веб-приложений</span>
            </h1>

            {/* Subheading */}
            <p className="animate-fade-up-delay-1 text-lg md:text-xl text-muted-foreground max-w-xl">
              Конструктор IT-решений с гибким функционалом и простой настройкой: 
              прототип уже послезавтра
            </p>

            {/* Features badges */}
            <div className="animate-fade-up-delay-1 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
                <Flag className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Российский продукт</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
                <Gift className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Шаблоны для бизнеса</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Обучение за 7 дней</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
                <Code className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">No-code, Low-code</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary text-lg px-8 py-6">
                Протестировать сервис
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="btn-secondary text-lg px-8 py-6">
                <Play className="mr-2 w-5 h-5" />
                Посмотреть демо
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="animate-fade-up-delay-3 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Без программирования
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Старт за 15 минут
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Интеграции по API
              </span>
            </div>
          </div>

          {/* Right Column - Dashboard Preview */}
          <div className="relative animate-fade-up-delay-2">
            <div className="relative bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
              {/* Browser Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-success/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-background/80 rounded-md px-3 py-1 text-xs text-muted-foreground">
                    app.integram.io
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-4">
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                    <p className="text-xs text-muted-foreground mb-1">Записей</p>
                    <p className="text-2xl font-bold text-foreground">500M+</p>
                  </div>
                  <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                    <p className="text-xs text-muted-foreground mb-1">Таблиц</p>
                    <p className="text-2xl font-bold text-foreground">128</p>
                  </div>
                  <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                    <p className="text-xs text-muted-foreground mb-1">Отчётов</p>
                    <p className="text-2xl font-bold text-foreground">47</p>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="bg-primary/5 rounded-xl p-4 h-32 border border-primary/10">
                  <div className="flex items-end justify-between h-full gap-2">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 80].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-primary to-primary/60 rounded-t"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Data rows */}
                <div className="space-y-2">
                  {[
                    { name: "Клиенты", count: "12,450" },
                    { name: "Заказы", count: "8,320" },
                    { name: "Документы", count: "45,100" },
                  ].map((item) => (
                    <div key={item.name} className="flex items-center justify-between py-2 px-3 bg-secondary/30 rounded-lg">
                      <span className="text-sm text-muted-foreground">{item.name}</span>
                      <span className="text-sm font-medium text-foreground">{item.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-card rounded-xl shadow-lg border border-border p-3 animate-float">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-foreground">Данные синхронизированы</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
