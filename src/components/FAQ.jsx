import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const questions = [
  {
    question: 'Os carros passam por inspeção?',
    answer: 'A proposta da SellCar é trabalhar com veículos inspecionados e apresentar as informações disponíveis de forma clara antes da compra. Os detalhes podem variar conforme cada veículo.',
  },
  {
    question: 'Consigo ser atendido totalmente em português?',
    answer: 'Sim. O atendimento em português foi pensado para ajudar brasileiros no Japão a entender as opções, esclarecer dúvidas e acompanhar as etapas da compra.',
  },
  {
    question: 'Existem carros por ¥300.000?',
    answer: 'A SellCar pode oferecer opções a partir de ¥300.000. O preço final e a disponibilidade dependem do estoque, modelo, ano e condições de cada veículo.',
  },
  {
    question: 'A SellCar oferece garantia?',
    answer: 'As condições aplicáveis devem ser consultadas para cada veículo. Esta página não presume nem promete uma garantia específica.',
  },
  {
    question: 'Como vejo os carros disponíveis?',
    answer: 'Use um dos botões da página para entrar em contato em português. A equipe poderá apresentar as opções disponíveis no momento.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div>
          <span className="eyebrow">Perguntas frequentes</span>
          <h2 className="section-title">Tudo o que você precisa saber para começar.</h2>
        </div>
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {questions.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <article key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 py-5 text-left font-extrabold text-navy-950"
                  aria-expanded={isOpen}
                >
                  {item.question}
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-brand-orange transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pr-8 text-sm leading-6 text-slate-600">{item.answer}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
