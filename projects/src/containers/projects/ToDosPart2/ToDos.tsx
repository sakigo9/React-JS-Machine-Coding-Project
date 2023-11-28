import React, { useReducer, useState } from 'react';
import { Todo } from '../../../Model/Modal';
import './ToDos.css';

interface TodoState {
  todos: Todo[];
}

type TodoAction =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: number }
  | { type: 'REMOVE_TODO'; payload: number };

const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [
          ...state.todos,
          { id: Date.now(), isDone: false, todo: action.payload },
        ],
      };
    case 'REMOVE_TODO':
      return {
        todos: state.todos.filter((ele) => {
          return ele.id !== action.payload;
        }),
      };
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map((element) =>
          element.id === action.payload
            ? { ...element, isDone: !element.isDone }
            : element,
        ),
      };
    default:
      return state;
  }
};
const ToDos = () => {
  const [state, dispatch] = useReducer(todoReducer, { todos: [] });
  const [task, setTask] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: task });
    setTask('');
  };

  return (
    <div className="app_container">
      <div className="todos_app">
        <h2>To-Do Tasks 📝</h2>
        <form className="todos_form" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Enter your task"
            className="input_box"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <ul className="task_list">
          {state.todos.map((element) => {
            return (
              <li
                key={element.id}
                className={element.isDone ? 'checked' : ''}
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch({ type: 'TOGGLE_TODO', payload: element.id });
                }}
              >
                {element.todo}{' '}
                <span
                  onClick={() => {
                    dispatch({ type: 'REMOVE_TODO', payload: element.id });
                  }}
                >
                  x
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ToDos;
