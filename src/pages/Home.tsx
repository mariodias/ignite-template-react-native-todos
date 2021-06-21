import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {

  const [tasks, setTasks] = useState<Task[]>([]);

function handleAddTask(newTaskTitle: string) {
    
    const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }

    if(data.title == '') {

      return;

    } 

      setTasks(oldstate => [...oldstate, data]);

  }

  function handleMarkTaskAsDone(id: number) {

    let taskToChange = tasks.filter(task => task.id === id);

    const tasksToKeepState = tasks.filter(task => task.id !== id);

    if (taskToChange) {

      taskToChange[0].done = !taskToChange[0].done;
      setTasks([...tasksToKeepState, taskToChange[0]]);
      
    }
   
  }

  function handleRemoveTask(id: number) {

    setTasks(oldstate => 
      oldstate.filter(
        task => task.id !== id
        
        ))   
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}