import { create } from 'zustand';
import { Priority } from '../types/priority';

type PriorityStore = {
  priorities: Priority[];
  setPriorities: (priorities: Priority[]) => void;
};

const usePriorityStore = create<PriorityStore>((set) => ({
  priorities: [],
  setPriorities: (priorities: Priority[]) =>
    set(() => ({ priorities: priorities })),
}));

export default usePriorityStore;
