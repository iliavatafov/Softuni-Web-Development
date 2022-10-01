import styles from "./CharactersCard.module.css";

export const CharcterCard = (props) => {
  return (
    <li className={styles["list__item"]}>
      <h2 className={styles["item__name"]}>{props.name}</h2>
      <ul className={styles["character-details-list"]}>
        <li className={styles["gender"]}>{props.gender}</li>
        <li className={styles["hair__color"]}>{props.hair_color}</li>
        <li className={styles["skin__color"]}>{props.skin_color}</li>
        <li className={styles["eye__color"]}>{props.eye_color}</li>
      </ul>
    </li>
  );
};
