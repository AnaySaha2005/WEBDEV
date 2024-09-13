import { useState } from "react";

export default function Form() {
  let [data, setData] = useState({
    name: "",
    username: "",
  });

  function onSubmit(event) {
    event.preventDefault();
    setData({
      name: "",
      username: "",
    });
  }

  function update(event) {
    setData((prevdata) => {
      prevdata[event.target.id] = event.target.value; //obj["<variable name to fetch>"]

      return { ...prevdata };
    });
  }
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="username">Type the username</label>
      <input
        type="text"
        id="username"
        placeholder="username"
        value={data.username}
        onChange={update}
      />
      <br />
      <label htmlFor="name">Type the name</label>
      <input
        type="text"
        id="name"
        placeholder="user"
        value={data.name}
        onChange={update}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
