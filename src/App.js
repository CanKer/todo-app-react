import React, { useReducer, useEffect } from 'react';
import todoReducer from './reducers/todoReducer'
import {Form, List} from './components/'
import { useFetch } from './hooks/'
import {TodoService} from './services/'
import "./styles.css"


const App = () =>  {
  const initialData = useFetch('/todo')
  const init = () => initialData
  const [ todoList, dispatch ] = useReducer(todoReducer, [], init);
  const TODOService = new TodoService('/todo')
  console.log("init: ", todoList);
  useEffect(()=> {
    console.log("initialData: ", initialData);
      dispatch({
        type: 'get',
        payload: initialData
      })
  }, [init()]);

  const handleAdd = ( newTodo ) => {
      TODOService.postTodo(newTodo)
        .then(res => {
          if(res) {
            dispatch({
                type: 'add',
                payload: newTodo
            });
          }
        })
        .catch(err => console.error("ni pedo :'v"))
  }

  const handleUpdate = ( todoId ) => {
    TODOService.putTodo(todoId)
      .then(({data}) =>{
        dispatch({
            type: 'update',
            payload: data
        });
      })
  }

  const handleDelete = ( todoId ) => {
    console.log("handleDelete: ", todoId);
    TODOService.deleteTodo(todoId)
      .then(({data}) =>  {
        dispatch( {
          type: 'delete',
          payload: todoId
        } );
      })
  }

console.log("todoList: ", todoList)

  return(
    <div className="container">
      <h1>ToDo APP: {todoList && todoList.length} </h1>
      <hr/>
      <div className="row">

        <div className="col-5">
          <Form
            handleAdd={handleAdd}
            />
        </div>

        <div className="col-7">

          {
            (!todoList)
            ?
            (<div className="alert alert-info text-center">Loading</div>)
            :
            (          <List todoList={todoList}
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate}/>
            )
          }
        </div>

      </div>

    </div>
  );

}



export default App
