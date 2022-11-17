import styles from './TasksList.module.css';
import { ClipboardText } from 'phosphor-react';
import { ITask } from '../interfaces/ITask';
import { Task } from './Task';

interface TasksListProps {
  tasks: ITask[]
  onRemoveTask: (taskId: string) => void;
  onChangeTaskStatus: (taskId: string) => void;
}

export function TasksList({ tasks, onRemoveTask, onChangeTaskStatus }: TasksListProps) {
  return (
    tasks.length === 0 ?
      <div className={styles.emptyWrapper}>
        <ClipboardText />
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>

      :

      <div className={[styles.wrapper].join(' ')}>
        {tasks.map((task) =>
          <Task key={task.id}
            id={task.id}
            description={task.description}
            isDone={task.isDone}
            onRemoveTask={() =>
              onRemoveTask(task.id)}
            onChangeTaskStatus={() => onChangeTaskStatus(task.id)}
          />)}
      </div>

  );
}