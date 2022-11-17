import { ITask } from '../interfaces/ITask';
import { Checkbox } from './Checkbox';
import { DeleteButton } from './DeleteButton';
import styles from './Task.module.css';

interface TaskProps extends ITask {
  onRemoveTask: () => void;
  onChangeTaskStatus: () => void;
};

export function Task({ description, isDone, onRemoveTask, onChangeTaskStatus }: TaskProps) {
  return (
    <div className={styles.wrapper}>
      <Checkbox checked={isDone} onChange={onChangeTaskStatus} />
      <p>{description}</p>
      <DeleteButton onClick={onRemoveTask} />
    </div>
  );
}