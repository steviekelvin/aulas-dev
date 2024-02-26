import { BrowserRouter, Route, Routes } from "react-router-dom";
import DrawerComponent from "./components/drawer";
import { rotas_principais } from "./routes/roteamentos/routings";
import pageNotFound from "./pages/errors/404";

const App: React.FC = () => (
  <BrowserRouter>
    <DrawerComponent>
      <Routes>
        {rotas_principais.map((item, index) => (
          <>
            <Route path={item.path} element={item.element} key={index} />
          </>
        ))}
        <Route path="*" exact={true} component={pageNotFound} />
      </Routes>
    </DrawerComponent>
  </BrowserRouter>
);
export default App;
