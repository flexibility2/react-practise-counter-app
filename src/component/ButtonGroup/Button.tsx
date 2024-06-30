import React from "react";
import styles from "./Button.module.css";

interface Props {
  text: string;
  onClick: () => void;
  color: "primary" | "secondary";
}
const Button = ({ text, onClick, color }: Props) => {
  // return (
  //   <button className={"btn btn-" + color} onClick={onClick}>
  //     {text}
  //   </button>
  // );

  return (
    <button
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
