import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--background)] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-6xl mb-6">🚧</div>
        <h1 className="text-5xl font-bold text-[var(--foreground)] mb-4">Em Construção</h1>
        <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">
          Esta página ainda está sendo desenvolvida
        </h2>
        <p className="text-[var(--muted)] mb-8 max-w-md mx-auto">
          Estamos trabalhando para trazer novos conteúdos. Em breve essa página estará disponível!
        </p>
        <Link 
          href="/"
          className="inline-block bg-[var(--accent)] text-white px-8 py-3 rounded-md hover:opacity-90 transition-all duration-200 font-medium"
        >
          Voltar para o início
        </Link>
      </div>
    </div>
  );
}
