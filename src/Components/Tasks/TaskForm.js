import { useState, useContext } from "react";
import { TasksContext } from "../../Contexts/TasksContext"
import TextField from "../UI/Forms/TextField";
import TextAreaField from "../UI/Forms/TextAreaField";
import Button from "../UI/Button/Button";
import PropTypes from "prop-types";

const TaskForm = ({ closeModal, value, index }) => {

      const [ formValue, setFormValue ] = useState(value ? value : {
            title: '',
            description: '',

      });

      const [ invalidFields, setInvalidFields ] = useState([]);

      const { addTask, editTask } = useContext(TasksContext);

      const handleSubmit = (event) => {
            event.preventDefault();
            if (invalidFields.length > 0) {
                  alert('There are errors in the form.');
                  return;
            }

            if (value && !isNaN(+index)) {
                  editTask({ task: formValue, taskIndex: index });
            } else {
                  addTask({
                        ...formValue,
                        createdAt: new Date(),
                        isDone: false
            });
      }
            closeModal();
      }

      const handleError = (error) => {

            const invalidFieldsCopy = [...invalidFields];
            // On récupère l'index d'un éventuel champ invalide enregistré dans le tableau
            const invalidFieldIndex = invalidFieldsCopy.findIndex(field => field === error.name);

            if (error.error) { // Si une erreur est renvoyée

                  if (invalidFieldIndex === -1) { // Si le champ n'est pas enregistré comme invalide, on l'ajoute au tableau
                        setInvalidFields([...invalidFieldsCopy, error.name ]);
                  }
                  // Sinon, il est déjà enregistré, on ne fait rien

            } else { // Si aucune erreur n'est renvoyée

                  if (invalidFieldIndex !== -1) { // Mais que le champ est enregistré comme invaliide, on le supprime du tableau
                        invalidFieldsCopy.splice(invalidFieldIndex, 1);
                        setInvalidFields(invalidFieldsCopy);
                  }
            }
            // Si le champ n'est pas enregistré, on ne fait rien
      }

      return (
            <form onSubmit={ handleSubmit }>
                  <TextField 
                        name='title'
                        placeholder='New task title'
                        label='Title'
                        value= { formValue.title }
                        onChange={ (value) => setFormValue({ ...formValue, title: value }) }
                        validation={ {
                              required:true,
                              type: 'string',
                              minLength: 2,
                              maxLength: 25
                        } }
                        onError={ handleError }
                  />
                  <TextAreaField 
                        name='description'
                        placeholder='Write your description here...'
                        label='Description'
                        value= { formValue.description }
                        onChange={ (value) => setFormValue({ ...formValue, description: value }) }
                        validation={ {
                              required:false,
                              type: 'string',
                              maxLength: 100
                        } }
                        onError={ handleError }
                  />
                  <Button type='submit'>Save</Button>
            </form>
      );
};

export default TaskForm;

TaskForm.propTypes = { 
      closeModal: PropTypes.func.isRequired,
       value : PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
       }), 
       index: PropTypes.number
};

TaskForm.defaultProps = {
      value: null,
      index: null
};