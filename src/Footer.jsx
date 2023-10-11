import { useTodo } from "./Context/ContextProvider"

function Footer() {
  let {todo}= useTodo()
  return (
    <div className=" w-full p-4 text-center bg-gradient-to-t from-[#0171b3] to-[#0066a2]">
      {todo.length} {Number(todo.length)=== 1?"item":"items"} left
    </div>
  )
}

export default Footer
