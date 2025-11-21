"use client";

import {
  JoinSection,
  LogoText,
  Section,
  SectionTag,
} from "@/components/common";
import { PageContainer } from "@/components/page-container";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  CheckIcon,
  Mail,
  MapPin,
  Phone,
  Search,
  Spline,
  Waypoints,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return <V2Page></V2Page>;
}

export function V2Page() {
  return (
    <div className="font-ibm-plex-sans-arabic">
      <Header />
      <MSC />
    </div>
  );
}

import { Menu, X } from "lucide-react";
import { useState } from "react";

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
    <header className="sticky top-0 z-50 backdrop-blur-xl supports-backdrop-filter:bg-white/[0.7] supports-backdrop-filter:backdrop-blur-xl border-b border-border">
      <PageContainer size="full">
        <div className="flex justify-between items-center h-20">
          <div className="flex gap-20">
            <div className="flex-shrink-0">
              <img
                src="/masarghair.webp"
                alt=""
                className="w-16 lg:w-20 h-16 lg:h-20"
              />
            </div>

            <nav className="hidden lg:flex items-center gap-10 rounded-lg">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm md:text-base text-foreground hover:text-v2-primary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-v2-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            {/* <div className="p-2 rounded-lg bg-v2-gray">
              <Search className="w-full h-7" />
            </div> */}
            <div className="flex gap-3">
              <Button className="bg-v2-darkgray hover:bg-v2-primary/90 text-white rounded-lg px-8 py-5 font-semibold shadow-premium hover:shadow-premium-lg transition-all duration-300 border-2 border-v2-darkgray">
                ابدأ الآن
              </Button>

              <Button
                variant="outline"
                className="bg-white hover:bg-v2-primary/90 text-v2-darkgray rounded-lg px-8 py-5 font-semibold shadow-premium hover:shadow-premium-lg transition-all duration-300 border border-v2-darkgray/20"
              >
                احجز استشارة مجانية
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-sm font-medium text-foreground hover:text-v2-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full bg-v2-darkgray hover:bg-v2-primary/90 text-v2-primary rounded-lg mt-4 font-semibold py-6 border-2 border-v2-primary/40">
              ابدأ الآن
            </Button>
          </nav>
        )}
      </PageContainer>
    </header>
  );
}

const landingPageContent = {
  heroContent: {
    title: "بوابتك للجامعات الأمريكية المتميزة",
    subtitle:
      "نساعد الطلاب في العثور على الجامعات الأمريكية المناسبة لهم، ونقوم بإتمام جميع إجراءات المستندات والموافقات.",
    ctaText: "ابدأ الآن",
    ctaLink: "/get-started",
    backgroundImage: "path/to/hero-image.jpg",
    valueProposition:
      "نحن موثوقون من قبل العديد من الطلاب لتحقيق حلم الدراسة في أمريكا.",
  },
  whatWeOffer: [
    {
      icon: <Waypoints className="w-10 h-10 " />,
      tag: "معتمدون على البيانات",
      title:
        "نبني قراراتنا وترشيحاتنا على تحليل دقيق لبيانات القبول واتجاهات التعليم العالمي.",
      description:
        "تستخدم مسار غير أحدث التحليلات لمطابقة الطلاب مع البرامج التي تناسب قدراتهم وتطلعاتهم.",
    },
    {
      icon: <Spline className="w-10 h-10 " />,
      tag: "منهج عملي مباشر",
      title: "نعمل جنبًا إلى جنب مع الطالب لضمان رحلة قبول واضحة وسلسة.",
      description: "ندعمك في كل خطوة لضمان جاهزية طلبك وقوة ملفك الأكاديمي.",
    },
    {
      icon: (
        <svg
          display="block"
          role="presentation"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          id="3008297960"
        >
          <path
            d="M 9.019 0.816 C 9.108 0.343 9.521 0 10.002 0 C 10.484 0 10.897 0.343 10.985 0.816 L 12.036 6.374 C 12.189 7.183 12.822 7.816 13.63 7.968 L 19.188 9.019 C 19.662 9.108 20.005 9.521 20.005 10.002 C 20.005 10.484 19.662 10.897 19.188 10.985 L 13.63 12.036 C 12.822 12.189 12.189 12.822 12.036 13.63 L 10.985 19.188 C 10.897 19.662 10.484 20.005 10.002 20.005 C 9.521 20.005 9.108 19.662 9.019 19.188 L 7.968 13.63 C 7.816 12.822 7.183 12.189 6.374 12.036 L 0.816 10.985 C 0.343 10.897 0 10.484 0 10.002 C 0 9.521 0.343 9.108 0.816 9.019 L 6.374 7.968 C 7.183 7.816 7.816 7.183 7.968 6.374 Z"
            fill="transparent"
            height="20.004788889056996px"
            id="r3ITwxBG7"
            stroke-dasharray=""
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="var(--js9iwy, 2)"
            stroke="var(--1m973uw, rgb(0,0,0))"
            transform="translate(1.998 1.998)"
            width="20.004788889056993px"
          ></path>
          <path
            d="M 0 0 L 0 4"
            fill="transparent"
            height="4px"
            id="npiFUOZYL"
            stroke-dasharray=""
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="var(--js9iwy, 2)"
            stroke="var(--1m973uw, rgb(0,0,0))"
            transform="translate(20 2)"
            width="1px"
          ></path>
          <path
            d="M 4 0 L 0 0"
            fill="transparent"
            height="1px"
            id="KnnF_NlKv"
            stroke-dasharray=""
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="var(--js9iwy, 2)"
            stroke="var(--1m973uw, rgb(0,0,0))"
            transform="translate(18 4)"
            width="4px"
          ></path>
          <path
            d="M 0 2 C 0 0.895 0.895 0 2 0 C 3.105 0 4 0.895 4 2 C 4 3.105 3.105 4 2 4 C 0.895 4 0 3.105 0 2 Z"
            fill="transparent"
            height="4px"
            id="aBzgyASOc"
            stroke-dasharray=""
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="var(--js9iwy, 2)"
            stroke="var(--1m973uw, rgb(0,0,0))"
            transform="translate(2 18)"
            width="4px"
          ></path>
        </svg>
      ),
      tag: "نظرة مستقبلية",
      title:
        "نساعد الطلاب على اختيار مسارات تعليمية قوية تضمن مستقبلاً مهنيًا مميزًا.",
      description:
        "نركز على خيارات تدعم نموك الأكاديمي والشخصي على المدى الطويل.",
    },
  ],
  whatWeOfferSpecial: [
    {
      t: "اختيار الجامعات والتخطيط الأكاديمي",
      d: "نساعدك في تحديد الجامعات والتخصصات المناسبة بناءً على ميولك، درجاتك، وطموحاتك المستقبلية. نضمن لك خطة تعليمية واضحة تدعم مستقبلك الدراسي والمهني.",
    },
    {
      t: "الدعم في التقديم والقبول",
      d: "توفر مسار غير دعماً كاملاً في عملية التقديم من تعبئة النماذج، مراجعة الوثائق، كتابة المقالات الشخصية، وحتى المتابعة مع الجامعات لتحقيق أفضل فرصة للقبول.",
    },
    {
      t: "الفيزا، المستندات والمتطلبات الرسمية",
      d: "نرشدك خلال جميع متطلبات المستندات—من تجهيز الأوراق الأكاديمية إلى التحضير لمقابلة الفيزا. فريقنا يضمن أن كل خطوة تتم وفق المتطلبات الرسمية.",
    },
    {
      t: "برامج اللغة الإنجليزية والمسارات الإعدادية",
      d: "نوفر لك خيارات واسعة من دورات اللغة الإنجليزية وبرامج المسار الأكاديمي في أمريكا وأوروبا، لمساعدتك على تطوير لغتك والاستعداد للدراسة الجامعية.",
    },
  ],
  supportWhatWeOffer: {
    t: "تحقيق نتائج ملموسة بثقة وخبرة",
    d: "في مسار غير، نصمم خدماتنا لتوفر لك تجربة تعليمية سلسة، ومعايير عالية من الخصوصية، والدعم الشخصي في كل خطوة. لأن مستقبلك يستحق أعلى مستوى من العناية.",
    items: [
      {
        image:
          "https://images.unsplash.com/photo-1627556704353-016baeb12c79?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        t: "ابدأ رحلتك التعليمية اليوم",
        d: "مسار غير تفتح لك أبواب الجامعات حول العالم. اكتشف كيف يمكن لمنهجنا أن يسهّل وصولك إلى أفضل البرامج الأكاديمية.",
        a: "اعرف أكثر",
      },
      {
        image:
          "https://images.unsplash.com/photo-1583373834259-46cc92173cb7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D",
        t: "شركاء موثوقون في رحلتك التعليمية",
        d: "نعمل مع الطلاب بشكل مباشر لنضمن أن كل خطوة—من التخطيط إلى الوصول—تتم بكفاءة وسلاسة. اكتشف لماذا يعتمد علينا الطلاب في تحقيق أحلامهم الدراسية.",
        a: "تواصل معنا",
      },
    ],
  },
  ourProcess: {
    tag: "خطواتنا",
    t: "كيف نحوّل الطموحات والرؤية الأكاديمية إلى قبول جامعي ناجح.",
    items: [
      {
        t: "اكتشاف المسار المناسب لك",
        d: "نحلل أهدافك ودرجاتك وميولك لتحديد أفضل وجهات وبرامج الدراسة. ندمج بين المعلومات الأكاديمية وطموحك الشخصي لبناء أساس قوي لرحلتك.",
      },
      {
        t: "تصميم خطة دراسية مخصصة",
        d: "نختار الجامعات والبرامج والدورات المناسبة لك. كل توصية مدروسة، قابلة للتطبيق، ومصممة لتمنحك أعلى فرصة للقبول.",
      },
      {
        t: "تنفيذ الخطة وتحقيق القبول",
        d: "ندعمك في التقديم للجامعات، تجهيز المستندات، الحصول على الفيزا، والاستعداد للسفر. نعمل معك خطوة بخطوة لضمان انتقال سلس ودراسة ناجحة.",
      },
    ],
  },
  ourExpertise: {
    tag: "خبراتنا",
    t: "حيث تلتقي الإرشادات الأكاديمية مع خبرة القبول الدولي.",
    items: [
      {
        tag: "الاستراتيجية",
        t: "نساعدك في بناء خطة تعليمية طويلة المدى تدعم مستقبلك الأكاديمي والمهني.",
      },
      {
        tag: "الإجراءات",
        t: "نُسهّل عليك جميع المتطلبات لضمان وضوح وسهولة في خطواتك.",
      },
      {
        tag: "الابتكار",
        t: "نطوّر باستمرار برامج وخدمات تفتح للطلاب فرصًا عالمية جديدة.",
      },
    ],
  },
  weBuild: {
    t: "نبني مستقبل الطلاب عبر التعليم العالمي",
    tags: ["شراكة موثوقة", "دعم شخصي", "قيمة طويلة المدى"],
    d: "نضمن لك تجربة قبول مريحة وخالية من التعقيدات، عبر فريق يهتم بالتفاصيل ويفهم التحديات التي يواجهها الطلاب.",
    a: "قدّم الآن",
  },

  extra: {
    tag: "شبكتنا العالمية",
    t: "شراكات وخبرات تربط الطلاب بأفضل فرص التعليم حول العالم",
    d: "توفر مسار غير شبكة واسعة من العلاقات الأكاديمية والخدمات الداعمة التي تمنح الطلاب وصولًا أسهل إلى أفضل الجامعات، معاهد اللغة، والمراكز التعليمية. نحن نبني جسورًا مع مؤسسات موثوقة لضمان تجربة دراسة دولية ناجحة ومتكاملة.",
    items: [
      {
        t: "شراكات جامعية معتمدة",
        d: "اتفاقيات وتعاونات مع جامعات رائدة في أمريكا وأوروبا تمنح الطلاب فرص قبول أقوى وخيارات أوسع.",
      },
      {
        t: "معاهد لغة عالمية",
        d: "تواصل مباشر مع أفضل معاهد اللغة الإنجليزية وبرامج المسارات الإعدادية في عدة مدن حول العالم.",
      },
      {
        t: "مراكز تدريب واستعداد أكاديمي",
        d: "جهات متخصصة في تطوير مهارات الطلاب قبل الدراسة، مثل الكتابة الأكاديمية والتفكير النقدي.",
      },
      {
        t: "دعم محلي وعالمي",
        d: "فريق دعم يمتد عبر عدة مدن حول العالم لتقديم المساعدة حسب المنطقة، مما يضمن سهولة التواصل وسرعة الخدمة.",
      },
    ],
  },
  whyChooseUs: {
    tag: "شبكتنا العالمية",
    t: "شراكات وخبرات تربط الطلاب بأفضل فرص التعليم حول العالم",
    d: "توفر مسار غير شبكة واسعة من العلاقات الأكاديمية والخدمات الداعمة التي تمنح الطلاب وصولًا أسهل إلى أفضل الجامعات، معاهد اللغة، والمراكز التعليمية. نحن نبني جسورًا مع مؤسسات موثوقة لضمان تجربة دراسة دولية ناجحة ومتكاملة.",
    items: [
      {
        title: "خبرة في الجامعات الأمريكية",
        description:
          "نحن نمتلك المعرفة العميقة بالجامعات الأمريكية، مما يضمن لك اختيار الجامعة الأنسب.",
      },
      {
        title: "دعم شامل طوال العملية",
        description:
          "من لحظة التقديم حتى وصولك إلى الولايات المتحدة، نحن معك في كل خطوة.",
      },
      {
        title: "ثقة الطلاب",
        description:
          "خدمتنا موثوقة من قبل العديد من الطلاب الذين تمكنوا من الالتحاق بأفضل الجامعات الأمريكية.",
      },
    ],
  },
  successStories: [
    {
      studentName: "أحمد العتيبي",
      university: "جامعة هارفارد",
      quote:
        "مساعدتكم كانت حاسمة في قبولي في أفضل جامعة أمريكية. شكراً لدعمكم الرائع!",
      photo: "path/to/student1.jpg",
    },
    {
      studentName: "فاطمة الخالدي",
      university: "جامعة ستانفورد",
      quote:
        "لم أكن أعتقد أنني سأتمكن من التقديم للجامعات الأمريكية، ولكن بفضل مساعدتكم، تحققت أحلامي!",
      photo: "path/to/student2.jpg",
    },
  ],
  faqs: [
    {
      question: "كيف أختار الجامعة المناسبة لي؟",
      answer:
        "نساعدك في اختيار الجامعة الأنسب بناءً على تخصصك وميزانيتك واحتياجاتك الشخصية.",
    },
    {
      question: "ما هي المستندات المطلوبة للتقديم؟",
      answer:
        "نرشدك في تحضير جميع المستندات، بما في ذلك الشهادات الأكاديمية، خطابات التوصية، والسيرة الذاتية.",
    },
    {
      question: "كم يستغرق الأمر للحصول على القبول؟",
      answer:
        "تختلف المدة حسب الجامعة، ولكننا نعمل معك لتحديد الجدول الزمني الأمثل.",
    },
  ],
  contactInfo: {
    email: "contact@yourcompany.com",
    phone: "+1 123 456 7890",
    address: "1234 Main Street, City, Country",
  },
};

const howItWorks = [
  {
    step: 1,
    title: "التسجيل وطلب الاستشارة",
    description:
      "ابدأ رحلتك الدراسية بتعبئة نموذج التسجيل للحصول على استشارة مجانية من فريقنا المتخصص.",
  },
  {
    step: 2,
    title: "اختيار الجامعات والتخصصات",
    description:
      "نساعدك في اختيار الجامعات الأمريكية الأنسب بناءً على تخصصك الأكاديمي واحتياجاتك الشخصية.",
  },
  {
    step: 3,
    title: "إعداد المستندات والتقديم",
    description:
      "نقوم بمساعدتك في تحضير جميع المستندات المطلوبة، ومن ثم تقديمها للجامعات بشكل دقيق.",
  },
  {
    step: 4,
    title: "التقديم للفيزا والموافقات",
    description:
      "نساعدك في تقديم طلب الفيزا الأمريكية والحصول على الموافقات الحكومية اللازمة.",
  },
  {
    step: 5,
    title: "الاستعداد للسفر",
    description:
      "نقدم لك نصائح عملية قبل السفر لضمان بداية دراستك في أمريكا بسلاسة.",
  },
];

// Use the above data to populate the page dynamically as shown earlier.

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
          {/* <span className="inline-flex items-center gap-2 px-4 py-2 bg-lightgreen/25 text-v1darkgreen rounded-full text-sm font-semibold mb-8 border border-v1darkgreen/20">
          <span className="w-1.5 h-1.5 bg-v1darkgreen rounded-full"></span>
          الأسئلة الشائعة
        </span> */}
          <SectionTag id="faq" className="">
            الأسئلة الشائعة
          </SectionTag>
          <h2 className="mt-4 text-4xl lg:text-5xl font-medium text-foreground mb-8">
            أسئلة متكررة
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
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
    <footer className="text-v2-darkgray bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo Section */}
          <div className="col-span-2 md:col-span-1 mb-16 md:mb-0 ml-12 text-center">
            <img
              src="/masarghair.webp"
              alt=""
              className="w-96 lg:w-44 h-96 lg:h-44"
            />
            <h2 className=" text-2xl font-bold mb-4 hidden lg:block">
              مسار غير
            </h2>
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
                      className="text-v2-darkgray/70 hover:text-lightgreen transition-colors text-sm font-medium"
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
            <p className="text-v2-darkgray/60 text-sm mt-10 md:mt-0">
              © {currentYear} مسار غير. جميع الحقوق محفوظة.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="#"
                className="text-v2-darkgray/60 hover:text-lightgreen transition-colors text-sm font-medium"
              >
                سياسة الخصوصية
              </a>
              <a
                href="#"
                className="text-v2-darkgray/60 hover:text-lightgreen transition-colors text-sm font-medium"
              >
                شروط الخدمة
              </a>
              <a
                href="#"
                className="text-v2-darkgray/60 hover:text-lightgreen transition-colors text-sm font-medium"
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

// #0a0f15

function MSC() {
  return (
    <div>
      <div>
        <div className="h-full w-screen relative bg-white">
          <PageContainer className="w-full h-full py-4">
            {/* <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1698248476242-bfde13928633?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="size-full object-cover"
            />
          </div> */}
            {/* <div className="absolute inset-0 bg-v2-darkgray/50"></div>
            <div className="absolute inset-0 bg-linear-to-l from-v2-darkgray/80 to-transparent"></div> */}
            {/* nav */}
            {/* <div className="bg-red-400"></div> */}
            {/* hero */}
            <div className="p-6 h-full bg-[#0a0f15] w-full flex flex-col size-full justify-end py-32 items-end rounded-lg">
              <PageContainer className="flex flex-col">
                <div className="text-white flex flex-col gap-6 max-w-2xl">
                  <Typography
                    variant="7xl/normal"
                    className="text-white leading-tight"
                  >
                    بوابتك للجامعات الأمريكية المتميزة
                    <br />
                  </Typography>
                  <Typography variant="lg/normal" className="text-[#b0b6bd]">
                    نساعد الطلاب في العثور على الجامعات الأمريكية المناسبة لهم،
                    ونقوم بإتمام جميع إجراءات المستندات والموافقات.
                  </Typography>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button
                      variant="outline"
                      className="rounded-lg px-10 py-6 text-base font-semibold text-v2-darkgray hover:bg-v2-primary/5 hover:border-v2-primary/50 transition-all duration-300"
                    >
                      ابدأ رحلتك{" "}
                      <ArrowLeft
                        className="ml-2 group-hover:-translate-x-1 transition-transform"
                        size={20}
                      />
                    </Button>
                    <Button
                      // variant="outline"
                      className="bg-v2-darkgray hover:bg-v2-primary/90 text-v2-primary border-2 border-v2-primary/40 rounded-lg px-10 py-6 text-base font-semibold group hover:shadow-premium-lg transition-all duration-300"
                    >
                      احجز استشارة مجانية
                    </Button>
                  </div>
                </div>
                <div className="w-full h-full mt-16 relative">
                  <div className="absolute inset-0 bg-[#0a0f15]/40"></div>
                  <img
                    src="https://images.unsplash.com/photo-1698248476242-bfde13928633?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="size-full object-cover md:h-[45rem] w-full rounded-lg"
                  />
                </div>
                <div className="w-full h-full mt-44 relative">
                  {/* <div className="absolute inset-0 bg-[#0a0f15]/40"></div> */}
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
                    {[
                      { n: "94%", t: "نسبة نجاح في القبول والفيزا" },
                      {
                        n: "25+",
                        t: "دولة وبرامج جامعية متاحة",
                      },
                      {
                        n: "1,500+",
                        t: "طالب تم توجيههم",
                      },
                      {
                        n: "10x",
                        t: "تحسن في معدلات القبول للجامعات المرموقة",
                      },
                    ].map(({ n, t }, i) => (
                      <div
                        style={{
                          background: "rgba(255, 255, 255, 0.04)",
                          border: "1px solid rgba(255, 255, 255, 0.09)",
                        }}
                        className="relative p-6 border border-[#0a0f15]/80 text-white rounded-lg"
                      >
                        <div className="absolute left-4 top-4 flex gap-0.5">
                          {[1, 2, 3, 4].map((d, ij) => (
                            <div
                              style={{
                                background:
                                  i >= ij
                                    ? "#fff"
                                    : "rgba(255, 255, 255, 0.08)",
                                borderRadius: "3px",
                              }}
                              className={cn(
                                "size-2.5 bg-[rgba(255, 255, 255, 0.04)]",
                                {
                                  "bg-white": i >= ij,
                                }
                              )}
                            ></div>
                          ))}
                        </div>
                        <div className="flex flex-col gap-4 justify-between h-full">
                          <Typography
                            variant="3xl/medium"
                            className="text-white tracking-tighter"
                          >
                            {n}
                          </Typography>
                          <Typography
                            variant="lg/normal"
                            className="text-white/80"
                          >
                            {t}
                          </Typography>
                        </div>
                        <div></div>
                      </div>
                    ))}
                  </div>
                </div>
              </PageContainer>
            </div>
          </PageContainer>
        </div>

        {/* project overview */}
        <Section id="oasis" className="">
          <PageContainer className="flex flex-col gap-12 items-center">
            <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-4">
              <div className="col-span-5 lg:col-span-2">
                <div className="flex flex-col gap-10">
                  <SectionTag id="" className="">
                    طريقتنا{" "}
                  </SectionTag>

                  <div className="flex flex-col gap-6">
                    <Typography variant="5xl/normal" className="leading-tight">
                      نصل بين الطموح، والخبرة، والنتائج الموثوقة.{" "}
                    </Typography>
                    {/* <Typography variant="lg/normal">نصل بين الطموح، والخبرة، والنتائج الموثوقة.
                    </Typography> */}
                  </div>
                </div>
              </div>
              <div className="col-span-5 lg:col-span-5">
                <div className="grid grid-cols-1 gap-2 md:grid-cols-3 w-full mt-16">
                  {landingPageContent.whatWeOffer.map((j) => (
                    <div
                      key={j.title}
                      className={cn(
                        "relative p-9 bg-v2-gray/45 flex flex-col gap-28 rounded-lg"
                      )}
                    >
                      <div className="size-10">{j.icon}</div>

                      <div className="flex flex-col gap-5">
                        <span className="text-v2-darkgray bg-white rounded-full w-fit px-3 py-1">
                          {j.tag}
                        </span>
                        <Typography
                          className="text-v2-darkgray"
                          variant="xl/medium"
                        >
                          {/* {i + 1}.  */}
                          {j.title}
                        </Typography>
                        <Typography
                          className="text-v2-darkgray/50 tracking-tight"
                          variant="lg/normal"
                        >
                          {j.description}
                        </Typography>
                      </div>
                    </div>
                  ))}
                </div>

                {/* <img
                src="https://moroccan-solar-cells.com/wp-content/uploads/2025/01/13627641.jpeg"
                alt=""
                className="w-full"
              /> */}
              </div>
            </div>
          </PageContainer>
        </Section>

        <Section id="oasis" className="">
          <PageContainer className="flex flex-col gap-12 items-center">
            <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-4">
              <div className="col-span-5 lg:col-span-2">
                <div className="flex flex-col gap-10">
                  <SectionTag id="" className="">
                    ماذا نقدم{" "}
                  </SectionTag>

                  <div className="flex flex-col gap-6">
                    <Typography variant="5xl/normal" className="leading-tight">
                      خدمات تعليمية شاملة تساعدك في الوصول إلى أفضل الجامعات
                      والبرامج حول العالم.{" "}
                    </Typography>
                    {/* <Typography variant="lg/normal">نصل بين الطموح، والخبرة، والنتائج الموثوقة.
                    </Typography> */}
                  </div>
                </div>
              </div>
              <div className="col-span-5 lg:col-span-5">
                <div className="grid grid-cols-1 gap-2 md:grid-cols-1 w-full mt-16">
                  {landingPageContent.whatWeOfferSpecial.map((j, idx) => (
                    <div
                      key={j.t}
                      className={cn(
                        "relative p-6 flex flex-col gap-28 border-t"
                      )}
                    >
                      {/* <div className="size-10">{j.icon}</div> */}

                      <div className="flex gap-5 items-center">
                        <span className="text-v2-darkgray bg-white rounded-full w-fit px-3 py-1 text-sm">
                          {(idx + 1).toString().padStart(2, "0")}/
                          {/* {idx + (1).toString().padStart(2, "0")} */}
                        </span>
                        <Typography
                          className="text-v2-darkgray"
                          variant="2xl/medium"
                        >
                          {/* {i + 1}.  */}
                          {j.t}
                        </Typography>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-5 mt-64 max-w-2xl">
                  <Typography className="text-v2-darkgray" variant="2xl/normal">
                    {/* {i + 1}.  */}
                    {landingPageContent.supportWhatWeOffer.t}
                  </Typography>
                  <Typography
                    className="text-v2-darkgray/70"
                    variant="lg/normal"
                  >
                    {/* {i + 1}.  */}
                    {landingPageContent.supportWhatWeOffer.d}
                  </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                  {landingPageContent.supportWhatWeOffer.items.map((j) => (
                    <div className="flex flex-col gap-5 mt-20 lg:mt-64">
                      <div>
                        <img
                          src={j.image}
                          alt=""
                          className="w-full rounded-xl max-h-96"
                        />
                      </div>
                      <div className="px-4 py-3 flex flex-col gap-3">
                        <Typography
                          className="text-v2-darkgray"
                          variant="2xl/normal"
                        >
                          {/* {i + 1}.  */}
                          {j.t}
                        </Typography>
                        <Typography
                          className="text-v2-darkgray/70"
                          variant="lg/normal"
                        >
                          {/* {i + 1}.  */}
                          {j.d}
                        </Typography>

                        <Button className="w-fit rounded-full px-5 py-5 font-semibold text-white hover:bg-v2-primary/5 hover:border-v2-primary/50 transition-all duration-300">
                          {j.a}
                          {/* ابدأ رحلتك{" "} */}
                          <ArrowLeft
                            className="ml-2 group-hover:-translate-x-1 transition-transform"
                            size={20}
                          />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* <img
                src="https://moroccan-solar-cells.com/wp-content/uploads/2025/01/13627641.jpeg"
                alt=""
                className="w-full"
              /> */}
              </div>
            </div>
          </PageContainer>
        </Section>

        <Section>
          <PageContainer
            size="full"
            className="flex flex-col gap-12 items-center"
          >
            <div className="grid grid-cols-1 bg-[#657084] gap-8 lg:gap-16 lg:grid-cols-7 py-20 rounded-lg px-6">
              <div className="col-span-5 lg:col-span-7">
                <div className="grid gap-2">
                  <SectionTag>{landingPageContent.ourProcess.tag}</SectionTag>
                  <Typography
                    variant="5xl/normal"
                    className="text-white mt-2 leading-tight"
                  >
                    {landingPageContent.ourProcess.t}
                  </Typography>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

                <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                  {landingPageContent.ourProcess.items.map(({ t, d }, idx) => (
                    <div
                      key={t}
                      className="bg-[#657084]/80 relative text-white"
                    >
                      <div className="grid gap-2 flex-col z-50">
                        <div className="flex flex-col gap-2">
                          <Typography
                            variant="3xl/normal"
                            className="text-darkgreen"
                          >
                            <div
                              className="size-3 bg-white -z-20 top-0.5 right-0.5 inline-flex items-center justify-center text-xl text-white ml-1"
                              style={{
                                borderRadius: "2px",
                              }}
                            >
                              {/* <div className="absolute w-full h-0.5 bg-v2-darkgray/20"></div>
                        <div className="absolute w-full h-0.5 bg-v2-darkgray/20 rotate-90"></div> */}
                              <div className="absolute w-full h-0.5 bg-v2-darkgray/20 rotate-45"></div>
                              <div className="absolute w-full h-0.5 bg-v2-darkgray/20 -rotate-45"></div>
                            </div>
                            {(idx + 1).toString().padStart(2, "0")}
                            {/* {t.toString().padStart(2, "0")} */}
                          </Typography>
                          <Typography
                            variant="2xl/normal"
                            className="text-darkgreen"
                          >
                            {t}
                          </Typography>
                        </div>

                        <Typography
                          variant="lg/normal"
                          className="text-white/70"
                        >
                          {d}
                        </Typography>
                      </div>

                      {/* <hr className="my-4 border-gray-200" /> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </PageContainer>
        </Section>

        <Section id="oasis" className="">
          <PageContainer className="flex flex-col gap-12 items-center">
            <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-4">
              <div className="col-span-5 lg:col-span-2">
                <div className="flex flex-col gap-10">
                  <SectionTag id="" className="">
                    {landingPageContent.ourExpertise.tag}
                  </SectionTag>

                  <div className="flex flex-col gap-6">
                    <Typography variant="5xl/normal" className="leading-tight">
                      {landingPageContent.ourExpertise.t}
                    </Typography>
                    {/* <Typography variant="lg/normal">نصل بين الطموح، والخبرة، والنتائج الموثوقة.
                    </Typography> */}
                  </div>
                </div>
              </div>
              <div className="col-span-5 lg:col-span-5">
                <div className="grid grid-cols-1 gap-1 md:grid-cols-3 w-full mt-16">
                  {landingPageContent.ourExpertise.items.map((j) => (
                    <div
                      key={j.t}
                      className={cn(
                        "relative p-9 bg-v2-gray/45 flex flex-col gap-28 rounded-lg"
                      )}
                    >
                      {/* <div className="size-10">{j.icon}</div> */}

                      <div className="flex flex-col gap-5">
                        <span className="text-v2-darkgray bg-white rounded-full w-fit px-3 py-1">
                          {j.tag}
                        </span>
                        <Typography
                          className="text-v2-darkgray"
                          variant="xl/medium"
                        >
                          {/* {i + 1}.  */}
                          {j.t}
                        </Typography>
                        {/* <Typography
                          className="text-v2-darkgray/50 tracking-tight"
                          variant="lg/normal"
                        >
                          {j.d}
                        </Typography> */}
                      </div>
                    </div>
                  ))}
                </div>

                {/* <img
                src="https://moroccan-solar-cells.com/wp-content/uploads/2025/01/13627641.jpeg"
                alt=""
                className="w-full"
              /> */}
              </div>
            </div>
          </PageContainer>
        </Section>

        <Section>
          <PageContainer
            size="full"
            className="flex flex-col gap-12 items-center"
          >
            <div className="bg-[#0a0f15] w-full rounded-xl">
              <div className="flex flex-col items-center gap-8 lg:gap-16 py-36 rounded-xl relative overflow-hidden w-full">
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="w-full h-full object-cover border rounded-xl border-v2-gray/30"
                  />
                  <div className="absolute inset-0 bg-v2-darkgray/60"></div>
                </div>
                <div className="flex flex-col max-w-2xl mx-auto justify-center items-center z-10 text-center">
                  <div className="grid gap-2">
                    {/* <SectionTag>{landingPageContent.weBuild.t}</SectionTag> */}

                    <Typography
                      variant="6xl/medium"
                      className="text-white mt-2 leading-tight"
                    >
                      {landingPageContent.weBuild.t}
                    </Typography>

                    <div className="flex flex-wrap gap-2 items-center justify-center mt-4">
                      {landingPageContent.weBuild.tags.map((tg) => (
                        <span className="bg-v2-darkgray px-3.5 py-1 text-white rounded-full text-sm">
                          {tg}
                        </span>
                      ))}
                    </div>
                    <hr className="w-full max-w-sm border border-white/30 sm:mx-auto" />

                    <Typography
                      variant="xl/medium"
                      className="text-white mt-2 leading-tight"
                    >
                      {landingPageContent.weBuild.d}
                    </Typography>

                    <div className="mt-8">
                      <Button className="rounded-none text-base py-6 px-10 backdrop-blur-lg bg-white text-v2-darkgray hover:bg-v2-primary/90 rounded-full">
                        ابدأ الآن
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/*  */}
              <div className="grid gap-2 bg-[#0a0f15] z-10 w-full h-full py-72">
                <PageContainer className="flex flex-col gap-12 items-center">
                  <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-4">
                    <div className="col-span-5 lg:col-span-2 text-white">
                      <div className="flex flex-col gap-10">
                        <SectionTag id="" className="">
                          {landingPageContent.extra.tag}
                        </SectionTag>

                        <div className="flex flex-col gap-6">
                          <Typography
                            variant="5xl/normal"
                            className="leading-tight text-white"
                          >
                            {landingPageContent.extra.t}
                          </Typography>

                          <Typography
                            variant="xl/normal"
                            className="leading-tight text-white/60"
                          >
                            {landingPageContent.extra.d}
                          </Typography>
                          {/* <Typography variant="lg/normal">نصل بين الطموح، والخبرة، والنتائج الموثوقة.
                    </Typography> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-span-5 lg:col-span-5">
                      <div className="grid grid-cols-1 gap-2 md:grid-cols-3 w-full mt-16">
                        {landingPageContent.extra.items.map((j) => (
                          <div
                            key={j.t}
                            className={cn(
                              "relative p-9 bg-v2-gray/45 flex flex-col gap-28 rounded-lg"
                            )}
                            style={{
                              background: "rgba(255, 255, 255, 0.04)",
                            }}
                          >
                            {/* <div className="size-10 text-white">{j.icon}</div> */}

                            <div className="flex flex-col gap-5">
                              <span className="text-v2-darkgray bg-white rounded-full w-fit px-3 py-1">
                                {" "}
                              </span>
                              <Typography
                                className="text-white"
                                variant="xl/medium"
                              >
                                {/* {i + 1}.  */}
                                {j.t}
                              </Typography>
                              <Typography
                                className="text-white/50"
                                variant="lg/normal"
                              >
                                {j.d}
                              </Typography>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* <img
                src="https://moroccan-solar-cells.com/wp-content/uploads/2025/01/13627641.jpeg"
                alt=""
                className="w-full"
              /> */}
                    </div>
                  </div>
                </PageContainer>
              </div>

              <Section
                className="relative overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.06)",
                }}
              >
                <PageContainer
                  // size="xl"
                  className="flex flex-col gap-y-12 items-center relative"
                >
                  <div className="size-[60%] absolute -top-20 -right-20 inline-flex items-center justify-center text-xl text-white">
                    <div className="absolute w-full h-0.5 bg-v2-primary/30"></div>
                    <div className="absolute w-full h-0.5 bg-v2-primary/30 rotate-90"></div>
                    <div className="absolute w-full h-0.5 bg-v2-primary/30 rotate-45"></div>
                    <div className="absolute w-full h-0.5 bg-v2-primary/30 -rotate-45"></div>
                  </div>
                  <div className="size-[60%] absolute -top-36 -right-36 inline-flex items-center justify-center text-xl text-white">
                    <div className="absolute w-full h-0.5 bg-v2-primary/30"></div>
                    <div className="absolute w-full h-0.5 bg-v2-primary/30 rotate-90"></div>
                    <div className="absolute w-full h-0.5 bg-v2-primary/30 rotate-45"></div>
                    <div className="absolute w-full h-0.5 bg-v2-primary/30 -rotate-45"></div>
                  </div>
                  <div className="flex flex-col gap-16">
                    {/* <SectionTag id="what-we-do" className="bg-transparent">
              What we do
            </SectionTag> */}

                    <div className="z-10">
                      {/* <span className="inline-flex items-center gap-2 px-4 py-2 bg-lightgreen/25 text-v1darkgreen rounded-full text-sm font-semibold mb-8 border border-v1darkgreen/20">
          <span className="w-1.5 h-1.5 bg-v1darkgreen rounded-full"></span>
          الأسئلة الشائعة
        </span> */}
                      <SectionTag id="faq" className="">
                        لماذا
                      </SectionTag>
                      <h2 className="mt-4 text-4xl lg:text-5xl text-white mb-8">
                        لماذا تختار مسار غير{" "}
                      </h2>
                      <p className="text-lg text-white/50 leading-relaxed">
                        {" "}
                        لسنا مجرد استشاريين - نحن شركاء مخصصون ملتزمون بتحويل
                        أحلامك التعليمية إلى واقع.{" "}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 h-fit w-full text-right">
                        {landingPageContent.whyChooseUs.items.map((j, i) => (
                          <div
                            key={j.title}
                            className={cn(
                              "relative p-4 border-b-2 border-v2-primary flex flex-col gap-2 text-white"
                            )}
                          >
                            {/* <div className="size-6 bg-v2-primary absolute top-0.5 left-0.5 inline-flex items-center justify-center text-xl text-white">
                              <div className="absolute w-full h-0.5 bg-v2-darkgray"></div>
                              <div className="absolute w-full h-0.5 bg-v2-darkgray rotate-90"></div>
                              <div className="absolute w-full h-0.5 bg-v2-darkgray rotate-45"></div>
                              <div className="absolute w-full h-0.5 bg-v2-darkgray -rotate-45"></div>
                            </div> */}

                            <div className="text-white">
                              <Typography
                                className="text- tracking-tight"
                                variant="2xl/medium"
                              >
                                {i + 1}. {j.title}
                              </Typography>
                              {/* <Typography
                        className="text-/70 tracking-tight"
                        variant="xl/medium"
                      >
                        {j.description}
                      </Typography> */}
                            </div>
                            <Typography
                              variant="lg/normal"
                              className="text-white/70"
                            >
                              {j.description}
                            </Typography>
                          </div>
                          // <div
                          //   key={j.title}
                          //   className={cn(
                          //     "relative p-6 border-b-2 border-v2-primary bg-v2-darkgray flex flex-col gap-2",
                          //     {
                          //       "border-b-0": i > 1,
                          //       "border-t-2": i > 1,
                          //     }
                          //   )}
                          // >
                          //   <div className="size-6 bg-v2-primary absolute top-0.5 left-0.5 inline-flex items-center justify-center text-xl text-white">
                          //     <div className="absolute w-full h-0.5 bg-v2-darkgray"></div>
                          //     <div className="absolute w-full h-0.5 bg-v2-darkgray rotate-90"></div>
                          //     <div className="absolute w-full h-0.5 bg-v2-darkgray rotate-45"></div>
                          //     <div className="absolute w-full h-0.5 bg-v2-darkgray -rotate-45"></div>
                          //   </div>

                          //   <div>
                          //     <Typography
                          //       className="text-v2-primary tracking-tight"
                          //       variant="2xl/medium"
                          //     >
                          //       {j.title}
                          //     </Typography>
                          //     <Typography
                          //       className="text-white tracking-tight"
                          //       variant="xl/medium"
                          //     >
                          //       {j.subtitle}
                          //     </Typography>
                          //   </div>
                          //   <Typography variant="base/normal" className="text-white">
                          //     {j.description}
                          //   </Typography>
                          // </div>
                        ))}
                      </div>
                      {/* <div className="bg-v2-darkgray order-first xl:order-last">
                        <img
                          src="https://images.unsplash.com/photo-1734116271748-8c9434e6c97e?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          // src="https://images.unsplash.com/photo-1643826884444-7cf7fd46c69f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          className="w-full opacity-90"
                        />
                      </div> */}
                    </div>
                  </div>
                </PageContainer>
              </Section>
            </div>
          </PageContainer>
        </Section>

        {/* Video */}

        {/* <Section className="bg-v2-darkgray text-white">
        <PageContainer
          size="md"
          className="flex flex-col gap-y-12 items-center"
        >
          <div className="text-center flex flex-col gap-12">
            <Typography
              variant="5xl/medium"
              className="text-white tracking-tighter"
            >
              The MSC Advantage
            </Typography>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-3xl mx-auto w-full ">
              {[
                {
                  title: "Local Manufacturing Power",
                  subtitle: "1 GW Annual Production",
                  description:
                    "MSC is launching Morocco’s first photovoltaic module factory, starting with 1 GW capacity and scaling to 10 GW to meet global demand.",
                },
                {
                  title: "Full Solar Value Chain",
                  subtitle: "From Silicon to Module",
                  description:
                    "We bring every step of solar manufacturing — crystallization, wafering, cell, and module production — directly to Morocco.",
                },
                {
                  title: "Global Expertise",
                  subtitle: "International Team, Local Impact",
                  description:
                    "Our experienced international network in the PV industry is building Morocco’s place in the global renewable energy market.",
                },
                {
                  title: "Sustainable Growth",
                  subtitle: "Driving Energy Independence",
                  description:
                    "By producing high-efficiency solar technology locally, we reduce imports, strengthen Morocco’s economy, and cut carbon emissions.",
                },
              ].map((j, i) => (
                <div
                  key={j.title}
                  className={cn(
                    "p-6 border-b-2 border-v2-primary bg-[#2b5254] flex flex-col gap-2",
                    {
                      "border-b-0": i > 1,
                      "border-t-2": i > 1,
                    }
                  )}
                >
                  <div>
                    <Typography
                      className="text-v2-primary tracking-tight"
                      variant="2xl/medium"
                    >
                      {j.title}
                    </Typography>
                    <Typography
                      className="text-white tracking-tight"
                      variant="xl/medium"
                    >
                      {j.subtitle}
                    </Typography>
                  </div>
                  <Typography variant="base/normal" className="text-white">
                    {j.description}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </PageContainer>
      </Section> */}

        {/* <Section className="text-v2-darkgray">
        <PageContainer
          size="sm"
          className="flex flex-col gap-12 items-center"
        >
          <div className="text-center flex flex-col gap-20">
            <SectionTag id="team" className="bg-v2-darkgray">
              Team
            </SectionTag>
            <Typography
              variant="6xl/medium"
              className="text-v2-darkgray tracking-tighter"
            >
              Our Team - Leadership Driving Morocco’s Solar Future
            </Typography>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {[
                {
                  name: "Ahmed Jaafar",
                  title: "CEO",
                  description: "Founder / CEO",
                  image: "/images/ahmed-jaafar.webp",
                },
                {
                  name: "Dr. Dirk Habermann",
                  title: "CTO",
                  description: "Founder / CTO",
                  image: "/images/dr-dirk.webp",
                },
              ].map((team) => (
                <div
                  key={team.name}
                  className="relative border-2 border-v2-darkgray"
                >
                  <img
                    src={team.image}
                    alt=""
                    className="w-full h-96 object-cover"
                  />
                  <div className="px-4 py-3 flex flex-col gap-1 absolute bottom-0 left-0 left-0 bg-v2-darkgray/50 backdrop-blur-xl ">
                    <Typography
                      variant="xl/medium"
                      className="text-white tracking-tight"
                    >
                      {team.name}
                    </Typography>

                    <Typography variant="base/normal" className="text-white">
                      {team.description}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PageContainer>
      </Section> */}

        <FAQ />

        <JoinSection />
        <section
          id="contact"
          className="py-32 sm:py-48 text-v2-darkgray relative overflow-hidden"
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
                <p className="text-xl text-foreground/80 mb-14 leading-relaxed font-light">
                  تواصل مع استشاريينا الخبراء اليوم. احجز استشارتك المجانية
                  واكتشف طريقك إلى أفضل الجامعات الأمريكية.
                </p>

                <div className="space-y-10">
                  <div className="flex gap-6 items-start group">
                    <div className="w-14 h-14 rounded-lg bg-v2-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-v2-primary/25 transition-all duration-300">
                      <Mail className="w-7 h-7 text-v2-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-2 text-lg">
                        البريد الإلكتروني
                      </p>
                      <a
                        href="mailto:hello@masarghair.com"
                        className="text-foreground/75 hover:text-v2-primary transition-colors font-medium text-base"
                      >
                        hello@masarghair.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start group">
                    <div className="w-14 h-14 rounded-lg bg-v2-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-v2-primary/25 transition-all duration-300">
                      <Phone className="w-7 h-7 text-v2-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-2 text-lg">الهاتف</p>
                      <a
                        href="tel:+966123456789"
                        className="text-foreground/75 hover:text-v2-primary transition-colors font-medium text-base"
                      >
                        +966 (12) 345-6789
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start group">
                    <div className="w-14 h-14 rounded-lg bg-v2-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-v2-primary/25 transition-all duration-300">
                      <MapPin className="w-7 h-7 text-v2-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-2 text-lg">المقرات</p>
                      <p className="text-foreground/75 font-medium text-base">
                        الرياض، المملكة العربية السعودية
                        <br />
                        نيويورك، الولايات المتحدة الأمريكية
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-v2-darkgray text-white border border-v1-primary-foreground/20 rounded-2xl p-12 backdrop-blur-md hover:border-v1-primary-foreground/40 transition-all duration-300">
                <h3 className=" text-3xl font-bold mb-10">
                  احجز استشارة مجانية
                </h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-3">
                      الاسم الكامل
                    </label>
                    <input
                      type="text"
                      placeholder="اسمك"
                      className="w-full px-5 py-3.5 rounded-lg bg-v1-primary-foreground/10 border border-v1-primary-foreground/30 text-v1-primary-foreground placeholder:text-v1-primary-foreground/50 focus:outline-none focus:border-v2-primary focus:ring-2 focus:ring-v2-primary/30 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-3">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      placeholder="بريدك@البريد.com"
                      className="w-full px-5 py-3.5 rounded-lg bg-v1-primary-foreground/10 border border-v1-primary-foreground/30 text-v1-primary-foreground placeholder:text-v1-primary-foreground/50 focus:outline-none focus:border-v2-primary focus:ring-2 focus:ring-v2-primary/30 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-3">
                      الصف الحالي
                    </label>
                    <select className="w-full px-5 py-3.5 rounded-lg bg-v1-primary-foreground/10 border border-v1-primary-foreground/30 text-v1-primary-foreground focus:outline-none focus:border-v2-primary focus:ring-2 focus:ring-v2-primary/30 transition-all duration-300">
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
                      className="w-full px-5 py-3.5 rounded-lg bg-v1-primary-foreground/10 border border-v1-primary-foreground/30 text-v1-primary-foreground placeholder:text-v1-primary-foreground/50 focus:outline-none focus:border-v2-primary focus:ring-2 focus:ring-v2-primary/30 transition-all duration-300 resize-none"
                    />
                  </div>

                  <Button className="w-full bg-v2-primary hover:bg-v1-accent/90 text-v1-accent-foreground rounded-lg py-6 font-semibold group shadow-premium hover:shadow-premium-lg transition-all duration-300 sm:text-base">
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
        <Footer />
      </div>
    </div>
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
    name: "محمد الدوسري",
    university: "جامعة ستانفورد",
    role: "منحة كاملة",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/saudi-student-portrait-yksGEqPHfe4HGdYrcNGKvRTthDWwFc.jpg",
    quote: "دعم المنح الدراسية وحده يستحق الاستثمار. احترافي وموجه للنتائج.",
    stars: 5,
  },
];

// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
