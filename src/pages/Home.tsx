import axios from "axios";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import TodoList from "../components/TodoList";

const url = "https://63878fe1d9b24b1be3f4457c.mockapi.io/todos";



const Home = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const getTodos = async () => {
    try {
      const { data } = await axios.get<TodoType[]>(url);
      console.log(data);
      setTodos(data);
    } catch (error) {
      console.log(error)
    }
  };
const Addtodo:AddFn=async (text)=>{
  const newTodo={
    task:text,
    isDone:false
  }

  try {
    await axios.post(url,newTodo)
    getTodos()
    
  } catch (error) {
    console.log(error);
    
  }

}

const toogleTodo:ToogleFn=async(item)=>{
    try {
       await axios.put(`${url}/${item.id}`,{...item,isDone:!item.isDone})
       getTodos();
     } catch (error) {
       console.log(error)
     }
}
const deleteTodo:DeleteFn=async(id)=>{
  try {
    await axios.delete(`${url}/${id}`)
    getTodos()
  } catch (error) {
    console.log(error);
  }
}

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="main">
      <InputForm  Addtodo={Addtodo} />
      <TodoList todos={todos} toogleTodo={toogleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Home;
