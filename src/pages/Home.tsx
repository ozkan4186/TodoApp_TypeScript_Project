import axios from "axios";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import TodoList from "../components/TodoList";

const url = "https://63878fe1d9b24b1be3f4457c.mockapi.io/todos";
const Home = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const Gettodo = async () => {
    try {
      const { data } = await axios.get<TodoType[]>(url);
      console.log(data);
      setTodos(data);
    } catch (error) {}
  };
  useEffect(() => {
    Gettodo();
  }, []);

  return (
    <div className="main">
      <InputForm />
      <TodoList todos={todos} />
    </div>
  );
};

export default Home;
