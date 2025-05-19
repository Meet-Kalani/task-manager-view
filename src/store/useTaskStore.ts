import { create } from 'zustand';
import { Task } from '../types/task';

type TaskStore = {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
};

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  setTasks: (tasks: Task[]) => set(() => ({ tasks })),
}));

export default useTaskStore;
