import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function Todo() {
  let style = {
    margin: "auto",
    width: "auto",
    padding: "4rem",
    border: "2px solid white",
    borderRadius: "10px",
  };
  let [list, setList] = useState([
    { todo: "Create a todo list", id: uuidv4() },
  ]);
  let [task, setTask] = useState("");

  function updateTask(event) {
    //event.target this consists of the data of the caller
    //event.target.value consists of inputed data
    setTask(event.target.value);
  }

  function insert(event) {
    setList([...list, { todo: task, id: uuidv4() }]);
    setTask("");
  }

  function deleteTask(event) {
    let element = list.find((task) => {
      return task.id == event.target.id;
    });
    list.splice(list.indexOf(element), 1); // avoid splice in react as stated
    //use filter..... nah man not working
    //  console.log(list.filter((task)=>{task!=element;console.log(task==element)}))
    setList([...list]);
  }
  //adding a feature of adding task on enter key
  function checkEnterKey(event) {
    if (event.key == "Enter") insert(event);
  }
  //adding a feature of uppercasing the task\
  function uppercase() {
    setList((prevlist) => {
      return prevlist.map((task) => {
        return {
          ...task,
          todo: task.todo.toUpperCase(),
        };
      });
    });
  }
  function markDone(id) {
    let tasks=document.querySelectorAll("li");
    for(let task of tasks){
      if(task.id==id){
        task.style.textDecoration="line-through"
      }
    }
 
  }
  return (
    <>
      <div className="container" style={style}>
        <h2>Task to Do</h2>
        <span>
          <input
            onKeyDown={checkEnterKey}
            type="text"
            placeholder="Add Task"
            value={task}
            style={{ height: "2rem", margin: "2rem" }}
            onChange={updateTask}
          />
          &nbsp; &nbsp; &nbsp;
          <button onClick={insert}>Add Task</button>
        </span>
        <br />
        <br />
        <hr />
        <ul
          style={{
            width: "auto",
            borderRadius: "10px",
            margin: "2rem 2rem",
          }}
        >
          {list.map((work) => {
            return (
              <>
                <span style={{ display: "flex" }}>
                  <li id={work.id}>{work.todo}</li>
                  <i
                    className="fa-solid fa-delete-left"
                    onClick={deleteTask}
                    style={{ margin: "4px 4px 4px 10px" }}
                  ></i>
                  <i
                    className="fa-solid fa-check"
                    onClick={() => markDone(work.id)}
                    style={{ margin: "4px 4px 4px 10px" }}
                  ></i>
                </span>
              </>
            );
          })}
        </ul>
        <button onClick={uppercase}>UpperCase the tasks ?</button>
      </div>
    </>
  );
}
