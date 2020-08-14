import React from 'react';
import { useForm } from './../hooks'
const Form = ({handleAdd}) =>  {
  const [ { description }, handleInputChange, reset ] = useForm({
      description: ''
  });
  const handleSubmit = (e) =>  {
    e.preventDefault()

    if ( description.trim().length <= 1 ) return

    const newToDo = {
      description,
    }
    handleAdd(newToDo)
    reset()
  }
  return (
    <>
      <h3>Add ToDo</h3>
      <hr/>
      <form onSubmit={ handleSubmit }>
        <input
          className="form-control"
          type="text"
          name="description"
          value={description}
          onChange={handleInputChange}
          placeholder="Add ToDO"
          autoComplete="off"
        />
        <button className="btn btn-block btn-outline-primary mt-1 ">
          Add
        </button>
      </form>
    </>
  );
}

export default Form
