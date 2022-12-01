import React from 'react';


interface IListItem {
  item:TodoType;
}


const TodoListItem:React.FC<IListItem>= ({item}) => {
  // console.log(item);
  return (
    <li>
      <p className='checked'>Todo </p>
      <p> Todo </p>
      <span className="task-icons">✖️</span>
    </li>
  );
};

export default TodoListItem