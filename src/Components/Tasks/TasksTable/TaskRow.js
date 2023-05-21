import { useContext } from "react";
import { TasksContext } from "../../../Contexts/TasksContext";
import Button from "../../UI/Button/Button";

const TaskRow = ({ task, index }) => {

      const { removeTask } = useContext(TasksContext);

      const handleDeleteTask = () => {
            removeTask(index);
      }

      return (
            <tr>
                  <td>
                        <input type="checkbox"/>
                  </td>
                  <td>
                        { task.title }
                  </td>
                  <td>
                        { task.description }
                  </td>
                  <td>
                        { task.createdAt.toLocaleDateString() }
                  </td>
                  <td>
                        { task.time }
                  </td>
                  <td>
                        <Button variant="danger" onClick={ handleDeleteTask }>Delete</Button>
                  </td>
            </tr>
      );
};

export default TaskRow;