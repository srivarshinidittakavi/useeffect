import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("Add");
  const [results, setResults] = useState([]);

  const performAction = () => {
    const a = Number(num1);
    const b = Number(num2);
    let result = 0;

    if (operation === "Add") {
      result = a + b;
    } else if (operation === "Subtract") {
      result = a - b;
    } else if (operation === "Multiply") {
      result = a * b;
    }

    // append result to results array
    setResults([...results, `${a} ${operation} ${b} = ${result}`]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Basic Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <br /><br />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <br /><br />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="Add">Add</option>
        <option value="Subtract">Subtract</option>
        <option value="Multiply">Multiply</option>
      </select>
      <br /><br />
      <button onClick={performAction}>Perform Action</button>

      <div style={{ marginTop: "20px" }}>
        <h3>Results:</h3>
        <ul>
          {results.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Calculator;