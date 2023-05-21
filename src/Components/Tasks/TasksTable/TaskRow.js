import { useContext, useState } from "react";
import { TasksContext } from "../../../Contexts/TasksContext";
import Button from "../../UI/Button/Button";
import Modal from "../../UI/Modal/Modal";
import TaskForm from "../TaskForm";

const TaskRow = ({ task, index }) => {
      
      const [ isEditTaskModalOpen, setIsEditTaskModalOpen ] = useState(false);

      const { removeTask, toggleTaskIsDone } = useContext(TasksContext);

      const handleDeleteTask = () => {
            removeTask(index);
      }

      const handleChangeStatus = (event) => {
            const value = event.target.checked; 
            toggleTaskIsDone({ taskIndex: index, isDone: value })
      }

      return (
            <>
                  <tr>
                        <td>
                              <input type="checkbox" checked={ task.isDone } onChange={ handleChangeStatus }/>
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
                        <td style={{ display: 'flex', gap: 4, justifyContent: 'end'}}>
                              <Button variant="danger" onClick={ handleDeleteTask }>Delete</Button>
                              <Button onClick={ () => setIsEditTaskModalOpen(true) }>Edit</Button>
                        </td>
                  </tr>
                  <Modal isOpen= { isEditTaskModalOpen } setIsOpen={ setIsEditTaskModalOpen } title={ task.title }>
                        <TaskForm closeModal={ () => setIsEditTaskModalOpen(false) }value={{ title: task.title, description: task.description }} index={ index }/>
                  </Modal>
            </>
      );
};

export default TaskRow;