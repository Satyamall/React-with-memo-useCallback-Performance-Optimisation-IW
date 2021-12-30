import React, { useMemo } from "react";

const delay = (time) => {
  const start = Date.now();
  while (Date.now() - start < time) {
    continue;
  }
  return start;
};

const areEqual = (prevProps, nextProps) => {
  if (prevProps.status === nextProps.status) {
    return true;
  }
  return false;
};

const TodoItem = ({ title, id, status, handleDelete, onToggle }) => {
  /** Expensive calculation */
  const time = useMemo(() => delay(200), []);

  return (
    <div style={{ display: "flex", gap: 4, justifyContent: "center" }}>
      <div>{title}</div>
      <button onClick={() => onToggle(id)}> {`${status}`}</button>
      <button onClick={() => handleDelete(id)}>DELETE</button>
      <div>{time}</div>
    </div>
  );
};

export const MemoisedTodoItemWithoutComparator = React.memo(TodoItem);
export const MemoisedTodoItem = React.memo(TodoItem, areEqual);

export default TodoItem;
