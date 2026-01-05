import EventComponent from "../components/event/event";

import EventJobTwoImage from "../assets/images/1764966800734.jpg"
import EventJobImage from "../assets/images/1700194212386.jpeg"
import EventStartImage from "../assets/images/1701126770283.jpeg"


export default function TimelinePage() {
    return (
        <section className="bg-[#0a0b0b] flex flex-col justify-center text-center pt-[6rem] mx-auto border border-b-0 border-r-0 border-l-0 border-t-[#37415179]">
            <h3 className="text-[3rem] font-bold tracking-[-1.2px] mb-16">Timeline</h3>
            <EventComponent
                imageEvent={EventJobTwoImage}
                yearTitle="2025"
                eventTitle="🧙🏼 Assumindo cargo como Custom Software Engineer"
                descriptionEvent="Evolução e aquisição de novas habilidades para atuar como Custom Software Engineer na Accenture Brasil."
            />
            <EventComponent
                imageEvent={EventJobImage}
                yearTitle="2023"
                eventTitle="🧙🏼 Software Engineer com foco em Back-end na Accenture Brasil"
                descriptionEvent="Início de carreira como desenvolvedor na multi-nacional Accenture Brasil."
            />
            <EventComponent 
                imageEvent={EventStartImage}
                yearTitle="2022"
                eventTitle="📕 Finalização e formação no programa START"
                descriptionEvent="Participação e formação em um dos melhores cursos gratuitos de programação de Pernambuco."
            />
        </section>
    );
}