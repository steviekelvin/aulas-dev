import styles from "./style.module.scss";

const PageModel = (props:any) => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>{props.title}</h1>
        <p>{props.children}</p>
      </div>
    </>
  );
};

export default PageModel;
