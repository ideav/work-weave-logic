import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Как долго длится внедрение?",
    answer:
      "Базовое внедрение занимает 1-3 дня. Вы можете начать работу сразу после регистрации с демо-данными. Перенос ваших данных из Excel обычно занимает 1-2 дня с помощью нашей команды поддержки.",
  },
  {
    question: "Можно ли интегрировать систему с нашей ERP?",
    answer:
      "Да, мы предоставляем API для интеграции с популярными системами: 1С, Битрикс24, SAP и другими. Наша команда поможет настроить интеграцию под ваши потребности.",
  },
  {
    question: "Где хранятся данные?",
    answer:
      "Все данные хранятся на серверах в России и полностью соответствуют требованиям 152-ФЗ о персональных данных. Мы используем шифрование уровня банковских систем.",
  },
  {
    question: "Какова стоимость системы?",
    answer:
      "Стоимость зависит от количества сотрудников и выбранного функционала. Начните с бесплатного 14-дневного пробного периода, чтобы оценить систему. После этого мы подберём оптимальный тариф для вашей компании.",
  },
  {
    question: "Нужно ли покупать дополнительное оборудование?",
    answer:
      "Нет, система работает в облаке. Вам нужен только браузер и доступ в интернет. Никакого дополнительного оборудования или установки программ не требуется.",
  },
  {
    question: "Есть ли мобильное приложение?",
    answer:
      "Система полностью адаптирована для работы на мобильных устройствах через браузер. Нативные приложения для iOS и Android находятся в разработке.",
  },
  {
    question: "Что если система нам не подойдёт?",
    answer:
      "Мы даём 30-дневную гарантию возврата денег. Если в течение 30 дней после оплаты вы поймёте, что система вам не подходит — вернём полную стоимость без вопросов.",
  },
  {
    question: "Как обеспечивается безопасность данных?",
    answer:
      "Мы используем многоуровневую систему защиты: шифрование данных при передаче и хранении, двухфакторную аутентификацию, гибкую систему прав доступа, регулярное резервное копирование и аудит всех действий пользователей.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Частые вопросы
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
                className="bg-secondary/30 rounded-xl border border-border px-6 data-[state=open]:border-accent/30"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-accent hover:no-underline py-5">
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
