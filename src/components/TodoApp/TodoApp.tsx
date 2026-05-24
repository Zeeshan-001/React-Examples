import "./style.css";
import { ITEMS, type ItemType } from "./modal/items";
import { useToDoReducer } from "./reducer/todoReducer";
import { useReducer } from "react";
import { useTodoActions } from "./hooks/useTodoActions";

const TodoApp = () => {
  const [todoState, todoDispatch] = useReducer(useToDoReducer, ITEMS);
  const { handleIAddItem, handleDeleteItem, handleToggleItem, inputRef, checkboxRef, selectedFilter, filteredItems, setSelectedFilter } = useTodoActions(todoState, todoDispatch);

  return (
    <div className="body-wrapper">
      <div className="todo-container">
        <h1 className="heading">Today's Tasks</h1>

        {/* Add Task Form */}
        <div className="todo-form">
          <input type="text" className="todo-input" placeholder="Add a new task..." aria-label="New task input" ref={inputRef} />
          <button type="button" className="add-btn" onClick={handleIAddItem}>
            Add
          </button>
        </div>

        {/* Filter Navigation Menu */}
        <div className="filters flex-row gap-4">
          <button type="button" className={`filter-btn ${selectedFilter == "all" ? "filter-btn-active" : ""}`} onClick={() => setSelectedFilter("all")}>
            All
          </button>
          <button type="button" className={`filter-btn ${selectedFilter == "active" ? "filter-btn-active" : ""}`} onClick={() => setSelectedFilter("active")}>
            Active
          </button>
          <button type="button" className={`filter-btn ${selectedFilter == "completed" ? "filter-btn-active" : ""}`} onClick={() => setSelectedFilter("completed")}>
            Completed
          </button>
        </div>

        {/* Static Task List Layout */}
        <ul className="task-list">
          {filteredItems.map((item: ItemType) => (
            <li key={item.id} className={`task-item active-border ${item.completed && "completed-border"}`}>
              <label className="task-content">
                <input type="checkbox" className="task-checkbox" ref={checkboxRef} onChange={() => handleToggleItem(item.id)} />
                <span className={`task-text ${item.completed && "task-text-completed"}`}>{item.text}</span>
              </label>
              <button type="button" className="delete-btn" onClick={() => handleDeleteItem(item.id)}>
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
