import { FaPlus, FaTrashAlt, FaUmbrellaBeach } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useTodo } from "./Context/ContextProvider"
function Hero() {
  let {todo , handleCheck, handleDelete} = useTodo()
  return (
    <div className="flex-grow ">
      <ul>
        
        {
          !todo.length ?(<div className=" w-52 mx-auto mt-48"><FaUmbrellaBeach className=" drop-shadow-xl opacity-75 text-center text-[10rem]"/>
          <h1 className="" >Nothing to do ........... </h1> </div>):(
          todo.map((singleTodo) =>(

            <li  key={singleTodo.id} className=" w-[95%] flex m-4  mx-auto border items-center p-3 pl-0 bg-gradient-to-b from-[#1c629b] to-[#078cf2] rounded-xl" >
            <div className="active:bg-blue-500 flex place-items-center justify-center mx-1 rounded-full  max-content items-center w-[30px] h-[30px] ">
              <input type="checkbox" checked={singleTodo.isChecked} onChange={ ()=> handleCheck(singleTodo.id)} name="" id=""className="m bg-red-900  " />
            </div>
            <label htmlFor="" className="flex-grow " style={{ textDecoration: singleTodo.isChecked ? "line-through" : "none" }}> {singleTodo.title}</label>
            <div className="active:bg-blue-500 active:rounded-full p-3 flex items-center justify-center"><FaTrashAlt className="mr-3" role="button" onClick={()=>handleDelete(singleTodo.id)} /></div>
          </li>
          ))
          )
        }
      </ul>
      <Link to='/addTodo' className=""><FaPlus className="fixed bottom-10 p-1 rounded-full backdrop-blur-sm  text-[50px] shadow-md shadow-black bg-[#1c629b] border  right-6" /></Link>
    </div>
  )
}

export default Hero
