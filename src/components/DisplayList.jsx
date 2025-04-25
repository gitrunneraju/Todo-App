import Button from "./Button"
import { Trash2 } from 'lucide-react';


const DisplayList = ({todoItem,setTodoItem,id,text,date})=>{

  const deleteHandler = ()=>{
    console.log(`Trying to delete ${id} ${text}`)
    todoItem.splice(id,1);
    setTodoItem([...todoItem]);
    console.log(todoItem);
  }

  return (<div className="flex p-2 m-1 row-gap-3 justify-content-around bg-light">
  <div className=" grid h-12 grid-cols-3 w-100 p-3 m-2 bg-opacity-50 place-content-evenly gap-16  " type="text">
    <span>{text}</span> 
    <span>{date}</span>
  </div>
  <Button type='delete' handler={deleteHandler} icon={<Trash2 />}/>

    

  </div>)

}

export default DisplayList;