import styles from './Button.module.css';

/* eslint-disable react/prop-types */
export default function Button({ children, onClickFunc, type }) {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={onClickFunc}>
      {children}
    </button>
  );
}
