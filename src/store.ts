import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

//define the inital state
interface Task {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  completed: boolean;
}

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

//create a slice for managing tasks
const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction <Task>) => {
        state.tasks.push(action.payload);
    },
    markAsCompleted: (state, action: PayloadAction<number>) => {
        const task = state.tasks.find(task => task.id === action.payload)
        if (task) task.completed = true;
    },
    deleteTask: (state, action: PayloadAction<number>) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload)
    },
  },
});

//export actions and reducer
export const { addTask, markAsCompleted, deleteTask } = tasksSlice.actions;

//redux store
export const store = configureStore({
    reducer: tasksSlice.reducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
