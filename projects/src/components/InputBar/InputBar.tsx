import React, { useRef } from 'react';
import './styles.css';

interface InputBarProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodos: (e: React.FormEvent) => void;
}
const InputBar: React.FC<InputBarProps> = ({
  todo,
  setTodo,
  handleAddTodos,
}) => {
  const InputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="search__form"
      onSubmit={(e) => {
        handleAddTodos(e);
        InputRef.current?.blur();
        InputRef.current?.focus();
      }}
    >
      <input
        placeholder="Enter your task"
        className="search__form--input"
        value={todo}
        ref={InputRef}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="search__form--button" type="submit">
        ADD
      </button>
    </form>
  );
};

export default InputBar;
