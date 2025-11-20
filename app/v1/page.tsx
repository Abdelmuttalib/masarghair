"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-alexandria">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export function Hero() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-v1-primary/6 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-v1-accent/4 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-secondary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-lightgreen/25 text-v1darkgreen rounded-full text-sm font-semibold mb-8 border border-v1darkgreen/20">
              <span className="w-1.5 h-1.5 bg-v1darkgreen rounded-full"></span>
              تمكين الطلاب
            </span>

            <div className="space-y-6">
              <h1 className=" text-5xl lg:text-6xl font-semibold text-pretty leading-tight text-foreground">
                بوابتك إلى{" "}
                <span className="text-v1-primary underline decoration-lightgreen decoration-4">
                  التميز
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg font-light">
                إرشادات خبيرة للطلاب السعوديين الطامحين للالتحاق بأعرق الجامعات
                الأمريكية. نحول أحلامك إلى واقع.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button className="bg-v1-primary hover:bg-v1-primary/90 text-lightgreen border-2 border-v1-primary rounded-lg px-10 py-6 text-base font-semibold group hover:shadow-premium-lg transition-all duration-300">
                ابدأ رحلتك{" "}
                <ArrowLeft
                  className="ml-2 group-hover:-translate-x-1 transition-transform"
                  size={20}
                />
              </Button>
              <Button
                variant="outline"
                className="rounded-lg px-10 py-6 text-base font-semibold border-2 border-v1darkgreen/70 text-v1-primary hover:bg-v1-primary/5 hover:border-v1-primary/50 transition-all duration-300"
              >
                احجز استشارة مجانية
              </Button>
            </div>

            <div className="flex gap-16 pt-12 border-t border-border">
              <div>
                <p className="text-4xl font-semibold text-v1-primary mb-2">
                  500+
                </p>
                <p className="text-sm text-muted-foreground font-medium">
                  طالب تم قبولهم
                </p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-v1-primary mb-2">
                  95%
                </p>
                <p className="text-sm text-muted-foreground font-medium">
                  معدل النجاح
                </p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-v1-primary mb-2">
                  أفضل 50
                </p>
                <p className="text-sm text-muted-foreground font-medium">
                  جامعة أمريكية
                </p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-premium-xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/diverse-saudi-students-at-american-university-camp-opTtnOLL1Fy9NcF7qyXYUlSEUIMpxh.jpg"
                alt="طلاب في الحرم الجامعي الأمريكي"
                className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-v1-primary/30 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-background p-4 rounded-xl shadow-premium-lg border border-border backdrop-blur-sm max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-v1darkgreen flex items-center justify-center">
                  <span className="text-lightgreen font-bold text-lg">✓</span>
                </div>
                <p className=" text-lg font-semibold text-foreground">
                  تدريب خبير
                </p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                إرشادات مخصصة من خبراء القبول
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-32 sm:py-48 bg-v1-primary text-v1-primary-foreground relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-v1-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className=" text-5xl lg:text-6xl font-semibold text-pretty mb-8">
              هل أنت مستعد؟
            </h2>
            <p className="text-xl text-v1-primary-foreground/85 mb-14 leading-relaxed font-light">
              تواصل مع استشاريينا الخبراء اليوم. احجز استشارتك المجانية واكتشف
              طريقك إلى أفضل الجامعات الأمريكية.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-lg bg-lightgreen/15 flex items-center justify-center flex-shrink-0 group-hover:bg-lightgreen/25 transition-all duration-300">
                  <Mail className="w-7 h-7 text-lightgreen" />
                </div>
                <div>
                  <p className="font-semibold mb-2 text-lg">
                    البريد الإلكتروني
                  </p>
                  <a
                    href="mailto:hello@masarghair.com"
                    className="text-v1-primary-foreground/75 hover:text-lightgreen transition-colors font-medium text-base"
                  >
                    hello@masarghair.com
                  </a>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-lg bg-lightgreen/15 flex items-center justify-center flex-shrink-0 group-hover:bg-lightgreen/25 transition-all duration-300">
                  <Phone className="w-7 h-7 text-lightgreen" />
                </div>
                <div>
                  <p className="font-semibold mb-2 text-lg">الهاتف</p>
                  <a
                    href="tel:+966123456789"
                    className="text-v1-primary-foreground/75 hover:text-lightgreen transition-colors font-medium text-base"
                  >
                    +966 (12) 345-6789
                  </a>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-lg bg-lightgreen/15 flex items-center justify-center flex-shrink-0 group-hover:bg-lightgreen/25 transition-all duration-300">
                  <MapPin className="w-7 h-7 text-lightgreen" />
                </div>
                <div>
                  <p className="font-semibold mb-2 text-lg">المقرات</p>
                  <p className="text-v1-primary-foreground/75 font-medium text-base">
                    الرياض، المملكة العربية السعودية
                    <br />
                    نيويورك، الولايات المتحدة الأمريكية
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-v1-primary-foreground/8 border border-v1-primary-foreground/20 rounded-2xl p-12 backdrop-blur-md hover:border-v1-primary-foreground/40 transition-all duration-300">
            <h3 className=" text-3xl font-bold mb-10">احجز استشارة مجانية</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-3">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  placeholder="اسمك"
                  className="w-full px-5 py-3.5 rounded-lg bg-v1-primary-foreground/10 border border-v1-primary-foreground/30 text-v1-primary-foreground placeholder:text-v1-primary-foreground/50 focus:outline-none focus:border-lightgreen focus:ring-2 focus:ring-lightgreen/30 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  placeholder="بريدك@البريد.com"
                  className="w-full px-5 py-3.5 rounded-lg bg-v1-primary-foreground/10 border border-v1-primary-foreground/30 text-v1-primary-foreground placeholder:text-v1-primary-foreground/50 focus:outline-none focus:border-lightgreen focus:ring-2 focus:ring-lightgreen/30 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3">
                  الصف الحالي
                </label>
                <select className="w-full px-5 py-3.5 rounded-lg bg-v1-primary-foreground/10 border border-v1-primary-foreground/30 text-v1-primary-foreground focus:outline-none focus:border-lightgreen focus:ring-2 focus:ring-lightgreen/30 transition-all duration-300">
                  <option>الصف 10</option>
                  <option>الصف 11</option>
                  <option>الصف 12</option>
                  <option>تخرج</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3">
                  الرسالة
                </label>
                <textarea
                  placeholder="أخبرنا عن أحلامك الجامعية..."
                  rows={4}
                  className="w-full px-5 py-3.5 rounded-lg bg-v1-primary-foreground/10 border border-v1-primary-foreground/30 text-v1-primary-foreground placeholder:text-v1-primary-foreground/50 focus:outline-none focus:border-lightgreen focus:ring-2 focus:ring-lightgreen/30 transition-all duration-300 resize-none"
                />
              </div>

              <Button className="w-full bg-lightgreen hover:bg-v1-accent/90 text-v1-accent-foreground rounded-lg py-6 font-semibold group shadow-premium hover:shadow-premium-lg transition-all duration-300">
                احجز الاستشارة{" "}
                <ArrowLeft
                  className="mr-2 group-hover:-translate-x-1 transition-transform"
                  size={20}
                />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "متى يجب أن أبدأ عملية التقديم للجامعة؟",
    answer:
      "نوصي بالبدء في السنة الأخيرة من الثانوية. من الناحية المثالية، ابدأ في سبتمبر لديك متسع من الوقت لاختيار الجامعة والاستعداد والتطبيق.",
  },
  {
    question: "ما تكلفة خدمات مسار غير؟",
    answer:
      "خدماتنا ميسورة وشفافة. نقدم حزم مرنة بدءاً من رسوم الاستشارة، مع خطط شاملة تتضمن الدعم الكامل من الاختيار إلى الوصول. تواصل معنا للحصول على تفاصيل الأسعار.",
  },
  {
    question: "أي جامعات تتعامل معها؟",
    answer:
      "نتعامل مع أكثر من 500 جامعة عبر الولايات المتحدة، بما في ذلك جميع الجامعات ضمن أفضل 50. نساعد الطلاب على تحديد الخيار الأفضل بناءً على ملفهم الأكاديمي والأهداف.",
  },
  {
    question: "هل تساعدون في فرص المنح الدراسية؟",
    answer:
      "نقدم إرشادات شاملة عن المنح الدراسية، ونساعدك في تحديد فرص التمويل والتدريب على طلبات المنح لتعظيم مساعدتك المالية.",
  },
  {
    question: "كم يستغرق التطبيق عادةً؟",
    answer:
      "العملية الكاملة عادةً ما تستغرق 6-12 شهراً من الاستشارة الأولية إلى الالتحاق. يتضمن ذلك اختيار الجامعة والاختبارات والتطبيقات والمقابلات ومعالجة التأشيرة.",
  },
  {
    question: "ماذا إذا لم أتم قبولي في البداية؟",
    answer:
      "لا نستسلم! يعمل فريقنا معك على الطعون وتجربة جامعات بديلة ومناقشة خيارات سنة تحضيرية. لدينا معدل نجاح 95% في تأمين القبول لجميع طلابنا.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 sm:py-48 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-v1-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-lightgreen/25 text-v1darkgreen rounded-full text-sm font-semibold mb-8 border border-v1darkgreen/20">
            <span className="w-1.5 h-1.5 bg-v1darkgreen rounded-full"></span>
            الأسئلة الشائعة
          </span>
          <h2 className=" text-5xl lg:text-6xl font-semibold text-foreground mb-8">
            أسئلة متكررة
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            كل ما تحتاج إلى معرفته حول خدماتنا وعملية التقديم.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-xl overflow-hidden hover:border-v1-primary/40 transition-all duration-300 group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between bg-background hover:bg-muted/30 transition-colors duration-300"
              >
                <h3 className="font-semibold text-right text-foreground text-lg leading-tight">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-v1-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-8 py-6 bg-muted/20 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed text-base font-light">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "الشركة",
      links: ["عنا", "فريقنا", "الوظائف", "الأخبار"],
    },
    {
      title: "الخدمات",
      links: [
        "اختيار الجامعة",
        "دعم التطبيق",
        "تحضير المقابلات",
        "مساعدة المنح",
      ],
    },
    {
      title: "الموارد",
      links: ["المدونة", "الأدلة", "تحضير الاختبارات", "الجدول الزمني"],
    },
    {
      title: "الدعم",
      links: ["الأسئلة الشائعة", "اتصل بنا", "سياسة الخصوصية", "شروط الخدمة"],
    },
  ];

  return (
    <footer className="bg-v1-primary text-v1-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo Section */}
          <div className="col-span-2 md:col-span-1 mb-16 md:mb-0 ml-12">
            <h2 className=" text-2xl font-bold mb-4">مسار غير</h2>
            <p className="text-v1-primary-foreground/80 text-sm leading-relaxed">
              تمكين الطلاب السعوديين لتحقيق أحلامهم التعليمية الأمريكية.
            </p>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-sm mb-4">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-v1-primary-foreground/70 hover:text-lightgreen transition-colors text-sm font-medium"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-v1-primary-foreground/20 pt-8">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4">
            <p className="text-v1-primary-foreground/60 text-sm mt-10 md:mt-0">
              © {currentYear} مسار غير. جميع الحقوق محفوظة.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="#"
                className="text-v1-primary-foreground/60 hover:text-lightgreen transition-colors text-sm font-medium"
              >
                سياسة الخصوصية
              </a>
              <a
                href="#"
                className="text-v1-primary-foreground/60 hover:text-lightgreen transition-colors text-sm font-medium"
              >
                شروط الخدمة
              </a>
              <a
                href="#"
                className="text-v1-primary-foreground/60 hover:text-lightgreen transition-colors text-sm font-medium"
              >
                إعدادات ملفات تعريف الارتباط
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "الخدمات", href: "#services" },
    { label: "لماذا مسار غير", href: "#why-us" },
    { label: "قصص النجاح", href: "#testimonials" },
    { label: "الأسئلة الشائعة", href: "#faq" },
    { label: "اتصل بنا", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/98 backdrop-blur supports-[backdrop-filter]:bg-background/95 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            {/* <h1 className=" text-2xl font-bold tracking-tight text-v1-primary">
              مسار غير
            </h1> */}
            <img
              src="/masarghair.webp"
              alt=""
              className="w-16 lg:w-20 h-16 lg:h-20"
            />
          </div>

          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-v1-primary transition-colors duration-300 relative after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-v1-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Button className="bg-v1-primary hover:bg-v1-primary/90 text-lightgreen rounded-lg px-8 py-5 font-semibold shadow-premium hover:shadow-premium-lg transition-all duration-300">
              ابدأ الآن
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-sm font-medium text-foreground hover:text-v1-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full bg-v1-primary hover:bg-v1-primary/90 text-v1-primary-foreground rounded-lg mt-4 font-semibold py-6">
              ابدأ الآن
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}

// export function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { label: "الخدمات", href: "#services" },
//     { label: "لماذا مسار غير", href: "#why-us" },
//     { label: "قصص النجاح", href: "#testimonials" },
//     { label: "الأسئلة الشائعة", href: "#faq" },
//     { label: "اتصل بنا", href: "#contact" },
//   ];

//   return (
//     <header className="sticky top-0 z-50 bg-background/98 backdrop-blur supports-[backdrop-filter]:bg-background/95 border-b border-border">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           <div className="flex-shrink-0">
//             <h1 className=" text-2xl font-bold tracking-tight text-v1-primary">
//               مسار غير
//             </h1>
//           </div>

//           <nav className="hidden md:flex items-center gap-10">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className="text-sm font-medium text-foreground hover:text-v1-primary transition-colors duration-300 relative after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-v1-accent after:transition-all after:duration-300 hover:after:w-full"
//               >
//                 {item.label}
//               </a>
//             ))}
//           </nav>

//           <div className="hidden md:flex">
//             <Button className="bg-v1-primary hover:bg-v1-primary/90 text-v1-primary-foreground rounded-lg px-7 py-2.5 font-semibold shadow-premium hover:shadow-premium-lg transition-all duration-300">
//               ابدأ الآن
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <nav className="md:hidden pb-4 space-y-2">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className="block py-2 text-sm font-medium text-foreground hover:text-v1-primary transition-colors"
//               >
//                 {item.label}
//               </a>
//             ))}
//             <Button className="w-full bg-v1-primary hover:bg-v1-primary/90 text-v1-primary-foreground rounded-lg mt-4 font-semibold">
//               ابدأ الآن
//             </Button>
//           </nav>
//         )}
//       </div>
//     </header>
//   );
// }
import {
  GraduationCap,
  FileText,
  Lightbulb,
  Users,
  CheckCircle,
  Globe,
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "اختيار الجامعة",
    description:
      "توصيات مخصصة بناءً على ملفك الشخصي وأهدافك. نحدد الجامعات التي ستنجح فيها.",
  },
  {
    icon: FileText,
    title: "دعم التقديم",
    description:
      "مساعدة شاملة في المقالات والتطبيقات والمستندات. نجعل ملفك لا يُنسى.",
  },
  {
    icon: Lightbulb,
    title: "تدريب المقابلات",
    description:
      "مقابلات تجريبية واستعداد استراتيجي لمساعدتك على التعبير عن قصتك الفريدة.",
  },
  {
    icon: Users,
    title: "دعم المنح الدراسية",
    description: "نصائح خبيرة في إيجاد وتأمين منح مالية من أفضل الجامعات.",
  },
  {
    icon: CheckCircle,
    title: "التأشيرة والهجرة",
    description:
      "دعم خطوة بخطوة مع توثيق I-20 وطلبات التأشيرات وجميع المتطلبات.",
  },
  {
    icon: Globe,
    title: "دعم الوصول",
    description:
      "مساعدة في السكن والاستقبال والدعم للانتقال السلس للحياة الجامعية.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-32 sm:py-48 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-1/3 w-96 h-96 bg-v1-accent/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-24">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-lightgreen/25 text-v1darkgreen rounded-full text-sm font-semibold mb-8 border border-v1darkgreen/20">
            <span className="w-1.5 h-1.5 bg-v1darkgreen rounded-full"></span>
            خدماتنا
          </span>
          <h2 className=" text-5xl lg:text-6xl font-semibold text-foreground mb-8 leading-tight">
            دعم شامل <br />
            في كل خطوة
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed font-light">
            من اختيار الجامعة إلى الوصول، نوفر إرشادات شاملة مخصصة لرحلتك
            الفريدة.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-10 bg-background rounded-xl border border-border hover:border-v1-primary/40 hover:shadow-premium-lg transition-all duration-300 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-v1-primary/0 to-v1-accent/0 group-hover:from-v1-primary/2 group-hover:to-v1-accent/2 transition-all duration-300 -z-10"></div>

                <div className="inline-flex p-4 bg-v1-primary rounded-lg group-hover:bg-v1-primary/12 transition-all duration-300 mb-8">
                  <Icon className="w-7 h-7 text-lightgreen" />
                </div>
                <h3 className=" text-xl font-semibold text-foreground mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "أحمد الرشيد",
    university: "جامعة هارفارد",
    role: "الدفعة 2025",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/saudi-male-student-portrait-0Cz8e0cpMF4ia2Tm1E2VlsQN7RURXH.jpg",
    quote: "حولت مسار غير تطبيقي بالكامل. كانت الإرشادات المخصصة استثنائية.",
    stars: 5,
  },
  {
    name: "فاطمة العتيبي",
    university: "معهد ماساتشوستس للتكنولوجيا",
    role: "علوم الكمبيوتر",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/saudi-female-student-portrait-VhYvNl1DelCr4CnaxPK2tnvGQWWss3.jpg",
    quote: "من الاختيار إلى دعم التأشيرة، كل خطوة كانت سلسة. حقاً غيّر الحياة.",
    stars: 5,
  },
  {
    name: "محمد الدوسري",
    university: "جامعة ستانفورد",
    role: "منحة كاملة",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/saudi-student-portrait-yksGEqPHfe4HGdYrcNGKvRTthDWwFc.jpg",
    quote: "دعم المنح الدراسية وحده يستحق الاستثمار. احترافي وموجه للنتائج.",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-32 sm:py-48 bg-muted/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-v1-accent/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-24">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-lightgreen/25 text-v1darkgreen rounded-full text-sm font-semibold mb-8 border border-v1darkgreen/20">
            <span className="w-1.5 h-1.5 bg-v1darkgreen rounded-full"></span>
            قصص النجاح
          </span>
          <h2 className=" text-5xl lg:text-6xl font-semibold text-foreground mb-8">
            أصوات من النجاح
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            استمع من الطلاب الذين حققوا أحلامهم بمساعدة مسار غير.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-10 bg-background border border-border rounded-xl hover:shadow-premium-lg transition-all duration-300 group hover:border-v1-primary/30"
            >
              <div className="flex gap-1.5 mb-8">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-v1-accent text-v1-accent"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-10 leading-relaxed italic text-base font-light">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4 pt-8 border-t border-border">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover bg-muted border border-border"
                />
                <div>
                  <p className=" font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-v1-primary font-medium">
                    {testimonial.university}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "خبرة سعودية",
    description:
      "فريقنا يفهم الثقافة السعودية والنظام التعليمي واحتياجات الطلاب الفريدة",
  },
  {
    title: "نجاح مثبت",
    description: "500+ قبول ناجح في أفضل 50 جامعة بمعدل نجاح 95%",
  },
  {
    title: "نهج مخصص",
    description: "إرشادات مخصصة بناءً على ملفك الشخصي والطموحات",
  },
  {
    title: "دعم شامل",
    description: "من الاختيار إلى الوصول، ندعمك في كل مرحلة من رحلتك",
  },
  {
    title: "أسعار شفافة",
    description: "حزم واضحة وميسورة مع خيارات دفع مرنة لجميع الأسر",
  },
  {
    title: "دعم على مدار الساعة",
    description: "دعم متواصل عبر المناطق الزمنية للإجابة على أسئلتك في أي وقت",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-32 sm:py-48 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 right-0 w-96 h-96 bg-secondary/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-v1-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-lightgreen/25 text-v1darkgreen rounded-full text-sm font-semibold mb-8 border border-v1darkgreen/20">
              <span className="w-1.5 h-1.5 bg-v1darkgreen rounded-full"></span>
              لماذا مسار غير
            </span>
            <h2 className=" text-5xl lg:text-6xl font-semibold text-foreground mb-8">
              لماذا تختارنا
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-14 font-light">
              لسنا مجرد استشاريين - نحن شركاء مخصصون ملتزمون بتحويل أحلامك
              التعليمية إلى واقع.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-5 rounded-lg bg-muted/80 border transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-v1-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className=" text-base font-semibold text-foreground mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-premium-xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/saudi-male-student-portrait-0Cz8e0cpMF4ia2Tm1E2VlsQN7RURXH.jpg"
                alt="قصص النجاح لدينا"
                className="w-full h-[700px] object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-v1-primary/20 to-transparent"></div>
            </div>
            {/* <div className="absolute -bottom-10 -left-10 bg-v1-primary text-v1-primary-foreground p-10 rounded-2xl shadow-premium-xl max-w-xs border border-v1-primary/20">
              <p className=" text-5xl font-bold mb-3">95%</p>
              <p className="text-v1-primary-foreground/90 text-lg font-medium">
                معدل النجاح
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
