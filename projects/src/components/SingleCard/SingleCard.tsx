import React, { useState, useRef, useEffect } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { Todo } from '../../Model/Modal';
import './styles.css';
import { MdDone } from 'react-icons/md';

interface SingleCardProps {
  todo: Todo;
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleCard: React.FC<SingleCardProps> = ({
  todo,
  todoList,
  setTodoList,
}) => {
  const EditRef = useRef<HTMLInputElement>(null);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleTaskDone = (id: number) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };

  const handleDeleteTask = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handleEditTask = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, todo: editTodo } : todo,
      ),
    );
    setEditMode(false);
  };

  useEffect(() => {
    EditRef.current?.focus();
  }, [editMode]);
  return (
    <form className="single__card" onSubmit={(e) => handleEditTask(e, todo.id)}>
      {editMode ? (
        <input
          ref={EditRef}
          value={editTodo}
          className="single__card--edit"
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <s className="single__card--title">{todo.todo}</s>
      ) : (
        <span className="single__card--title">{todo.todo}</span>
      )}

      <div>
        <span className="icon">
          <AiFillDelete onClick={() => handleDeleteTask(todo.id)} />
        </span>
        <span className="icon">
          <AiFillEdit
            onClick={() => {
              if (!editMode && !todo.isDone) {
                setEditMode(!editMode);
              }
            }}
          />
        </span>
        <span className="icon">
          <MdDone onClick={() => handleTaskDone(todo.id)} />
        </span>
      </div>
    </form>
  );
};

export default SingleCard;
