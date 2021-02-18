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
            <button onClick={() => clickedbtn("contact")}>
                JavaScript page
            </button>
            {clicked === "home" && <Home information={info} />}
            {clicked === "contact" && <Contact information={info} />}
        </>
    );
};

export default App;
