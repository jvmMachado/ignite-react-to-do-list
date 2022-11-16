import { Header } from './components/Header'

import './global.css';
import styles from './App.module.css';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { TasksList } from './components/TasksList';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.inputBar}>
          <Input />
          <Button />
        </div>
        <div className={styles.countersBar}>
          <div>
            <span className={[styles.countersText, styles.totalTasksText].join(' ')}>Tarefas criadas</span>
            <span className={styles.countersNumber}>0</span>
          </div>
          <div>
            <span className={[styles.countersText, styles.doneTasksText].join(' ')}>Concluídas</span>
            <span className={styles.countersNumber}>0</span>
          </div>
        </div>
        <TasksList />
      </div>
    </div>
  )
}

export default App