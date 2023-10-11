import { FaTrash } from "react-icons/fa"
import { useTodo } from "./Context/ContextProvider"

function Completed() {
    let {deletedItems} = useTodo()
  return (
    <div>
      <ul> 
       {!deletedItems.length ?(<div className=" flex flex-col justify-center items-center w-52 mx-auto mt-48"><FaTrash className=" drop-shadow-xl opacity-60 text-center text-[10rem]"/>
        <h1 className="mt-10" >No Completed Task </h1></div>):(
         
        
            deletedItems.map((singleItem)=>(
                  <li key={singleItem.id} className=" justify-between px-6 w-[95%] flex m-4  mx-auto border items-center p-3 pl-0 bg-gradient-to-b from-[#1c629b] to-[#078cf2] rounded-xl">
                      <div className="mx-4" >{singleItem.title}</div>
                      <div>Task completed</div>
                  </li>
          ))
        
       )}
      </ul>
    </div>
  )
}

export default Completed
