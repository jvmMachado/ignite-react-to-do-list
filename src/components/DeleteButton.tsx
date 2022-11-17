import styles from './DeleteButton.module.css';
import { Trash } from 'phosphor-react';
import { ButtonHTMLAttributes } from 'react';

export function DeleteButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={styles.button}
      {...props}
    >
      <Trash />
    </button>
  );
}