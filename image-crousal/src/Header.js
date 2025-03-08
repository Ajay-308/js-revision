import { useState } from "react";

const Header = (props) => {
  const [name, setName] = useState("AJAY");
  return (
    <div>
      Hello Header<h1>{props.king}</h1>
      <h1>{name}</h1>
      <button onClick={() => setName("vikram")}>change my name</button>
    </div>
  );
};

export default Header;
