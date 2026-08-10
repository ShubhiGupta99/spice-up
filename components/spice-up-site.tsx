'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChefHat,
  Facebook,
  Heart,
  Instagram,
  Leaf,
  Menu,
  MessageCircle,
  PackageCheck,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Utensils,
  X,
} from 'lucide-react';

import menuItems from '@/data/menu.json';
import { CONTACT } from '@/lib/constants';

const foodImage = 'home.PNG';

const fixedOptions = ['Roti', 'Rice', 'Salad', 'Raita'];

// User picks any 4 items from: Roti, Rice, Salad, Raita, plus one Dal & one Sabzi (which change daily)

const faqs = [
  {
    question: 'What does a DABBA include?',
    answer:
      'Roti and rice are available every single day. The dal and sabzi change daily so your meal never feels repetitive. You choose any 4 items from roti, rice, salad, raita, plus one dal and one sabzi, giving you a balanced, home-style meal built exactly how you like it.',
  },
  {
    question: 'How does the tiffin exchange work?',
    answer:
      'On the first day, we deliver your meal in a clean stainless-steel tiffin for you to keep after lunch. On the second day, we collect your used tiffin and provide a new fresh tiffin. This clean swap repeats with every order.',
  },
  {
    question: 'Can I pause my subscription?',
    answer:
      'Yes. Pause or skip anytime from your account, with no penalty and no awkward phone calls. Your remaining meals stay safe for when you are ready.',
  },
  {
    question: 'Where do you deliver?',
    answer:
      'We currently deliver across central neighborhoods and business districts in the city. Enter your area on the contact page and we will confirm your doorstep coverage.',
  },
  {
    question: 'Can I subscribe for both lunch and dinner?',
    answer :'Yes! We offer separate subscriptions for Lunch and Dinner. You can subscribe to either one or choose both based on your needs.'
  },
  {
    question :'Does a 7-day plan include both lunch and dinner?',
    answer:`No. A 7-day plan covers one meal per day (either Lunch or Dinner) for 7 days. If you'd like both Lunch and Dinner, you'll need to purchase separate subscriptions for each.`
  }
];

function Brand() {
  return (
   <Link
  href="/"
  className="flex items-center"
  aria-label="The Dabba Story tiffin service home"
>
  <Image
    src="/logo2.png" // Place your logo in public/logo.png
    alt="dabbaStory"
    width={300}
    height={120}
    priority
    className="h-16 w-auto object-contain"
  />
</Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ['Our story', '/#story'],
    ['Weekly menu', '/menu'],
    ['Plans & pricing', '/pricing'],
    ['FAQs', '/faq'],
  ];
  return (
    <header className="absolute left-0 top-0 z-30 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Brand />
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="text-sm font-semibold text-ink/70 transition hover:text-orange-600"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-green px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-green-dark"
          >
            Get started <ArrowRight className="ml-1 inline" size={15} />
          </Link>
        </nav>
        <button
          className="rounded-full bg-white p-3 text-ink shadow-sm lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="mx-4 rounded-3xl border border-black/5 bg-white p-5 shadow-xl lg:hidden">
          <nav className="grid gap-4">
            {links.map(([label, href]) => (
              <Link
                onClick={() => setOpen(false)}
                key={label}
                href={href}
                className="font-semibold text-ink"
              >
                {label}
              </Link>
            ))}
            <Link
              onClick={() => setOpen(false)}
              href="/contact"
              className="rounded-full bg-green px-5 py-3 text-center font-bold text-white"
            >
              Get started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Brand />
          <p className="mt-5 max-w-xs text-sm leading-7 text-white/60">
            Fresh, home-style tiffin service made with intention. Better meals for busy people and
            a lighter footprint for the planet. Available for both lunch and dinner.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="rounded-full bg-white/10 p-2.5 transition hover:bg-orange-500"
            >
              <Instagram size={17} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="rounded-full bg-white/10 p-2.5 transition hover:bg-orange-500"
            >
              <Facebook size={17} />
            </a>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              aria-label="WhatsApp"
              className="rounded-full bg-white/10 p-2.5 transition hover:bg-orange-500"
            >
              <MessageCircle size={17} />
            </a>
          </div>
        </div>
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
            Explore
          </p>
          <div className="grid gap-3 text-sm text-white/65">
            <Link href="/#story">Our story</Link>
            <Link href="/menu">Weekly menu</Link>
            <Link href="/pricing">Plans & pricing</Link>
            <Link href="/faq">FAQs</Link>
          </div>
        </div>
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
            Say hello
          </p>
          <div className="grid gap-3 text-sm text-white/65">
            <a href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phoneDisplay}</a>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <span>{CONTACT.hours}</span>
          </div>
        </div>
        <div className="rounded-3xl bg-white/10 p-5">
          <p className="font-display text-xl font-bold">Hungry for a better routine?</p>
          <p className="mt-2 text-sm leading-6 text-white/60">
            Join the lunch club and get your first meal on us.
          </p>
          <Link
            href="/pricing"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2.5 text-sm font-bold text-white"
          >
            View plans <ArrowRight size={15} />
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/40">
        © 2026 The Dabba Story. Made fresh, delivered thoughtfully.
      </div>
    </footer>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-orange-600">
      <span className="h-px w-7 bg-orange-400" />
      {children}
    </p>
  );
}

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-cream">
          <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-6 pb-14 pt-32 lg:grid-cols-[.9fr_1.1fr] lg:px-8 lg:pb-20 lg:pt-36">
            <div className="relative z-10 max-w-xl animate-rise">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green/20 bg-white/70 px-4 py-2 text-xs font-bold text-green">
                <Sparkles size={14} /> Fresh tiffin service, upgraded
              </div>
              <h1 className="font-display text-[clamp(3.7rem,7vw,6.8rem)] font-bold leading-[.9] tracking-[-.06em] text-ink">
                Eat well.
                <br />
                <span className="text-orange-500">Live fully.</span>
              </h1>
              <p className="mt-7 max-w-md text-lg leading-8 text-ink/65">
                Fresh, home-style meals made everyday with quality ingredients and balanced flavours. Thoughtfully prepared, reliably delivered, so food is one less thing to worry about.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/pricing"
                  className="rounded-full bg-green px-6 py-4 text-sm font-bold text-white shadow-xl shadow-green/20 transition hover:-translate-y-1 hover:bg-green-dark"
                >
                  See subscription plans <ArrowRight className="ml-2 inline" size={16} />
                </Link>
                <a
                  href="#how-it-works"
                  className="flex items-center gap-2 text-sm font-bold text-ink/70 transition hover:text-orange-600"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 bg-white">
                    <ArrowRight size={15} />
                  </span>{' '}
                  How it works
                </a>
              </div>
              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-2">
                  <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-cream bg-orange-200 text-xs font-bold text-orange-800">
                    A
                  </span>
                  <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-cream bg-green-200 text-xs font-bold text-green-800">
                    R
                  </span>
                  <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-cream bg-yellow-200 text-xs font-bold text-yellow-800">
                    K
                  </span>
                </div>
                <p className="text-xs font-semibold text-ink/55">
                  <span className="text-orange-500">★★★★★</span> Loved by 100+ happy subscribers
                </p>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[600px] animate-float">
              <div className="absolute -right-4 top-6 z-10 hidden rounded-2xl border border-white/80 bg-white/90 p-4 shadow-xl backdrop-blur sm:block">
                <div className="mb-1 flex items-center gap-2 text-xs font-bold text-green">
                  <ShieldCheck size={15} /> Zero hassle
                </div>
                <p className="text-xs text-ink/55">Pause anytime</p>
              </div>
              <div className="absolute -bottom-2 left-0 z-10 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-xl backdrop-blur">
                <p className="font-display text-2xl font-bold text-orange-500">₹64.29</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-ink/50">
                  effective per meal
                </p>
              </div>
              <div className="relative overflow-hidden rounded-[2.5rem] rounded-bl-[8rem] rounded-tr-[8rem] bg-green p-3 shadow-2xl shadow-green/20">
                <img
                  src={foodImage}
                  alt="Stacked stainless-steel tiffin carriers ready for delivery"
                  className="h-[420px] w-full rounded-[2rem] rounded-bl-[7rem] rounded-tr-[7rem] object-cover sm:h-[600px]"
                />
                <div className="absolute bottom-10 right-8 grid h-24 w-24 place-items-center rounded-full border-2 border-dashed border-white/60 bg-orange-500 text-center text-xs font-bold text-white shadow-lg">
                  <span>
                    7th meal
                    <br />
                    <span className="text-orange-100">on us</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-orange-200/40 blur-3xl" />
          <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-green-200/40 blur-3xl" />
        </section>
        <section className="border-b border-black/5 bg-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-7 sm:grid-cols-3 lg:px-8">
            <div className="flex items-center gap-4">
              <span className="rounded-2xl bg-orange-50 p-3 text-orange-600">
                <Utensils size={21} />
              </span>
              <div>
                <p className="font-bold text-ink">Home-style taste</p>
                <p className="text-sm text-ink/55">Balanced, never boring</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="rounded-2xl bg-green-50 p-3 text-green">
                <Truck size={21} />
              </span>
              <div>
                <p className="font-bold text-ink">Fresh tiffin service</p>
                <p className="text-sm text-ink/55">New tiffin, every day</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="rounded-2xl bg-yellow-50 p-3 text-yellow-700">
                <Leaf size={21} />
              </span>
              <div>
                <p className="font-bold text-ink">Low-waste living</p>
                <p className="text-sm text-ink/55">Reusable steel tiffins</p>
              </div>
            </div>
          </div>
        </section>
        <HowItWorks />
        <Story />
        <MenuPreview />
        <Testimonials />
        <FaqPreview />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

function HowItWorks() {
  const items = [
    {
      icon: PackageCheck,
      title: 'Choose your plan',
      text: 'Pick 7 or 30 days of delicious, no-fuss tiffin service.',
    },
    {
      icon: Utensils,
      title: 'Day one: fresh tiffin',
      text: 'We deliver a freshly cooked meal in a clean steel tiffin to your doorstep.',
    },
    {
      icon: Truck,
      title: 'Day two: swap & repeat',
      text: 'We take the used tiffin and provide a new fresh tiffin for your next meal.',
    },
  ];
  return (
    <section id="how-it-works" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-xl">
          <SectionLabel>As Easy as Every Meal</SectionLabel>
          <h2 className="font-display text-5xl font-bold leading-tight tracking-[-.04em] text-ink sm:text-6xl">
            Good food should fit into your day.
          </h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {items.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className="relative rounded-3xl border border-black/5 bg-cream p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-100/50"
            >
              <span className="absolute right-6 top-5 font-display text-5xl font-bold text-orange-500/15">
                0{i + 1}
              </span>
              <div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-white text-green shadow-sm">
                <Icon size={25} />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink">{title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-7 text-ink/60">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="bg-cream py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -left-4 -top-4 h-28 w-28 rounded-full border border-orange-400/40" />
          <div className="overflow-hidden rounded-[3rem] rounded-bl-[8rem] bg-orange-500 p-3">
            <img
              src="/second.png"
              alt="Traditional stainless-steel tiffin carriers"
              className="h-[430px] w-full rounded-[2.5rem] rounded-bl-[7rem] object-cover"
            />
          </div>
          <div className="absolute -bottom-7 -right-7 rounded-2xl bg-green px-5 py-4 text-white shadow-xl">
            <Heart className="mb-1 fill-orange-300 text-orange-300" size={20} />
            <p className="text-xs font-bold">Made with care</p>
          </div>
        </div>
        <div className="max-w-xl">
          <SectionLabel>Why The Dabba Story</SectionLabel>
          <h2 className="font-display text-5xl font-bold leading-[.98] tracking-[-.05em] text-ink sm:text-6xl">
            The kind of meal you look forward to.
          </h2>
          <p className="mt-7 text-lg leading-8 text-ink/65">
          The Dabba Story is the story of every home left behind and every meal that brings you closer to it. Fresh, comforting, home-style food—delivered every day.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              'Freshly cooked everyday',
              'Menus that change with you',
              'No hidden charges, ever',
              'Kind to your body & planet',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm font-bold text-ink">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-green text-white">
                  <Check size={14} />
                </span>
                {item}
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-orange-600 transition hover:gap-3"
          >
            Meet your new lunch/dinner routine <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function MenuPreview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <SectionLabel>This week’s table</SectionLabel>
            <h2 className="font-display text-5xl font-bold tracking-[-.04em] text-ink">
              Roti & rice every day.
              <br />
              <span className="text-green">Dal & sabzi change daily.</span>
            </h2>
          </div>
          <Link href="/menu" className="flex items-center gap-2 text-sm font-bold text-orange-600">
            See full menu <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
          {menuItems.map((item, i) => (
            <div
              key={item.day}
              className={`rounded-3xl ${item.color} p-4 ${i === 3 ? 'lg:-translate-y-3' : ''} transition hover:-translate-y-2`}
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="rounded-full bg-white/70 px-2 py-1 text-[10px] font-bold text-ink/60">
                  0{i + 1}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-ink/40">
                  {item.day.slice(0, 3)}
                </span>
              </div>
              <div className="mb-3 grid h-8 w-8 place-items-center rounded-lg bg-white text-orange-500">
                <Utensils size={15} />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-ink/40">Dal</p>
              <h3 className="font-display text-sm font-bold leading-tight text-ink">{item.dal}</h3>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-ink/40">
                Sabzi
              </p>
              <h3 className="font-display text-sm font-bold leading-tight text-ink">
                {item.sabzi}
              </h3>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-bold text-ink/60">
          <span className="rounded-full bg-cream px-4 py-2">+ Roti every day</span>
          <span className="rounded-full bg-cream px-4 py-2">+ Rice every day</span>
          <span className="rounded-full bg-orange-100 px-4 py-2 text-orange-700">
            Choose any 4 items
          </span>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-green py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
          <div>
            <SectionLabel>
              <span className="text-orange-200">The lunch club</span>
            </SectionLabel>
            <h2 className="font-display text-5xl font-bold leading-tight tracking-[-.04em]">
              “Finally, a lunch routine I actually enjoy.”
            </h2>
            <div className="mt-7 flex gap-1 text-orange-300">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <blockquote className="rounded-3xl bg-white/10 p-7">
              <p className="text-lg leading-8 text-white/90">
                “The food tastes like someone’s mum made it. The tiffin swap is such a small detail
                that makes the whole day easier.”
              </p>
              <footer className="mt-6 text-sm font-bold text-orange-200">
                — Riya, product designer
              </footer>
            </blockquote>
            <blockquote className="rounded-3xl bg-orange-500 p-7">
              <p className="text-lg leading-8 text-white">
                “I used to spend 20 minutes deciding what to eat. Now I just wait for the little
                green delivery bag.”
              </p>
              <footer className="mt-6 text-sm font-bold text-orange-100">— Abhinit, founder</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqPreview() {
  const [active, setActive] = useState(0);
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <SectionLabel>
            <span className="mx-auto">Good to know</span>
          </SectionLabel>
          <h2 className="font-display text-5xl font-bold tracking-[-.04em] text-ink">
            Questions, answered.
          </h2>
        </div>
        <div className="mt-12 divide-y divide-ink/10 rounded-3xl bg-white px-6">
          {faqs.map((faq, i) => (
            <div key={faq.question}>
              <button
                className="flex w-full items-center justify-between gap-4 py-6 text-left font-display text-lg font-bold text-ink"
                onClick={() => setActive(active === i ? -1 : i)}
              >
                {faq.question}
                <ChevronDown
                  className={`shrink-0 text-orange-500 transition ${active === i ? 'rotate-180' : ''}`}
                  size={20}
                />
              </button>
              {active === i && (
                <p className="max-w-2xl pb-6 text-sm leading-7 text-ink/60">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/faq" className="text-sm font-bold text-orange-600">
            See all FAQs <ArrowRight className="ml-1 inline" size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="bg-orange-500 px-6 py-20 text-center text-white">
      <p className="text-xs font-bold uppercase tracking-[.25em] text-orange-100">
        Your best lunch is waiting
      </p>
      <h2 className="mx-auto mt-4 max-w-2xl font-display text-5xl font-bold leading-tight tracking-[-.04em] sm:text-6xl">
        Make room for more good days.
      </h2>
      <p className="mx-auto mt-5 max-w-md text-white/80">
        Fresh meals, less planning, and one very happy stomach.
      </p>
      <Link
        href="/pricing"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-bold text-orange-600 shadow-xl transition hover:-translate-y-1"
      >
        Choose your plan <ArrowRight size={16} />
      </Link>
    </section>
  );
}

export function PricingPage() {
  return (
    <>
      <Header />
      <main className="bg-cream pb-24 pt-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>
              <span className="mx-auto">Simple plans</span>
            </SectionLabel>
            <h1 className="font-display text-6xl font-bold tracking-[-.06em] text-ink">
              Good food.
              <br />
              <span className="text-orange-500">Better value.</span>
            </h1>
            <p className="mt-5 text-lg leading-8 text-ink/60">
              Pay for 6 meals and get the 7th on us. Every plan includes delivery, tiffin exchange,
              and zero hidden charges.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 lg:grid-cols-2">
            <PlanCard
              days="7 days"
              price="450"
              per="64.29"
              tag="Try the routine"
              featured={false} 
            />
            <PlanCard days="30 days" price="1,875" per="62.50" tag="Most popular" featured />
          </div>
          <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-semibold text-ink/55">
            <span>
              <Check className="mr-1 inline text-green" size={16} /> No security deposit
            </span>
            <span>
              <Check className="mr-1 inline text-green" size={16} /> Pause anytime
            </span>
            <span>
              <Check className="mr-1 inline text-green" size={16} /> Fresh daily menu
            </span>
            <span>
              <Check className="mr-1 inline text-green" size={16} /> Doorstep delivery
            </span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function PlanCard({
  days,
  price,
  per,
  tag,
  featured,
}: {
  days: string;
  price: string;
  per: string;
  tag: string;
  featured: boolean;
}) {
  return (
    <div
      className={`relative rounded-[2rem] p-8 ${featured ? 'bg-green text-white shadow-2xl shadow-green/25' : 'bg-white text-ink shadow-lg shadow-orange-100/50'}`}
    >
      <span
        className={`absolute right-7 top-7 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${featured ? 'bg-orange-500 text-white' : 'bg-orange-50 text-orange-600'}`}
      >
        {tag}
      </span>
      <div
        className={`mb-8 grid h-14 w-14 place-items-center rounded-2xl ${featured ? 'bg-white/10 text-orange-200' : 'bg-orange-50 text-orange-500'}`}
      >
        <Utensils size={25} />
      </div>
      <p
        className={`text-sm font-bold uppercase tracking-[.2em] ${featured ? 'text-green-100' : 'text-ink/45'}`}
      >
        {days} plan
      </p>
      <div className="mt-3 flex items-end gap-2">
        <span className="font-display text-6xl font-bold tracking-[-.06em]">₹{price}</span>
        <span className={`mb-3 text-sm ${featured ? 'text-white/60' : 'text-ink/45'}`}>total</span>
      </div>
      <p className={`text-sm ${featured ? 'text-white/65' : 'text-ink/55'}`}>
        7 fresh meals including 1 bonus meal
      </p>
      <div className={`my-8 border-t pt-7 ${featured ? 'border-white/15' : 'border-ink/10'}`}>
        <p className="text-sm font-bold">Your plan includes</p>
        <ul className={`mt-4 grid gap-3 text-sm ${featured ? 'text-white/75' : 'text-ink/60'}`}>
          <li>
            <Check className="mr-2 inline text-orange-400" size={16} />
            Daily doorstep delivery
          </li>
          <li>
            <Check className="mr-2 inline text-orange-400" size={16} />
            Reusable steel tiffin exchange
          </li>
          <li>
            <Check className="mr-2 inline text-orange-400" size={16} />
            Pause or skip anytime
          </li>
        </ul>
      </div>
      <div className={`mb-6 rounded-2xl p-4 ${featured ? 'bg-white/10' : 'bg-cream'}`}>
        <p className={`text-xs ${featured ? 'text-white/55' : 'text-ink/45'}`}>
          Effective cost per meal
        </p>
        <p className="mt-1 font-display text-2xl font-bold">₹{per}</p>
      </div>
      <Link
        href="/contact"
        className={`block rounded-full py-4 text-center text-sm font-bold transition hover:-translate-y-0.5 ${featured ? 'bg-orange-500 text-white hover:bg-orange-400' : 'bg-green text-white hover:bg-green-dark'}`}
      >
        Start this plan <ArrowRight className="ml-1 inline" size={15} />
      </Link>
    </div>
  );
}

export function MenuPage() {
  return (
    <>
      <Header />
      <main className="bg-cream pb-24 pt-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionLabel>Cooked fresh, daily</SectionLabel>
            <h1 className="font-display text-6xl font-bold tracking-[-.06em] text-ink">
              Roti & rice daily.
              <br />
              <span className="text-green">Dal & sabzi change.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-8 text-ink/60">
             Every meal includes one fresh dal and one seasonal sabzi. Complete your 4-item meal by choosing any two from: roti, rice, salad, or raita.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 text-sm font-bold text-ink/60">
            {fixedOptions.map((opt) => (
              <span key={opt} className="rounded-full bg-white px-4 py-2 shadow-sm">
                {opt} · every day
              </span>
            ))}
            <span className="rounded-full bg-orange-500 px-4 py-2 text-white shadow-sm">
              Choose any 4
            </span>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {menuItems.map((item, i) => (
              <article
                key={item.day}
                className={`rounded-[2rem] ${item.color} p-7 ${i === 1 ? 'lg:translate-y-8' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-4xl font-bold text-ink/15">0{i + 1}</span>
                  <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink/55">
                    {item.day}
                  </span>
                </div>
                <div className="mt-16">
                  <p className="text-xs font-bold uppercase tracking-wider text-ink/40">
                    Today’s dal
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-bold text-ink">{item.dal}</h2>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-ink/40">
                    Today’s sabzi
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-bold text-ink">{item.sabzi}</h2>
                </div>
                <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-bold">
                  {fixedOptions.map((opt) => (
                    <span key={opt} className="rounded-full bg-white/70 px-2.5 py-1 text-ink/55">
                      {opt}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs font-bold text-green">
                  <Leaf size={14} /> Balanced · Vegetarian · Home-style
                </div>
              </article>
            ))}
            <article className="rounded-[2rem] bg-orange-500 p-7 text-white">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15">
                <Sparkles size={21} />
              </div>
              <h2 className="mt-8 font-display text-3xl font-bold">You pick 4. We do the rest.</h2>
              <p className="mt-3 text-sm leading-7 text-white/75">
                Choose any 4 items from roti, rice, salad, raita, plus one dal and one sabzi. New
                dals and sabzis land every week, so there’s always something to look forward to.
              </p>
              <Link
                href="/pricing"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-bold text-orange-600"
              >
                See plans <ArrowRight size={15} />
              </Link>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export function FaqPage() {
  return (
    <>
      <Header />
      <main className="bg-cream pb-24 pt-36">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <SectionLabel>
              <span className="mx-auto">Good to know</span>
            </SectionLabel>
            <h1 className="font-display text-6xl font-bold tracking-[-.06em] text-ink">
              You ask.
              <br />
              <span className="text-orange-500">We answer.</span>
            </h1>
            <p className="mt-5 text-lg leading-8 text-ink/60">
              Everything you need to know before your first delicious delivery.
            </p>
          </div>
          <div className="mt-14 divide-y divide-ink/10 rounded-[2rem] bg-white px-7 shadow-sm">
            {faqs
              .concat([
                {
                  question: 'Do you offer non-vegetarian meals?',
                  answer:
                    'We are currently focused on an excellent vegetarian menu, with fresh proteins and plenty of variety. Tell us what you would love to see next.',
                },
              ])
              .map((faq, i) => (
                <FaqItem key={faq.question} faq={faq} index={i} />
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function FaqItem({ faq, index }: { faq: { question: string; answer: string }; index: number }) {
  const [active, setActive] = useState(index === 0);
  return (
    <div>
      <button
        className="flex w-full items-center justify-between gap-4 py-6 text-left font-display text-lg font-bold text-ink"
        onClick={() => setActive(!active)}
      >
        {faq.question}
        <ChevronDown
          className={`shrink-0 text-orange-500 transition ${active ? 'rotate-180' : ''}`}
          size={20}
        />
      </button>
      {active && <p className="max-w-2xl pb-6 text-sm leading-7 text-ink/60">{faq.answer}</p>}
    </div>
  );
}

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('');
  const [message, setMessage] = useState('');

  const handleWhatsApp = () => {
   const msg = [
  "🍱 *New Tiffin Service Enquiry*",
  "",
  "👋 Hi SpiceUp Team!",
  "",
  "🙋 *Customer Details*",
  `👤 Name: ${name}`,
  `📞 Phone: ${phone}`,
  `📍 Area: ${area}`,
  "",
  "📝 *Message*",
  message || "No additional message",
  "",
  "🥗 I'm interested in your home-style tiffin service.",
  "",
  "📋 Please share:",
  "✅ Available subscription plans",
  "🍛 Weekly menu",
  "💰 Pricing",
  "🚚 Delivery availability",
  "",
  "🙏 Looking forward to hearing from you!"
].join("\n");
  const encodedMessage = encodeURIComponent(msg).replace(
    /%0A/g,
    "%0A"
  );

window.open(
  `https://wa.me/${CONTACT.whatsapp}?text=${encodedMessage}`,
  "_blank"
);

    setSent(true);
  };

  return (
    <>
      <Header />
      <main className="bg-cream pb-24 pt-36">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div>
            <SectionLabel>Let’s talk food</SectionLabel>
            <h1 className="font-display text-6xl font-bold leading-[.95] tracking-[-.06em] text-ink">
              Start with
              <br />
              <span className="text-orange-500">a hello.</span>
            </h1>
            <p className="mt-6 max-w-sm text-lg leading-8 text-ink/60">
              Tell us where you are and what makes a perfect tiffin. We’ll help you find the right
              plan.
            </p>
            <div className="mt-10 grid gap-5 text-sm">
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                className="flex items-center gap-4 rounded-2xl bg-green p-4 font-bold text-white transition hover:bg-green-dark"
              >
                <MessageCircle size={22} /> Chat with us on WhatsApp{' '}
                <ArrowRight className="ml-auto" size={17} />
              </a>
              <a
                href={`tel:${CONTACT.phoneTel}`}
                className="flex items-center gap-4 rounded-2xl bg-white p-4 font-bold text-ink transition hover:shadow-md"
              >
                <Phone size={20} className="text-orange-500" /> {CONTACT.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="rounded-[2rem] bg-white p-7 shadow-xl shadow-orange-100/40 sm:p-10">
            {sent ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-green text-white">
                  <Check size={30} />
                </span>
                <h2 className="mt-6 font-display text-3xl font-bold text-ink">Message received.</h2>
                <p className="mt-3 max-w-sm text-sm leading-7 text-ink/60">
                  Thanks for reaching out. Your story will soon be listened to by a human.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-7 text-sm font-bold text-orange-600"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                 handleWhatsApp();
                }}
                className="grid gap-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink/55"
                  >
                    Your name
                  </label>
                  <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Aarav Sharma"
                    className="w-full rounded-xl border border-ink/10 bg-cream px-4 py-3.5 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink/55"
                  >
                    Phone number
                  </label>
                  <input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    type="tel"
                    placeholder="+91 93542 36845"
                    className="w-full rounded-xl border border-ink/10 bg-cream px-4 py-3.5 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  />
                </div>
                <div>
                  <label
                    htmlFor="area"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink/55"
                  >
                    Your area
                  </label>
                  <input
                    id="area"
                     value={area}
                     onChange={(e) => setArea(e.target.value)}
                    required
                    placeholder="Sector 49, Gurugram"
                    className="w-full rounded-xl border border-ink/10 bg-cream px-4 py-3.5 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink/55"
                  >
                    Anything we should know?
                  </label>
                  <textarea
                    id="message"
                    value={message}
                     onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Tell us about your lunch/dinner routine..."
                    className="w-full resize-none rounded-xl border border-ink/10 bg-cream px-4 py-3.5 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-full bg-orange-500 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange-600"
                >
                  Send my hello <ArrowRight className="ml-1 inline" size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
