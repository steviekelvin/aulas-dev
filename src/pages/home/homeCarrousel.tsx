import Carousel from "react-bootstrap/Carousel";
import imagem1 from '../../assets/images/react.png'
import imagem2 from '../../assets/images/vue.jpg'
import imagem3 from "../../assets/images/angular.jpg";
import styles from './style.module.scss';

const HomeCarrousel = () => {
  return (
    <Carousel data-bs-theme="light" className={styles.home_carrousel}>
      <Carousel.Item className={styles.home_carrousel_item} >
        <img className="d-block w-100" src={imagem1} alt="React" />
        <Carousel.Caption className={styles.home_img_caption}>
          <h5 className={styles.home_img_label}>React</h5>
          <p className={styles.home_img_label_description}>Aprenda sobre como criar seu primeiro projeto em React.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.home_carrousel_item}>
        <img
          className="d-block w-100"
          src={imagem2}
          alt="Second slide"
        />
        <Carousel.Caption className={styles.home_img_caption}>
          <h5 className={styles.home_img_label}>Vue</h5>
          <p className={styles.home_img_label_description}>Saiba como começar seu primeiro projeto vue do zero.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.home_carrousel_item}>
        <img
          className="d-block w-100"
          src={imagem3}
          alt="Third slide"
        />
        <Carousel.Caption className={styles.home_img_caption}>
          <h5 className={styles.home_img_label}>Angular</h5>
          <p className={styles.home_img_label_description}>
            Aprenda como criar seu primeiro projeto Angular de forma descomplicada.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarrousel;
