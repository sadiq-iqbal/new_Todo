import { FaPlus } from "react-icons/fa";
import { useTodo } from "./Context/ContextProvider";
import { Link } from "react-router-dom";

function Add() {
  let { handleSubmit, newItem, setNewItem } = useTodo();
  return (
    <div className="m-4 min-h-[500px] flex flex-col gap-4 bg-gradient-to-b shadow-md shadow-[#222020] from-[#0171b3] to-[#0066a2]  rounded-lg p-4">
      <h1 className="mt-2 text-center  text-xl text-white bg-[#0f4c7f] p-2 rounded-lg">
        What do you want to add
      </h1>
      <form className="flex flex-col " onSubmit={handleSubmit} action="">
        <input
          value={newItem}
          type="text"
          autoFocus
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
          className="p-4 rounded-lg text-black"
          placeholder="Add your item here"
        />
        <label htmlFor="" className="mt-6 mb-2 text-xs">
          Due date:{" "}
        </label>
        <input
          type="date"
          className="bg-transparent border-b-2 mt-0 text-white"
          name=""
          id=""
        />
          <button type="submit">
        <Link to='/' >
            <FaPlus className="mx-auto mt-20  p-1 rounded-full bg-[#0f4c7f]  text-4xl" />
        </Link>
          </button>
      </form>
    </div>
  );
}

export default Add;
