interface HeaderProps { onPost: () => void }

export default function Header({ onPost }: HeaderProps) {
  return (
    <header className="glass sticky top-0 z-40 border-x-0 border-t-0">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#top" className="font-display text-2xl tracking-tight">Maison<span className="text-gold">.</span></a>
        <nav className="flex items-center gap-6 text-sm text-white/70">
          <a href="#listings" className="hidden transition hover:text-white sm:block">Estates</a>
          <button onClick={onPost} className="rounded-full bg-gold px-5 py-2 font-semibold text-ink-950 transition hover:bg-gold-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade">
            List in seconds
          </button>
        </nav>
      </div>
    </header>
  );
}
