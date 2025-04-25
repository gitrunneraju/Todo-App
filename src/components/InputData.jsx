import Button from "./Button";

const InputData = ({todoItem,setTodoItem}) =>{

  const onSubmitHandler = (event)=>{
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    setTodoItem([...todoItem,{text:event.target[0].value,date:event.target[1].value}]);
    console.log(todoItem);
  }



  return (
    <form className="flex m-2 row-gap-3 justify-content-around bg-light" onSubmit={onSubmitHandler}>
    <input className="p-3 m-2 bg-info bg-gradient bg-opacity-50 border border-info  w-50 form-control  border-success"type="text" placeholder="Enter Todo here" name="todotext" />
    <input className="p-3 m-2 bg-info bg-gradient bg-opacity-50 border border-info  w-50 form-control  border-success" type="date" name="date" />
    <Button  type='add'/>
    </form>

 )
}

export default InputData;