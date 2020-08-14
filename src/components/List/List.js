import React from 'react';
import { ListItem } from './../'

const List = ({todoList, handleDelete, handleUpdate }) =>  {

  const generateList = todoList.map( (todo, idx) => (
        <ListItem
          key={idx}
          todo={todo}
          idx={idx}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          />
      ))
  return(
    <>
      <h3>List ToDo: </h3><small>click on item to "done"</small>
      <hr />
      <ul className="list-group list-group-flush">
      {generateList}
      </ul>
    </>
  );
}

export default List
