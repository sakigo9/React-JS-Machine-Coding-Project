import React from 'react'
import { Todo } from '../../Model/Modal';
import SingleCard from '../SingleCard/SingleCard';
import "./styles.css";

interface TodoCardProps{
    todoList:Todo[];
    setTodoList:React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoCard: React.FC<TodoCardProps> = ({todoList,setTodoList}) => {
  return todoList && <div className="card__container">
    {todoList.map((todo)=>(
        <SingleCard key={todo.id} todo={todo} todoList={todoList} setTodoList={setTodoList}/>
    ))}
  </div>
}

export default TodoCard