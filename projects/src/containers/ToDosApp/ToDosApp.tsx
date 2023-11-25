import React, { FC, useState } from 'react';
import { Todo } from '../../Model/Modal';
import InputBar from '../../components/InputBar/InputBar';
import TodoCard from '../../components/TodoCard/TodoCard';
import './ToDosApp.css';
const ToDosApp: FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const handleAddTodos = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodoList([...todoList, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo('');
    }
  };
  console.log(todoList);
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputBar todo={todo} setTodo={setTodo} handleAddTodos={handleAddTodos} />
      <TodoCard todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default ToDosApp;
