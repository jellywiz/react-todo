/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
function InputTodo({ addTodoProps }) {
  const [title, setTitle] = useState('');
  const onChange = (e) => {
    setTitle((e.target.name = e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoProps(title);
      setTitle('');
    } else {
      // eslint-disable-next-line no-alert
      alert('Please write item');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Add Todo..."
        className="input-text"
        name="title"
        value={title}
        onChange={onChange}
      />
      <button className="input-submit">submit</button>
    </form>
  );
}

export default InputTodo;
