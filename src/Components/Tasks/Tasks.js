import PageTitle from "../UI/PageTitle/PageTitle";
import { TasksContext } from "../../Contexts/TasksContext"
import { useState, useContext } from "react";
import Button from "../UI/Button/Button";
import style from "./Tasks.module.css";
import Modal from "../UI/Modal/Modal";
import TaskForm from "./TaskForm";
import TasksTable from "./TasksTable/TasksTable";

const Tasks = () => {

       const [ isNewTaskModalOpen, setIsNewTaskModalOpen ] = useState(false);

       const { tasksData } = useContext(TasksContext);
       
       return (
              <>
                     <div className={style['tasks-header']}>
                            <PageTitle count={ tasksData.count } title={ `Task${tasksData.count > 1 ? 's' : ''}` } />
                            <Button onClick={ () => setIsNewTaskModalOpen(true) }>New Task</Button>
                     </div>
                     <TasksTable />
                     <Modal isOpen={ isNewTaskModalOpen } setIsOpen={ setIsNewTaskModalOpen }>
                            <TaskForm closeModal={ () => setIsNewTaskModalOpen(false) }/>
                     </Modal>
              </>
       );
};

export default Tasks