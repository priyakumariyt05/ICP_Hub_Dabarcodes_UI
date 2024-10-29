import React from 'react'
import "../../components/style/Home.css"

const Hero = () => {
  return (
    <>
            <section id="home" className="hero">
  <div className="hero-text">
    <h1 className="font-butler font-extra-bold text-hero-heading leading-hero-heading">
      Unlock Amazing <span className="highlight text-[#0D90C1]">Promotions</span> with daBarcodes
    </h1>
    <p>
      Unlock access to exclusive promotions and unbeatable savings with daBarcodes. 
      Experience a new level of shopping convenience and value.
    </p>
    <a href="#" className="join-btn">Join Now</a>
  </div>
  <div className="hero-image">
    <img src="/image/hero.png" alt="" />
  </div>
</section>
    </>
  )
}

export default Hero
