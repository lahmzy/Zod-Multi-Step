import React from 'react'
import SidebarMenuItems from './SidebarMenuItems'
import { sideBarMenuarray } from '../utils/constants'

const Sidebar:React.FC = () => {
  return (
    <section className='w-full rounded-none bg-sidebar-mobile min-h-[12rem] md:max-w-[250px] md:min-h-[96vh] md:bg-sidebar-desktop bg-cover bg-no-repeat md:rounded-md overflow-hidden'>
      <div className='flex p-4 pt-8 justify-center gap-4 md:flex-col md:space-y-1 '>
        {
          sideBarMenuarray.map((menuItems) => {

            const {number,step,menu,path} = menuItems
            return (
              (
                <SidebarMenuItems key={number} number={number} step={step} menu={menu} path={path} />
              )
            )
          }
        )
        }
      </div>
    </section>
  )
}

export default Sidebar