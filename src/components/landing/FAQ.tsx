import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Что я получу в итоге?",
    answer:
      "Полноценное веб-приложение под ключ: все ваши данные в удобных таблицах с поиском и сортировкой, простые рабочие места с нужной информацией, гибкая система прав доступа. При необходимости настроим интеграции с внешними системами. Как при обычной заказной разработке, только быстрее и дешевле.",
  },
  {
    question: "Смогу ли я самостоятельно сделать что-то в конструкторе?",
    answer:
      "Да, вы можете начать делать основные вещи буквально через 15 минут после регистрации. Вы получите 5 интерактивных уроков и пройдёте знакомство с инструментом: импорт данных, создание отчётов, форм и структур данных.",
  },
  {
    question: "Какой уровень квалификации требуется для работы?",
    answer:
      "Для создания баз данных не нужны специальные знания — чаще всего достаточно пройти наше интерактивное обучение. Если вы работали с Excel или Google-таблицами, освоите Интеграм за несколько дней.",
  },
  {
    question: "Что входит в сопровождение системы?",
    answer:
      "Сопровождение включает бесплатные консультации, автоматические обновления, поиск причин и устранение ошибок. Наша команда всегда на связи, чтобы помочь с любой задачей.",
  },
  {
    question: "Интеграм — это российский аналог Airtable?",
    answer:
      "Интеграм мощнее других электронных таблиц, но пока менее известен. Клиенты переходят с Airtable и Google-таблиц на Интеграм, когда им требуется много записей в базе, сложная структура таблиц, бизнес-логика, шаблонизатор и кастомизируемые выборки данных.",
  },
  {
    question: "Кому будет принадлежать интеллектуальная собственность?",
    answer:
      "Вашей компании. Вы также сможете продавать созданные решения, лицензировать и тиражировать их.",
  },
  {
    question: "Можно ли интегрировать систему с другими сервисами?",
    answer:
      "Да, мы предоставляем API и Webhook для интеграции с любыми внешними системами: 1С, Битрикс24, CRM, бухгалтерские программы и другие. Наша команда поможет настроить интеграцию под ваши потребности.",
  },
  {
    question: "Где хранятся данные?",
    answer:
      "Все данные хранятся на серверах в России и полностью соответствуют требованиям 152-ФЗ о персональных данных. Также доступна локальная установка в вашей инфраструктуре.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding section-alt">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ответы на частые вопросы
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Не нашли ответ? Напишите нам — ответим в течение часа
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
