export interface newTask {
  text: string;
  day: string;
  reminder: boolean;
}

export interface Task extends newTask {
  id: number;
}
