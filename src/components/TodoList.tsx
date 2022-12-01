import React from 'react'
import TodoListItem from './TodoListItem'

interface ITodoList{
  todos:TodoType[]
  toogleTodo:ToogleFn
  deleteTodo:DeleteFn
}


const TodoList:React.FC<ITodoList>= ({todos,toogleTodo,deleteTodo}) => {

  return (
    <ul>
      {todos.map((item)=>{
        return(
          <TodoListItem key={item.id} item={item} toogleTodo={toogleTodo} deleteTodo={deleteTodo}  />
        )
      })}
    </ul>
  )
}

export default TodoList