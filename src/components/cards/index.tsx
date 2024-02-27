import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styles from "./style.module.scss";
import React from "react";
import { Link } from "react-router-dom";

interface ICardComponent {
  item: any;
}

const CardComponent: React.FC<ICardComponent> = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={item.path} className={styles.link_router}>
        <CardActionArea>
          <CardMedia
            className={styles.card_img}
            component="img"
            height="130"
            image={item.imagem}
            alt={item.titulo}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className={styles.link_router}
            >
              {item.titulo}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className={styles.link_router}
            >
              {item.descricao}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};
export default CardComponent;
