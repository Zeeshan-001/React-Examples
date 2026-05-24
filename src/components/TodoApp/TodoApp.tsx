import "./style.css";
import { ITEMS, type ItemType } from "./modal/items";
import { useToDoReducer } from "./todoReducer";
import { useReducer, useRef } from "react";

const TodoApp = () => {
  const [todoState, todoDispatch] = useReducer(useToDoReducer, ITEMS);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleItemAdd = () => {
    const input = inputRef.current;
    if (!input) return;

    const val = input.value.trim();
    todoDispatch({ type: "ADD_ITEM", payload: val });
    input.value = "";
  };

  return (
    <div className="body-wrapper">
      <div className="todo-container">
        <h1 className="heading">Today's Tasks</h1>

        {/* Add Task Form */}
        <div className="todo-form">
          <input type="text" className="todo-input" placeholder="Add a new task..." aria-label="New task input" ref={inputRef} />
          <button type="button" className="add-btn" onClick={handleItemAdd}>
            Add
          </button>
        </div>

        {/* Filter Navigation Menu */}
        <div className="filters flex-row gap-4">
          <button type="button" className="filter-btn filter-btn-active">
            All
          </button>
          <button type="button" className="filter-btn">
            Active
          </button>
          <button type="button" className="filter-btn">
            Completed
          </button>
        </div>

        {/* Static Task List Layout */}
        <ul className="task-list">
          {todoState.map((item: ItemType) => (
            <li key={item.id} className="task-item active-border completed-border">
              <label className="task-content">
                <input type="checkbox" className="task-checkbox" />
                <span className="task-text task-text-completed">{item.text}</span>
              </label>
              <button type="button" className="delete-btn">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
