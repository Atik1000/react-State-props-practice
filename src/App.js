import React, { useState } from "react";
import MyComponent from "./MyComponent";

const App = () => {
  const [data, setData] = useState({
    nav: "",
    content: "",
  });
  const clickButton = (action) => {
    setData({
      nav: action.nav,
      content: action.content,
    });
  };
  return (
    <div>
      <button
        onClick={() => clickButton({ nav: "Javascript", content: "React" })}
      >
        javascript
      </button>
      <button onClick={() => clickButton({ nav: "python", content: "Django" })}>
        Python
      </button>
      <MyComponent data={data} />
    </div>
  );
};

export default App;
