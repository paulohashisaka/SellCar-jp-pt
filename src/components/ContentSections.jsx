import {
  BadgeCheck,
  Banknote,
  CarFront,
  Check,
  ClipboardCheck,
  FileSearch,
  Languages,
  MessageCircle,
  SearchCheck,
  ShieldCheck,
  ThumbsUp,
  TriangleAlert,
} from 'lucide-react'
import { PrimaryButton, SecondaryButton } from './Button'

const problems = [
  'Dificuldade para entender detalhes técnicos em japonês',
  'Insegurança sobre o estado real do veículo',
  'Medo de gastar mais com manutenção depois da compra',
  'Pouca clareza para comparar opções e tomar uma decisão',
]

const benefits = [
  {
    icon: ClipboardCheck,
    title: 'Veículos inspecionados',
    text: 'Você recebe informações mais claras sobre o carro antes de avançar na compra.',
  },
  {
    icon: Languages,
    title: 'Atendimento em português',
    text: 'Tire suas dúvidas e entenda cada etapa sem depender de traduções improvisadas.',
  },
  {
    icon: Banknote,
    title: 'Bom custo-benefício',
    text: 'Encontre opções alinhadas ao seu orçamento e às necessidades da sua rotina.',
  },
  {
    icon: ShieldCheck,
    title: 'Decisão com mais segurança',
    text: 'Conte com orientação para comparar veículos e escolher de forma mais consciente.',
  },
]

const steps = [
  { icon: MessageCircle, title: 'Conte o que procura', text: 'Fale em português sobre seu orçamento, rotina e tipo de carro.' },
  { icon: SearchCheck, title: 'Receba as opções', text: 'A SellCar apresenta veículos compatíveis com o seu perfil.' },
  { icon: FileSearch, title: 'Analise com clareza', text: 'Confira as informações disponíveis e tire suas dúvidas.' },
  { icon: CarFront, title: 'Escolha seu carro', text: 'Avance com a opção que fizer sentido para você.' },
]

export function ProblemSolution() {
  return (
    <>
      <section className="bg-cloud py-20 sm:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="eyebrow"><TriangleAlert size={15} /> O problema</span>
            <h2 className="section-title">Comprar um usado no Japão não deveria ser um salto no escuro.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {problems.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-red-50 text-red-500">
                  <TriangleAlert size={16} aria-hidden="true" />
                </span>
                <p className="text-sm font-semibold leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rotate-3 rounded-[2rem] bg-blue-50" />
            <div className="relative rounded-[2rem] bg-navy-900 p-7 text-white shadow-xl">
              <div className="grid size-14 place-items-center rounded-2xl bg-brand-orange">
                <ShieldCheck size={28} aria-hidden="true" />
              </div>
              <p className="mt-8 text-2xl font-black tracking-tight">Clareza antes da decisão.</p>
              <p className="mt-3 leading-7 text-slate-300">
                Informação, orientação e atendimento no seu idioma para deixar a compra mais simples.
              </p>
              <div className="mt-7 space-y-3 border-t border-white/10 pt-6">
                {['Entenda o que está comprando', 'Compare opções com calma', 'Escolha dentro do seu orçamento'].map((item) => (
                  <p key={item} className="flex items-center gap-3 text-sm font-bold">
                    <Check size={17} className="text-emerald-400" aria-hidden="true" /> {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div>
            <span className="eyebrow"><BadgeCheck size={15} /> A solução SellCar</span>
            <h2 className="section-title">Um jeito mais simples de encontrar seu próximo carro.</h2>
            <p className="section-copy">
              A SellCar combina seleção de veículos usados, inspeção e atendimento em português para
              ajudar você a entender as opções disponíveis e comprar com mais confiança no Japão.
            </p>
            <SecondaryButton href="#como-funciona" className="mt-7">Veja como funciona</SecondaryButton>
          </div>
        </div>
      </section>
    </>
  )
}

export function Benefits() {
  return (
    <section id="beneficios" className="bg-navy-950 py-20 text-white sm:py-28">
      <div className="section-shell">
        <div className="max-w-2xl">
          <span className="eyebrow"><ThumbsUp size={15} /> Por que escolher a SellCar</span>
          <h2 className="mt-3 text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl">
            O que importa para comprar bem, sem complicação.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, text }) => (
            <article key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/8">
              <div className="grid size-12 place-items-center rounded-xl bg-brand-orange text-white shadow-lg shadow-orange-950/20">
                <Icon size={23} aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-lg font-extrabold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 sm:py-28">
      <div className="section-shell">
        <div className="text-center">
          <span className="eyebrow">Como funciona</span>
          <h2 className="section-title mx-auto">Do primeiro contato à escolha do carro em 4 passos.</h2>
          <p className="section-copy mx-auto">Um processo direto, com conversa clara e espaço para você decidir sem pressão.</p>
        </div>
        <div className="relative mt-14 grid gap-8 md:grid-cols-4">
          <div className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-slate-200 md:block" />
          {steps.map(({ icon: Icon, title, text }, index) => (
            <article key={title} className="relative text-center">
              <div className="relative mx-auto grid size-14 place-items-center rounded-2xl bg-navy-900 text-white shadow-lg ring-8 ring-white">
                <Icon size={23} aria-hidden="true" />
                <span className="absolute -right-2 -top-2 grid size-6 place-items-center rounded-full bg-brand-orange text-[11px] font-black">
                  {index + 1}
                </span>
              </div>
              <h3 className="mt-6 font-extrabold text-navy-950">{title}</h3>
              <p className="mx-auto mt-2 max-w-56 text-sm leading-6 text-slate-500">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Offer() {
  return (
    <section id="oferta" className="bg-cloud py-20 sm:py-28">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[2rem] bg-navy-900 shadow-2xl">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-7 text-white sm:p-12 lg:p-16">
              <span className="eyebrow">Opções para o seu orçamento</span>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.045em] sm:text-5xl">
                Seu próximo carro pode começar em <span className="text-brand-orange">¥300.000</span>
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-slate-300">
                Consulte os veículos disponíveis e encontre uma opção que combine com sua rotina e seu bolso.
                Valores e disponibilidade variam conforme o veículo.
              </p>
              <PrimaryButton className="mt-8">Ver carros disponíveis</PrimaryButton>
            </div>
            <div className="relative min-h-72 overflow-hidden lg:min-h-full">
              <img src="/images/sellcar-hero.png" alt="" className="absolute inset-0 size-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent lg:bg-gradient-to-r" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  { quote: '“Insira aqui um depoimento real de cliente sobre o atendimento em português e a clareza durante a compra.”', name: 'Nome do cliente', detail: 'Cidade / Província' },
  { quote: '“Use este espaço para contar como a SellCar ajudou o cliente a encontrar uma opção dentro do orçamento.”', name: 'Nome do cliente', detail: 'Modelo adquirido' },
  { quote: '“Adicione aqui um relato verdadeiro sobre a experiência de escolha e compra do veículo.”', name: 'Nome do cliente', detail: 'Cidade / Província' },
]

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Depoimentos</span>
            <h2 className="section-title">Experiências de quem escolheu com mais clareza.</h2>
          </div>
          <span className="w-fit rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-700">Conteúdo demonstrativo e editável</span>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <blockquote key={index} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex gap-1 text-brand-orange" aria-label="5 estrelas ilustrativas">
                {[1, 2, 3, 4, 5].map((star) => <span key={star}>★</span>)}
              </div>
              <p className="mt-5 leading-7 text-slate-600">{item.quote}</p>
              <footer className="mt-6 border-t border-slate-100 pt-5">
                <cite className="not-italic font-extrabold text-navy-950">{item.name}</cite>
                <p className="mt-1 text-sm text-slate-500">{item.detail}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

const objections = [
  ['“Meu japonês não é bom.”', 'O atendimento em português ajuda você a entender as informações e tirar dúvidas com tranquilidade.'],
  ['“Tenho medo de comprar e o carro dar problema.”', 'A inspeção e a apresentação clara do veículo ajudam você a avaliar melhor antes de decidir.'],
  ['“Meu orçamento é limitado.”', 'Há opções a partir de ¥300.000, sujeitas à disponibilidade e às condições de cada veículo.'],
]

export function Objections() {
  return (
    <section className="bg-cloud py-20 sm:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <span className="eyebrow">Ainda tem dúvidas?</span>
          <h2 className="section-title">É normal pensar duas vezes antes de comprar.</h2>
          <p className="section-copy">Nosso papel é ajudar você a entender as opções para decidir com calma.</p>
        </div>
        <div className="space-y-4">
          {objections.map(([title, text]) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="flex items-start gap-3 font-extrabold text-navy-950">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                  <Check size={15} strokeWidth={3} aria-hidden="true" />
                </span>
                {title}
              </h3>
              <p className="mt-3 pl-9 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FinalCTA() {
  return (
    <section id="contato" className="bg-brand-orange py-20 text-white sm:py-24">
      <div className="section-shell text-center">
        <p className="text-xs font-black uppercase tracking-[0.15em] text-orange-100">Comece sua busca hoje</p>
        <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl">
          Encontre um carro usado no Japão sem enfrentar tudo sozinho.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-orange-50">
          Fale com a SellCar em português e conheça as opções disponíveis para o seu orçamento.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#oferta" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-black text-brand-orange shadow-lg transition hover:-translate-y-0.5 hover:bg-orange-50">
            Ver carros a partir de ¥300.000
          </a>
          <a href="mailto:contato@sellcar.example" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:bg-white/20">
            <MessageCircle size={18} aria-hidden="true" /> Falar em português
          </a>
        </div>
        <p className="mt-5 text-xs text-orange-100">Substitua o e-mail acima pelo canal oficial de atendimento da SellCar.</p>
      </div>
    </section>
  )
}
