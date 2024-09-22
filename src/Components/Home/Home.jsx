
import React from 'react'
import Navbar from "../Navbar/Navbar"
import Banner from '../Banner/Banner'
import Benefits from '../Benefits/Benefits'
import CreateDesign from '../CreateDesign/CreateDesign'
import ConnectStore from '../ConnectStore/ConnectStore'
import Reviews from '../Reviews/Reviews'
import StartSelling from '../StartSelling/StartSelling'


const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Benefits></Benefits>
      <CreateDesign></CreateDesign>
      <ConnectStore></ConnectStore>
      <Reviews></Reviews>
      <StartSelling></StartSelling>
    </div>
  )
}

export default Home
