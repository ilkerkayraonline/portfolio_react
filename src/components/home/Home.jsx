import React from 'react'
import "./Home.css"
import Me from "../../assets/avatar-1.svg"
import HeaderSocial from './HeaderSocial'
import ScrollDown from './ScrollDown'

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className='intro'>
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">İlker KAYRA</h1>
        <span className='home__education'>I'm a Front-End developer</span>
        <HeaderSocial/>

        <a href="#contact" className="btn">Hire Me</a> 
       <ScrollDown/>
      </div>
    </section>
  )
}

export default Home