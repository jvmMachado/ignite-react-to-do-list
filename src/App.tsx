import { Header } from './components/Header'

import './global.css';
import styles from './App.module.css';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { TasksList } from './components/TasksList';
import { ChangeEvent, useState } from 'react';
import { Task } from './components/Task';
import { ITask } from './interfaces/ITask';



function App() {


  const initialTasks = [
    {
      id: '1',
      description: 'Platinar The Witcher 3',
      isDone: false,
    },
    {
      id: '2',
      description: 'Agendar aula de Japonês',
      isDone: false,
    },
    {
      id: '3',
      description: 'Finalizar primeiro desafio do ignite',
      isDone: true,
    },
  ] as ITask[]

  const [tasks, setTasks] = useState(initialTasks);
  const [newTaskInput, setNewTaskInput] = useState('');

  const totalOfTasksDone = tasks.filter((task) => task.isDone === true).length;

  function handleAddTask() {
    const newTask = {
      id: Date.now().toString(),
      description: newTaskInput,
      isDone: false,
    } as ITask

    setTasks((oldState) => [...oldState, newTask]);
    setNewTaskInput('');
  }

  function handleRemoveTask(taskId: string) {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskInput(event.target.value);
  }

  function handleChangeTaskStatus(taskId: string) {
    const newTasksList = tasks.map((task) => {
      if (task.id === taskId) {
        task.isDone = !task.isDone;
      }
      return task;
    });

    setTasks(newTasksList);
  }

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.inputBar}>
          <Input value={newTaskInput} onChange={handleInputChange} />
          <Button onClick={handleAddTask} />
        </div>
        <div className={styles.countersBar}>
          <div>
            <span className={[styles.countersText, styles.totalTasksText].join(' ')}>Tarefas criadas</span>
            <span className={styles.countersNumber}>{tasks.length}</span>
          </div>
          <div>
            <span className={[styles.countersText, styles.doneTasksText].join(' ')}>Concluídas</span>
            <span className={styles.countersNumber}>{totalOfTasksDone}</span>
          </div>
        </div>
        <TasksList tasks={tasks} onRemoveTask={handleRemoveTask} onChangeTaskStatus={handleChangeTaskStatus} />

      </div>
    </div>
  )
}

export default App
