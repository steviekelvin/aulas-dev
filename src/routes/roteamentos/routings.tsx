import { icone } from "../../icons/icons";
import { routingProps } from "../../interfaces/roteamento";
import PageContact from "../../pages/contact";
import InicioPage from "../../pages/home";
import MorePage from "../../pages/more";

export const rotas_principais: routingProps[] = [
  {
    titulo: "Início",
    subtitulo: "Início",
    icone: icone.home,
    path: "/",
    element: <InicioPage />,
  },
  {
    titulo: "Sobre",
    subtitulo: "Mais informações",
    icone: icone.info,
    path: "/info",
    element: <MorePage />,
  },
  {
    titulo: "Contato",
    subtitulo: "Contato",
    icone: icone.info,
    path: "/contato",
    element: <PageContact />,
  },
];
