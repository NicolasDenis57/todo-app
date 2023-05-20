const TaskRow = ({ task }) => {

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
                        ACTIONS
                  </td>
            </tr>
      );
};

export default TaskRow;