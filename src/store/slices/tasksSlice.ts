import {
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

import type { Task } from "../../components/tasks/TaskTable";

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [
    {
      id: 1,
      title: "KYC Integration",
      description: "Integrate KYC verification APIs",
      assignee: "Preetha P B",
      priority: "High",
      status: "In Progress",
      dueDate: "Sep 10, 2026",
    },
    {
      id: 2,
      title: "API Integration",
      description:
        "Integrate customer management APIs",
      assignee: "Priya P",
      priority: "Medium",
      status: "Completed",
      dueDate: "Sep 08, 2026",
    },
    {
      id: 3,
      title: "Dashboard UI",
      description:
        "Improve dashboard user experience",
      assignee: "Saran S",
      priority: "Low",
      status: "Todo",
      dueDate: "Sep 12, 2026",
    },
    {
      id: 4,
      title: "Authentication",
      description:
        "Implement authentication flow",
      assignee: "Kavya K",
      priority: "High",
      status: "In Progress",
      dueDate: "Sep 11, 2026",
    },
    {
      id: 5,
      title: "Notifications",
      description:
        "Build notification management module",
      assignee: "Jegan Krishna",
      priority: "Medium",
      status: "Completed",
      dueDate: "Sep 07, 2026",
    },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (
      state,
      action: PayloadAction<Task>
    ) => {
      state.tasks.push(action.payload);
    },

    deleteTask: (
      state,
      action: PayloadAction<number>
    ) => {
      state.tasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
    },

    updateTask: (
      state,
      action: PayloadAction<Task>
    ) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );

      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
  },
});

export const {
  addTask,
  deleteTask,
  updateTask,
} = tasksSlice.actions;

export default tasksSlice.reducer;
