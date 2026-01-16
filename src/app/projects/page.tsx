import HeadingComponent from "../components/heading"
import CardLPG from "../assets/images/1700194212387.png"

const projects = [
  {
    id: 1,
    title: "Landing Page de Geração de Leads (GA4 + GTM)",
    description: "Landing page otimizada para conversão, com botões de WhatsApp e Ligação integrados a um sistema completo de tracking usando Google Tag Manager e Google Analytics 4. O projeto mede leads em tempo real e está pronto para campanhas de Google Ads.",
    image: CardLPG.src,
    link: "https://lpl-convertion.netlify.app/"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-black">
      <HeadingComponent />
      <h1 className="font-bold text-center text-5xl py-9 text-white">Projetos</h1>
      
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 sm_mobile:grid-cols-1 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-neutral-900 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border border-gray-700"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-white">
                  {project.title}
                </h2>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500 transition-colors duration-200 text-sm font-medium"
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