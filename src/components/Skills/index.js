import React from 'react'
import './Skills.css'

const Skills = () => {
    return (
        <section id="skills">
            <div className="container">
                <h2>Skills</h2>
                <h4>Quais minhas habilidades.</h4>
				<h5>Lista de algumas das minhas habilidade</h5>
                <ul id="list-skills" className="container">
                    <li className="badge badge-light">C</li>
					<li className="badge badge-light">HTML5</li>
					<li className="badge badge-light">CSS3</li>
					<li className="badge badge-light">JAVASCRIPT</li>
					<li className="badge badge-light">JAVA</li>
					<li className="badge badge-light">DELPHI</li>
					<li className="badge badge-light">POSTGRE SQL</li>
					<li className="badge badge-light">SQL SERVER</li>
					<li className="badge badge-light">SQL </li>
                </ul>
            </div>
        </section>
    )
}

export default Skills