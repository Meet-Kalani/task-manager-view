import { create } from 'zustand';
import { Status } from '../types/status';

type StatusStore = {
  statuses: Status[];
  setStatuses: (statuses: Status[]) => void;
};

const useStatusStore = create<StatusStore>((set) => ({
  statuses: [],
  setStatuses: (statuses: Status[]) => set(() => ({ statuses })),
}));

export default useStatusStore;
