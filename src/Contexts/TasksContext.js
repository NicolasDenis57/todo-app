import { useReducer } from 'react';
import { createContext } from "react";

const TasksContext = createContext({
      taskData: {
            tasks: [],
            count: 0,
      },
      addTask: (task) => {},
      removeTask: (taskIndex) => {},
      toggleTaskIsDone: ({ taskIndex, isDone }) => {},
      editTask: ({ taskIndex, task }) => {},
});

export { TasksContext };

const INITIAL_TASKS = {
      tasks: [],
      count: 0,
}

const tasksReducer = (state, action) => {
      if (action.type === 'ADD_TASK' && action.value) {
            const tasks = [...state.tasks, action.value];
            return {
                  tasks,
                  count: tasks.length
            }
      }
      return state ? state : INITIAL_TASKS;
}

const TasksContextProvider = ({ children }) => {

      const [tasksData, dispatchTasks] = useReducer(tasksReducer, INITIAL_TASKS);

      const addTask = (task) => {
            dispatchTasks({ type: 'ADD_TASK', value: task })
      }

      const value = {
            tasksData,
            addTask,
      };

      return (
            <TasksContext.Provider value={ value }>
                  { children }
            </TasksContext.Provider>
      )
}

export default TasksContextProvider;