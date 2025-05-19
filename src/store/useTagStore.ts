import { create } from 'zustand';
import { Tag } from '../types/tag';

type TagStore = {
  tags: Tag[];
  setTags: (tags: Tag[]) => void;
};

const useTagStore = create<TagStore>((set) => ({
  tags: [],
  setTags: (tags: Tag[]) => set(() => ({ tags })),
}));

export default useTagStore;
