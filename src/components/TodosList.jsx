/* eslint-disable */
import React from "react";
import TodosItem from "./TodosItem";

class TodosList extends React.Component {
  render() {
    return (
      <div className="list-todo">
        {this.props.todos.map(todo => (
          <TodosItem
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            deleteTodoProps={this.props.deleteTodoProps}
          />
        ))}
      </div>
    );
  }
}

export default TodosList;