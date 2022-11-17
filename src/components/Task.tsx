import { Checkbox } from './Checkbox';
import { DeleteButton } from './DeleteButton';
import styles from './Task.module.css';

export function Task() {
  return (
    <div className={styles.wrapper}>
      <Checkbox />
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <DeleteButton />
    </div>
  );
}