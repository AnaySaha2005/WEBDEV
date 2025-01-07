import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
const AddForm = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  function submit(event) {
    event.preventDefault();

    dispatch(addTodo(task));
  }
  return (
    <form action="">
      <input
        type="text"
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button type="submit" onClick={submit}>
        Add task
      </button>
    </form>
  );
};

export default AddForm;
