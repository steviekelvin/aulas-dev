import PageModel from "../../../components/pageModel";

type INotFoundProps = {
  setInputText?: (value: string) => void;
};

const PageNotFound: React.FC<INotFoundProps> = ({ setInputText }) => {
  return (
    <>
      <PageModel>
        <h1>404 - Pagina não encontrada </h1>
      </PageModel>
    </>
  );
};

export default PageNotFound;
