import styles from './DeleteButton.module.css';
import { Trash } from 'phosphor-react';

export function DeleteButton() {
  return (
    <button className={styles.button}>
      <Trash />
    </button>
  );
}