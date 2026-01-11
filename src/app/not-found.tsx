import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-6xl mb-6">🚧</div>
        <h1 className="text-5xl font-bold text-white mb-4">Em Construção</h1>
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
          Esta página ainda está sendo desenvolvida
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Estamos trabalhando para trazer novos conteúdos. Em breve essa página estará disponível!
        </p>
        <Link 
          href="/"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-500 transition-colors duration-200 font-medium"
        >
          Voltar para o início
        </Link>
      </div>
    </div>
  );
}