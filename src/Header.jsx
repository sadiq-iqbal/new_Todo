import {  FaCheckCircle,    FaSearch, FaTrash } from 'react-icons/fa';
import { Link , } from 'react-router-dom';
import Dropdown from './DropDown';
function Header() {

  return (
    <div   className="w-full flex gap-2  items-center  p-4 bg-gradient-to-b from-[#0171b3] to-[#0066a2]   shadow-lg shadow-black  "> 
      
       <Link to='/'> 
       <FaCheckCircle className='active:bg-blue-500 flex place-items-center justify-center mx-1 rounded-full  max-content items-center w-[30px] h-[30px] '/>
       
       </Link>

     <Dropdown/>

       {/* <select name="All list"  defaultValue={'pakitan'} className="     text-xs font-semibold tracking-wider focus:border-none focus:outline-none	 bg-transparent text-white w-[100px] font-[helvetica]  " id="">
          <option value="pakistan" selected className=' bg-gradient-to-b from-[#0171b3] to-[#0066a2]  '>All list</option>
          <option value="pakistan" className= '  bg-gradient-to-b from-[#0171b3] to-[#0066a2]  '><span></span> hello</option>
          <option value="pakistan" className= '  bg-gradient-to-b from-[#0171b3] to-[#0066a2]  ' >hello</option>
          <option value="pakistan" className= '  bg-gradient-to-b from-[#0171b3] to-[#0066a2]  ' >hello</option>
          <option value="pakistan" className= '  bg-gradient-to-b from-[#0171b3] to-[#0066a2]  ' >hello</option>
          <option value="pakistan" className= '  bg-gradient-to-b from-[#0171b3] to-[#0066a2]  ' >hello</option>
          
        </select> */}
       <div className='ml-auto  mr-2 flex items-center  gap-4'>
        <FaSearch />
        <Link to='/completed' className='active:bg-blue-500 flex place-items-center justify-center mx-1 rounded-full  max-content items-center w-[30px] h-[30px] '>  <FaTrash/></Link>
       </div>
    </div>
  )
}

export default Header
