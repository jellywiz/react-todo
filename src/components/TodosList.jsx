/* eslint-disable react/prop-types */
import TodoItem from './TodoItem';

function TodosList({ todos, handlePropsChange, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handlePropsChange={handlePropsChange}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodosList;
