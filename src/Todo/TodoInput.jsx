import { useState } from "react";

function TodoInput({ onAdd }) {
  const [state, setState] = useState("");
  return (
    <div>
      <input
        placeholder="add something"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <button onClick={() => onAdd(state)}> ADD </button>
    </div>
  );
}

export default TodoInput;
