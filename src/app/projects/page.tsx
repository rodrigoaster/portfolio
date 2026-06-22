import HeadingComponent from "../components/heading"
import CardLPG from "../assets/images/1700194212387.png"
import CardHigher from "../assets/images/1700194212393.jpg"
import CardLandingLeeds from "../assets/images/17001942123811.png"

const projects = [
  {
    id: 1,
    title: "Landing Page de Geração de Leads (GA4 + GTM)",
    description: "Landing page otimizada para conversão, com botões de WhatsApp e Ligação integrados a um sistema completo de tracking usando Google Tag Manager e Google Analytics 4. O projeto mede leads em tempo real e está pronto para campanhas de Google Ads.",
    image: CardLPG.src,
    link: "https://lpl-convertion.netlify.app/"
  },
  {
    id: 2,
    title: "Higher App",
    description: "Sistema de controle de hábitos, com interface gamificada, onde o usuário pode criar hábitos, marcar como feitos e acompanhar seu progresso ao longo do tempo, além disso, também é possível criar grupos com seus amigos, onde vocês podem compartilhar seus hábitos e acompanhar o progresso uns dos outros, incentivando a motivação e a responsabilidade mútua.",
    image: CardHigher.src,
    link: "https://higherapp.com.br"
  },
  {
    id: 3,
    title: "Aster Templates Leeds",
    description: "Aster Templates é um projeto de landing pages estáticas criado para gerar leads via WhatsApp de forma simples e direta. Ele reúne uma página principal de vendas, uma galeria de exemplos por segmento e templates prontos para áreas como médico, advogado, dentista, clínica, prestador de serviço e loja local. Todo o sistema foi desenvolvido com HTML, CSS e JavaScript puro, com foco em performance, personalização rápida e conversão, incluindo CTAs inteligentes, formulários que abrem o WhatsApp automaticamente e oferta de deploy como upgrade no funil comercial.",
    image: CardLandingLeeds.src,
    link: "https://astertemplates.vercel.app"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <HeadingComponent />
      <h1 className="font-bold text-center text-5xl py-9 text-[var(--foreground)]">Projetos</h1>
      
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 sm_mobile:grid-cols-1 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-[var(--surface)] rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border border-[color:var(--border)]"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-[var(--foreground)]">
                  {project.title}
                </h2>
                <p className="text-[var(--muted)] mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[var(--accent)] text-white px-6 py-2 rounded-md hover:opacity-90 transition-all duration-200 text-sm font-medium"
                >
                  Acessar Projeto
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
