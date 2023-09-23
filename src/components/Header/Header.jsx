// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from "react";
import styles from "./header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
        width="32"
        height="32"
        alt=""
      />
      Emoji Search
      <img
        src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
        width="32"
        height="32"
        alt=""
      />
    </header>
  );
};
export default Header;
