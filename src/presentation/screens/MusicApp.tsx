import React from 'react'
import SideBar from '../components/SideBar'

const MusicApp = () => {

  return (
   <div className='col-12 d-flex align-items-center'>
    <SideBar />
    <p className='text-success font-weight-bolder col d-flex justify-content-center'>Click on any of the tab to navigate</p>
   </div>
  )
}

export default MusicApp