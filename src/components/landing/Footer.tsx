import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: "Возможности", href: "#solution" },
      { label: "Преимущества", href: "#benefits" },
      { label: "Вход", href: "https://app.integram.io" },
      { label: "Регистрация", href: "https://app.integram.io#reg" },
    ],
    resources: [
      { label: "Документация", href: "https://integram.io/reestr.html" },
      { label: "Блог", href: "https://blog.ideav.online/" },
      { label: "RUTUBE", href: "https://rutube.ru/channel/41204904/videos/" },
      { label: "Telegram", href: "https://t.me/ideavr" },
    ],
    company: [
      { label: "WhatsApp", href: "https://chat.whatsapp.com/GtarLIEqlaoAmLSIjNu02R" },
      { label: "VC.ru", href: "https://vc.ru/u/568649-alexey-sidorov" },
      { label: "Реестр ПО", href: "https://integram.io/reestr.html" },
    ],
    legal: [
      { label: "Правила использования", href: "https://integram.io/terms.html" },
      { label: "Публичная оферта", href: "https://integram.io/OfferOJSC.pdf" },
      { label: "Платежная информация", href: "https://integram.io/acct.html" },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo-integram.svg"
                alt="Интеграм"
                className="h-12 brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-xs">
              Система ресурсного планирования для растущего бизнеса. Управляйте командой и проектами эффективно.
            </p>
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <a href="tel:+79955060167" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4" />
                +7 (995) 506-01-67
              </a>
              <a href="mailto:care@integram.io" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" />
                care@integram.io
              </a>
              <div className="text-primary-foreground/70 text-xs">
                Ежедневно 8:00 — 22:00 (МСК)
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
            <p>АО «Интеграм» | ИНН 9716002710 | ОГРН 1247700757590</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
