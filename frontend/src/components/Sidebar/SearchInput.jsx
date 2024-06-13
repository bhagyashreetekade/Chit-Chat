import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
const SearchInput = () => {
  return (
    <div>
      <form className='flex items-center gap-2'>
        <input type="text" placeholder='Search...' className='w-full input input-bordered h-10'/>
        <button type='submit' className='btn btn-circle bg-orange-700 text-white'><IoSearchSharp className='h-6 w-6 outline-none' /></button>
      </form>
    </div>
  )
}

export default SearchInput



//started code
// import React from 'react'
// import { IoSearchSharp } from "react-icons/io5";
// const SearchInput = () => {
//   return (
//     <div>
//       <form className='flex items-center gap-2'>
//         <input type="text" placeholder='Search...' className='w-full input input-bordered h-10'/>
//         <button type='submit' className='btn btn-circle bg-orange-700 text-white'><IoSearchSharp className='h-6 w-6 outline-none' /></button>
//       </form>
//     </div>
//   )
// }

// export default SearchInput
