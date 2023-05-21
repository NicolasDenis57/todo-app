import Button from '../../UI/Button/Button';
import style from '../TaskTimer/TaskTimer.module.css';
import useTimer from '../../../Hooks/useTimer';
import useTimeParser from '../../../Hooks/useTimeParser';
import { useEffect, useContext } from "react";
import { TasksContext } from "../../../Contexts/TasksContext";

const TaskTimer = ({ index, onCloseModal }) => {

      const { time, startTimer, stopTimer } = useTimer();
      const { parseSecondsToHMS } = useTimeParser();

      const { editTask } = useContext(TasksContext)

      useEffect(() => {
            startTimer();

            return () => {
                  stopTimer();
            }
      }, []);

      const handleStopTimer = () => {
            const savedTime = stopTimer();
            editTask({ taskIndex : index, task: { time : savedTime }});
            onCloseModal();
      }

      return (
            <div className={style['timer-container']}>
                  <p className={style.timer}>{ parseSecondsToHMS(time) }</p>
                  <Button onClick={ handleStopTimer }>Stop</Button>
            </div>
      );
}

export default TaskTimer;