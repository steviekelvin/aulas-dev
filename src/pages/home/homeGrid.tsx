import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import styles from "./style.module.scss";
import HomeCarrousel from "./homeCarrousel";
import CardComponent from "../../components/cards";

import VueImagem from "../../assets/images/vue-card.jpeg";
import ReactImagem from "../../assets/images/react-card.jpg";
import AngularImagem from "../../assets/images/angular-card.jpg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const teste = [
  {
    imagem: VueImagem,
    titulo: "Curso de Vue",
    descricao: "Aprenda sobre Vue",
    path: "/frameworks/vue",
  },
  {
    imagem: ReactImagem,
    titulo: "Curso de React",
    descricao: "Aprenda sobre React",
    path: "/frameworks/react",
  },
  {
    imagem: AngularImagem,
    titulo: "Curso de Angular",
    descricao: "Aprenda sobre Angular",
    path: "/frameworks/angular",
  },
];

const HomeGrid = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={12} sm={12} md={12}>
          <Item className={styles.grid_banner}>
            <HomeCarrousel></HomeCarrousel>
          </Item>
        </Grid>
        {teste.map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>{<CardComponent item={item} />}</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default HomeGrid;
