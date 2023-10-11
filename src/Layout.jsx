import { Outlet, json} from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import  { TodoProvider } from "./Context/ContextProvider";
import { useNavigate } from 'react-router-dom';


function Layout() {
  let [todo , setTodo] = useState(JSON.parse(localStorage.getItem("todo"))|| [])
  let [newItem , setNewItem] = useState("")
  let [deletedItems , setDeletedItems] = useState(JSON.parse(localStorage.getItem( "deletedItems")))

  let navigate = useNavigate()
  let handleCheck = (id) =>{
    let changedTodos = todo.map(singleTodo => singleTodo.id === id ? {...singleTodo,isChecked:!(singleTodo.isChecked)}:singleTodo )
    setTodo (changedTodos)
    localStorage.setItem("todo",JSON.stringify(changedTodos))
    // localStorage.setItem("todo",JSON.stringify(changedTodos)

  }

  let handleDelete = (id) => {
    // Filter out the item to be deleted from the todo state
    let changedTodos = todo.filter((singleTodo) => singleTodo.id !== id);
  
    // Find the item to be deleted
    let deletedItem = todo.find((singleTodo) => singleTodo.id === id);
  
    // Update the todo state and add the deleted item to deletedItems
    setTodo(changedTodos);
    setDeletedItems([...deletedItems, deletedItem]);
  
    // Update the local storage
    localStorage.setItem("todo", JSON.stringify(changedTodos));
    localStorage.setItem("deletedItems", JSON.stringify([...deletedItems, deletedItem]));
  }
  
  useEffect(() => {
    setInterval(() => {
      localStorage.setItem("deletedItems", JSON.stringify([]));
    }, 10000);
  }, []);
  let handleAddItem = (newItem) => {
    let newId = todo.length? todo[todo.length - 1].id+1 :1;
    let changedTodos = [...todo ,{title:newItem,id:newId ,isChecked:false}]
    setTodo(changedTodos) 
    localStorage.setItem("todo",JSON.stringify(changedTodos))
  }
  let handleSubmit = (e) =>{
    if (!newItem) return
    e.preventDefault()
    console.log("submitted")
    handleAddItem(newItem)    
    setNewItem('')
    console.log(todo)
    navigate('/')
  }
  return (
    <TodoProvider value={{todo,setTodo , handleCheck , handleDelete ,handleSubmit, newItem , setNewItem, deletedItems} }>
      <div className="flex flex-col  h-[100vh] text-white">
        <Header />
        <div className="flex-grow bg-gradient-to-b from-[rgb(21,76,122)] to-[#002b4c]">
          <Outlet />
        </div>
        {/* <div>name:{name}</div> */}
        <Footer></Footer>
      </div>
    </TodoProvider>
  );
}

export default Layout;
