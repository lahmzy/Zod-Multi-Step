import React from 'react'

type SwitchToggle = {
    isYearly: Boolean,
    setIsYearly: React.Dispatch<React.SetStateAction<Boolean>>
}

const Switch:React.FC<SwitchToggle> = ({isYearly,setIsYearly}) => {

  return (
    <div onClick={() => setIsYearly(prev => !prev)} className='flex w-10 h-5 rounded-full items-center bg-marine-blue transition-all duration-500'>
          <span className={`h-5 w-5 bg-white rounded-full transition-all duration-500  ${isYearly && "ml-5"}`}></span>
    </div>
  )
}

export default Switch
