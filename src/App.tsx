import { BrowserRouter, Route, Routes } from "react-router-dom";
import DrawerComponent from "./components/drawer";
import { rotas_principais } from "./routes/roteamentos/routings";
import PageNotFound from "./pages/errors/404";

const App: React.FC = () => (
  <BrowserRouter>
    <DrawerComponent>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        {rotas_principais.map((item, index) => (
          <>
            <Route path={item.path} element={item.element} key={index} exact />
          </>
        ))}
        {/* <Route path="*" element={<PageNotFound authed={true} />} */}
      </Routes>
    </DrawerComponent>
  </BrowserRouter>
);
export default App;
