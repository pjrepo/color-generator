import React, { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

const App = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const clickHandler = (event) => {
    event.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  const changeHandler = (event) => {
    setColor(event.target.value);
  };

  return (
    <React.Fragment>
      <section>
        <h1>Color Generator</h1>
        <form>
          <label htmlFor="color">Color:</label>
          <input
            type="text"
            placeholder="#ff0000"
            value={color}
            onChange={changeHandler}
            style={error ? { border: "2px solid red" } : null}
          />
          <button onClick={clickHandler}>Generate</button>
        </form>
      </section>
      <section>
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} />;
        })}
      </section>
    </React.Fragment>
  );
};

export default App;
