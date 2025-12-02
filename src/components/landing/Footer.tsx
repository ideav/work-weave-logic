import { Mail, Phone, MapPin } from "lucide-react";
import integramLogo from "@/assets/integram-logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: "Что предлагаем", href: "#solution" },
      { label: "Преимущества", href: "#benefits" },
      { label: "Примеры", href: "#" },
      { label: "Тарифы", href: "#pricing" },
    ],
    resources: [
      { label: "Документация", href: "#" },
      { label: "API", href: "#" },
      { label: "Интеграции", href: "#" },
      { label: "Обучение", href: "#" },
    ],
    company: [
      { label: "О нас", href: "#" },
      { label: "Контакты", href: "#" },
      { label: "Блог", href: "#" },
      { label: "Партнёрам", href: "#" },
    ],
    legal: [
      { label: "Политика конфиденциальности", href: "#" },
      { label: "Пользовательское соглашение", href: "#" },
      { label: "Оферта", href: "#" },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={integramLogo} alt="Интеграм" className="h-10 brightness-0 invert" />
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-xs">
              Российская no-code платформа для создания баз данных и веб-приложений. 
              Конструктор IT-решений с гибким функционалом.
            </p>
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <a href="tel:+78001234567" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4" />
                8 (800) 123-45-67
              </a>
              <a href="mailto:info@integram.io" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" />
                info@integram.io
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Россия</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">Продукт</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4">Ресурсы</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Правовая информация</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} Интеграм. Все права защищены.</p>
            <p>Российский продукт</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
