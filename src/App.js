import React, { useState } from "react";
import Contact from "./components/Contact";
import Home from "./components/Home";

const App = () => {
  const js = {
    name: "javascript",
    id: 1,
    library: "React",
    framework: "Angular",
  };
  const python = {
    name: "python",
    id: 2,
    library: "numpy",
    framework: "Django",
  };
  const [clicked, setClicked] = useState("");
  const [info, setInfo] = useState("");
  const clickedbtn = (id) => {
    setClicked(id);

    setInfo(id === "home" ? python : js);
  };
  return (
    <>
      <button onClick={() => clickedbtn("home")}> Python page</button>
      <button onClick={() => clickedbtn("contact")}>JavaScript page</button>
      {clicked === "home" && <Home information={info} />}
      {clicked === "contact" && <Contact information={info} />}
    </>
  );
};

export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [clicked, setClicked] = useState("");
//   const clickedbtn = (id) => {
//     setClicked(id);
//   };
//   return (
//     <div>
//       <button onClick={() => clickedbtn("home")}></button>
//       <button onClick={() => clickedbtn("About")}></button>
//       {clicked === "home" && "Home page"}

//       {clicked === "About" && "About page"}
//     </div>
//   );
// };

// export default App;
