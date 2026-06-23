import { MessageCircle } from 'lucide-react'
import { Logo } from './Logo'

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 border-b border-white/10">
      <div className="section-shell flex h-20 items-center justify-between">
        <Logo light />
        <nav className="hidden items-center gap-7 text-sm font-semibold text-white/75 md:flex" aria-label="Navegação principal">
          <a className="transition hover:text-white" href="#beneficios">Benefícios</a>
          <a className="transition hover:text-white" href="#como-funciona">Como funciona</a>
          <a className="transition hover:text-white" href="#faq">FAQ</a>
        </nav>
        <a
          href="#contato"
          className="hidden min-h-11 items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 text-sm font-bold text-white transition hover:bg-white/15 sm:inline-flex"
        >
          <MessageCircle size={17} aria-hidden="true" />
          Falar em português
        </a>
      </div>
    </header>
  )
}
