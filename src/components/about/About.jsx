import React from "react";
import "./About.css";
import Image from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I'm İlker KAYRA. I'm a developer who develops applications with
              HTML, CSS, JAVASCRIPT, and REACT. Discipline is everything for me.
              Any interface accessible to the user excites me. Whether it's web
              or mobile, I'm always eager to read and research in order to learn
              and improve. I'm currently learning JAVASCRIPT and REACT. After
              that, I will be learning REACT NATIVE. I'm considering
              collaborating on projects where I can work together, provide
              guidance, or offer assistance. You can reach me at my email
              address, and you can also find me on Instagram:
              @ilkerkayraonline.
            </p>
            <a href="" className="btn">Download CV</a>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Web Developer</h3>
                <span className="skills__number ">90%</span>
              </div>


              <div className="skills_bar">
                <span className="skills__percentage developer"></span>
              </div>
            </div>


            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Javascript</h3>
                <span className="skills__number ">75%</span>
              </div>


              <div className="skills_bar">
                <span className="skills__percentage js__developer"></span>
              </div>
            </div>


            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">React</h3>
                <span className="skills__number ">70%</span>
              </div>


              <div className="skills_bar">
                <span className="skills__percentage react__developer"></span>
              </div>
            </div>


          </div>
        </div>
      </div>

      <AboutBox/>
    </section>
  );
};

export default About;