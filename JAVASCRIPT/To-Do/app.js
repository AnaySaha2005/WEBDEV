let todo=[];
while(true){
    let req=prompt("Enter your request");
    if(req=="add"){
        let amt=prompt('Enter number of task to add');
        for(let i=0;i<amt;i++){
            todo.push(prompt(`Enter the task ${i+1} to add`));
            console.log("task added");
        }
        console.log("-------------");

    }
    else if(req=="delete"){
    let idx=prompt("Enter the task to delete");
    if(todo.indexOf(idx)!=-1){
        todo.splice(idx,1);
        console.log("task removed");
        console.log("-------------");
    }
    else{
        alert("Task doesn't exists");
    }
  }
  else if(req=="list"){
    alert(todo);
    console.log(todo);
    console.log("-------------");

    }
   else if(req=="quit"){
        console.log("quit");

        break;
    }
    else{
        alert("Wrong input");
        console.log('wrong input');
        break;
    }
}
