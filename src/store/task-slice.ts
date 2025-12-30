import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface Task {
  name: string;
  completedStatus: boolean;
  project: string;
}

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (
      state,
      action: PayloadAction<{ name: string; project: 'Personal' | 'Work' }>
    ) => {
      const newTask: Task = {
        name: action.payload.name,
        completedStatus: false,
        project: action.payload.project,
      };

      state.tasks.push(newTask);
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
