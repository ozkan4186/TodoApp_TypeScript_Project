import React from "react";

interface IListItem {
  item: TodoType;
  toogleTodo: ToogleFn;
  deleteTodo:DeleteFn;
}

const TodoListItem: React.FC<IListItem> = ({ item, toogleTodo,deleteTodo }) => {
  console.log(item);

  return (
    <li>
      {item.isDone ? 
        <p className="checked" onClick={() => toogleTodo(item)}>
        
          {item.task}
        </p>
       : 
        <p onClick={() => toogleTodo(item)} > {item.task} </p>
      }

      <span onClick={()=>deleteTodo(item.id)} className="task-icons">✖️</span>
    </li>
  );
};

export default TodoListItem;
