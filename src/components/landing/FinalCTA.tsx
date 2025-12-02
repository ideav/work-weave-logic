import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const FinalCTA = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) {
      toast({
        title: "Заполните все поля",
        description: "Пожалуйста, укажите имя и email",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setEmail("");
    setName("");
  };

  return (
    <section id="cta" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute top-10 left-10 w-32 h-32" viewBox="0 0 100 100">
          <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="currentColor" className="text-white" />
        </svg>
        <svg className="absolute bottom-20 right-10 w-40 h-40" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="currentColor" className="text-white" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Изучите конструктор приложений за 30 минут
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Получите бесплатную консультацию с демонстрацией возможностей платформы
          </p>

          {/* What you'll learn */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10 text-left">
            {[
              "Построим форму для сохранения в таблицу",
              "Загрузим данные из Excel, настроим отчёты",
              "Покажем автоматизацию на живых примерах",
              "Предложим индивидуальные условия",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-primary-foreground/90">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="Ваше имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 bg-white hover:bg-white/90 text-primary font-semibold text-lg"
                >
                  {isLoading ? (
                    "Отправка..."
                  ) : (
                    <>
                      Получить консультацию
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </div>
              <p className="text-xs text-white/60 mt-4">
                Нажимая кнопку, вы соглашаетесь с{" "}
                <a href="#" className="underline hover:text-white">
                  политикой конфиденциальности
                </a>
              </p>
            </div>
          </form>

          {/* Alternative Contact */}
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="tel:+78001234567"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Phone className="w-5 h-5" />
              8 (800) 123-45-67
            </a>
            <a
              href="mailto:info@integram.io"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
              info@integram.io
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
