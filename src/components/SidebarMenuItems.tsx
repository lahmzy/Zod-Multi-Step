import React from "react"
import { useLocation } from 'react-router-dom'



type SidebarMenuProps = {
    number: number,
    step: string,
    menu: string,
    path:string,
}

const SidebarMenuItems:React.FC<SidebarMenuProps> = ({number,step,menu,path}) => {
    const location = useLocation()
    const currentPath = location.pathname

 return (
    <div className='flex md:items-center md:gap-x-4'>
        <div className={`w-[27px] h-[27px] border border-alabaster flex justify-center items-center text-white rounded-full text-lg ${currentPath === path ? "bg-pastel-blue border-none  text-purplish-blue"  : ""}`}>
            <h1 className="text-[13px] font-bold">{number}</h1>
        </div>
        <div className='md:flex md:flex-col space-y-1 hidden'>
            <p className='text-sm uppercase text-cool-gray font-thin'>{step}</p>
            <p className='text-[14px] uppercase font-semi-bold text-white'>{menu}</p>
        </div>
    </div>
  )
}

export default SidebarMenuItems