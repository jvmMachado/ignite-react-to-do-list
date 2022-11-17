import styles from './Checkbox.module.css';
import { Check } from 'phosphor-react';
import { InputHTMLAttributes } from 'react';

export function Checkbox(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={styles.wrapper}>
      <label>
        <input type="checkbox" {...props} />
        <div className={styles.trueCheckbox}>
          <Check />
        </div>
      </label>
    </div>
  );
}