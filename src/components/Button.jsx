
const Button = ({type,handler,icon}) =>{
  if(type==='add'){
    return <button className=" p-3 rounded-xl bg-green-600 hover:bg-black" onClick={handler}>Add</button>
  }else if(type==='delete'){
    return <button className=" p-3 rounded-sm bg-red-400 hover:bg-black " onClick={handler}>{icon}</button>
  }
}

export default Button;