import styles from './Button.module.css';
import { PlusCircle } from 'phosphor-react';
import { ButtonHTMLAttributes } from 'react';

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={styles.button} {...props}>Criar<PlusCircle /></button>
  );
}