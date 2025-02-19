import React from 'react'
import '../../App.css';
import Navbar from '../../components/Navbar/Navbar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'


const Home = () => {
  return (
    <div>
      <Navbar />

      <div className='home-container-1'>
        <LeftSidebar />

        <div className='home-container-2'>
          <HomeMainbar />
          <RightSidebar />
        </div>

      </div>

    </div>

  )
}

export default Home