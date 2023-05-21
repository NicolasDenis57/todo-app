import { useContext } from 'react';
import { TasksContext } from '../../../Contexts/TasksContext';
import style from './TasksTable.module.css';
import TaskRow from './TaskRow'

const TasksTable = () => {

      const { tasksData } = useContext(TasksContext);

      return (
            <div className={ style['tasks-table-container']}>
                  <table className={ style['tasks-table'] }>
                        <thead>
                              <tr>
                                    <th>Status</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Created at</th>
                                    <th>Time</th>
                                    <th>Actions</th>
                              </tr>
                        </thead>
                        <tbody>
                              {
                                    tasksData && tasksData.tasks && tasksData.tasks.map((task, index) => (
                                          <TaskRow key={ Date.parse(task.createdAt) - index } task={ task } index={ index } />
                                    ))
                              }
                        </tbody>
                  </table>
            </div>
      );
};

export default TasksTable;