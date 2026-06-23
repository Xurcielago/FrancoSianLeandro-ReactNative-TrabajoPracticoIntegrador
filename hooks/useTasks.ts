import { useState } from "react";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export function useTasks() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    if (task.trim() === "") return;
    const newTask: Task = {
      id: Date.now().toString(),
      title: task.trim(),
      completed: false,
    };
    setTasks([newTask, ...tasks]);
    setTask("");
  };

  const toggleComplete = (id: string) => {
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  return { task, setTask, tasks, addTask, toggleComplete, deleteTask };
}
