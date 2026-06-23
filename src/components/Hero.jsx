import { BadgeCheck, Check, Languages } from 'lucide-react'
import { PrimaryButton, SecondaryButton } from './Button'
import { Header } from './Header'

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-navy-950 pt-20 text-white">
      <Header />
      <div className="absolute -left-40 top-28 size-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="section-shell relative grid min-h-[46rem] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="relative z-10 pt-4">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/7 px-3.5 py-2 text-xs font-bold text-blue-100">
            <BadgeCheck size={16} className="text-brand-orange" aria-hidden="true" />
            Carros usados no Japão, com atendimento em português
          </div>
          <h1 className="max-w-3xl text-[2.6rem] font-black leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-[3.8rem]">
            Compre seu carro usado no Japão com mais segurança, qualidade e{' '}
            <span className="text-brand-orange">sem dor de cabeça</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            A SellCar ajuda brasileiros no Japão a encontrar veículos usados inspecionados, com bom
            custo-benefício e atendimento claro em português, para você comprar com mais confiança e
            evitar problemas depois da compra.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton>Ver carros disponíveis a partir de ¥300.000</PrimaryButton>
            <SecondaryButton light>Falar com um consultor em português</SecondaryButton>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-300">
            {['Veículos inspecionados', 'Atendimento em português', 'Escolha mais consciente'].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="grid size-5 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
                  <Check size={13} strokeWidth={3} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative pb-8 lg:pb-0">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-blue-500/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/35">
            <img
              src={`${import.meta.env.BASE_URL}images/sellcar-hero.png`} 
              alt="Carro usado azul em ótimo estado estacionado em uma área urbana no Japão"
              className="aspect-[4/3] w-full rounded-[1.35rem] object-cover"
            />
            <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-3 rounded-2xl border border-white/20 bg-navy-950/85 p-4 backdrop-blur-md">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Opções a partir de</p>
                <p className="mt-0.5 text-2xl font-black text-white">¥300.000</p>
              </div>
              <div className="hidden items-center gap-2 text-right text-xs font-bold text-slate-300 sm:flex">
                <Languages size={21} className="text-brand-orange" aria-hidden="true" />
                Atendimento<br />em português
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
