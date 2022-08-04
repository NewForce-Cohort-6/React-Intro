import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const StuffForm = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    doesItBlend: false,
  });

  const navigate = useNavigate();

  const addStuffToDb = (stuffObject) => {
    fetch("http://localhost:8088/stuffs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stuffObject),
    }).then(() => navigate("/stuffs"));
  };

  return (
    <>
      <label>Add stuff here</label>
      <input
        type="text"
        onChange={(event) => {
          const copy = { ...userInput };

          copy.name = event.target.value;

          setUserInput(copy);
        }}
      />
       <label>Does it blend</label>
      <input
        type="checkbox"
        onChange={(event) => {
          const copy = { ...userInput };

          copy.doesItBlend = event.target.checked;

          setUserInput(copy);
        }}
      />


      <button onClick={() => addStuffToDb(userInput)}>save</button>
    </>
  );
};
