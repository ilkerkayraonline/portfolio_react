import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-fire"></i>

            <div>
                <h3 className='about__title'>24</h3>
                <span className="about__subtitle">Project Complated</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-cup"></i>

            <div>
                <h3 className='about__title'>120</h3>
                <span className="about__subtitle">Cup Of Coffee</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-people"></i>

            <div>
                <h3 className='about__title'>43</h3>
                <span className="about__subtitle">Satisfied Clients</span>
            </div>
        </div>


        <div className="about__box">
            <i className="about__icon icon-badge"></i>

            <div>
                <h3 className='about__title'>15</h3>
                <span className="about__subtitle">Nominees Winner</span>
            </div>
        </div>


    </div>
  )
}

export default AboutBox