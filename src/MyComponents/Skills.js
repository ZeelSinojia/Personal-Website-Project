import React from 'react'
import { Link } from 'react-router-dom'
import "./Skills.css"

export default function Skills() {

    return (
        <div className="skills">
            <div className="skills-text">
                <header>
                    <h2 aria-label="Skills &amp; Experience">
                        <span className="blast" aria-hidden="true" >S</span>
                        <span className="blast" aria-hidden="true" >k</span>
                        <span className="blast" aria-hidden="true" >i</span>
                        <span className="blast" aria-hidden="true" >l</span>
                        <span className="blast" aria-hidden="true" >l</span>
                        <span className="blast" aria-hidden="true" >s&nbsp;</span>
                        <span className="blast" aria-hidden="true" >&&nbsp;</span>
                        <span className="blast" aria-hidden="true" >E</span>
                        <span className="blast" aria-hidden="true" >x</span>
                        <span className="blast" aria-hidden="true" >p</span>
                        <span className="blast" aria-hidden="true" >e</span>
                        <span className="blast" aria-hidden="true" >r</span>
                        <span className="blast" aria-hidden="true" >i</span>
                        <span className="blast" aria-hidden="true" >e</span>
                        <span className="blast" aria-hidden="true" >n</span>
                        <span className="blast" aria-hidden="true" >c</span>
                        <span className="blast" aria-hidden="true" >e</span>
                    </h2>
                </header>
                <p>
                    Since beginning my journey as a developer 4 years ago, I've done projects, worked in a multinational company, and collaborated with talented people to create various things. 
                </p>
                <p>
                    I create solutions to the problem that are fast, easy to use, and built with best practices. The main area of my expertise is back-end development, Spring Boot, Django, REST APIs, and SQL.
                </p>
                <p>
                    I also have experience with front-end development with knowledge of HTML, CSS, and React JS.
                </p>
                <p>
                    I have participated in various hackathons and have been a member of Google DSC Marwadi Education Foundation.
                </p>
                <p>
                    Visit my&nbsp;
                    <Link to="https://www.linkedin.com/in/zeelsinojia/"> 
                    Linkedin
                    </Link>
                    &nbsp;profile for more details or just&nbsp;
                    <Link to="/contact"> 
                    contact
                    </Link>
                    &nbsp;me.
                </p>
            </div>
            <div className="skills-graphics">
                <div className="chart">
                    <h2>Django</h2>
                    <footer>
                    <div style={{ backgroundColor:`cyan`, width:`70%` }}></div>
                    </footer>
                </div>
                <div className="chart">
                    <h2>Spring Boot</h2>
                    <footer>
                    <div style={{ backgroundColor:`red`, width:`80%` }}></div>
                    </footer>
                </div>
                <div className="chart">
                    <h2>MySQL</h2>
                    <footer>
                    <div style={{ backgroundColor:`purple`, width:`90%` }}></div>
                    </footer>
                </div>
                <div className="chart">
                    <h2>React</h2>
                    <footer>
                    <div style={{ backgroundColor:`cyan`, width:`30%` }}></div>
                    </footer>
                </div>
                <div className="cards">
                    <div className="card-items">
                        <header>
                            Software Engineer Intern
                        </header>
                        <section>
                            Persistent System
                            <time>Jan 2021 - July 2021</time>
                        </section>
                        <footer>Designed and Developed back-end for NGO portal application in Spring boot and MySQL. </footer>
                    </div>
                    <div className="card-items">
                        <header>
                            Software Engineer
                        </header>
                        <section>
                            Persistent System
                            <time>July 2021 - Present</time>
                        </section>
                        <footer>Developed the back-end for multiple projects along with managing the team of interns and software engineers. </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}
