import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo } from "../features/todo/todoSlice";
const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch=useDispatch();
  function remove(todo){
     dispatch(deleteTodo(todo.id))
  }
  return (
    <>
      <h1>TODO</h1>
      <AddForm />
      <ul>
        {todos.map((todo) => {
          return (
            <>
              <li>
                {todo.task}{" "}&nbsp;
                <button onClick={()=>{remove(todo)}}>Delete</button>
              </li>
              <br />
            </>
          );
        })}
      </ul>
    </>
  );
};

export default Todo;
