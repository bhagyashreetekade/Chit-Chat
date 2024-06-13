import React from 'react'

const GenderCheck = ({onCheckboxChange,selectedGender}) => {
  return (
    <div className='flex mt-1'>
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
            <span className='label-text'>Male</span>
            <input type="checkbox" class="checkbox checkbox-xs border-slate-900" 
            checked={selectedGender === "male"} 
            onChange={()=> onCheckboxChange("male")}/> 
        </label>
      </div>
      
      <div className='form-control'>

        {/* firstly on change function will call that function will se the gender the the checkbox of selected gnder will checked */}
        
        <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
            <span className='label-text'>Female</span>
            <input type="checkbox" class="checkbox checkbox-xs border-slate-900" 
            checked={selectedGender === "female"} 
            onChange={()=> onCheckboxChange("female")}/> 
        </label>
      </div>
    </div>
  )
}

export default GenderCheck


//STARTED CODE
// const GenderCheck = () => {
//   return (
//     <div className='flex mt-1'>
//       <div className='form-control'>
//         <label className={`label gap-2 cursor-pointer`}>
//             <span className='label-text'>Male</span>
//             <input type="checkbox" class="checkbox checkbox-xs border-slate-900" /> 
//         </label>
//       </div>
//       <div className='form-control'>
//         <label className={`label gap-2 cursor-pointer`}>
//             <span className='label-text'>Female</span>
//             <input type="checkbox" class="checkbox checkbox-xs border-slate-900" /> 
//         </label>
//       </div>
//     </div>
//   )
// }

// export default GenderCheck
