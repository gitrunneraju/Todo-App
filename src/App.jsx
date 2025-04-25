import InputData from './components/InputData'
import Heading from './components/Heading'
import DisplayList from './components/DisplayList'
import {useState} from 'react';

function App() {

  const [todoItem,setTodoItem] = useState([
    {text:'Buy Milk', date:'22/08/2024'}, 
    {text:'Go to College', date:'Week Days'},
    {text:'Excercise', date:'Everyday'},
    {text:'Excercise', date:'Everyday'},
  ]);


  return (
    <>
    <div className='[mask-type:luminance] bg-slate-400'>
    <div className='bg-black text-white max-w-2xl mx-auto rounded-xl shadow-xl'> 
      <Heading text="Todo App" />
      <InputData todoItem={todoItem} setTodoItem={setTodoItem} />
      {todoItem.map((todo,id)=><DisplayList todoItem={todoItem} setTodoItem={setTodoItem} id={id} text={todo.text} date={todo.date} />)}
    </div>
    </div>
    </>
  )
}

export default App