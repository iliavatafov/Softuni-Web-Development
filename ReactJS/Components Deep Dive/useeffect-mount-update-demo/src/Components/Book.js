import { useState, useEffect } from "react";
import styles from "./Book.module.css";

export const Book = (props) => {
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    console.log("Mounting: " + props.title);
  }, [highlight]);

  let style = {};

  const onHighlight = () => {
    setHighlight((x) => !x);
  };

  if (highlight) {
    style.backgroundColor = "red";
  }

  return (
    <li className={styles["book-item"]} style={style}>
      <h2>Title: {props.title}</h2>
      <div>Author: {props.author}</div>
      <div>Year: {props.year}</div>
      <div>Price: {props.price}$</div>
      <button onClick={onHighlight}>Highlight red</button>
    </li>
  );
};
