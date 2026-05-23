import "./style.css";

const TodoApp = () => {
  return (
    <div className="body-wrapper">
      <div className="todo-container">
        <h1 className="heading">Today's Tasks</h1>

        {/* Add Task Form */}
        <div className="todo-form">
          <input type="text" className="todo-input" placeholder="Add a new task..." aria-label="New task input" />
          <button type="button" className="add-btn">
            Add
          </button>
        </div>

        {/* Filter Navigation Menu */}
        <div className="filters">
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
          {/* Active Task Example */}
          <li className="task-item active-border">
            <label className="task-content">
              <input type="checkbox" className="task-checkbox" />
              <span className="task-text">Buy groceries for dinner</span>
            </label>
            <button type="button" className="delete-btn">
              Delete
            </button>
          </li>

          {/* Completed Task Example */}
          <li className="task-item completed-border">
            <label className="task-content">
              <input type="checkbox" className="task-checkbox" defaultChecked />
              <span className="task-text task-text-completed">Finish CSS layout structure</span>
            </label>
            <button type="button" className="delete-btn">
              Delete
            </button>
          </li>

          {/* Active Task Example */}
          <li className="task-item active-border">
            <label className="task-content">
              <input type="checkbox" className="task-checkbox" />
              <span className="task-text">Go for a 30-minute run</span>
            </label>
            <button type="button" className="delete-btn">
              Delete
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
