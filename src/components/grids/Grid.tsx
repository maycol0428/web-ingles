import React, { PropsWithChildren } from "react";
import styles from "./grid.module.css";

export const Grid = ({ children }: PropsWithChildren) => {
  return <div className={styles.grid}>{children}</div>;
};
