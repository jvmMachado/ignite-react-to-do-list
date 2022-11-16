import styles from './TasksList.module.css';
import { ClipboardText } from 'phosphor-react';

export function TasksList() {
  return (
    <div className={[styles.wrapper, styles.emptyWrapper].join(' ')}>
      <ClipboardText />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}