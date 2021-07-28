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
                    Since beginning my journey as a developer 4 years ago, I've done projects, worked in a multinational company, and collabrated with talented people to create various things. 
                </p>
                <p>
                    I create solutions to the problem that are fast, easy to use, and built with best practices. The main area of my expertise is back-end development, Spring Boot, Django, REST APIs, and SQL.
                </p>
                <p>
                    I also have experience with front-end development with knowledge of HTML, CSS, and React JS.
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
                    <h2>Front-end</h2>
                    <footer>
                    <div style={{ backgroundColor:`cyan`, width:`90%` }}></div>
                    </footer>
                </div>
                <div className="chart">
                    <h2>Back-end</h2>
                    <footer>
                    <div style={{ backgroundColor:`red`, width:`70%` }}></div>
                    </footer>
                </div>
                <div className="chart">
                    <h2>React</h2>
                    <footer>
                    <div style={{ backgroundColor:`purple`, width:`50%` }}></div>
                    </footer>
                </div>
                <div className="chart">
                    <h2>Angular</h2>
                    <footer>
                    <div style={{ backgroundColor:`cyan`, width:`30%` }}></div>
                    </footer>
                </div>
                <div className="cards">
                    <div className="card-items">
                        <header>
                            Software Engineer
                        </header>
                        <section>
                            Persistent System
                            <time>2021-2021</time>
                        </section>
                        <footer>Responsible for back-end development and managing a team. </footer>
                    </div>
                    <div className="card-items">
                        <header>
                            Software Engineer
                        </header>
                        <section>
                            Persistent System
                            <time>2021-2021</time>
                        </section>
                        <footer>Award-winning Content Marketing Agency specialize in creating and sharing engaging content.</footer>
                    </div>
                </div>
            </div>
        </div>
    )
}
