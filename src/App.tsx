import { BrowserRouter, Route, Routes } from "react-router-dom";
import DrawerComponent from "./components/drawer";
// import { rotas_principais } from "./routes/roteamentos/routings";
import PageNotFound from "./pages/errors/404";
import InicioPage from "./pages/home";
import MorePage from "./pages/more";
import { ContactPage } from "@mui/icons-material";

const App: React.FC = () => (
  <BrowserRouter>
    <DrawerComponent>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        {/* {rotas_principais.map((item, index) => ( */}
        <Route path="/" element={<InicioPage />} />
        <Route path="/sobre" element={<MorePage />} />
        <Route path="/contato" element={<ContactPage />} />
        {/* ))} */}
        {/* <Route path="*" element={<PageNotFound authed={true} />} */}
      </Routes>
    </DrawerComponent>
  </BrowserRouter>
);
export default App;

// {
//   titulo: "Início",
//   subtitulo: "Início",
//   icone: icone.home,
//   path: "/",
//   element: <InicioPage />,
// },
// {
//   titulo: "Sobre",
//   subtitulo: "Mais informações",
//   icone: icone.info,
//   path: "/info",
//   element: <MorePage />,
// },
// {
//   titulo: "Contato",
//   subtitulo: "Contato",
//   icone: icone.info,
//   path: "/contato",
//   element: <PageContact />,
// },
