import React from 'react';
import TodoListItem from './TodoListItem';
import NewTodoForm from "./NewTodoForm";
import { connect } from 'react-redux';
import { removeTodo } from './actions';
import { markTodoAsCompleted } from "./actions";

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map(todo => <TodoListItem
      todo={todo}
      onRemovePressed={onRemovePressed}
      onCompletedPressed={onCompletedPressed}/>)}
  </div>
);

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  onRemovePressed: text => dispatch(removeTodo(text)),
  onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
