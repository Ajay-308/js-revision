// Controlled Component (React is the Boss)
// React controls the input field.
// The value is stored in the state and updated using useState().
// Every time you type, React updates the state and re-renders the component.

import { useState } from "react";

function ControlledInput() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
}

// Uncontrolled Component (DOM is the Boss)
// The input field keeps track of its own value, not React.
// You don’t use state (useState), instead, you use a ref (useRef()).
// React just reads the value when needed.

import { useRef } from "react";

function UncontrolledInput() {
  const inputRef = useRef();

  const handleSubmit = () => {
    alert(`You typed: ${inputRef.current.value}`);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
