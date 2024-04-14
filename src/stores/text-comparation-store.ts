import { defineStore } from 'pinia';
import { TextComparation } from '../components/models';

export const useTextComparationStore = defineStore('textComparation', {
  state: () => ({
    // the state is a list of TextComparation objects
    textComparations: [] as TextComparation[],
  }),
  actions: {
    // add a new TextComparation object to the list
    addTextComparation(id: number, text1: string, text2: string, percentage: string) {
      this.textComparations.push({ id, text1, text2, percentage });
    },
    // remove a TextComparation object from the list
    removeTextComparation(id: number) {
      this.textComparations = this.textComparations.filter((tc) => tc.id !== id);
    },
  },
});
