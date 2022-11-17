import styles from './Checkbox.module.css';
import { Check } from 'phosphor-react';

export function Checkbox() {
  return (
    <div className={styles.wrapper}>
      <label>
        <input type="checkbox" />
        <div className={styles.trueCheckbox}>
          <Check />
        </div>
      </label>
    </div>
  );
}