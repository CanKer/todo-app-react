import React from 'react';

export const ListItem = ({ todo, idx, handleDelete, handleUpdate }) => {
 return(
   <li key={idx}
       className="list-group-item"
   >
     <p className={ `${ (todo.done) && 'complete' }` }
        onClick={()=> handleUpdate(todo)}>
        {idx + 1}. {todo.description}
      </p>

     <button
       onClick={ ()=>handleDelete(todo['_id'])}
       className="btn btn-danger">Remove</button>
   </li>
 )
}

export default ListItem
