import React, { useState } from "react";

const App = () => {
  const [content, setContent] = useState([]);
  const [contentName, setContentName] = useState("");

  const addContent = (event) => {
    event.preventDefault();
    setContent([
      ...content,
      {
        id: content.length,
        name: contentName,
      },
    ]);
    setContentName("");
  };

  return (
    <>
      <form onSubmit={addContent}>
        <label>
          Enter Text
          <input
            name="item"
            type="text"
            value={contentName}
            onChange={(e) => setContentName(e.target.value)}
          />
        </label>
      </form>
      <ul>
        {content.map((item) => (
          <li key={item.id}>
            Text ID: {item.id} Text: {item.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
